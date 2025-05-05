class Genero:
    def __init__(self, id_genero, nombre_genero):
        self.id_genero = id_genero
        self.nombre_genero = nombre_genero

    def __str__(self):
        return f"ID: {self.id_genero}, Nombre: {self.nombre_genero}"