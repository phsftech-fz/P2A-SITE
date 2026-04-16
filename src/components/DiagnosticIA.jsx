const roiItems = [
  {
    label: "Eficiência Operacional",
    value: "30–60%",
    description:
      "Redução média de esforço manual em processos repetitivos com agentes de IA em produção.",
  },
  {
    label: "Aumento de Receita",
    value: "10–25%",
    description:
      "Upsell e cross-sell automáticos a partir de jornadas digitais redesenhadas com AI First.",
  },
  {
    label: "Payback Médio",
    value: "3–6 meses",
    description:
      "Retorno projetado considerando implantação faseada e reaproveitamento máximo de sistemas legados.",
  },
];

export default function DiagnosticIA() {
  return (
    <section
      id="diagnostico-ia"
      className="mx-auto max-w-7xl px-8 py-24 lg:py-28"
    >
      <div className="mb-12 grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:items-center">
        <div>
          <span className="font-label text-[10px] font-black uppercase tracking-[0.2em] text-secondary">
            DIAGNÓSTICO IA FIRST
          </span>
          <h2 className="mt-4 mb-4 font-headline text-4xl font-bold md:text-5xl">
            Descubra o ROI projetado da sua revolução em IA
          </h2>
          <p className="mb-6 text-base text-on-surface-variant">
            Nosso diagnóstico AI First mapeia onde a inteligência artificial
            gera mais valor na sua operação e projeta o impacto financeiro da
            transformação antes mesmo da primeira linha de código.
          </p>
          <p className="text-sm text-on-surface-variant">
            Avaliamos maturidade de dados, prontidão tecnológica e
            alinhamento estratégico, entregando um roadmap claro com casos de
            uso priorizados, estimativas de ROI e plano de execução.
          </p>
        </div>
        <div className="glass-panel rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-surface-container-high to-surface-container-low p-8">
          <h3 className="mb-4 font-headline text-xl font-semibold text-primary">
            ROI projetado com AI First
          </h3>
          <p className="mb-6 text-sm text-on-surface-variant">
            Cada cenário é personalizado para o seu contexto, mas nossa base de
            projetos aponta para resultados como:
          </p>
          <ul className="space-y-4">
            {roiItems.map((item) => (
              <li key={item.label} className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-label uppercase tracking-[0.2em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
                <div className="shrink-0 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-primary">
                  {item.value}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

