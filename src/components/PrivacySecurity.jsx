export default function PrivacySecurity() {
  return (
    <section
      id="seguranca"
      className="mx-auto max-w-7xl px-8 py-24 lg:py-28"
    >
      <div className="mb-10 text-center lg:text-left">
        <span className="font-label text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          PRIVACIDADE &amp; SEGURANÇA
        </span>
        <h2 className="mt-4 mb-4 font-headline text-4xl font-bold md:text-5xl">
          Segurança de nível corporativo, desde o primeiro sprint
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-on-surface-variant">
          Projetamos soluções de IA alinhadas às melhores práticas de
          segurança, governança de dados e conformidade regulatória.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="glass-panel rounded-2xl border border-outline-variant/20 p-8">
          <h3 className="mb-3 font-headline text-xl font-semibold">
            Segurança
          </h3>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            <li>• Arquiteturas com segmentação de ambientes e princípios Zero Trust.</li>
            <li>• Criptografia de dados em repouso e em trânsito.</li>
            <li>• Monitoramento e observabilidade focados em comportamento anômalo.</li>
          </ul>
        </div>
        <div
          id="privacidade"
          className="glass-panel rounded-2xl border border-outline-variant/20 p-8"
        >
          <h3 className="mb-3 font-headline text-xl font-semibold">
            Privacidade
          </h3>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            <li>• Desenho de fluxos em conformidade com LGPD e políticas internas.</li>
            <li>• Minimização de dados pessoais usados em treinamentos e prompts.</li>
            <li>• Controles claros de acesso, retenção e auditabilidade.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

