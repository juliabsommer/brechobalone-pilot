export default function Quote() {
  return (
    <section className="overflow-hidden bg-balone-black py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-8 text-xs uppercase tracking-[0.35em] text-balone-yellow/70">
          Manifesto
        </p>
        <blockquote className="font-display text-3xl leading-snug text-balone-cream md:text-5xl lg:text-6xl">
          &ldquo;Cada peça que chega aqui
          <br className="hidden md:block" /> passou pelo{" "}
          <em className="text-balone-yellow">olhar da Fê.</em>
          <br className="hidden md:block" /> Nenhuma é por acaso.&rdquo;
        </blockquote>
        <div className="mt-10 flex items-center gap-4">
          <div className="h-px w-12 bg-balone-yellow/40" />
          <p className="text-sm uppercase tracking-[0.25em] text-balone-yellow/70">
            Fernanda Bassi · Fundadora do Brechó Balonê
          </p>
        </div>
      </div>
    </section>
  );
}
