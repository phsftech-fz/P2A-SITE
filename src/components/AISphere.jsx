const GRAPH_COUNT = 10;

function MiniGraph({ variant }) {
  const patterns = [
    [40, 70, 45, 85, 55],
    [55, 35, 80, 50, 65],
    [30, 60, 40, 90, 35],
  ];
  const bars = patterns[variant % patterns.length];
  return (
    <div className="flex h-full w-full flex-col justify-end rounded-md border border-primary/25 bg-surface-container-low/90 px-1.5 pb-1.5 pt-2 shadow-[0_0_12px_rgba(0,227,253,0.12)] backdrop-blur-sm">
      <div className="mb-1 flex items-center justify-between px-0.5">
        <span className="h-0.5 w-2 rounded-full bg-primary/60" />
        <span className="text-[6px] font-label uppercase tracking-wider text-primary/70">
          KPI
        </span>
      </div>
      <div className="flex flex-1 items-end justify-center gap-0.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="w-1 rounded-sm bg-gradient-to-t from-primary-dim to-primary opacity-90"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function AISphere() {
  return (
    <div className="relative flex h-full min-h-[280px] w-full items-center justify-center overflow-hidden rounded-2xl">
      {/* Glow de fundo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,227,253,0.18),transparent_55%)]" />

      {/* Cena 3D */}
      <div
        className="relative h-[88%] w-[88%] [perspective:min(900px,95vw)]"
        style={{ perspectiveOrigin: "50% 45%" }}
      >
        {/* Inclinação fixa + anel que gira em Y */}
        <div
          className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d] ai-scene-tilt"
          style={{ transform: "rotateX(14deg)" }}
        >
          <div className="relative h-[72%] w-[72%] [transform-style:preserve-3d] ai-ring-3d">
            {Array.from({ length: GRAPH_COUNT }, (_, i) => {
              const angle = (360 / GRAPH_COUNT) * i;
              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 h-[22%] w-[18%] min-h-[52px] min-w-[44px] max-w-[56px] [backface-visibility:hidden] [transform-style:preserve-3d]"
                  style={{
                    transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(clamp(72px, 28vmin, 140px))`,
                  }}
                >
                  <MiniGraph variant={i} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Cérebro central (não roda com o anel) */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-28 w-28 rounded-full bg-primary/15 blur-2xl ai-brain-pulse" />
            <div className="absolute h-20 w-20 rounded-full border border-primary/30" />
            <span
              className="material-symbols-outlined relative z-10 text-primary drop-shadow-[0_0_18px_rgba(129,236,255,0.55)]"
              style={{
                fontSize: "clamp(2.75rem, 8vmin, 4rem)",
                fontVariationSettings: "'FILL' 1, 'wght' 400",
              }}
            >
              neurology
            </span>
          </div>
        </div>
      </div>

      {/* Borda / vidro por cima da cena */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-cyan-400/15 ring-1 ring-inset ring-white/5" />
    </div>
  );
}
