from flask import Blueprint, request, jsonify
from app.models.product_model import Product
from app.db.product_repository import ProductRepository

product_bp = Blueprint('product', __name__, url_prefix='/products')

def get_product_repo():
    return ProductRepository()

#getall
@product_bp.route('/getall', methods=['GET'])
def get_all_products():
    repo = get_product_repo()
    products = repo.get_products()
    product_list = [row.to_dict() for row in products]
    return jsonify(product_list), 200

#get by id
@product_bp.route('/get/<int:product_id>', methods=['GET'])
def get_product_by_id(product_id):
    repo = get_product_repo()
    row = repo.get_product_by_id(product_id)
    if row:
        return jsonify(row.to_dict()), 200
    return jsonify({'error': 'Product not found'}), 404

#create
@product_bp.route('/create', methods=['POST'])
def create_product():
    repo = get_product_repo()
    data = request.json
    
    if 'stock' in data:
        data['stock'] = int(data['stock'])
    if 'price' in data:
        data['price'] = float(data['price'])
    
    product = Product(**data)

    if not product.is_price_valid() or not product.is_stock_valid():
        return jsonify({'error': 'Invalid price or stock'}), 400

    repo.add_product(product)
    return jsonify({'message': 'Product created'}), 201

#update
@product_bp.route('/update/<int:product_id>', methods=['PUT'])
def update_product(product_id):
    repo = get_product_repo()
    data = request.json

    data.pop('id', None)
    data['id'] = product_id
    
    if 'stock' in data:
        data['stock'] = int(data['stock'])
    if 'price' in data:
        data['price'] = float(data['price'])

    product = Product(**data)

    if not product.is_price_valid() or not product.is_stock_valid():
        return jsonify({'error': 'Invalid price or stock'}), 400

    repo.update_product(product)
    return jsonify({'message': 'Product updated'}), 200


#delete
@product_bp.route('/delete/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    repo = get_product_repo()
    repo.delete_product(product_id)
    return jsonify({'message': 'Product deleted'}), 200

