<div align="center">
    <img src="https://drive.google.com/uc?export=view&id=1akfFdQwowXBWVkAKemuaq1TjVNMWy21H" style="border-radius: 100px;" width="60%">
</div>

# 📚 YENNY - Book and Sales Management System

YENNY is a **Book and Sales Management System** developed as part of the **Systems Analysis and Methodology** coursework. Its main goal is to optimize the administration of books, sales, stock, and users within a bookstore.

---

## 🎯 Objectives

* 📖 Facilitate book and stock management.
* 💰 Automate sales and invoicing processes.
* 👥 Improve control over users, clients, and suppliers.
* 📦 Streamline product administration and availability.

---

## ⚙️ Technologies Used

### Backend

* **Python** (Flask)
* **SQLite** (`database.db`)
* **Custom repository and models** for Users and Products
* **Testing** with scripts in `tests/`
* **Seeds** for initial data loading

### Frontend

* **React.js**
* **Tailwind CSS**
* **Axios** for frontend-backend communication

---

## 🚀 Features

### ✅ Implemented

* CRUD (Create, Read, Update, Delete) for **Users** and **Products**
* Admin and regular user navigation
* Public pages: `Home`, `Shop`, `About`, `Contact`, `Cart`
* **Frontend-backend integration** via Axios
* Database seeding scripts for users and products
* Error handling and informative console messages

### 🔜 In Progress / Planned

* Full **Cart** module with API connection
* Sales, invoicing, and reporting modules
* User profile module
* Security and authentication
* Improved error messages and validations

---

## 📂 Project Structure

```
├── backend/
│   ├── app/
│   │   ├── db/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── __init__.py
│   │   ├── database.db
│   ├── seeds/
│   ├── tests/
│   ├── run.py
│   └── requirements.txt
├── YennyElAteneo/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── Data.jsx
│   │   └── ...
│   ├── public/
│   └── package.json
└── README.md
```

---

## 🛠️ Setup Instructions

### Backend

1. Go to the `backend` folder:
   ```
   cd backend
   ```
2. Create the virtual environment
   ```
   py/python -3 -m venv .venv
   ```
3. Activate the virtual environment
   ```
   .venv\Scripts\activate
   ```
4. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
5. Run database seeds:
   ```
   python seeds/product_seed.py
   python seeds/user_seed.py
   ```
6. Start the backend server:
   ```
   flask --app run run
   ```

### Frontend

1. Go to the `YennyElAteneo` folder:
   ```
   cd YennyElAteneo
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the frontend:
   ```
   npm run dev
   ```

---

## 📌 Notes

- All interface and code are in English.
- Some comments and example data may be in Spanish, but do not affect the user experience.
- The project is modular and easy to extend.
- Database seeds help with initial testing and demo.

---