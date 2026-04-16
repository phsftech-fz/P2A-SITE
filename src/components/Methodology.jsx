export default function Methodology() {
  return (
    <section
      id="metodologia"
      className="mx-auto max-w-7xl px-8 py-24 lg:py-32"
    >
      <div className="mb-12 text-center lg:text-left">
        <span className="font-label text-[10px] font-black uppercase tracking-[0.2em] text-primary">
          METODOLOGIA AI FIRST
        </span>
        <h2 className="mt-4 mb-4 font-headline text-4xl font-bold md:text-5xl">
          Da hipótese ao ROI em ciclos curtos
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-on-surface-variant">
          Unimos estratégia, engenharia e dados em um fluxo contínuo para
          tirar sua empresa do modo experimental e levar para operação de IA em
          larga escala.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="glass-panel rounded-2xl border border-primary/30 p-8">
          <h3 className="mb-3 font-headline text-xl font-semibold text-primary">
            1. Diagnóstico Profundo
          </h3>
          <p className="text-sm text-on-surface-variant">
            Analisamos jornadas, dados e processos para identificar pontos de
            fricção e oportunidades de automação com impacto direto em receita
            e custos.
          </p>
        </div>
        <div className="glass-panel rounded-2xl border border-secondary/30 p-8">
          <h3 className="mb-3 font-headline text-xl font-semibold text-secondary">
            2. Design AI First
          </h3>
          <p className="text-sm text-on-surface-variant">
            Redesenhamos fluxos colocando a IA como cérebro do sistema, e não
            como acessório, garantindo decisões autônomas, seguras e
            auditáveis.
          </p>
        </div>
        <div className="glass-panel rounded-2xl border border-tertiary/30 p-8">
          <h3 className="mb-3 font-headline text-xl font-semibold text-tertiary">
            3. Entrega Contínua
          </h3>
          <p className="text-sm text-on-surface-variant">
            Implementamos, medimos e refinamos em sprints curtos, com KPIs
            claros de ROI, adoção e performance dos modelos em produção.
          </p>
        </div>
      </div>
    </section>
  );
}

