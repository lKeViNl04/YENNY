class Cart:
    def __init__(self, id: None, user_id, product_id, quantity):
        self.id = id
        self.user_id = user_id
        self.product_id = product_id
        self.quantity = quantity

    # Verifica si la cantidad es válida (entero positivo)
    def is_quantity_valid(self):
        return isinstance(self.quantity, int) and self.quantity > 0

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "product_id": self.product_id,
            "quantity": self.quantity,
        }
