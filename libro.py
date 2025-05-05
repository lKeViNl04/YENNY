class Libro:
    def __init__(self, titulo, autor, editorial, precio, stock  ,ISBN, id_categoria , id_género):
        self.titulo = titulo
        self.autor = autor
        self.editorial = editorial
        self.precio = precio
        self.stock = stock
        self.ISBN = ISBN
        self.id_categoria = id_categoria
        self.id_género = id_género


    def __str__(self):
        return f"{self.titulo} por {self.autor} - {self.editorial} - {self.precio} - {self.stock} - {self.ISBN} - {self.categoria} - {self.género}"