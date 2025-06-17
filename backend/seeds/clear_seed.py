from app import create_app
from app.db.connection import get_connection

def clear_tables():
    app= create_app()
    with app.app_context():
        conn = get_connection()
        cursor = conn.cursor()

        cursor.execute("DELETE FROM user;")
        cursor.execute("DELETE FROM product;")

        cursor.execute("DROP TABLE IF EXISTS user;")
        cursor.execute("DROP TABLE IF EXISTS product;")

        # reset ID counters (only for SQLite)
        cursor.execute("DELETE FROM sqlite_sequence WHERE name='user';")
        cursor.execute("DELETE FROM sqlite_sequence WHERE name='product';")

        conn.commit()
        conn.close()
        print("✔ Tables cleared successfully.")

if __name__ == "__main__":
    clear_tables()
