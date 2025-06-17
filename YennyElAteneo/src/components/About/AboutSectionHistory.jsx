export default function AboutSectionHistory() {
  const year = [
    {
      year: "1912",
      text: "Original founding of the Grand Splendid Theater, which years later would become the bookstore.",
      align: "left",
      img: "https://resizer.glanacion.com/resizer/v2/la-ambiciosa-sala-creada-por-glucksmann-fue-ITPU4JT34NDOJEHZMRRH4BT63M.jpg?auth=de31ea308f47cfb54ab9cb6ce7417f63526d7e8e1e3e6671788042235d52cd97&width=780&height=520&quality=70&smart=true",
    },
    {
      year: "2000",
      text: "Transformation of the former theater into El Ateneo Grand Splendid bookstore, combining culture and heritage.",
      align: "right",
      img: "http://www.arcondebuenosaires.com.ar/ateneo-ppo2.jpg",
    },
    {
      year: "2019",
      text: "Recognized by National Geographic as the most beautiful bookstore in the world, attracting global visitors.",
      align: "left",
      img: "https://static.nationalgeographicla.com/files/styles/image_3200/public/bookstore-buenosaires-argentina.webp?w=1600&h=900",
    },
    {
      year: "2024",
      text: "Renovation of cultural spaces and expansion of community activities for new audiences.",
      align: "right",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/05/3e/50/caption.jpg?w=1100&h=600&s=1",
    },
  ];

  return (
    <section className="bg-[#1b1b1b] py-10 px-5">
      <h2 className="text-4xl text-[#e8edee] font-semibold mb-12 text-center">
        Our History
      </h2>
      <div className="max-w-5xl mx-auto space-y-16">
        {year.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              item.align === "right" ? "md:flex-row-reverse" : ""
            } items-center gap-6`}
          >
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold text-[#e8edee] mb-2">
                {item.year}
              </h3>
              <p className="text-lg text-white">{item.text}</p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={item.img}
                alt={`Historical image ${item.year}`}
                className="rounded-lg shadow-lg mask mask-squircle hover:brightness-110 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
