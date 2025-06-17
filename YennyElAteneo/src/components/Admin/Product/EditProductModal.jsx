export default function EditProductModal({
  isOpen,
  onClose,
  product,
  onSubmitEditProduct,
  onChange
}) {
  if (!isOpen || !product) return null;

  const fields = [
    { id: "title", label: "title", type: "text" },
    { id: "genre", label: "genre", type: "text" },
    { id: "language", label: "language", type: "text" },
    { id: "format", label: "format", type: "text" },
    { id: "price", label: "price", type: "number" },
    { id: "stock", label: "stock", type: "number" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-2xl px-4">
        <div className="bg-gray-800 rounded-lg shadow">
          <div className="flex items-start justify-between p-5 border-b border-gray-700 rounded-t">
            <h3 className="text-xl font-semibold text-white">Edit user</h3>
            <button
              onClick={onClose}
              className="group text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2 group-hover:fill-white">
                <use href="/icons/sprite.svg#Equis" />
              </svg>
            </button>
          </div>
          <form onSubmit={onSubmitEditProduct}>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-6 gap-6">
                {fields.map(({ id, label, type }) => (
                  <div key={id} className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor={id}
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      id={id}
                      placeholder={label}
                      defaultValue={product[id]}
                      onChange={(e) => onChange(id, e.target.value)}
                      required
                      step={type === "number" ? "any" : undefined}
                      className="shadow-sm bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    />
                  </div>
                ))}
                <div className="col-span-6">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    description
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    placeholder="Description"
                    defaultValue={product.description}
                    className="block p-2.5 w-full text-sm text-white bg-gray-700 border border-gray-600 placeholder-gray-400 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end p-6 border-t border-gray-700">
              <button
                type="submit"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Save all
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
