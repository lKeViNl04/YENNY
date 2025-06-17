<div align="center">
    <img src="https://drive.google.com/uc?export=view&id=1akfFdQwowXBWVkAKemuaq1TjVNMWy21H" style="border-radius: 100px;" width="60%">
</div>

# 📚 YENNY - Sistema de Gestión de Libros y Ventas

📌 **Descripción**
YENNY es un **Sistema de Gestión de Libros y Ventas**, desarrollado como parte del trabajo práctico de **Análisis y Metodología de Sistemas**. Su objetivo principal es optimizar la administración de libros, ventas, stock y usuarios dentro de una librería.

---

## 🎯 Objetivos

* 📖 Facilitar la gestión de libros y su stock.
* 💰 Automatizar el proceso de ventas y facturación.
* 👥 Mejorar el control de usuarios, clientes y proveedores.
* 📦 Agilizar la administración de productos y su disponibilidad.

---

## ⚙️ Tecnologías Utilizadas

### 🔧 Backend

* **Python**
* **FastAPI**
* **SQLite** (almacenamiento local con `database.db`)
* **Repositorio y Modelo propio** para Users y Products
* **Testing** con scripts de prueba en `tests/`
* **Seeds** para carga inicial de datos

### 💻 Frontend

* **React.js**
* **Tailwind CSS**
* **Axios** para la conexión entre frontend y backend

---

## 🚀 Funcionalidades Desarrolladas

### ✅ Implementadas

* ABM (Alta, Baja, Modificación) de **Usuarios** y **Productos**
* Navegación diferenciada para usuarios **administradores**
* Páginas públicas desarrolladas: `Home`, `Shop`, `About`, `Contact`, `Cart`
* **Integración frontend-backend** mediante Axios

### 🔜 Pendientes

* Desarrollo completo del módulo **Carrito (Cart)** con conexión a API
* Gestión de ventas, facturación y reportes
* Módulo de perfil de usuario
* Seguridad y autenticación

---

## 📂 Estructura del Proyecto

```
├── .venv/
├── app/
│   ├── db/
│   ├── models/
│   ├── routes/
│   ├── __init__.py
│   ├── database.db
├── seeds/
├── tests/
├── run.py
└── requirements.txt
```

---


