from flask import Blueprint, request, jsonify
from flask_jwt_extended import (
    create_access_token, 
    create_refresh_token,
    jwt_required,
    get_jwt_identity,
    get_jwt,
)

from app.db.user_repository import UserRepository
from app.models.user_model import User
import bcrypt

user_bp = Blueprint("user", __name__, url_prefix="/users")


def get_user_repo():
    return UserRepository()


# funcion auxiliar(Verifica si el usuario autenticado es el mismo que el solicitado o si es un administrador)
def is_authorized_user_or_admin(user_id):

    current_user_id = int(get_jwt_identity())
    claims = get_jwt()

    if current_user_id != user_id and not claims["is_admin"]:
        return False
    return True


# Endpoint para obtener todos los usuarios (requiere permisos de administrador)
@user_bp.route("/getall", methods=["GET"])
@jwt_required()
def get_all_users():

    claims = get_jwt()

    if not claims["is_admin"]:
        return jsonify({"error": "Access denied"}), 403

    repo = get_user_repo()
    users = repo.get_users()
    users_list = [u.to_dict() for u in users]

    if not users_list:
        return jsonify({"error": "No users found"}), 404

    return (
        jsonify(
            {
                "success": True,
                "users": users_list,
                "message": "Users retrieved successfully",
            }
        ),
        200,
    )


# Endpoint para obtener un usuario específico por su ID (requiere ser el propio usuario o un administrador)
@user_bp.route("/get/<int:user_id>", methods=["GET"])
@jwt_required()
def get_user(user_id):

    if not is_authorized_user_or_admin(user_id):
        return jsonify({"error": "Access denied"}), 403

    repo = get_user_repo()
    user = repo.get_user_by_id(user_id)

    if not user:
        return jsonify({"error": "User not found"}), 404

    return (
        jsonify({"success": True, "user": user.to_dict(), "message": "User found"}),
        200,
    )


# Endpoint público para crear un nuevo usuario
@user_bp.route("/create", methods=["POST"])
def create_user():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if not name or not email or not password:
        return jsonify({"error": "Missing required fields"}), 400

    temp_user = User(name=name, email=email, password=password)
    if not temp_user.is_email_valid():
        return jsonify({"error": "Invalid email format"}), 400
    if not temp_user.is_password_strong():
        return jsonify({"error": "Password must be at least 8 characters"}), 400

    hashed_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt(10))

    user_obj = User(name=name, email=email, password=hashed_password)

    repo = get_user_repo()
    repo.add_user(user_obj)
    return jsonify({"success": True, "message": "User created"}), 201


# Endpoint para actualizar un usuario existente (requiere ser el propio usuario o un administrador)
@user_bp.route("/update/<int:user_id>", methods=["PUT"])
@jwt_required()
def update_user(user_id):

    if not is_authorized_user_or_admin(user_id):
        return jsonify({"error": "Access denied"}), 403

    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")
    is_admin = data.get("is_admin")

    if not name or not email or not password:
        return jsonify({"error": "Missing required fields"}), 400

    user_obj = User(
        id=user_id, name=name, email=email, password=password, is_admin=is_admin
    )
    if not user_obj.is_email_valid():
        return jsonify({"error": "Invalid email format"}), 400
    if not user_obj.is_password_strong():
        return jsonify({"error": "Password must be at least 8 characters"}), 400

    repo = get_user_repo()
    repo.update_user(user_obj)
    return jsonify({"success": True, "message": "User updated"}), 200


# Endpoint para eliminar un usuario (requiere ser el propio usuario o un administrador)
@user_bp.route("/delete/<int:user_id>", methods=["DELETE"])
@jwt_required()
def delete_user(user_id):

    if not is_authorized_user_or_admin(user_id):
        return jsonify({"error": "Access denied"}), 403

    repo = get_user_repo()
    repo.delete_user(user_id)
    
    return jsonify({"success": True, "message": "User deleted"}), 200


# Endpoint para iniciar sesión y obtener un token JWT
@user_bp.route("/login", methods=["POST"])
def login_user():
    data = request.json

    email = data.get("email")
    password = data.get("password")

    repo = get_user_repo()
    user = repo.get_user_by_email(email)

    if not user:
        return jsonify({"error": "User not found"}), 404

    hashed_password = user.password

    if isinstance(hashed_password, str):
        hashed_password = hashed_password.encode("utf-8")

    if bcrypt.checkpw(password.encode("utf-8"), hashed_password):
        identity = str(user.id)
        access_token = create_access_token(
            identity=str(user.id),
            additional_claims={"email": user.email, "is_admin": user.is_admin},
        )
        refresh_token = create_refresh_token(identity=identity)
        return (
            jsonify(
                {
                    "success": True,
                    "access_token": access_token,
                    "refresh_token": refresh_token,
                    "message": "Successful login",
                }
            ),
            200,
        )
    else:
        return jsonify({"error": "Invalid credentials"}), 401

# Endpoint para ver si tal user es admin
@user_bp.route("/checkisadmin", methods=["GET"])
@jwt_required()
def check_is_admin():
    claims = get_jwt()
    return jsonify({"success": True,"is_admin_check": claims["is_admin"]}), 200

# Endpoint para volver a tener el access_token
@user_bp.route("/refresh", methods=["GET"])
@jwt_required(refresh=True)
def refresh_access_token():
    identity = get_jwt_identity()
    
    repo = get_user_repo()
    user = repo.get_user_by_id(int(identity))

    if not user:
        return jsonify({"error": "User not found"}), 404

    new_access_token = create_access_token(
        identity=str(user.id),
        additional_claims={"email": user.email, "is_admin": user.is_admin},
    )
    
    return jsonify({"success": True, "access_token": new_access_token}), 200

