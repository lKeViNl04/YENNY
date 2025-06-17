from .connection import get_connection
from app.models.product_model import Product


class ProductRepository:
    def __init__(self):
        self.connection = get_connection()
        self.cursor = self.connection.cursor()
        self.create_product_table()

    def create_product_table(self):
        self.cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS product (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                description TEXT,
                genre TEXT,
                language TEXT,
                format TEXT,
                price REAL,
                stock INTEGER,
                image TEXT
            )
            """
        )
        self.connection.commit()

    def add_product(self, product: Product):
        self.cursor.execute(
            """INSERT INTO product (title, description, genre, language, format, price, stock, image)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)""",
            (
                product.title,
                product.description,
                product.genre,
                product.language,
                product.format,
                product.price,
                product.stock,
                product.image,
            ),
        )

        self.connection.commit()

    def update_product(self, product: Product):
        self.cursor.execute(
            """UPDATE product SET title = ?, description = ?, genre = ?, language = ?, format = ?,
            price = ?, stock = ?, image = ? WHERE id = ?""",
            (
                product.title,
                product.description,
                product.genre,
                product.language,
                product.format,
                product.price,
                product.stock,
                product.image,
                product.id,
            ),
        )
        self.connection.commit()

    def delete_product(self, product_id):
        self.cursor.execute("DELETE FROM product WHERE id = ?", (product_id,))
        self.connection.commit()

    def get_products(self):
        self.cursor.execute("SELECT * FROM product")
        rows = self.cursor.fetchall()
        return [Product(**dict(row)) for row in rows]

    def get_product_by_id(self, product_id):
        self.cursor.execute("SELECT * FROM product WHERE id = ?", (product_id,))
        row = self.cursor.fetchone()
        return Product(**dict(row)) if row else None


    def close(self):
        self.cursor.close()
        self.connection.close()
