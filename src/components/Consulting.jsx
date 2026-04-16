export default function Consulting() {
  return (
    <section
      id="consultoria"
      className="mx-auto max-w-7xl px-8 py-24 lg:py-28"
    >
      <div className="mb-10 text-center lg:text-left">
        <span className="font-label text-[10px] font-black uppercase tracking-[0.2em] text-tertiary">
          CONSULTORIA ESPECIALIZADA
        </span>
        <h2 className="mt-4 mb-4 font-headline text-4xl font-bold md:text-5xl">
          Time de elite para liderar sua jornada em IA
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-on-surface-variant">
          Atuamos lado a lado com diretoria, tecnologia e operações para
          transformar visão em produtos vivos, escaláveis e alinhados ao core
          do negócio.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="glass-panel rounded-2xl border border-outline-variant/20 p-8">
          <h3 className="mb-3 font-headline text-xl font-semibold">
            Estratégia & Roadmap
          </h3>
          <p className="text-sm text-on-surface-variant">
            Definição de visão, priorização de casos de uso e construção de
            roadmap de produtos de IA com horizonte de 12 a 36 meses.
          </p>
        </div>
        <div className="glass-panel rounded-2xl border border-outline-variant/20 p-8">
          <h3 className="mb-3 font-headline text-xl font-semibold">
            Arquitetura & Engenharia
          </h3>
          <p className="text-sm text-on-surface-variant">
            Desenho de arquiteturas AI First, escolha de stack, integração com
            legados e governança de modelos em produção.
          </p>
        </div>
        <div className="glass-panel rounded-2xl border border-outline-variant/20 p-8">
          <h3 className="mb-3 font-headline text-xl font-semibold">
            Change Management
          </h3>
          <p className="text-sm text-on-surface-variant">
            Acompanhamos squads, treinamos times e garantimos adoção real das
            soluções, com foco em indicadores de negócio.
          </p>
        </div>
      </div>
    </section>
  );
}

