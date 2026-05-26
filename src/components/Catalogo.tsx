import Link from "next/link";

const steps = [
  {
    n: "01",
    title: "Acesse o catálogo",
    body: "Navegue pelas peças disponíveis diretamente pelo link do catálogo online.",
  },
  {
    n: "02",
    title: "Selecione o que amou",
    body: "Toque nas peças para selecioná-las. Você pode escolher quantas quiser.",
  },
  {
    n: "03",
    title: "Envie pelo WhatsApp",
    body: "Com as peças escolhidas, envie o pedido direto para a Fê via WhatsApp.",
  },
];

export default function Catalogo() {
  return (
    <section className="relative overflow-hidden bg-balone-black">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-balone-yellow/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-[320px] w-[320px] rounded-full bg-balone-yellow/10 blur-3xl"
      />

      {/* CTA principal */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center md:py-24">
        <span className="inline-block rounded-full border border-balone-yellow/40 px-4 py-1.5 text-[11px] uppercase tracking-[0.35em] text-balone-yellow">
          Catálogo online
        </span>
        <h2 className="font-display text-4xl leading-tight text-balone-cream md:text-5xl lg:text-6xl">
          Compre de onde<br className="hidden sm:block" /> você estiver.
        </h2>
        <p className="max-w-lg text-base leading-relaxed text-balone-cream/70 md:text-lg">
          Nosso catálogo digital está no ar. Explore as peças disponíveis,
          selecione as suas favoritas e envie o pedido pelo WhatsApp — simples assim.
        </p>
        <Link
          href="https://catalogobalone.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2.5 rounded-full bg-balone-yellow px-8 py-3.5 text-sm uppercase tracking-[0.22em] font-medium text-balone-black transition-colors hover:bg-balone-cream"
        >
          Acessar catálogo
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M7 7h10v10" /><path d="M7 17 17 7" />
          </svg>
        </Link>
      </div>

      {/* Divisor */}
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="border-t border-balone-cream/10" />
      </div>

      {/* Como funciona */}
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="mb-10 text-center text-xs uppercase tracking-[0.32em] text-balone-yellow/80">
          Como funciona
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="flex flex-col gap-4">
              <span className="font-display text-5xl text-balone-yellow/30 leading-none">
                {s.n}
              </span>
              <div>
                <p className="font-display text-xl text-balone-cream">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-balone-cream/60">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
