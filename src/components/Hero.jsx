import { useEffect, useState } from "react";

const DASHBOARD_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCN3br1uOB3IMxvzEsD_2Ap0K1sW21fLI0hRvXN5JBHfWJBcUZUvN56cfGrAtlCLjuFvIYX57CjASnu2CUuSZWaDDVZZgWM_OEwXXRDNFN4Dt7CVoLQ6zhbNmixPLnnwgpdNAfLhvQWDD-8ZlYB516JrjgeQxG9Wxa2IfRZDkOGlZVVH_4yLuyTC_ytbZy-rBjt51bfR7T6mNbMP4FcwX8_hxXxlfMIztrsz6xFpF1eCJOqJWQTV2FyO5s-NQwT6xv2cLvXp67MTVDH";

export default function Hero() {
  const [opBar, setOpBar] = useState(0);

  useEffect(() => {
    let v = 0;
    const id = setInterval(() => {
      v += 1.2;
      if (v >= 92) {
        v = 92;
        clearInterval(id);
      }
      setOpBar(v);
    }, 24);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mx-auto flex max-w-7xl flex-col items-start px-8 py-20 lg:py-32 hero-glow">
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
        <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
        <span className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
          Líder em Implementação AI FIRST
        </span>
      </div>
      <div className="grid w-full items-center gap-16 lg:grid-cols-2">
        <div>
          <h1 className="mb-8 font-headline text-5xl font-bold leading-[1.1] tracking-tighter text-on-surface md:text-8xl">
            Pare de testar IA. Comece a{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
              Lucrar com IA.
            </span>
          </h1>
          <p className="mb-12 max-w-xl text-xl font-light leading-relaxed text-on-surface-variant md:text-2xl">
            Não implementamos tecnologia por moda. Arquitetamos o motor de
            crescimento do seu negócio através da metodologia{" "}
            <strong>AI FIRST</strong>.
          </p>
          <div className="flex flex-col gap-6 sm:flex-row">
            <button
              type="button"
              className="cta-glow rounded-sm bg-primary px-10 py-5 font-label text-sm font-black uppercase tracking-widest text-on-primary transition-all hover:brightness-125"
              onClick={() => {
                const el = document.querySelector("#diagnostico-form");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Solicite diagnóstico gratuito
            </button>
            <button
              type="button"
              className="rounded-sm border border-outline-variant/30 bg-surface-container-highest/50 px-10 py-5 font-label text-sm font-bold uppercase tracking-widest text-on-surface backdrop-blur-sm transition-all hover:bg-surface-container-high"
            >
              Ver Resultados Reais
            </button>
          </div>
        </div>

        <div className="relative hidden group lg:block">
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/30 to-secondary/30 opacity-50 blur-2xl transition duration-1000 group-hover:opacity-75" />
          <div className="relative aspect-video overflow-hidden rounded-xl border border-outline-variant/20 bg-transparent p-4 shadow-2xl glass-panel float card-hover">
            <div className="mb-6 flex items-center justify-between border-b border-outline-variant/10 pb-4">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-error/40" />
                <div className="h-2.5 w-2.5 rounded-full bg-secondary/40" />
                <div className="h-2.5 w-2.5 rounded-full bg-primary/40" />
              </div>
              <div className="font-label text-[10px] tracking-widest text-outline">
                SYSTEM_OPTIMIZATION_ACTIVE
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4 space-y-4">
                <div className="float-slow flex h-24 flex-col justify-between rounded-lg border-t border-primary/20 bg-surface-container-low p-3">
                  <span className="font-label text-[9px] tracking-widest text-primary/70">
                    OP_EFFICIENCY
                  </span>
                  <div className="font-headline text-2xl text-on-surface">+124%</div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-surface-container-high">
                    <div
                      className="h-full bg-primary shadow-[0_0_10px_#81ecff] transition-all duration-300"
                      style={{ width: `${opBar}%` }}
                    />
                  </div>
                </div>
                <div className="float-fast flex h-24 flex-col justify-between rounded-lg bg-surface-container-low p-3">
                  <span className="font-label text-[9px] tracking-widest text-secondary/70">
                    COST_REDUCTION
                  </span>
                  <div className="font-headline text-2xl text-on-surface">38.5%</div>
                  <div className="flex h-6 items-end gap-1">
                    <div className="h-[20%] w-2 rounded-t-sm bg-secondary/20" />
                    <div className="h-[40%] w-2 rounded-t-sm bg-secondary/40" />
                    <div className="h-[65%] w-2 rounded-t-sm bg-secondary/60" />
                    <div className="h-[95%] w-2 rounded-t-sm bg-secondary" />
                  </div>
                </div>
              </div>
              <div className="relative col-span-8 overflow-hidden rounded-lg bg-surface-container-low p-4">
                <img
                  alt="Visualização abstrata de IA"
                  className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-overlay"
                  src={DASHBOARD_IMG}
                />
                <div className="relative z-10">
                  <h4 className="mb-8 font-headline text-xs font-bold tracking-wider text-on-surface">
                    PREDICTIVE_REVENUE_MESH
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-1 flex-1 overflow-hidden rounded-full bg-primary/20">
                        <div className="h-full w-[75%] bg-primary" />
                      </div>
                      <span className="font-label text-[10px] text-primary">
                        PROJECTED
                      </span>
                    </div>
                    <div className="h-2 w-3/4 rounded-full bg-outline-variant/20" />
                    <div className="h-2 w-5/6 rounded-full bg-outline-variant/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
