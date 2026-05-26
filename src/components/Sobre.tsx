import Image from "next/image";

const highlights = [
  {
    title: "Curadoria premium",
    description:
      "Cada peça é selecionada com cuidado — qualidade, estado e estilo importam.",
  },
  {
    title: "Marcas nacionais e importadas",
    description:
      "Garimpo de roupas e acessórios de marcas desejadas, com preços acessíveis.",
  },
  {
    title: "Experiência afetiva",
    description:
      "Um espaço acolhedor, entre árvores, pra você passear, provar e se encantar.",
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lg">
            <Image
              src="/images/fachada-frente.jpg"
              alt="Fachada do Brechó Balonê vista de frente, entre árvores"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-balone-yellow-dark">
              Sobre
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-balone-black md:text-5xl">
              Um brechó pra promover o desapego — com estilo.
            </h2>
            <div className="mt-6 space-y-4 text-base text-balone-muted md:text-lg">
              <p>
                Desde <strong className="text-balone-text">2010</strong>, o
                Brechó Balonê, idealizado por{" "}
                <strong className="text-balone-text">Fernanda Bassi</strong>,
                é um ponto de encontro pra quem ama moda circular, peças com
                história e achados únicos.
              </p>
              <p>
                Fica dentro do complexo{" "}
                <strong className="text-balone-text">@ipanema_sports</strong>,
                em Porto Alegre, num container amarelo cercado de árvores —
                um convite pra garimpar oportunidades e viver uma experiência
                transformadora.
              </p>
            </div>

            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="rounded-2xl border border-balone-sand bg-balone-soft/50 p-5"
                >
                  <dt className="font-display text-base text-balone-black">
                    {h.title}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-balone-muted">
                    {h.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
