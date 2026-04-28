import Image from "next/image";
import Link from "next/link";

export default function Visite() {
  return (
    <section id="visite" className="relative bg-balone-black text-balone-cream py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-none">
            <p className="text-[11px] md:text-xs uppercase tracking-[0.28em] text-balone-yellow">
              Visite
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,7.5vw,2.75rem)] md:text-5xl leading-[1.1]">
              Venha garimpar com a gente.
            </h2>
            <p className="mt-5 md:mt-6 text-balone-cream/80 text-[15px] md:text-lg leading-relaxed">
              Estamos de portas abertas dentro do complexo Ipanema Sports, em
              Porto Alegre. É só seguir o amarelo entre as árvores.
            </p>

            <dl className="mt-8 md:mt-10 space-y-5 md:space-y-6 text-balone-cream/90">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.25em] text-balone-yellow/90">
                  Endereço
                </dt>
                <dd className="mt-1 text-base md:text-lg">
                  Av. Cel. Marcos, 2353 — Ipanema Sports
                  <br />
                  Porto Alegre · RS
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.25em] text-balone-yellow/90">
                  Instagram
                </dt>
                <dd className="mt-1">
                  <Link
                    href="https://instagram.com/brechobalonefebassi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base md:text-lg underline decoration-balone-yellow/60 underline-offset-4 hover:text-balone-yellow"
                  >
                    @brechobalonefebassi
                  </Link>
                </dd>
              </div>
            </dl>

            <Link
              href="https://www.google.com/maps/search/?api=1&query=Av.+Cel.+Marcos,+2353,+Porto+Alegre"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 md:mt-10 inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-balone-yellow px-6 py-3.5 text-sm uppercase tracking-[0.2em] font-medium text-balone-black hover:bg-balone-cream transition-colors"
            >
              Ver no mapa
            </Link>
          </div>

          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl order-1 md:order-none">
            <Image
              src="/images/fachada-frente.jpg"
              alt="Fachada do Brechó Balonê vista pela trilha de pedras"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
