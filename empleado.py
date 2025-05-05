class Empleado:
    def __init__(self, nombre, apellido, id_cargo):
        self.nombre = nombre
        self.apellido = apellido
        self.id_cargo = id_cargo

    def __str__(self):
        return f"{self.nombre} {self.apellido} - {self.cargo}"