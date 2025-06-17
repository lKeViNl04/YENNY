// datos de usuarios
import axios from "axios";
import { useState, useEffect } from "react";
import EditUserModal from "./User/EditUserModal";
import DeleteUserModal from "./User/DeleteUserModal";

export default function AdminUsers() {

  // ---------------------------
// Estados del componente
// ---------------------------

// Almacena la lista completa de usuarios obtenidos desde el backend
const [UserData, setUserData] = useState([]);

// Controla si el modal de edición está abierto o cerrado
const [editOpen, setEditOpen] = useState(false);

// Almacena el usuario seleccionado para editar
const [selectedUser, setSelectedUser] = useState(null);

// Controla si el modal de eliminación está abierto o cerrado
const [deleteOpen, setDeleteOpen] = useState(false);

// Almacena el usuario seleccionado para eliminar
const [userToDelete, setUserToDelete] = useState(null);


// ---------------------------
// Funciones del componente
// ---------------------------

// Obtiene todos los usuarios desde el backend y actualiza el estado
const fetchUsers = () => {
  axios
    .get("http://localhost:5000/users/getall")
    .then((res) => {
      setUserData(res.data);
    })
    .catch((err) => {
      console.error("Error loading users:", err.message);
    });
};

// Abre el modal de eliminación y establece qué usuario se eliminará
const handleDeleteClick = (user) => {
  setUserToDelete(user);
  setDeleteOpen(true);
};

// Confirma la eliminación del usuario seleccionado
const confirmDeleteUser = () => {
  if (!userToDelete || !userToDelete.id) {
    console.error("User not selected or without ID to delete");
    return;
  }

  axios
    .delete(`http://localhost:5000/users/delete/${userToDelete.id}`)
    .then((res) => {
      console.log("Deleted user:", res.data);
      setDeleteOpen(false);
      fetchUsers(); 
    })
    .catch((err) => {
      console.error("Error deleting user:", err.message);
    });
};

// Abre el modal de edición y establece qué usuario se editará
const handleEditClick = (user) => {
  setSelectedUser(user);
  console.log(user);
  setEditOpen(true);
};

// Maneja los cambios en los campos del formulario de edición
const handleEditChange = (field, value) => {
  setSelectedUser((prevUser) => ({
    ...prevUser,
    [field]: value,
  }));
};

// Envía los cambios del usuario editado al backend
const SubmitEditUser = (e) => {
  e.preventDefault();

  if (!selectedUser || !selectedUser.id) {
    console.error("User not selected or without ID");
    return;
  }

  console.log("User data to be updated:", selectedUser);

  axios
    .put(`http://localhost:5000/users/update/${selectedUser.id}`, selectedUser)
    .then((res) => {
      console.log("User updated:", res.data);
      setEditOpen(false);
      fetchUsers(); 
    })
    .catch((err) => {
      console.error("Error updating user:", err.message);
    });
};


// ---------------------------
// useEffect del componente
// ---------------------------

// Ejecuta fetchUsers() al montar el componente para cargar los usuarios
useEffect(() => {
  fetchUsers();
}, []);


  return (
    
      <div className="mx-auto ">
        <h1 className="text-center text-3xl pt-4 font-bold mb-4 text-white">
          All Users
        </h1>
        <p className="text-center text-gray-300 mb-4">
          Manage users from this section.
        </p>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow">
                <table className="min-w-full table-fixed ">
                  <thead className=" bg-gray-700 ">
                    <tr className="text-white text-center">
                      <th className="p-4 text-center">Name</th>
                      <th className="p-4 text-center">Email</th>
                      <th className="p-4 text-center">password</th>
                      <th className="p-4 text-center">Role</th>
                      <th className="p-4 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className=" divide-y bg-gray-800 divide-white">
                    {UserData.map((user) => (
                      <RowUser
                        key={user.id}
                        user={user}
                        onEdit={() => handleEditClick(user)}
                        onDelete={() => handleDeleteClick(user)}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <EditUserModal
          isOpen={editOpen}
          onClose={() => setEditOpen(false)}
          onSubmitEditUser={SubmitEditUser}
          onChange={handleEditChange}
          user={selectedUser}
        />

        <DeleteUserModal
          isOpen={deleteOpen}
          onClose={() => setDeleteOpen(false)}
          onConfirm={confirmDeleteUser}
          user={userToDelete}
        />
      </div>
    
  );
}

function RowUser({ user, onEdit, onDelete }) {
  return (
    <tr className=" dark:hover:bg-gray-700">
      <td className=" text-center p-4 mr-12 space-x-6 ">
        <div className="text-base font-semibold text-white">{user.name}</div>
      </td>
      <td className=" text-center p-4 mr-12 space-x-6 ">
        <div className="text-sm font-normal text-gray-400">{user.email}</div>
      </td>
      <td className=" text-center p-4 mr-12 space-x-6 ">
        <div className="text-sm font-normal text-gray-400">{user.password}</div>
      </td>

      <td className="text-center p-4 text-base font-medium text-white">
        {user.is_admin ? "Admin" : "User"}
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
          Edit user
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
          Delete user
        </button>
      </td>
    </tr>
  );
}
