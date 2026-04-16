export default function About() {
  return (
    <section id="sobre-nos" className="mx-auto max-w-7xl px-8 py-24 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:items-center">
        <div>
          <span className="font-label text-[10px] font-black uppercase tracking-[0.2em] text-primary-dim">
            SOBRE NÓS
          </span>
          <h2 className="mt-4 mb-4 font-headline text-4xl font-bold md:text-5xl">
            Nascemos AI First. Não fazemos “meio termo”.
          </h2>
          <p className="mb-4 text-base text-on-surface-variant">
            A P2A Tech é uma consultoria e software house especializada em
            construir sistemas em que a inteligência artificial é o núcleo da
            operação, e não apenas um add-on.
          </p>
          <p className="mb-4 text-base text-on-surface-variant">
            Reunimos especialistas em produto, dados, engenharia e negócios que
            já implementaram projetos de IA em múltiplos setores, sempre com
            foco em ROI mensurável e velocidade de execução.
          </p>
          <p className="text-sm text-on-surface-variant">
            Nosso compromisso é simples:{" "}
            <span className="font-semibold text-primary">
              entregar soluções que colocam sua empresa entre as líderes do
              mercado
            </span>{" "}
            em vez de deixá-la reagindo às mudanças.
          </p>
        </div>
        <div className="glass-panel rounded-2xl border border-outline-variant/20 p-8">
          <h3 className="mb-4 font-headline text-xl font-semibold">
            O que nos guia
          </h3>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            <li>• Visão de longo prazo com entregas rápidas.</li>
            <li>• Transparência total em métricas e resultados.</li>
            <li>• Parcerias duradouras, não apenas projetos pontuais.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

