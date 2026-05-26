import Image from "next/image";

const fotos = [
  {
    src: "/images/fe-entrada.jpg",
    alt: "Fê Bassi na entrada do Brechó Balonê entre as árvores do Ipanema Sports",
    // mobile: portrait | desktop: spans 2 rows (tall)
    className: "aspect-[3/4] md:aspect-auto md:row-span-2",
  },
  {
    src: "/images/vitrine-manequins.jpg",
    alt: "Vitrine do Brechó Balonê com manequins e peças selecionadas",
    className: "aspect-[3/4]",
  },
  {
    src: "/images/fe-vitrine.jpg",
    alt: "Fê Bassi em frente à vitrine com peças de grife",
    className: "aspect-[3/4]",
  },
  {
    src: "/images/interior-araras.jpg",
    alt: "Interior do brechó com araras de roupas organizadas",
    className: "aspect-[3/4]",
  },
  {
    src: "/images/provadores.jpg",
    alt: "Provadores do Brechó Balonê",
    className: "aspect-[3/4]",
  },
];

export default function Galeria() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-balone-yellow-dark">
            A loja
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-balone-black md:text-5xl">
            Vem dar uma espiada.
          </h2>
        </div>

        {/* Mobile: 1 coluna. Desktop: 3 colunas, primeira foto ocupa 2 linhas */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {fotos.map((foto) => (
            <div
              key={foto.src}
              className={`relative overflow-hidden rounded-2xl bg-balone-soft ${foto.className}`}
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
