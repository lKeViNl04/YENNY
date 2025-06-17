import axios from "axios";
import { useSearchParams } from "react-router-dom";
import ShopSectionFilter from "../components/Shop/ShopSectionFilter";
import {  genres, languages, formats } from "../Data";
import { useState , useEffect } from "react";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [Books , setBooks] = useState([])

  useEffect(() => {
  axios.get("http://localhost:5000/products/getall")
    .then(res => setBooks(res.data))
    .catch(err => console.error("Error al obtener libros:", err));
}, []);


  return (
  <div className="space-y-8 pt-20">
    <h1 className="text-4xl font-bold text-center text-white">Books</h1>
    <ShopSectionFilter books={Books} genres={genres} languages={languages} formats={formats}/>
  </div>
);

}

