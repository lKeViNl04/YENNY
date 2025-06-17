from flask import Flask
from flask_cors import CORS
from app.routes import all_blueprints
import os

def create_app():
    app = Flask(__name__)
    
    app.config["DATABASE"] = os.path.join(os.path.dirname(__file__), "database.db")
    
    CORS(app)

    for bp in all_blueprints:
        app.register_blueprint(bp)

    return app
