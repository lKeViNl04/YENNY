export default function DeleteProductModal({
  isOpen,
  onClose,
  product,
  onConfirm,
}) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gray-800/50 fixed inset-0"></div>
      <div className="bg-gray-900 rounded-lg p-6 relative z-10 w-full max-w-md">
        <svg className="w-16 h-16 mx-auto text-red-600">
          <use href="/icons/sprite.svg#Warning" />
        </svg>
        <h2 className="text-center text-xl font-bold text-white mb-4">
          Delete Product
        </h2>
        <p className="text-gray-300 mb-4">
          Are you sure you want to delete the product "{product.title}"?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
