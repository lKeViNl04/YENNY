class Product:
    def __init__(
        self,
        id=None,
        title=None,
        description=None,
        genre=None,
        language=None,
        format=None,
        price=None,
        stock=None,
        image=None,
    ):
        self.id = id
        self.title = title
        self.description = description
        self.genre = genre
        self.language = language
        self.format = format
        self.price = price
        self.stock = stock
        self.image = image

    def __repr__(self):
        return f"<Product {self.title}>"
    
    
    def is_stock_valid(self):
        return isinstance(self.stock, int) and self.stock >= 0

    def is_price_valid(self):
        return isinstance(self.price, (int, float)) and self.price >= 0

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "genre": self.genre,
            "language": self.language,
            "format": self.format,
            "price": self.price,
            "stock": self.stock,
            "image": self.image,
        }
    
    def update_from_dict(self, data):
        for key, value in data.items():
            if hasattr(self, key):
                setattr(self, key, value)
