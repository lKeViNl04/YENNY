from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt
from app.models.product_model import Product
from app.db.product_repository import ProductRepository

product_bp = Blueprint('product', __name__, url_prefix='/products')

def get_product_repo():
    return ProductRepository()

#funcion auxiliar(Verifica si el usuario autenticado tiene permisos de administrador)
def is_admin():
    claims = get_jwt()
    return claims["is_admin"]

# Devuelve todos los productos disponibles en la base de datos
@product_bp.route('/getall', methods=['GET'])
def get_all_products():
    repo = get_product_repo()
    products = repo.get_products()
    product_list = [row.to_dict() for row in products]
    if not product_list:
        return jsonify({"error": "No Products found"}), 404
    return jsonify({"success":True,"products":product_list, "message":"Products found"}), 200

# Devuelve un producto específico según su ID
@product_bp.route('/get/<int:product_id>', methods=['GET'])
def get_product_by_id(product_id):
    repo = get_product_repo()
    row = repo.get_product_by_id(product_id)
    if not row:
        return jsonify({'error': 'Product not found'}), 404
    return jsonify({"success":True,"product":row.to_dict(),"message":"Product found"}), 200

# Crea un nuevo producto (requiere autenticación y ser administrador)
@product_bp.route('/create', methods=['POST'])
@jwt_required()
def create_product():

    if not is_admin():
        return jsonify({"error": "Access denied"}), 403
    
    data = request.json
    
    if 'stock' in data:
        data['stock'] = int(data['stock'])
    if 'price' in data:
        data['price'] = float(data['price'])
    
    product = Product(**data)

    if not product.is_price_valid() or not product.is_stock_valid():
        return jsonify({'error': 'Invalid price or stock'}), 400
    
    repo = get_product_repo()
    repo.add_product(product)
    return jsonify({"success": True,'message': 'Product created'}), 201

# Actualiza un producto existente (requiere autenticación y ser administrador)
@product_bp.route('/update/<int:product_id>', methods=['PUT'])
@jwt_required()
def update_product(product_id):

    if not is_admin():
        return jsonify({"error": "Access denied"}), 403

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
    
    repo = get_product_repo()
    repo.update_product(product)
    return jsonify({"success": True,'message': 'Product updated'}), 200


# Elimina un producto por ID (requiere autenticación y ser administrador)
@product_bp.route('/delete/<int:product_id>', methods=['DELETE'])
@jwt_required()
def delete_product(product_id):

    if not is_admin():
        return jsonify({"error": "Access denied"}), 403
    
    repo = get_product_repo()
    repo.delete_product(product_id)
    return jsonify({"success": True,'message': 'Product deleted'}), 200

