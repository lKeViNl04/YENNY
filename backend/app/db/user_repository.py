from .connection import get_connection
from app.models.user_model import User

class UserRepository :
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
            is_admin INTEGER DEFAULT 0
            )
            """
        )
        self.connection.commit()

    def add_user(self, user: User):
        self.cursor.execute(
            "INSERT INTO user (name, email, password, is_admin) VALUES (?, ?, ?, ?)",
            (user.name, user.email, user.password, int(user.is_admin)),
        )
        self.connection.commit()

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
                int(user.is_admin),
                user.id,
            ),
        )
        self.connection.commit()

    def delete_user(self, user_id):
        self.cursor.execute("DELETE FROM user WHERE id = ?", (user_id,))
        self.connection.commit()

    def get_users(self):
        self.cursor.execute("SELECT * FROM user")
        rows = self.cursor.fetchall() 
        return [User(**dict(row)) for row in rows]

    def get_user_by_id(self, user_id):
        self.cursor.execute("SELECT * FROM user WHERE id = ?", (user_id,))
        row = self.cursor.fetchone()
        return User(**dict(row)) if row else None

    def get_user_login(self, email,password):
        self.cursor.execute("SELECT * FROM user WHERE email = ? AND password = ?", (email,password))
        row = self.cursor.fetchone()
        return User(**dict(row)) if row else None


    def close(self):
        self.cursor.close()
        self.connection.close()
