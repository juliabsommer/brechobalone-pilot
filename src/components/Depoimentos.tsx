// TODO: substituir pelos depoimentos reais quando a Fê enviar

const depoimentos = [
  {
    nome: "Ana Paula",
    texto: "Lugar incrível! Fui uma vez e não consigo parar de voltar. A curadoria da Fê é impecável.",
    estrelas: 5,
  },
  {
    nome: "Camila R.",
    texto: "Encontrei peças que não acho em nenhuma outra loja. O espaço é lindo e a atmosfera é única.",
    estrelas: 5,
  },
  {
    nome: "Mariana S.",
    texto: "A melhor experiência de brechó que já tive. Saí com uma bolsa de grife por uma fração do preço!",
    estrelas: 5,
  },
];

function Estrelas({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} estrelas`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-balone-yellow-dark" aria-hidden>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Depoimentos() {
  return (
    <section className="bg-balone-soft py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-balone-yellow-dark">
            Depoimentos
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-balone-black md:text-5xl">
            O que dizem sobre a gente.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {depoimentos.map((d) => (
            <figure
              key={d.nome}
              className="flex flex-col gap-4 rounded-2xl bg-white p-7 shadow-sm"
            >
              <Estrelas n={d.estrelas} />
              <blockquote className="flex-1 font-display italic text-lg leading-snug text-balone-black">
                &ldquo;{d.texto}&rdquo;
              </blockquote>
              <figcaption className="text-sm text-balone-muted">
                — {d.nome}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
