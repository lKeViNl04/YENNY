import { useState,useEffect } from "react";
import CartCard from "../components/Cart/CartCard";
import NavButton from "../components/Header/NavButton";

export default function Cart() {
  const bookCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [products, setProducts] = useState(bookCart);

  const updateQuantity = (id, qty) => {
  const newProducts = products.map((p) =>
    p.id === id ? { ...p, quantity: +qty } : p
  );
  setProducts(newProducts);
  localStorage.setItem("cart", JSON.stringify(newProducts)); 
};


  const removeItem = (id) => {
  const updated = products.filter((p) => p.id !== id);
  setProducts(updated);
  localStorage.setItem("cart", JSON.stringify(updated)); 
};

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(products));
}, [products]);


  const total = products.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <section className="bg-neutral-dark text-white">
      <div className="mx-auto max-w-screen-xl min-h-screen px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl p-6  text-white ">
          <h1 className="text-2xl font-bold text-center sm:text-3xl">
            Your Cart
          </h1>

          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center mt-16 text-center space-y-6">
              <p className="text-4xl sm:text-5xl font-semibold text-gray-400">
                Your cart is empty 🛒
              </p>
              <NavButton
                href="/shop"
                className="px-8 py-4 text-lg text-neutral-dark border border-accent-green bg-background hover:bg-accent-green hover:text-background rounded transition-colors duration-300"
              >
                Shop Now
              </NavButton>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </section>
  );
}
