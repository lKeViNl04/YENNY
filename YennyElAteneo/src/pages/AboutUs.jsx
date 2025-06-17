import DecorativeDivider from "../components/About/DecorativeDivider.jsx";
import AboutSectionHero from "../components/About/AboutSectionHero.jsx";
import AboutSectionHistory from "../components/About/AboutSectionHistory.jsx";
import AboutSectionValues from "../components/About/AboutSectionValues.jsx";
import AboutSectionGallery from "../components/About/AboutSectionGallery.jsx";


export default function AboutUs() {
  return (
    <div className="bg-[#1b1b1b] text-[#e8edee] min-h-screen font-serif pt-20 ">
      <AboutSectionHero />
      <DecorativeDivider />
      <AboutSectionHistory />
      <DecorativeDivider />
      <AboutSectionValues />
      <DecorativeDivider />
      <AboutSectionGallery />
    </div>
  );
}