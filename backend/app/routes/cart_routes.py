from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt
from app.db.cart_repository import CartRepository
from app.models.cart_model import Cart

cart_bp = Blueprint('cart', __name__, url_prefix='/cart')

def get_cart_repo():
    return CartRepository()

# Devuelve todos los productos del carrito del usuario autenticado
@cart_bp.route('/', methods=['GET'])
@jwt_required()
def get_user_cart():

    user_id = int(get_jwt_identity())

    repo = get_cart_repo()
    items = repo.get_cart_by_user(user_id)

    items_list = [item.to_dict() for item in items]
    return jsonify(cart_items=items_list, message="Cart products found"), 200

# Agrega un producto al carrito del usuario autenticado
@cart_bp.route('/add', methods=['POST'])
@jwt_required()
def add_to_cart():

    user_id = int(get_jwt_identity())
    data = request.get_json()

    product_id = data.get('product_id')
    quantity = data.get('quantity')

    if not product_id or not quantity:
        return jsonify({"error": "product_id and quantity are required"}), 400

    cart_item = Cart(user_id=user_id, product_id=product_id, quantity=quantity)

    if not cart_item.is_quantity_valid():
        return jsonify({'error': 'Invalid quantity'}), 400

    repo = get_cart_repo()
    repo.add_to_cart(cart_item)
    return jsonify({"message": "Product added to cart"}), 201

# Elimina un producto específico del carrito usando su ID
@cart_bp.route('/remove/<int:item_id>', methods=['DELETE'])
@jwt_required()
def remove_from_cart(item_id):
    repo = get_cart_repo()
    repo.remove_from_cart(item_id)
    return jsonify({"message": "Product removed from cart"}), 200

# Elimina todos los productos del carrito del usuario autenticado
@cart_bp.route('/clear', methods=['DELETE'])
@jwt_required()
def clear_cart():
    user_id = int(get_jwt_identity())
    repo = get_cart_repo()
    repo.clear_cart(user_id)
    return jsonify({"message": "Cart emptied"}), 200

# Actualiza la cantidad de un producto específico en el carrito
@cart_bp.route('/update/<int:item_id>', methods=['PUT'])
@jwt_required()
def update_quantity(item_id):
    data = request.get_json()
    new_quantity = data.get("quantity")

    if not isinstance(new_quantity, int) or new_quantity <= 0:
        return jsonify({"error": "Invalid quantity"}), 400

    repo = get_cart_repo()
    repo.update_quantity(item_id, new_quantity)
    return jsonify({"message": "Updated quantity"}), 200