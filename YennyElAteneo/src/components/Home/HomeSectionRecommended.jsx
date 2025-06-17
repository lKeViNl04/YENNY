import { useRef, useState, useEffect } from "react";
import NavButton from "../Header/NavButton";

export default function HomeSectionRecommended({recommended}) {
    
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateButtons = () => {
        const container = scrollRef.current;
        if (!container) return;
        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(
        container.scrollLeft + container.offsetWidth < container.scrollWidth - 10
        ); // margen de error
    };

    useEffect(() => {
        updateButtons();
        const ref = scrollRef.current;
        if (ref) {
        ref.addEventListener("scroll", updateButtons);
        return () => ref.removeEventListener("scroll", updateButtons);
        }
    }, [recommended]);

    const scroll = (dir) => {
        const container = scrollRef.current;
        if (!container) return;
        const cardWidth = 288 + 24; 
        const visibleCount = Math.floor(container.offsetWidth / cardWidth) || 1;
        container.scrollBy({ left: dir * cardWidth * visibleCount, behavior: "smooth" });
    };

    return (
        <section className="w-full p-10 bg-black text-white">
        <h2 className="text-3xl font-bold text-white pb-5 ">
            Recommended
        </h2>

        <div className="relative flex items-center">
            {/* Botón izquierdo */}
            <button
            onClick={() => scroll(-1)}
            disabled={!canScrollLeft}
            className={`absolute left-0 z-10  rounded-full disabled:opacity-40 disabled:cursor-not-allowed`}
            >
            <svg className="w-8 h-8 ">
                <use href="/icons/sprite.svg#Angle-Left" />
            </svg>
            </button>

            {/* Carrusel */}
            <div
            ref={scrollRef}
            className="max-w-full overflow-hidden flex gap-6 mx-auto "
            >
            {recommended.map((book, idx) => (
                <div
                key={idx}
                className="
                    flex-shrink-0
                    group
                    relative
                    h-[400px]
                    w-[80vw] max-w-[288px]            
                    sm:w-[50vw] sm:max-w-[216px]      
                    md:w-[33vw] md:max-w-[216px]      
                    lg:w-[25vw] lg:max-w-[288px]      
                    [perspective:1000px]
                "
                >
                <div className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                    {/* Frente */}
                    <div className="absolute w-full h-full rounded-xl text-white [backface-visibility:hidden]">
                    <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-xl p-4 flex flex-col justify-end" />
                    </div>
                    {/* Reverso */}
                    <div className="absolute text-center w-full h-full rounded-xl bg-gradient-to-br from-accent-green to-accent-blue-red p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden]">
                    <div className="flex flex-col h-full">
                        <div className="text-xl font-bold mb-2">{book.title}</div>
                        <p className="text-sm flex-grow">{book.description}</p>
                        <NavButton
                        href="/shop"
                        className="text-neutral-dark border border-accent-green bg-background hover:bg-accent-green hover:text-background transition-colors duration-300"
                        >
                        see more
                        </NavButton>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>

            {/* Botón derecho */}
            <button
            onClick={() => scroll(1)}
            disabled={!canScrollRight}
            className={`absolute right-0 z-10  p-2 rounded-full disabled:opacity-40 disabled:cursor-not-allowed`}
            >
            <svg className="w-8 h-8  ">
                <use href="/icons/sprite.svg#Angle-Right" />
            </svg>
            </button>
        </div>
        </section>
    );
}
