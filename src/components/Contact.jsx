import { whatsappHref } from "../utils/whatsapp";

export default function Contact() {
  const href = whatsappHref();

  return (
    <section id="contato" className="mx-auto max-w-7xl px-8 py-24 lg:py-32">
      <div className="mb-10 text-center">
        <span className="font-label text-[10px] font-black uppercase tracking-[0.2em] text-secondary">
          CONTATO
        </span>
        <h2 className="mt-4 mb-4 font-headline text-4xl font-bold md:text-5xl">
          Pronto para dar o próximo passo?
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-on-surface-variant">
          Conte para nós onde sua empresa quer chegar. Voltamos com um plano
          personalizado de como a IA pode acelerar esse caminho.
        </p>
      </div>

      <div className="mx-auto max-w-3xl rounded-2xl border border-outline-variant/20 bg-surface-container-low/60 p-8">
        <form className="grid gap-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Nome
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-outline-variant/40 bg-slate-950/60 px-4 py-3 text-sm text-on-surface outline-none ring-primary/40 placeholder:text-slate-600 focus:border-primary focus:ring-1"
              placeholder="Como devemos te chamar?"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              E-mail corporativo
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-outline-variant/40 bg-slate-950/60 px-4 py-3 text-sm text-on-surface outline-none ring-primary/40 placeholder:text-slate-600 focus:border-primary focus:ring-1"
              placeholder="voce@empresa.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Empresa
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-outline-variant/40 bg-slate-950/60 px-4 py-3 text-sm text-on-surface outline-none ring-primary/40 placeholder:text-slate-600 focus:border-primary focus:ring-1"
              placeholder="Nome da sua empresa"
            />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Desafio principal
            </label>
            <textarea
              rows={4}
              className="w-full rounded-lg border border-outline-variant/40 bg-slate-950/60 px-4 py-3 text-sm text-on-surface outline-none ring-primary/40 placeholder:text-slate-600 focus:border-primary focus:ring-1"
              placeholder="Conte em poucas linhas onde a IA pode gerar mais impacto hoje."
            />
          </div>
          <div className="md:col-span-2 flex items-center justify-between gap-4">
            <p className="text-[11px] text-slate-500">
              Respeitamos seu tempo. Sem spam, apenas uma análise honesta de
              viabilidade.
            </p>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-primary px-6 py-3 font-label text-[10px] font-bold uppercase tracking-[0.2em] text-slate-950 transition-all hover:brightness-110 active:scale-95"
            >
              Falar com especialista
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

