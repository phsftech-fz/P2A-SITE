import AISphere from "./AISphere";

export default function WhyP2A() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32 grid md:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
        <h2 className="font-headline text-5xl font-bold mb-10">
          Por que escolher a P2A?
        </h2>
        <div className="space-y-8">
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 shrink-0 bg-surface-container-high flex items-center justify-center rounded-sm border border-primary/20 text-primary">
              <span className="material-symbols-outlined">rocket_launch</span>
            </div>
            <div>
              <h5 className="font-headline font-bold text-lg mb-2">
                Speed to Market
              </h5>
              <p className="text-on-surface-variant text-sm">
                Desenvolvimento ágil com foco em MVP funcional e rápido retorno
                sobre investimento.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 shrink-0 bg-surface-container-high flex items-center justify-center rounded-sm border border-secondary/20 text-secondary">
              <span className="material-symbols-outlined">architecture</span>
            </div>
            <div>
              <h5 className="font-headline font-bold text-lg mb-2">
                Visão Estratégica
              </h5>
              <p className="text-on-surface-variant text-sm">
                Não somos apenas executores, somos parceiros de negócio que
                entendem o impacto real da IA no seu faturamento.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 shrink-0 bg-surface-container-high flex items-center justify-center rounded-sm border border-tertiary/20 text-tertiary">
              <span className="material-symbols-outlined">token</span>
            </div>
            <div>
              <h5 className="font-headline font-bold text-lg mb-2">
                100% Customizado
              </h5>
              <p className="text-on-surface-variant text-sm">
                Nada de soluções &quot;prontas para todos&quot;. Cada sistema é
                treinado e desenhado para os seus dados.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative aspect-square flex items-center justify-center ai-container">
        <div className="absolute w-[120%] h-[120%] bg-cyan-400/10 blur-3xl rounded-full ai-glow" />
        <div className="relative glass-panel h-full w-full overflow-hidden rounded-2xl border border-outline-variant/10 shadow-2xl ai-sphere">
          <AISphere />
        </div>
      </div>
    </section>
  );
}
