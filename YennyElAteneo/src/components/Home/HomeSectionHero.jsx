import NavButton from "../Header/NavButton";
import Spline from "@splinetool/react-spline";

export default function HomeSectionHero() {
  return (
    <section className="relative pt-20 sm:pt-0 w-full min-h-screen bg-[url('/img/fondoHero.png')] bg-cover bg-center">
      <div className="relative z-10 max-w-6xl mx-auto min-h-screen flex items-center justify-center px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl lg:text-8xl font-extrabold text-white leading-tight mb-4">
              NEW RELEASE
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium mb-6">
              Dive into the stories everyone is talking about
            </p>
            <p className="text-base text-amber-50 mb-8">
              Explore best-sellers in literature, history, science, art, and
              more.
            </p>
            <NavButton
              href="/shop"
              className="py-4 text-neutral-dark border border-accent-green bg-background hover:bg-accent-green hover:text-background transition-colors duration-300"
            >
              Shop Now
            </NavButton>

            <div className="pt-10 flex items-center gap-4">
              <img src="/img/logoyenny.svg" alt="Yenny" className="h-8" />
              <span className="text-gray-500">|</span>
              <img
                src="/img/logoElAteneo.svg"
                alt="El Ateneo"
                className="h-8"
              />
            </div>
          </div>
          <div className="relative w-full ">
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <Spline scene="https://prod.spline.design/7eyvDIXZRmzhFGVt/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
