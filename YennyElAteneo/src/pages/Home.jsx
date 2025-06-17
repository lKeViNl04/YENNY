import axios from "axios";
import { useState, useEffect } from "react";
import HomeSectionHero from "../components/Home/HomeSectionHero";
import HomeSectionBankPromotions from "../components/Home/HomeSectionBankPromotions";
import HomeSectionRecommended from "../components/Home/HomeSectionRecommended";
import HomeSectionInformative from "../components/Home/HomeSectionInformative";
import HomeSectionAboutUs from "../components/Home/HomeSectionAboutUs";
import { cards, logos } from "../Data";
export default function Home() {

  const [Books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products/getall")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.error("Error fetching books:", err.message);
      });
  }, []);

  const restOfBooks = Books.slice(3,10);
  return (
    <div className="home">
      <HomeSectionHero />
      <HomeSectionBankPromotions logos={logos} />
      <HomeSectionRecommended recommended={restOfBooks} />
      <HomeSectionInformative cards={cards} />
      <HomeSectionAboutUs />
    </div>
  );
}
