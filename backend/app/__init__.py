from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from datetime import timedelta
from app.routes import all_blueprints
from dotenv import load_dotenv
import os

load_dotenv()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    
    app.config["DATABASE"] = os.path.join(os.path.dirname(__file__), "database.db")
    app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")
    app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(minutes=30)
    app.config["JWT_REFRESH_TOKEN_EXPIRES"] = timedelta(days=7)

    CORS(app)
    jwt.init_app(app)

    for bp in all_blueprints:
        app.register_blueprint(bp)

    return app
