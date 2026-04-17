const WHATSAPP_NUMBER = (() => {
  const raw = import.meta.env.VITE_WHATSAPP_NUMBER ?? "5551993560244";
  return String(raw).replace(/\D/g, "") || "5551993560244";
})();

export default function CTA() {
  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name    = form.elements["name"]?.value    || "";
    const email   = form.elements["email"]?.value   || "";
    const phone   = form.elements["phone"]?.value   || "";
    const company = form.elements["company"]?.value || "";
    const size    = form.elements["size"]?.value    || "";

    const lines = [
      "Olá! Vim pelo site da P2A Tech e gostaria de agendar um diagnóstico gratuito de IA.",
      "",
      `Nome: ${name}`,
      `Telefone: ${phone}`,
      `E-mail: ${email}`,
      `Empresa: ${company}`,
      `Tamanho da empresa: ${size}`,
    ];

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section
      id="diagnostico-form"
      className="mx-auto mb-32 max-w-7xl px-8"
    >
      <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-surface-container-highest to-slate-950 p-12 shadow-2xl md:p-24">
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-secondary/10 blur-[120px]" />
        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
          <div className="text-left">
            <h2 className="mb-8 font-headline text-4xl font-bold leading-[1.1] md:text-6xl">
              Você vai liderar ou <br />
              ficar para trás?
            </h2>
            <p className="mb-8 max-w-md text-lg text-on-surface-variant">
              O mercado não espera. As empresas que ignorarem a IA hoje serão
              obsoletas em 24 meses. Garanta seu lugar no futuro.
            </p>
            <div className="space-y-4">
              {[
                "Diagnóstico 100% Personalizado",
                "Análise de ROI Projetada",
                "Roadmap de Implementação Ágil",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span className="text-sm font-medium">{t}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/5 px-4 py-3">
              <span className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-primary" />
              <p className="font-label text-[11px] font-semibold text-primary">
                Apenas 4 vagas de diagnóstico gratuito disponíveis neste mês
              </p>
            </div>
          </div>
          <div className="glass-panel rounded-xl border border-outline-variant/20 p-8 float">
            <h3 className="mb-6 font-headline text-xl font-bold">
              Inicie sua Transformação
            </h3>
            <form className="space-y-3" onSubmit={onSubmit}>
              <div className="grid grid-cols-2 gap-3">
                <input
                  className="w-full rounded-sm border border-outline-variant/30 bg-background/50 px-4 py-3 text-sm text-on-surface outline-none transition-all placeholder:text-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Seu Nome"
                  type="text"
                  name="name"
                  required
                />
                <input
                  className="w-full rounded-sm border border-outline-variant/30 bg-background/50 px-4 py-3 text-sm text-on-surface outline-none transition-all placeholder:text-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Telefone / WhatsApp"
                  type="tel"
                  name="phone"
                  required
                />
              </div>
              <input
                className="w-full rounded-sm border border-outline-variant/30 bg-background/50 px-4 py-3 text-sm text-on-surface outline-none transition-all placeholder:text-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Nome da Empresa"
                type="text"
                name="company"
                required
              />
              <input
                className="w-full rounded-sm border border-outline-variant/30 bg-background/50 px-4 py-3 text-sm text-on-surface outline-none transition-all placeholder:text-on-surface-variant focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="E-mail Corporativo"
                type="email"
                name="email"
                required
              />
              <select
                className="w-full appearance-none rounded-sm border border-outline-variant/30 bg-background/50 px-4 py-3 text-sm text-on-surface outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                name="size"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Tamanho da Empresa
                </option>
                <option value="1-10">1–10 colaboradores</option>
                <option value="11-50">11–50 colaboradores</option>
                <option value="51-200">51–200 colaboradores</option>
                <option value="200+">200+ colaboradores</option>
              </select>
              <button
                type="submit"
                className="cta-glow cta-pulse w-full rounded-sm bg-primary py-4 font-label text-sm font-black uppercase tracking-widest text-on-primary shadow-lg transition-all hover:brightness-110"
              >
                Agendar Diagnóstico Gratuito →
              </button>
              <p className="mt-4 text-center font-label text-[10px] text-outline-variant">
                Sem compromisso. Resposta em até 24h úteis.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
