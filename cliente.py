class Cliente:
    def __init__(self, name, apéllido, email,telefono):
        self.name = name
        self.apéllido = apéllido
        self.email = email
        self.telefono = telefono

    def __str__(self):
        return f"{self.name} {self.apéllido} - {self.email} - {self.telefono}"