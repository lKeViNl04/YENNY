import { FiEye, FiShoppingCart } from "react-icons/fi";
import { toast } from "react-toastify";

export default function BookCard({ book }) {
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const alreadyInCart = existingCart.find((item) => item.id === book.id);

    if (alreadyInCart) {
      alreadyInCart.quantity += 1; 
      toast.info("Increased quantity in cart");
    } else {
      existingCart.push({ ...book, quantity: 1 }); 
      toast.success("Book added to cart");
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
  };

  const handleQuickView = () => {
    // lógica para mostrar detalles del libro
  };

  return (
    <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-cover bg-center group">
      {/* Imagen de fondo */}
      <div className="w-full h-full flex items-center justify-center uppercase">
        <img
          src={book.image || "/placeholder.jpg"}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Círculo animado */}
      <div className="absolute -top-32 -left-16 w-32 h-44 rounded-full bg-accent-green transition-all duration-500 group-hover:-top-14 group-hover:-left-14 group-hover:w-[140%] group-hover:h-[140%] z-10 pointer-events-none"></div>

      {/* Capa con contenido y botones */}
      <div className="absolute flex flex-col items-center justify-center -bottom-32 -right-40 w-36 h-44 rounded-full bg-accent-green transition-all duration-500 group-hover:bottom-0 group-hover:right-0 group-hover:w-full group-hover:h-full z-20 pointer-events-auto text-white text-center p-4">
        <h3 className="text-lg font-semibold mt-1">{book.title}</h3>
        <span className="text-sm text-muted-foreground">
          {book.genre} - {book.language}
        </span>
        <p className="text-sm text-muted-foreground mt-1">{book.description}</p>
        <p className="text-lg font-semibold text-primary-foreground mt-2">
          ${book.price}
        </p>

        {/* Botones */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleQuickView}
            className="p-2 bg-accent-blue rounded-full hover:bg-primary hover:text-white transition-colors"
            aria-label="Quick view"
          >
            <FiEye size={20} />
          </button>
          <button
            onClick={handleAddToCart}
            className="p-2 bg-accent-blue rounded-full hover:bg-primary hover:text-white transition-colors"
            aria-label="Add to cart"
          >
            <FiShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
