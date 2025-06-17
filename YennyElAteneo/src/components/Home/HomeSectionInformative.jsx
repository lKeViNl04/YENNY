import { useEffect, useRef, useState } from "react";

export default function HomeSectionInformative({cards}) {


    const sliderRef = useRef(null);
    const [current, setCurrent] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);

    // Detecta cuántos slides hay visibles según el ancho
    useEffect(() => {
        const updateSlidesPerView = () => {
            const width = window.innerWidth;
            if (width >= 1024) {
                setSlidesPerView(4);
            } else if (width >= 640) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };

        updateSlidesPerView();
        window.addEventListener("resize", updateSlidesPerView);
        return () => window.removeEventListener("resize", updateSlidesPerView);
    }, []);

    const sectionCount = Math.ceil(cards.length / slidesPerView);

    // Auto slide solo si NO es desktop
    useEffect(() => {
        if (slidesPerView >= 4) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % sectionCount);
        }, 4000);

        return () => clearInterval(interval);
    }, [slidesPerView, sectionCount]);

    // Mueve el slider
    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            slider.scrollTo({
                left: slider.offsetWidth * current,
                behavior: "smooth",
            });
        }
    }, [current]);

    return (
        <section className="py-8 bg-neutral-dark">
            <div className="max-w-6xl mx-auto px-4">
                <div
                    ref={sliderRef}
                    className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
                >
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-2 snap-start"
                        >
                            <div className="bg-accent-blue rounded-lg shadow-md p-3 h-full flex items-center ">
                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full ">
                                    <svg className="w-full h-full ">
                                        <use href={`/icons/sprite.svg#${ card.icon }`} />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-base font-semibold mb-1">{card.title}</h3>
                                    <p className="text-sm text-background">{card.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Paginación solo si hay más de 1 sección y en pantalla chica */}
                {slidesPerView < 4 && (
                    <div className="flex justify-center mt-4 gap-2 lg:hidden">
                        {Array.from({ length: sectionCount }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-3 h-3 rounded-full ${current === i ? "bg-gray-800" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
