import sqlite3
from flask import current_app


def get_connection():
    db_name = current_app.config["DATABASE"]
    conn = sqlite3.connect(db_name)
    conn.row_factory = sqlite3.Row
    return conn

