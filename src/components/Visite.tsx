import Image from "next/image";
import Link from "next/link";

const horarios = [
  { dias: "Segunda a Sexta", hora: "09h às 18h" },
  { dias: "Sábado", hora: "10h às 17h" },
  { dias: "Domingo", hora: "14h às 18h" },
];

const contatos = [
  {
    label: "Endereço",
    value: "Av. Cel. Marcos, 2353 — Ipanema Sports",
    sub: "Porto Alegre · RS · Zona Sul",
    href: "https://www.google.com/maps/search/?api=1&query=Av.+Cel.+Marcos,+2353,+Porto+Alegre",
    external: true,
  },
  {
    label: "WhatsApp",
    value: "(51) 99958-0604",
    href: "https://wa.me/5551999580604?text=Olá%20Fê!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20o%20Brechó%20Balonê.",
    external: true,
  },
  {
    label: "Instagram",
    value: "@brechobalonefebassi",
    href: "https://instagram.com/brechobalonefebassi",
    external: true,
  },
  {
    label: "Catálogo online",
    value: "catalogobalone.netlify.app",
    href: "https://catalogobalone.netlify.app/",
    external: true,
  },
];

export default function Visite() {
  return (
    <section id="visite" className="relative bg-balone-soft py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-balone-yellow/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-balone-yellow-dark">
              Visite
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-balone-black md:text-5xl">
              Venha garimpar com a gente.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-balone-muted md:text-lg">
              Estamos de portas abertas dentro do complexo Ipanema Sports, na
              Zona Sul de Porto Alegre. É só seguir o amarelo entre as árvores.
            </p>

            {/* Horários */}
            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.25em] text-balone-yellow-dark">
                Horários
              </p>
              <ul className="mt-3 divide-y divide-balone-sand overflow-hidden rounded-2xl border border-balone-sand bg-white/70">
                {horarios.map((h) => (
                  <li key={h.dias} className="flex items-center justify-between px-5 py-3.5">
                    <span className="text-sm text-balone-muted">{h.dias}</span>
                    <span className="font-display text-base text-balone-black">{h.hora}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contatos */}
            <dl className="mt-10 space-y-6">
              {contatos.map((c) => (
                <div key={c.label}>
                  <dt className="text-xs uppercase tracking-[0.25em] text-balone-yellow-dark">
                    {c.label}
                  </dt>
                  <dd className="mt-1.5">
                    <Link
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      className="text-lg text-balone-black underline decoration-balone-yellow-dark/30 underline-offset-4 transition-colors hover:text-balone-yellow-dark"
                    >
                      {c.value}
                    </Link>
                    {c.sub && (
                      <p className="mt-0.5 text-sm text-balone-muted">{c.sub}</p>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href="https://www.google.com/maps/search/?api=1&query=Av.+Cel.+Marcos,+2353,+Porto+Alegre"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-balone-black px-6 py-3 text-sm uppercase tracking-[0.2em] font-medium text-balone-cream transition-colors hover:bg-balone-yellow-dark"
            >
              Ver no mapa
            </Link>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lg md:aspect-[3/4]">
            <Image
              src="/images/fachada-mesa.jpg"
              alt="Mesinha de madeira em frente ao Brechó Balonê"
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
