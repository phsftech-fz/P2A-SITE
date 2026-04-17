const testimonials = [
  {
    name: "Ricardo Almeida",
    role: "CEO — Logística Norte",
    quote:
      "Em 4 meses com a P2A reduzimos 40% do custo operacional e triplicamos a velocidade dos relatórios gerenciais. O diagnóstico deles mapeou exatamente onde a IA ia impactar mais.",
    border: "border-primary/30",
    accent: "text-primary",
  },
  {
    name: "Fernanda Costa",
    role: "CTO — FinTech Ágil",
    quote:
      "A P2A não entregou só tecnologia. Entregou uma nova mentalidade para toda a nossa equipe. Hoje somos 100% AI First e nosso time faz o trabalho de três com a mesma estrutura.",
    border: "border-secondary/30",
    accent: "text-secondary",
  },
  {
    name: "Marcos Oliveira",
    role: "Diretor de Operações — Varejo360",
    quote:
      "O ROI apareceu antes do prazo previsto. Em 90 dias saímos de 1x para 3x de conversão no funil de vendas. Hoje não consigo imaginar operar sem os agentes que eles construíram.",
    border: "border-tertiary/30",
    accent: "text-tertiary",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="mx-auto max-w-7xl px-8 py-24 lg:py-32">
      <div className="mb-16 text-center">
        <span className="font-label text-[10px] font-black uppercase tracking-[0.2em] text-primary">
          DEPOIMENTOS
        </span>
        <h2 className="mt-4 mb-4 font-headline text-4xl font-bold md:text-5xl">
          Quem já transformou o negócio fala por nós
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-on-surface-variant">
          Resultados reais de empresas que deixaram de testar IA e passaram a
          lucrar com ela.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className={`glass-panel flex flex-col rounded-2xl border ${t.border} p-8 transition-all hover:brightness-110`}
          >
            <span className="mb-6 text-4xl leading-none text-outline-variant/40">"</span>
            <p className="mb-8 flex-grow text-base leading-relaxed text-on-surface-variant">
              {t.quote}
            </p>
            <div className="border-t border-outline-variant/10 pt-6">
              <p className={`font-headline text-sm font-bold ${t.accent}`}>
                {t.name}
              </p>
              <p className="mt-1 font-label text-[10px] uppercase tracking-widest text-outline">
                {t.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
