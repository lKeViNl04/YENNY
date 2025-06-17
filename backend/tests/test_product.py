import unittest
from app.models.product_model import Product

class TestProductModel(unittest.TestCase):

    def test_create_product(self):
        product = Product(
            id=1,
            title="The Little Prince",  # anteriormente "El Principito"
            description="A literary classic",  # anteriormente "Un clásico de la literatura"
            genre="Fiction",  # anteriormente "Ficción"
            language="Spanish",
            format="Paperback",  # anteriormente "Tapa blanda"
            price=1500.50,
            stock=20,
            image="the_little_prince.jpg"  # nombre modificado
        )

        self.assertEqual(product.id, 1)
        self.assertEqual(product.title, "The Little Prince")
        self.assertEqual(product.price, 1500.50)
        self.assertEqual(product.stock, 20)
        self.assertEqual(repr(product), "<Product The Little Prince>")

    def test_is_stock_valid(self):
        self.assertTrue(Product(stock=10).is_stock_valid())
        self.assertFalse(Product(stock=-5).is_stock_valid())
        self.assertFalse(Product(stock="ten").is_stock_valid())

    def test_is_price_valid(self):
        self.assertTrue(Product(price=100).is_price_valid())
        self.assertTrue(Product(price=0).is_price_valid())
        self.assertFalse(Product(price=-10).is_price_valid())
        self.assertFalse(Product(price="expensive").is_price_valid())

    def test_to_dict(self):
        product = Product(
            id=5,
            title="1984",
            description="Dystopia",
            genre="Science Fiction",
            language="English",
            format="Ebook",
            price=999.99,
            stock=5,
            image="1984.png"
        )

        data = product.to_dict()

        self.assertEqual(data["id"], 5)
        self.assertEqual(data["title"], "1984")
        self.assertEqual(data["format"], "Ebook")
        self.assertEqual(data["price"], 999.99)

    def test_update_from_dict(self):
        product = Product(
            title="Old title",  
            price=100,
            stock=5
        )

        update_data = {
            "title": "New title",  
            "price": 150,
            "stock": 10
        }

        product.update_from_dict(update_data)

        self.assertEqual(product.title, "New title")
        self.assertEqual(product.price, 150)
        self.assertEqual(product.stock, 10)
if __name__ == '__main__':
    unittest.main()
