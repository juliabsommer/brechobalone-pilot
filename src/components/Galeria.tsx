import Image from "next/image";

const fotos = [
  {
    src: "/images/fe-entrada.jpg",
    alt: "Fê Bassi na entrada do Brechó Balonê entre as árvores do Ipanema Sports",
    className: "md:row-span-2",
  },
  {
    src: "/images/vitrine-manequins.jpg",
    alt: "Vitrine do Brechó Balonê com manequins e peças selecionadas",
    className: "",
  },
  {
    src: "/images/fe-vitrine.jpg",
    alt: "Fê Bassi em frente à vitrine com araras de roupas ao fundo",
    className: "",
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

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:grid-rows-2">
          {fotos.map((foto) => (
            <div
              key={foto.src}
              className={`relative overflow-hidden rounded-2xl bg-balone-soft ${foto.className}`}
              style={{ aspectRatio: foto.className.includes("row-span-2") ? undefined : "3/4" }}
            >
              {foto.className.includes("row-span-2") && (
                <div className="absolute inset-0" />
              )}
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
