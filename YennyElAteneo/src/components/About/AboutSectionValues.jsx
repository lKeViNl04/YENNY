export default function AboutSectionValues() {
  return (
    <section className="bg-[#1b1b1b] py-10 px-5">
      <h2 className="text-4xl text-[#e8edee] font-semibold mb-6 text-center">
        Our Values
      </h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center text-[#e8edee]">
        <div>
          <h3 className="text-2xl font-bold">Culture</h3>
          <p>We promote access to literature and art in all its forms.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Heritage</h3>
          <p>
            We preserve the historical and architectural value of the former
            theater.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Community</h3>
          <p>We connect people through unique literary experiences.</p>
        </div>
      </div>
    </section>
  );
}
