import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden min-h-[100svh] md:min-h-[88vh] flex items-end"
    >
      <Image
        src="/images/fachada-frente.jpg"
        alt="Fachada amarela do Brechó Balonê entre árvores, em Porto Alegre"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center -z-10"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/10 via-black/40 to-black/80" />

      <div className="mx-auto w-full max-w-6xl px-5 md:px-6 pb-12 md:pb-24 pt-28 md:pt-32 text-balone-cream">
        <p className="mb-3 text-[11px] md:text-sm uppercase tracking-[0.28em] text-balone-yellow">
          Desde 2010 · Porto Alegre
        </p>
        <h1 className="font-display text-[clamp(2.5rem,11vw,4.5rem)] md:text-7xl leading-[1.02] tracking-tight">
          Brechó Balonê
        </h1>
        <p className="mt-5 max-w-2xl font-display italic text-lg md:text-2xl text-balone-cream/90">
          &ldquo;Viva essa experiência&rdquo;
        </p>
        <p className="mt-3 max-w-xl text-sm md:text-lg text-balone-cream/80 leading-relaxed">
          Curadoria premium de marcas nacionais e importadas, garimpadas a dedo
          por Fê Bassi.
        </p>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            href="#sobre"
            className="inline-flex items-center justify-center rounded-full bg-balone-yellow px-6 py-3.5 text-sm uppercase tracking-[0.2em] font-medium text-balone-black hover:bg-balone-cream transition-colors"
          >
            Conheça a loja
          </Link>
          <Link
            href="#visite"
            className="inline-flex items-center justify-center rounded-full border border-balone-cream/60 px-6 py-3.5 text-sm uppercase tracking-[0.2em] font-medium text-balone-cream hover:bg-balone-cream hover:text-balone-black transition-colors"
          >
            Como chegar
          </Link>
        </div>
      </div>
    </section>
  );
}
