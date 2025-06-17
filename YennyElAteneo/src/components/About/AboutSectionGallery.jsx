export default function GallerySection() {
  const imgs = [
    "https://english.news.cn/20250424/e0a58a1b40da4663b604b2151d4f2fe3/20250424e0a58a1b40da4663b604b2151d4f2fe3_20250424d673d8fd5df14c6d809db8aafa6ac2c6.jpg",
    "https://www.beyondthelamppost.com/wp-content/uploads/2019/11/El-Ateneo-Buenos-Aires.jpg",
    "https://images.openai.com/thumbnails/000d6ef617a5400ed3971dfc4bd7b6f2.jpeg",
    "https://mindtrip.ai/cdn-cgi/image/w%3D1200%2Cformat%3Dwebp%2Ch%3D1200%2Cfit%3Dcover/https%3A//iorigin.mindtrip.ai/attractions/b3e4/43bd/cf07/1570/3bd4/cce4/29bb/d4c9",
  ];

  return (
    <section className="bg-[#1b1b1b] py-10 px-5">
      <h2 className="text-4xl text-[#e8edee] font-semibold mb-6 text-center">
        Gallery
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {imgs.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Gallery image ${idx + 1}`}
            className="rounded-lg shadow-md mask mask-squircle hover:brightness-110 transition-all duration-300 object-cover w-full h-48"
          />
        ))}
      </div>
    </section>
  );
}
