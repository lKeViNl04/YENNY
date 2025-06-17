import NavButton from "../Header/NavButton";

export default function HomeSectionAboutUs() {
  return (
    <section className="bg-black py-12 text-center text-background">
      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-6">
        <svg className="w-6 h-6 text-background hover:text-blue-700 transition-colors duration-300">
          <use href="/icons/sprite.svg#Facebook" />
        </svg>
        <svg className="w-6 h-6 text-background hover:text-pink-400 transition-colors duration-300">
          <use href="/icons/sprite.svg#Instagram" />
        </svg>
        <svg className="w-6 h-6 text-background hover:text-emerald-400 transition-colors duration-300">
          <use href="/icons/sprite.svg#Whatsapp" />
        </svg>
      </div>

      {/* Text Section */}
      <h2 className="text-3xl font-bold mb-4">
        Want to know more about us?
      </h2>
      <p className="text-gray-700 pb-6">
        Discover our story, mission, and values. Get to know us better by visiting
        the "About Us" section.
      </p>
      <NavButton
        href="/aboutus"
        className="px-4 py-4 text-neutral-dark border border-accent-green bg-background hover:bg-accent-green hover:text-background transition-colors duration-300"
      >
        Go to About Us
      </NavButton>
    </section>
  );
}
