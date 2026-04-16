import logoUrl from "../public/P2A LOGO.png";

const navLink =
  "font-label uppercase tracking-widest text-[10px] text-slate-400 transition-all hover:text-cyan-300";
const navLinkActive =
  "font-label uppercase tracking-widest text-[10px] border-b border-cyan-400/50 pb-1 text-cyan-400 transition-all hover:text-cyan-300";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 mx-auto mt-6 flex w-[95%] max-w-7xl items-center justify-between rounded-full border border-cyan-400/20 bg-slate-950/60 px-8 py-3 shadow-[0_0_40px_rgba(0,229,255,0.06)] backdrop-blur-xl">
      <a href="#top" className="flex shrink-0 items-center gap-3" aria-label="P2A Tech — início">
        <img
          alt="P2A Tech"
          className="h-8 w-auto max-w-[160px] object-contain object-left sm:h-9"
          src={logoUrl}
        />
        <span className="hidden font-headline text-xl font-bold uppercase tracking-tighter text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text sm:inline">
          P2A Tech
        </span>
      </a>
      <nav className="hidden items-center gap-8 md:flex">
        <a className={navLinkActive} href="#solucoes">
          SOLUÇÕES
        </a>
        <a className={navLink} href="#metodologia">
          METODOLOGIA
        </a>
        <a className={navLink} href="#diagnostico-form">
          DIAGNÓSTICO IA
        </a>
        <a className={navLink} href="#diagnostico-ia">
          ROI
        </a>
        <a className={navLink} href="#contato">
          CONTATO
        </a>
      </nav>
    </header>
  );
}
