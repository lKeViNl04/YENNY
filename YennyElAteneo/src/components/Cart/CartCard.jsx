export default function CartCard({ product, updateQuantity, removeItem }) {
    return (
        <li className="flex flex-col sm:flex-row items-center gap-4">
        <img
            src={product.image}
            alt={product.name}
            className="w-16 h-16 object-cover rounded"
        />

        <div className="w-full text-center sm:text-start">
            <h3 className="text-sm font-medium">{product.name}</h3>
            <dl className="text-sm text-gray-600 mt-1">
            <div>
                <dt className="inline">Author:</dt>
                <dd className="inline ml-1">{product.author}</dd>
            </div>
            <div>
                <dt className="inline">Genre:</dt>
                <dd className="inline ml-1">{product.genre}</dd>
            </div>
            <div>
                <dt className="inline">Price:</dt>
                <dd className="inline ml-1">{product.price}</dd>
            </div>
            </dl>
        </div>

        <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <input
            type="number"
            min="1"
            value={product.quantity}
            onChange={(e) => updateQuantity(product.id, e.target.value)}
            className="h-8 w-12 rounded bg-accent-blue p-1 text-center text-sm"
            />
            <button
            onClick={() => removeItem(product.id)}
            className="text-red-500 hover:text-red-700"
            >
            <svg className="w-4 h-4 fill-accent-red hover:fill-red-600 transition-colors duration-300">
                <use href="/icons/sprite.svg#TrashCan" />
            </svg>
            </button>
        </div>
        </li>
    );
}
