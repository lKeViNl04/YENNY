from .connection import get_connection
from app.models.cart_model import Cart


class CartRepository:
    def __init__(self):
        self.connection = get_connection()
        self.cursor = self.connection.cursor()
        self.create_cart_table()

    def create_cart_table(self):
        self.cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS cart (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                product_id INTEGER NOT NULL,
                quantity INTEGER NOT NULL
            )
            """
        )
        self.connection.commit()

    # Devuelve todos los ítems del carrito del user.
    def get_cart_by_user(self, user_id):
        self.cursor.execute("SELECT * FROM cart WHERE user_id = ?", (user_id,))
        rows = self.cursor.fetchall()
        return [Cart(**row) for row in rows]

    # Agrega un ítem al carrito.
    def add_to_cart(self, cart_item: Cart):
        self.cursor.execute(
            """INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)""",
            (cart_item.user_id, cart_item.product_id, cart_item.quantity),
        )
        self.connection.commit()

    # Elimina un ítem por id.
    def remove_from_cart(self, item_id):
        self.cursor.execute("DELETE FROM cart WHERE id = ?", (item_id,))
        self.connection.commit()

    # Vacía el carrito del usuario.
    def clear_cart(self, user_id):
        self.cursor.execute("DELETE FROM cart WHERE user_id = ?", (user_id,))
        self.connection.commit()

    # Modifica la cantidad de un ítem específico.
    def update_quantity(self, item_id, new_quantity):
        self.cursor.execute(
            "UPDATE cart SET quantity = ? WHERE id = ?", (new_quantity, item_id)
        )
        self.connection.commit()

    def close(self):
        self.cursor.close()
        self.connection.close()
