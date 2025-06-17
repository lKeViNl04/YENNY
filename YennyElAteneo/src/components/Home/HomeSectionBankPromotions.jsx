export default function HomeSectionBankPromotions({logos}) {
  return (
    <section className="w-full py-6">
      <h2 className="text-2xl font-semibold text-white  text-center pb-5  ">
        Bank Promotions
      </h2>
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {logos}
          {logos}
        </ul>
      </div>
    </section>
  );
}

