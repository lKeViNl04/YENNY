import axios from "axios";
import { useState, useEffect } from "react";
import DeleteProductModal from "./Product/DeleteProductModal";
import EditProductModal from "./Product/EditProductModal";
import AddProductModal from "./Product/AddProductModal";

export default function AdminProducts() {
  // ---------------------------
  // Estados del componente
  // ---------------------------

  // Almacena la lista completa de productos obtenidos desde el backend
  const [ProductData, setProductData] = useState([]);

  // Controla si el modal de agregado de producto está abierto o cerrado
  const [addOpen, setAddOpen] = useState(false);

  // Estado para guardar el nuevo producto a crear
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    genre: "",
    language: "",
    format: "",
    price: 0,
    stock: 0,
    image: "",
  });

  // Controla si el modal de edición está abierto o cerrado
  const [editOpen, setEditOpen] = useState(false);

  // Almacena el producto seleccionado para editar
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Controla si el modal de eliminación está abierto o cerrado
  const [deleteOpen, setDeleteOpen] = useState(false);

  // Almacena el producto seleccionado para eliminar
  const [productToDelete, setProductToDelete] = useState(null);

  // ---------------------------
  // Funciones del componente
  // ---------------------------

  // Obtiene todos los productos desde el backend y actualiza el estado
  const fetchProduct = () => {
    axios
      .get("http://localhost:5000/products/getall")
      .then((res) => {
        setProductData(res.data);
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err.message);
      });
  };

  // Envía los datos para agregar un nuevo producto
  const SubmitAddProduct = (e) => {
    e.preventDefault();

    if (!newProduct.title || !newProduct.price || !newProduct.stock) {
      console.error("Required fields are missing to add the product");
      return;
    }

    const formattedProduct = {
      ...newProduct,
      price: parseFloat(newProduct.price),
      stock: parseInt(newProduct.stock),
    };

    axios
      .post("http://localhost:5000/products/create", formattedProduct, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Product added:", res.data);
        setAddOpen(false);
        setNewProduct({
          title: "",
          description: "",
          genre: "",
          language: "",
          format: "",
          price: 0,
          stock: 0,
          image: "",
        });
        fetchProduct();
      })
      .catch((err) => {
        console.error("Error adding product:", err.message);
      });
  };

  // Manejador para cambios en formulario de agregar producto
  const handleNewProductChange = (field, value) => {
    setNewProduct((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Abre el modal de edición y establece qué producto se va a editar
  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setEditOpen(true);
  };

  // Envía los cambios del producto editado al backend
  const SubmitEditProduct = (e) => {
    e.preventDefault();
    if (!selectedProduct || !selectedProduct.id) {
      console.error("Product not selected or without ID");
      return;
    }
    axios
      .put(
        `http://localhost:5000/products/update/${selectedProduct.id}`,
        selectedProduct
      )
      .then((res) => {
        console.log("updating product:", res.data);
        setEditOpen(false);
        fetchProduct();
      })
      .catch((err) => {
        console.error("Error updating product:", err.message);
      });
  };

  // Maneja los cambios en los campos del formulario de edición
  const handleEditChange = (field, value) => {
    setSelectedProduct((prevProduct) => ({
      ...prevProduct,
      [field]: value,
    }));
  };

  // Abre el modal de confirmación de eliminación y guarda el producto a eliminar
  const handleDeleteClick = (product) => {
    setProductToDelete(product);
    setDeleteOpen(true);
  };

  // Confirma la eliminación del producto seleccionado
  const confirmDeleteProduct = () => {
    if (!productToDelete || !productToDelete.id) {
      console.error("No product selected or missing product ID for deletion");
      return;
    }
    axios
      .delete(`http://localhost:5000/products/delete/${productToDelete.id}`)
      .then((res) => {
        console.log("Product deleted:", res.data);
        setDeleteOpen(false);
        fetchProduct(); // Vuelve a cargar la lista de productos
      })
      .catch((err) => {
        console.error("Error deleting product:", err.message);
      });
  };

  // ---------------------------
  // useEffect del componente
  // ---------------------------

  // Ejecuta fetchProduct() al montar el componente para cargar los productos
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="mx-auto ">
      <div className="flex flex-col items-center text-center pt-4">
        <h1 className="text-3xl font-bold mb-2 text-white">All Products</h1>
        <p className="text-gray-300 mb-4">Managing your store's products</p>
        <button
          type="button"
          onClick={() => setAddOpen(true)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white rounded-lg 
                bg-accent-blue hover:bg-white hover:text-black mb-4"
        >
          <svg className="w-4 h-4 mr-2">
            <use href="/icons/sprite.svg#Plus" />
          </svg>
          Add new product
        </button>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <table className="min-w-full table-fixed ">
                <thead className=" bg-gray-700 ">
                  <tr className="text-white text-center">
                    <th className="p-4 text-center">Title</th>
                    <th className="p-4 text-center">Price</th>
                    <th className="p-4 text-center">Stock</th>
                    <th className="p-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className=" divide-y bg-gray-800 divide-white">
                  {ProductData.map((product) => (
                    <RowProduct
                      key={product.id}
                      product={product}
                      onEdit={() => handleEditClick(product)}
                      onDelete={() => handleDeleteClick(product)}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <AddProductModal
        isOpen={addOpen}
        onClose={() => setAddOpen(false)}
        onSubmit={SubmitAddProduct}
        newproduct={newProduct}
        onChange={handleNewProductChange}
      />

      <EditProductModal
        isOpen={editOpen}
        onClose={() => setEditOpen(false)}
        onSubmitEditProduct={SubmitEditProduct}
        product={selectedProduct}
        onChange={handleEditChange}
      />

      <DeleteProductModal
        isOpen={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={confirmDeleteProduct}
        product={productToDelete}
      />
    </div>
  );
}

function RowProduct({ product, onEdit = "", onDelete }) {
  return (
    <tr className=" dark:hover:bg-gray-700">
      <td className=" text-center p-4 mr-12 space-x-6 ">
        <div className="text-base font-semibold text-white">
          {product.title}
        </div>
      </td>
      <td className=" text-center p-4 mr-12 space-x-6 ">
        <div className="text-sm font-normal text-gray-400">
          ${product.price}
        </div>
      </td>

      <td className="text-center p-4 text-base font-medium text-white">
        {product.stock}
      </td>

      <td className="text-center p-4 space-x-2 ">
        <button
          type="button"
          onClick={onEdit}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg 
                          bg-primary-600 hover:bg-white hover:text-black "
        >
          <svg className="w-4 h-4 mr-2 ">
            <use href="/icons/sprite.svg#Pencil" />
          </svg>
          Edit product
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="inline-flex items-center px-3 py-2 mt-3 md:mt-0 text-sm font-medium text-center text-white 
                          bg-red-600 rounded-lg hover:bg-red-800 "
        >
          <svg className="w-4 h-4 mr-2 fill-white">
            <use href="/icons/sprite.svg#TrashCan" />
          </svg>
          Delete product
        </button>
      </td>
    </tr>
  );
}
