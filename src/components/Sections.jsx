const cards = [
  {
    hover: "hover:border-primary/40",
    problemLabel: "PROBLEMA COMUM",
    problemTitle: "Software Engessado",
    problemBody:
      "Sistemas tradicionais que exigem esforço humano manual e constante para cada pequena decisão.",
    solLabel: "SOLUÇÃO P2A",
    solLabelClass: "text-primary",
    solTitle: "Autonomia Real",
    solTitleClass: "text-primary",
    solBody:
      "IA que aprende com seu fluxo de trabalho e toma decisões operacionais sozinha, 24/7.",
  },
  {
    hover: "hover:border-secondary/40",
    problemLabel: "PROBLEMA COMUM",
    problemTitle: "Dados sem Valor",
    problemBody:
      "Acúmulo massivo de dados em planilhas e bancos de dados que ninguém consegue analisar.",
    solLabel: "SOLUÇÃO P2A",
    solLabelClass: "text-secondary",
    solTitle: "Inteligência Preditiva",
    solTitleClass: "text-secondary",
    solBody:
      "Modelos customizados que transformam seu histórico em previsões exatas de vendas e demandas.",
  },
  {
    hover: "hover:border-tertiary/40",
    problemLabel: "PROBLEMA COMUM",
    problemTitle: "Escalabilidade Cara",
    problemBody:
      "Para crescer 10x, você precisa contratar 10x mais pessoas. Um modelo insustentável.",
    solLabel: "SOLUÇÃO P2A",
    solLabelClass: "text-tertiary",
    solTitle: "Escala Exponencial",
    solTitleClass: "text-tertiary",
    solBody:
      "Agentes de IA que processam o volume de 100 colaboradores com o custo de apenas um.",
  },
];

export default function Sections() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <div className="mb-20 text-center">
        <span className="font-label text-[10px] font-black uppercase tracking-[0.2em] text-error/70">
          RECONHECE ALGUM DESSES CENARIOS?
        </span>
        <h2 className="mt-4 mb-6 font-headline text-4xl font-bold md:text-5xl">
          Sabemos exatamente o que trava o seu crescimento
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-on-surface-variant">
          Antes de propor qualquer solução, mapeamos as dores reais do seu negócio
          — e entregamos a resposta certa para cada uma delas.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {cards.map((c, i) => (
          <div
            key={c.problemTitle}
            className={`glass-panel rounded-xl border border-outline-variant/10 p-10 transition-all group ${c.hover} ${i === 0 ? "float" : i === 1 ? "float-slow" : "float-fast"}`}
          >
            <div className="mb-8">
              <span className="mb-2 block font-label text-[10px] uppercase tracking-widest text-error opacity-60">
                {c.problemLabel}
              </span>
              <h3 className="mb-4 font-headline text-xl font-bold">
                {c.problemTitle}
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                {c.problemBody}
              </p>
            </div>
            <div className="border-t border-outline-variant/10 pt-8">
              <span
                className={`mb-2 block font-label text-[10px] uppercase tracking-widest ${c.solLabelClass}`}
              >
                {c.solLabel}
              </span>
              <h3
                className={`mb-4 font-headline text-xl font-bold ${c.solTitleClass}`}
              >
                {c.solTitle}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-on-surface">
                {c.solBody}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
