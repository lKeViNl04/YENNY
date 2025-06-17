from flask import Blueprint, request, jsonify
from app.db.user_repository import UserRepository
from app.models.user_model import User

user_bp = Blueprint('user', __name__, url_prefix='/users')

def get_user_repo():
    return UserRepository()

#getall
@user_bp.route('/getall', methods=['GET'])
def get_all_users():
    repo = get_user_repo()
    users = repo.get_users()
    users_list = [u.to_dict() for u in users]
    return jsonify(users_list), 200

#get by id
@user_bp.route('/get/<int:user_id>', methods=['GET'])
def get_user(user_id):
    repo = get_user_repo()
    user = repo.get_user_by_id(user_id)
    if user:
        return jsonify(user.to_dict()), 200
    return jsonify({"message": "User not found"}), 404

#create
@user_bp.route('/create', methods=['POST'])
def create_user():
    repo = get_user_repo()
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    
    if not name or not email or not password:
        return jsonify({"message": "Missing required fields"}), 400
    
    user_obj = User(name=name, email=email, password=password)
    if not user_obj.is_email_valid():
        return jsonify({"message": "Invalid email format"}), 400
    if not user_obj.is_password_strong():
        return jsonify({"message": "Password must be at least 8 characters"}), 400

    repo.add_user(user_obj)
    return jsonify({"message": "User created"}), 201

#update
@user_bp.route('/update/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    repo = get_user_repo()
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    is_admin = data.get('is_admin')
    
    if not name or not email or not password:
        return jsonify({"message": "Missing required fields"}), 400
    
    user_obj = User(id=user_id,name=name, email=email, password=password, is_admin=is_admin)
    if not user_obj.is_email_valid():
        return jsonify({"message": "Invalid email format"}), 400
    if not user_obj.is_password_strong():
        return jsonify({"message": "Password must be at least 8 characters"}), 400

    repo.update_user(user_obj)
    return jsonify({"message": "User updated"}), 200

#delete
@user_bp.route('/delete/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    repo = get_user_repo()
    repo.delete_user(user_id)
    return jsonify({"message": "User deleted"}), 200

#login
@user_bp.route('/login', methods=['POST'])
def login_user():
    repo = get_user_repo()  
    data = request.json

    email = data.get('email')
    password = data.get('password')

    user = repo.get_user_login(email, password)
    if user:
        return jsonify(user.to_dict()), 200
    else:
        return jsonify({'error': 'Invalid credentials'}), 401
