const stats = [
  {
    value: "-40%",
    color: "text-primary",
    title: "Redução de Custos",
    body: "Eliminação de redundâncias e automação de fluxos operacionais pesados.",
  },
  {
    value: "3x",
    color: "text-secondary",
    title: "Velocidade de Entrega",
    body: "Deployment acelerado com agentes de desenvolvimento e metodologias ágeis.",
  },
  {
    value: "99%",
    color: "text-tertiary",
    title: "Precisão de Dados",
    body: "Decisões baseadas em fatos processados por LLMs de alta performance.",
  },
];

export default function ROISection() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20">
      <div className="overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-r from-surface-container-high to-surface-container-low">
        <div className="grid divide-y divide-outline-variant/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {stats.map((s) => (
            <div key={s.title} className="p-12 text-center lg:text-left">
              <div
                className={`font-headline mb-4 text-5xl font-black ${s.color}`}
              >
                {s.value}
              </div>
              <h4 className="font-headline mb-3 text-xl font-bold">{s.title}</h4>
              <p className="text-sm text-on-surface-variant">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
