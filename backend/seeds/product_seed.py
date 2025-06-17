# seeds/seed_products.py
from app import create_app
from app.models.product_model import Product
from app.db.product_repository import ProductRepository

def seed_products():
    app = create_app()
    with app.app_context():
        books = [
        {
            "title": "The Silent Patient",
            "description": "A psychological thriller about a woman's act of violence.",
            "genre": "Mystery",
            "language": "English",
            "format": "Hardcover",
            "price": 19.99,
            "stock": 10,
            "image": "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
        },
        {
            "title": "Project Hail Mary",
            "description": "A Sci-Fi novel by Andy Weir, author of The Martian.",
            "genre": "Sci-Fi",
            "language": "English",
            "format": "Paperback",
            "price": 14.99,
            "stock": 13,
            "image": "https://images.unsplash.com/photo-1532012197267-da84d127e765",
        },
        {
            "title": "Love in the Time of Cholera",
            "description": "A romantic novel by Gabriel García Márquez about enduring love over decades.",
            "genre": "Romance",
            "language": "Spanish",
            "format": "Paperback",
            "price": 12.99,
            "stock": 12,
            "image": "https://books.google.com.ar/books/publisher/content?id=WzNjBgAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2qS1Ll5W72FED78A-St187vRNL1w&w=1280",
        },
        {
            "title": "Don't Be Afraid",
            "description": "Holly Gibney investigates a deadly threat while protecting a harassed woman. Two cases, one danger.",
            "genre": "Thriller",
            "language": "English",
            "format": "Paperback",
            "price": 15.99,
            "stock": 8,
            "image": "https://acdn-us.mitiendanube.com/stores/004/088/117/products/9789506447557-d1252a78dbe4f6e11117480136591872-1024-1024.jpg",
        },
        {
            "title": "The Ship of Theseus",
            "description": "A journalist investigates a murder and faces a philosophical conspiracy that questions memory and reality.",
            "genre": "Philosophical Fiction",
            "language": "English",
            "format": "Paperback",
            "price": 17.49,
            "stock": 9,
            "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1702558671i/199238693.jpg",
        },
        {
            "title": "Leon XIV",
            "description": "Biography of Pope Robert Prevost and the legacy he inherits after Francis, with urgent Vatican chronicles.",
            "genre": "Biography",
            "language": "English",
            "format": "Paperback",
            "price": 16.99,
            "stock": 6,
            "image": "https://http2.mlstatic.com/D_NQ_NP_2X_724615-MLA85342224046_062025-F.webp",
        },
        {
            "title": "Argentina 2024–2027",
            "description": "A clear and humorous analysis by Juan Carlos de Pablo, with theories and proposals for the next government's economic policy.",
            "genre": "Politics",
            "language": "English",
            "format": "Paperback",
            "price": 14.49,
            "stock": 10,
            "image": "https://acdn-us.mitiendanube.com/stores/004/088/117/products/703524-45508228417bd8aade17274732466144-1024-1024.jpg",
        },
        {
            "title": "Onyx Storm",
            "description": "Violet seeks allies beyond the academy walls to save dragons, family, and home from a deadly storm.",
            "genre": "Fantasy",
            "language": "English",
            "format": "Paperback",
            "price": 18.99,
            "stock": 7,
            "image": "https://images.cdn1.buscalibre.com/fit-in/360x360/43/36/4336b740e1711be942e3e2099b673f53.jpg",
        },
        {
            "title": "The Emperor of Gladness",
            "description": "A young immigrant and a widow with dementia form an unexpected bond, exploring chosen family, memory, and survival.",
            "genre": "Literary Fiction",
            "language": "English",
            "format": "Paperback",
            "price": 15.25,
            "stock": 5,
            "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTSSKaka3LK4esvlkcKtf1A5vwvyEgXD2AFTRpoQydMH5rmCFoR",
        },
        {
            "title": "Audition",
            "description": "An actress in New York rehearses a play while a stranger claims to be her son, in a psychological thriller.",
            "genre": "Psychological Thriller",
            "language": "English",
            "format": "Paperback",
            "price": 13.75,
            "stock": 11,
            "image": "https://upload.wikimedia.org/wikipedia/en/6/60/%22Audition%22_by_Katie_Kitamura_book_cover.jpg",
        },
        {
            "title": "Leonardo da Vinci",
            "description": "A biography portraying Leonardo as a curious genius who united art and science during the Renaissance.",
            "genre": "Biography",
            "language": "English",
            "format": "Hardcover",
            "price": 22.99,
            "stock": 9,
            "image": "https://m.media-amazon.com/images/I/718bHTTn5aL._AC_UF1000%2C1000_QL80_.jpg",
        },
    ]


        repo = ProductRepository()

        for book in books:
            product = Product(
                title=book["title"],
                description=book["description"],
                genre=book["genre"],
                language=book["language"],
                format=book["format"],
                price=book["price"],
                stock=book["stock"],
                image=book["image"]
            )
            repo.add_product(product)

        print("📚 Seed de productos completado.")
