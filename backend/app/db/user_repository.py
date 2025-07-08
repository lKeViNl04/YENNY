from .connection import get_connection
from app.models.user_model import User


class UserRepository:
    def __init__(self):
        self.connection = get_connection()
        self.cursor = self.connection.cursor()
        self.create_user_table()

    def create_user_table(self):
        self.cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            password TEXT,
            is_admin BOOLEAN DEFAULT FALSE,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP
            )
            """
        )
        self.connection.commit()

    # Agrega un nuevo usuario a la base de datos
    def add_user(self, user: User):
        self.cursor.execute(
            "INSERT INTO user (name, email, password, is_admin) VALUES (?, ?, ?, ?)",
            (user.name, user.email, user.password, user.is_admin),
        )
        self.connection.commit()

    # Actualiza los datos de un usuario existente
    def update_user(self, user: User):
        self.cursor.execute(
            """
            UPDATE user SET
            name = ?, email = ?, password = ?, is_admin = ?
            WHERE id = ?
            """,
            (
                user.name,
                user.email,
                user.password,
                user.is_admin,
                user.id,
            ),
        )
        self.connection.commit()

    # Elimina un usuario por su ID
    def delete_user(self, user_id):
        self.cursor.execute("DELETE FROM user WHERE id = ?", (user_id,))
        self.connection.commit()

    # Obtiene todos los usuarios de la base de datos
    def get_users(self):
        self.cursor.execute("SELECT * FROM user")
        rows = self.cursor.fetchall()
        return [User(**dict(row)) for row in rows]

    # Obtiene un usuario por su ID
    def get_user_by_id(self, user_id):
        self.cursor.execute("SELECT * FROM user WHERE id = ?", (user_id,))
        row = self.cursor.fetchone()
        return User(**dict(row)) if row else None

    # Obtiene un usuario por su email
    def get_user_by_email(self, email):
        self.cursor.execute("SELECT * FROM user WHERE email = ?", (email,))
        row = self.cursor.fetchone()
        return User(**dict(row)) if row else None

    # Verifica si existe un usuario con el email y contraseña dados (no se usa)
    def get_user_login(self, email, password):
        self.cursor.execute(
            "SELECT * FROM user WHERE email = ? AND password = ?", (email, password)
        )
        row = self.cursor.fetchone()
        return User(**dict(row)) if row else None

    def close(self):
        self.cursor.close()
        self.connection.close()
