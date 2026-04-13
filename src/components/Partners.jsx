const brands = [
  "NVIDIA",
  "OpenAI",
  "Google Cloud",
  "Microsoft",
  "Anthropic",
];

export default function Partners() {
  return (
    <section className="border-y border-outline-variant/10 bg-surface-container-lowest/50 py-12">
      <div className="mx-auto max-w-7xl px-8">
        <p className="mb-10 text-center font-label text-[10px] uppercase tracking-[0.3em] text-outline">
          NOSSAS SOLUÇÕES UTILIZAM AS MELHORES TECNOLOGIAS DO MUNDO
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale transition-all hover:grayscale-0 md:gap-20 md:opacity-60 md:hover:opacity-100">
          {brands.map((name) => (
            <span
              key={name}
              className="font-headline text-2xl font-bold text-on-surface/80"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
