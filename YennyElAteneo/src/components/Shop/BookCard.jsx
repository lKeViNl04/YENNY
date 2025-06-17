import { FiEye, FiShoppingCart } from "react-icons/fi";

export default function BookCard({ book }) {
  return (
    <div
      className={`relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold  bg-cover bg-center`}
    >
      <div className="z-10 absolute w-full h-full peer"></div>
      <div className=" absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-accent-green transition-all duration-500"></div>
      <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-40 w-36 h-44 rounded-full bg-accent-green transition-all duration-500">
        <div className=" text-white">
          <h3 className="text-lg font-semibold mt-1">{book.title}</h3>
          <span className="text-sm text-muted-foreground">
            {book.genre} - {book.language}
          </span>
          <p className="text-sm text-muted-foreground mt-1">
            {book.description}
          </p>
          <p className="text-lg font-semibold text-primary-foreground mt-2">
            ${book.price}
          </p>
          <div className="flex gap-6 mt-4 justify-center p-5">
            <button
              className="p-2 bg-accent-blue rounded-full hover:bg-primary hover:text-white transition-colors"
              aria-label="Quick view"
            >
              <FiEye size={20} />
            </button>
            <button
              className="p-2 bg-accent-blue rounded-full hover:bg-primary hover:text-white transition-colors"
              aria-label="Add to cart"
            >
              <FiShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-full items-center justify-center flex uppercase">
        <img
          src={book.image}
          alt={book.title}
          className=" inset-0 w-full h-full object-cover "
        />
      </div>
    </div>
  );
}
