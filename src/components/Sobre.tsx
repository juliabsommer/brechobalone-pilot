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
    <section id="sobre" className="bg-balone-cream py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg order-1 md:order-none">
            <Image
              src="/images/fachada-mesa.jpg"
              alt="Fachada do Brechó Balonê com mesa de madeira"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="order-2 md:order-none">
            <p className="text-[11px] md:text-xs uppercase tracking-[0.28em] text-balone-yellow-dark">
              Sobre
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,7.5vw,2.75rem)] md:text-5xl leading-[1.1] text-balone-black">
              Um brechó pra promover o desapego — com estilo.
            </h2>
            <div className="mt-5 md:mt-6 space-y-4 text-[15px] md:text-lg text-balone-muted leading-relaxed">
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

            <dl className="mt-8 md:mt-10 grid gap-3 md:gap-6 grid-cols-1 sm:grid-cols-3">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="rounded-xl bg-white/60 border border-balone-sand p-4 md:p-5"
                >
                  <dt className="font-display text-base md:text-lg text-balone-black">
                    {h.title}
                  </dt>
                  <dd className="mt-1.5 md:mt-2 text-sm text-balone-muted leading-relaxed">
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
