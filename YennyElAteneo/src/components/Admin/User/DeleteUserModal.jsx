export default function DeleteUserModal({ isOpen, onClose, onConfirm, user }) {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
      <div className="relative w-full max-w-md px-4">
        <div className="bg-gray-800 rounded-lg shadow">
          <div className="flex justify-end p-2">
            <button
              type="button"
              onClick={onClose}
              className=" group text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2 group-hover:fill-white ">
                <use href="/icons/sprite.svg#Equis" />
              </svg>
            </button>
          </div>
          <div className="p-6 pt-0 text-center">
            <svg className="w-16 h-16 mx-auto text-red-600">
              <use href="/icons/sprite.svg#Warning" />
            </svg>
            <h3 className="mt-5 mb-6 text-lg text-gray-400">
              Are you sure you want to delete this user ?
            </h3>

            <br />
            <span className="block m-2 text-sm text-gray-300">
              <strong>ID:</strong> {user.id}
              <br />
              <strong>Name:</strong> {user.name}
              <br />
              <strong>Email:</strong> {user.email}
              <br />
              <strong>Is Admin:</strong> {user.is_admin ? "Yes" : "No"}
            </span>

            <button
              onClick={onConfirm}
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-800 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"
            >
              Yes, I'm sure
            </button>

            <button
              onClick={onClose}
              className="text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:ring-gray-500 border border-gray-600 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
