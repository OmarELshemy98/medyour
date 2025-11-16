type Item = { title: string; description: string; image?: string };
type Props = { items: Item[] };

export default function ValuesCarousel({ items }: Props) {
  return (
    <section className="py-8 md:py-12 mx-auto max-w-7xl">
      <div className="overflow-x-auto snap-x snap-mandatory flex gap-6 px-4" dir="rtl">
        {items.map((it, idx) => (
          <div key={idx} className="snap-center flex-shrink-0 w-[280px] md:w-[360px] lg:w-[420px]">
            <div className="aspect-[4/3] relative flex flex-col justify-center rounded-tl-[70px] rounded-br-[70px] overflow-hidden border border-[#E5E7EB] bg-white">
              {it.image && (
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${it.image}')` }} />
              )}
              <div className="relative z-10 flex flex-col min-h-[180px] justify-between mt-8 p-6">
                <h3 className="text-[#0E263E] text-[1.5rem] font-[900] leading-[1.5rem] mb-4">{it.title}</h3>
                <p className="text-[0.975rem] font-[500] leading-[1.25rem] mt-auto py-2">
                  {it.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}