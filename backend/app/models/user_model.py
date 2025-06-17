import re
class User:
    def __init__(
        self, id=None, name=None, email=None, password=None, is_admin=False
    ):
        self.id = id
        self.name = name
        self.email = email
        self.password = password
        self.is_admin = is_admin

    def __repr__(self):
        return f"<User {self.name}>"

    def is_email_valid(self):
        pattern = r"^\S+@\S+\.\S+$"
        return re.match(pattern, self.email) is not None

    def is_password_strong(self):
        return len(self.password) >= 8

    def is_admin_user(self):
        return self.is_admin

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "password": self.password,  
            "is_admin": self.is_admin,
        }
        
    def update_from_dict(self, data):
        for key, value in data.items():
            if hasattr(self, key):
                setattr(self, key, value)
