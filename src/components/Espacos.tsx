const espacos = [
  {
    tag: "Mini Museu Balonê",
    headline: "Peças retrô com história e personalidade.",
    body: "Garimpos únicos de décadas passadas — roupas, acessórios e itens que sobreviveram ao tempo com charme. Cada peça chega ao Balonê depois de um garimpo criterioso feito pela Fê.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="20" cy="20" r="20" fill="currentColor" fillOpacity="0.12" />
        <path d="M12 28V16l8-6 8 6v12H24v-7h-8v7H12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    light: true,
  },
  {
    tag: "Espaço Boho",
    headline: "Decoração e artigos esotéricos.",
    body: "Cristais, incensos, objetos de decoração e artigos boho que transformam qualquer ambiente. Um cantinho com energia própria, curado com intenção e afeto.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="20" cy="20" r="20" fill="currentColor" fillOpacity="0.12" />
        <polygon points="20,10 23,17 31,17 25,22 27,30 20,25 13,30 15,22 9,17 17,17" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    light: false,
  },
];

export default function Espacos() {
  return (
    <section id="espacos" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-balone-yellow-dark">
            Nossos espaços
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-balone-black md:text-5xl">
            Dois mundos em um só lugar.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-balone-muted md:text-lg">
            Dentro do container amarelo entre as árvores, você encontra universos completamente distintos — e igualmente encantadores.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-[2rem] bg-balone-soft p-8 md:p-10">
            <div className="text-balone-yellow-dark">{espacos[0].icon}</div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-balone-yellow-dark">
                {espacos[0].tag}
              </p>
              <h3 className="mt-3 font-display text-2xl leading-snug text-balone-black md:text-3xl">
                {espacos[0].headline}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-balone-muted">
                {espacos[0].body}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-[2rem] bg-balone-black p-8 md:p-10">
            <div className="text-balone-yellow">{espacos[1].icon}</div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-balone-yellow">
                {espacos[1].tag}
              </p>
              <h3 className="mt-3 font-display text-2xl leading-snug text-balone-cream md:text-3xl">
                {espacos[1].headline}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-balone-cream/70">
                {espacos[1].body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
