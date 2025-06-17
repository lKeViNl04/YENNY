import unittest
from app.models.user_model import User

class TestUserModel(unittest.TestCase):

    def test_create_user(self):
        user = User(
            id=1,
            username="kevinf",
            email="kevin@mail.com",
            password="superpass123",
            is_admin=True
        )

        self.assertEqual(user.id, 1)
        self.assertEqual(user.username, "kevinf")
        self.assertEqual(user.email, "kevin@mail.com")
        self.assertEqual(user.password, "superpass123")
        self.assertTrue(user.is_admin)
        self.assertEqual(repr(user), "<User kevinf>")

    def test_is_email_valid(self):
        valid_user = User(email="valid@example.com")
        invalid_user1 = User(email="invalidexample.com")
        invalid_user2 = User(email="invalid@com")
        invalid_user3 = User(email="")

        self.assertTrue(valid_user.is_email_valid())
        self.assertFalse(invalid_user1.is_email_valid())
        self.assertFalse(invalid_user2.is_email_valid())
        self.assertFalse(invalid_user3.is_email_valid())

    def test_is_password_strong(self):
        user1 = User(password="12345678")
        user2 = User(password="pass")
        user3 = User(password="")  

        self.assertTrue(user1.is_password_strong())
        self.assertFalse(user2.is_password_strong())
        self.assertFalse(user3.is_password_strong())

    def test_is_admin_user(self):
        admin_user = User(is_admin=True)
        regular_user = User(is_admin=False)

        self.assertTrue(admin_user.is_admin_user())
        self.assertFalse(regular_user.is_admin_user())

    def test_to_dict(self):
        user = User(
            id=2,
            username="nicolas",
            email="nicolas@example.com",
            password="securepass",
            is_admin=False
        )

        data = user.to_dict()

        self.assertEqual(data["id"], 2)
        self.assertEqual(data["username"], "nicolas")
        self.assertEqual(data["email"], "nicolas@example.com")
        self.assertFalse(data["is_admin"])
        self.assertNotIn("password", data)  

    def test_update_from_dict(self):
        user = User(
            username="viejo_user",
            email="viejo@mail.com",
            is_admin=False
        )

        update_data = {
            "username": "nuevo_user",
            "email": "nuevo@mail.com",
            "is_admin": True
        }

        user.update_from_dict(update_data)

        self.assertEqual(user.username, "nuevo_user")
        self.assertEqual(user.email, "nuevo@mail.com")
        self.assertTrue(user.is_admin)

if __name__ == "__main__":
    unittest.main()
