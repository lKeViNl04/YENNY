import re


class User:
    def __init__(
        self,
        id=None,
        name=None,
        email=None,
        password=None,
        is_admin=False,
        created_at=None,
    ):
        self.id = id
        self.name = name
        self.email = email
        self.password = password
        self.is_admin = bool(is_admin)
        self.created_at = created_at

    # Verifica si el email tiene un formato válido
    def is_email_valid(self):
        pattern = r"^\S+@\S+\.\S+$"
        return re.match(pattern, self.email) is not None

    # Verifica si la contraseña es fuerte (mínimo 8 caracteres)
    def is_password_strong(self):
        return len(self.password) >= 8

    # Retorna si el usuario es administrador
    def is_admin_user(self):
        return self.is_admin

    def to_dict(self):
        password_str = self.password.decode("utf-8") if isinstance(self.password, bytes) else self.password
        data = {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "is_admin": self.is_admin,
            "password": password_str,
            "created_at": self.created_at,
        }
        return data

    # Actualiza los atributos del usuario a partir de un diccionario
    def update_from_dict(self, data):
        for key, value in data.items():
            if hasattr(self, key):
                setattr(self, key, value)
