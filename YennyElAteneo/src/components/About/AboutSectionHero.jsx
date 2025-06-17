export default function AboutSectionHero() {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between p-10 gap-10 ">
        <div className="max-w-xl">
            <h1 className="text-5xl font-bold text-white mb-4">WHO WE ARE?</h1>
            <p className="text-lg text-white">
            A storied culture of literature, art, and history awaits you at Yenny
            El Ateneo.
            </p>
        </div>
        <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/60/17/f3/img-20181106-140326-003.jpg?w=1100&h=600&s=1"
            alt="El Ateneo Interior"
            className="rounded-2xl  w-full shadow-lg max-w-md mask mask-squircle hover:brightness-110 transition-all duration-300"
        />
        </section>
    );
}
