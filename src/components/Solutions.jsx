const products = [
  {
    border: "border-primary",
    icon: "smart_toy",
    iconClass: "text-primary",
    title: "Agentes de Elite",
    body: "Automação de atendimento e vendas que converte 2.4x mais que bots tradicionais.",
    outcome: "OUTCOME: HIGH CONVERSION",
    outcomeClass: "text-primary/60",
  },
  {
    border: "border-secondary",
    icon: "hub",
    iconClass: "text-secondary",
    title: "API Nexus",
    body: "Conecte IA ao seu ERP/CRM atual sem trocar uma única linha de código legada.",
    outcome: "OUTCOME: SEAMLESS INTEGRATION",
    outcomeClass: "text-secondary/60",
  },
  {
    border: "border-tertiary",
    icon: "query_stats",
    iconClass: "text-tertiary",
    title: "C-Level Brain",
    body: "Dashboard de inteligência preditiva para CEOs tomarem decisões de milhões em segundos.",
    outcome: "OUTCOME: STRATEGIC EDGE",
    outcomeClass: "text-tertiary/60",
  },
  {
    border: "border-primary-dim",
    icon: "devices",
    iconClass: "text-primary-dim",
    title: "Custom Apps",
    body: "Aplicações Mobile/Web com IA nativa desde o primeiro protótipo.",
    outcome: "OUTCOME: MARKET LEADERSHIP",
    outcomeClass: "text-primary-dim/60",
  },
];

export default function Solutions() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-32">
      <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-headline text-4xl font-bold">
            Sistemas de Alta Performance
          </h2>
          <p className="text-on-surface-variant">
            Produtos desenhados para dominar o mercado através da Inteligência
            Artificial.
          </p>
        </div>
        <a
          className="font-label text-xs uppercase tracking-widest text-primary hover:underline"
          href="#"
        >
          Ver catálogo completo →
        </a>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <div
            key={p.title}
            className={`flex h-full flex-col rounded-lg border-b-4 bg-surface-container-low/40 p-8 transition-all hover:bg-surface-container-high ${p.border} ${i % 2 === 0 ? "float-slow" : "float-fast"}`}
          >
            <span
              className={`material-symbols-outlined mb-6 text-4xl ${p.iconClass}`}
            >
              {p.icon}
            </span>
            <h4 className="mb-3 font-headline text-xl font-bold uppercase tracking-tight">
              {p.title}
            </h4>
            <p className="mb-8 flex-grow text-sm text-on-surface-variant">
              {p.body}
            </p>
            <div
              className={`mt-auto font-label text-[10px] font-black tracking-widest ${p.outcomeClass}`}
            >
              {p.outcome}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
