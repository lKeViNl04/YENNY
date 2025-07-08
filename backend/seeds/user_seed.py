from app import create_app
from app.db.user_repository import UserRepository
from app.models.user_model import User
import bcrypt

def seed_users():
    app = create_app()
    with app.app_context():
        user_repo = UserRepository()

        users = [
            {
                "name": "Yenny",
                "email": "hola@mundo.com",
                "password": "12345678",
                "is_admin": False,
            },
            {
                "name": "El Ateneo",
                "email": "adios@vida.com",
                "password": "87654321",
                "is_admin": True,
            },
        ]

        for u in users:
            password= u["password"]
            hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt(10))

            user = User(
                name=u["name"],
                email=u["email"],
                password=hashed_password,
                is_admin=u["is_admin"],
            )
            user_repo.add_user(user)

        print("✅ Users inserted successfully.")

if __name__ == "__main__":
    seed_users()