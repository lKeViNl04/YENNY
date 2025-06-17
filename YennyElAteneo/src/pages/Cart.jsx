import { useState } from "react";
import { productsData } from "../Data";
import CartCard from "../components/Cart/CartCard";

export default function Cart() {
  const [products, setProducts] = useState(productsData);

  const updateQuantity = (id, qty) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: +qty } : p))
    );
  };

  const removeItem = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const total = products.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <section className="bg-neutral-dark text-white">
      <div className="mx-auto max-w-screen-xl min-h-screen px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl p-6  text-white ">
          <h1 className="text-2xl font-bold text-center sm:text-3xl">
            Your Cart
          </h1>

          <ul className="mt-8 space-y-6">
            {products.map((product) => (
              <CartCard
                key={product.id}
                product={product}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            ))}
          </ul>

          <div className="mt-8 border-t pt-6 space-y-2 text-sm text-gray-700">
            <div className="flex justify-between text-base font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 text-right">
            <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
