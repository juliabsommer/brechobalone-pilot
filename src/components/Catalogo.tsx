import Link from "next/link";
import Image from "next/image";

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

function PhoneMockup() {
  return (
    <div className="relative flex justify-center">
      {/* Glow por trás */}
      <div
        aria-hidden
        className="absolute inset-0 m-auto h-[320px] w-[200px] rounded-full bg-balone-yellow/25 blur-3xl"
      />

      {/* Phone frame */}
      <div className="animate-float relative w-[210px] overflow-hidden rounded-[2.5rem] border-[5px] border-white/15 shadow-[0_32px_64px_rgba(0,0,0,0.5)] ring-1 ring-white/10 md:w-[230px]">
        {/* Notch bar */}
        <div className="flex items-center justify-center bg-[#120826] py-2.5">
          <div className="h-1 w-14 rounded-full bg-white/25" />
        </div>

        {/* App header */}
        <div className="flex items-center justify-between border-b border-gray-100 bg-white px-3 py-2.5">
          <div className="leading-tight">
            <p className="text-[11px] font-bold text-[#1e0f38]">Balonê</p>
            <p className="text-[8px] uppercase tracking-wider text-[#7a6898]">Brechó · Fê Bassi</p>
          </div>
          <div className="flex gap-1">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8b5ab8] text-[8px] font-bold text-white">0</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8b5ab8] text-[8px] font-bold text-white">0</span>
          </div>
        </div>

        {/* Filter chips */}
        <div className="flex gap-1.5 bg-white px-3 pb-2 pt-1.5">
          <span className="rounded-full bg-[#1e0f38] px-2.5 py-0.5 text-[8px] font-medium text-white">Tudo</span>
          <span className="rounded-full border border-gray-200 px-2.5 py-0.5 text-[8px] text-[#7a6898]">Blusas</span>
          <span className="rounded-full border border-gray-200 px-2.5 py-0.5 text-[8px] text-[#7a6898]">Camisas</span>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 gap-1.5 bg-[#f9f5ff] p-2">
          {/* Card 1 */}
          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            <div className="relative h-[90px]">
              <Image
                src="/images/fe-vitrine.jpg"
                alt="Peça à venda"
                fill
                sizes="110px"
                className="object-cover"
              />
            </div>
            <div className="p-1.5">
              <p className="text-[8px] font-semibold leading-tight text-[#1e0f38]">Blusa Zara</p>
              <p className="text-[7px] text-[#7a6898]">Tam. M</p>
              <p className="mt-0.5 text-[8px] font-bold text-[#8b5ab8]">R$ 128,00</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            <div className="relative h-[90px]">
              <Image
                src="/images/vitrine-manequins.jpg"
                alt="Peça à venda"
                fill
                sizes="110px"
                className="object-cover"
              />
            </div>
            <div className="p-1.5">
              <p className="text-[8px] font-semibold leading-tight text-[#1e0f38]">Camisa vintage</p>
              <p className="text-[7px] text-[#7a6898]">Tam. G</p>
              <p className="mt-0.5 text-[8px] font-bold text-[#8b5ab8]">R$ 95,00</p>
            </div>
          </div>

          {/* Card 3 — cortado para dar sensação de scroll */}
          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            <div className="relative h-[90px]">
              <Image
                src="/images/interior-araras.jpg"
                alt="Peça à venda"
                fill
                sizes="110px"
                className="object-cover object-top"
              />
            </div>
            <div className="p-1.5">
              <p className="text-[8px] font-semibold leading-tight text-[#1e0f38]">Peça exclusiva</p>
              <p className="text-[7px] text-[#7a6898]">Tam. P</p>
              <p className="mt-0.5 text-[8px] font-bold text-[#8b5ab8]">R$ 75,00</p>
            </div>
          </div>

          {/* Card 4 — parcialmente visível */}
          <div className="overflow-hidden rounded-xl bg-white shadow-sm opacity-60">
            <div className="relative h-[90px]">
              <Image
                src="/images/fe-entrada.jpg"
                alt="Peça à venda"
                fill
                sizes="110px"
                className="object-cover object-top"
              />
            </div>
            <div className="p-1.5">
              <p className="text-[8px] font-semibold leading-tight text-[#1e0f38]">Achado especial</p>
              <p className="text-[7px] text-[#7a6898]">Tam. M</p>
              <p className="mt-0.5 text-[8px] font-bold text-[#8b5ab8]">R$ 110,00</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between border-t border-gray-100 bg-white px-3 py-2">
          <p className="text-[8px] text-[#7a6898]">Nenhuma selecionada</p>
          <span className="flex items-center gap-1 rounded-full bg-[#25D366] px-2 py-1 text-[7px] font-semibold text-white">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Enviar pedido
          </span>
        </div>
      </div>
    </div>
  );
}

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

      {/* Layout principal: texto + mockup */}
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        {/* Coluna de texto */}
        <div className="flex flex-col items-start">
          <span className="inline-block rounded-full border border-balone-yellow/40 px-4 py-1.5 text-[11px] uppercase tracking-[0.35em] text-balone-yellow">
            Catálogo online
          </span>
          <h2 className="mt-5 font-display text-4xl leading-tight text-balone-cream md:text-5xl lg:text-6xl">
            Compre de onde<br className="hidden sm:block" /> você estiver.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-balone-cream/70 md:text-lg">
            Nosso catálogo digital está no ar. Explore as peças disponíveis,
            selecione as suas favoritas e envie o pedido pelo WhatsApp — simples assim.
          </p>
          <Link
            href="https://catalogobalone.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-balone-yellow px-8 py-3.5 text-sm uppercase tracking-[0.22em] font-medium text-balone-black transition-colors hover:bg-balone-cream"
          >
            Acessar catálogo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M7 7h10v10" /><path d="M7 17 17 7" />
            </svg>
          </Link>
        </div>

        {/* Phone mockup */}
        <PhoneMockup />
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
