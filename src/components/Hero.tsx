import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-balone-cream via-balone-soft/70 to-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-20 h-[520px] w-[520px] rounded-full bg-balone-yellow/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-20 h-[320px] w-[320px] rounded-full bg-balone-yellow/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-20 md:py-36">
        <div className="flex flex-col">
          <p className="text-[11px] uppercase tracking-[0.38em] text-balone-yellow-dark">
            Desde 2010 · Porto Alegre
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight text-balone-black md:text-[5.5rem]">
            Brechó<br />Balonê
          </h1>
          <p className="mt-6 font-display italic text-xl text-balone-muted md:text-2xl">
            &ldquo;Viva essa experiência&rdquo;
          </p>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-balone-muted md:text-lg">
            Curadoria premium de marcas nacionais e importadas, garimpadas
            a dedo por Fê Bassi.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="#sobre"
              className="inline-flex items-center justify-center rounded-full bg-balone-black px-6 py-3 text-sm uppercase tracking-[0.2em] text-balone-cream transition-colors hover:bg-balone-yellow-dark"
            >
              Conheça a loja
            </Link>
            <Link
              href="#visite"
              className="inline-flex items-center justify-center rounded-full border border-balone-sand px-6 py-3 text-sm uppercase tracking-[0.2em] text-balone-text transition-colors hover:border-balone-yellow-dark hover:text-balone-yellow-dark"
            >
              Como chegar
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[3rem] bg-balone-yellow/25 blur-2xl"
          />
          <div className="relative h-[340px] w-full max-w-[360px] overflow-hidden rounded-[3rem] shadow-2xl md:h-[540px] md:max-w-[420px]">
            <Image
              src="/images/fachada-noite.jpg"
              alt="Fachada iluminada do Brechó Balonê à noite com o letreiro luminoso"
              fill
              priority
              sizes="(min-width: 768px) 420px, 90vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
