import axios from "axios";
import { useSearchParams } from "react-router-dom";
import ShopSectionFilter from "../components/Shop/ShopSectionFilter";
import { genres, languages, formats } from "../Data";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [Books, setBooks] = useState([]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get("http://localhost:5000/products/getall");

      const { success, message, products } = res.data;
      if (success) {
        setBooks(products);        
      }
    } catch (err) {
      const errorMsg = err.response?.data?.error || "Unknown error";
      toast.error(errorMsg);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="space-y-8 pt-20">
      <h1 className="text-4xl font-bold text-center text-white">Books</h1>
      <ShopSectionFilter
        books={Books}
        genres={genres}
        languages={languages}
        formats={formats}
      />
    </div>
  );
}
