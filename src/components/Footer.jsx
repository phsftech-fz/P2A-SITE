const link = "text-xs text-slate-500 transition-colors hover:text-primary";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/30 bg-slate-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-8 py-16 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm shrink-0">
          <div className="mb-4 font-headline text-2xl font-black uppercase tracking-tighter text-slate-100">
            P2A TECH
          </div>
          <p className="mb-6 text-sm text-slate-500">
            Líderes em consultoria e desenvolvimento de software AI FIRST na
            América Latina.
          </p>
          <p className="font-label text-[9px] uppercase tracking-widest text-slate-600">
            © 2026 P2A TECH // NEURAL NEXUS ACTIVATED
          </p>
        </div>
        <div className="grid w-full max-w-lg grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 md:w-auto md:max-w-none md:shrink-0">
          <div className="space-y-4">
            <h5 className="font-label text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              PLATAFORMA
            </h5>
            <div className="flex flex-col gap-2">
              <a className={link} href="#">
                Soluções
              </a>
              <a className={link} href="#">
                Nexus API
              </a>
              <a className={link} href="#">
                Consultoria
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h5 className="font-label text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              EMPRESA
            </h5>
            <div className="flex flex-col gap-2">
              <a className={link} href="#">
                Sobre Nós
              </a>
              <a className={link} href="#">
                Blog
              </a>
              <a className={link} href="#">
                Carreiras
              </a>
            </div>
          </div>
          <div className="col-span-2 space-y-4 sm:col-span-1">
            <h5 className="font-label text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              SISTEMA
            </h5>
            <div className="flex flex-col gap-2">
              <a className={link} href="#">
                Status
              </a>
              <a className={link} href="#">
                Segurança
              </a>
              <a className={link} href="#">
                Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
