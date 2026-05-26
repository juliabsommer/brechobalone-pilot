import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contato" className="border-t border-balone-sand bg-balone-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl text-balone-black">Brechó Balonê</p>
          <p className="mt-1 font-display italic text-balone-muted">
            Fê Bassi · desde 2010
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-balone-muted">
            Av. Cel. Marcos, 2353 — dentro do complexo Ipanema Sports ·
            Porto Alegre / RS
          </p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <Link
            href="https://wa.me/5551999580604?text=Olá%20Fê!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20o%20Brechó%20Balonê."
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-[0.2em] text-balone-text transition-colors hover:text-balone-yellow-dark"
          >
            (51) 99958-0604
          </Link>
          <Link
            href="https://instagram.com/brechobalonefebassi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-[0.2em] text-balone-text transition-colors hover:text-balone-yellow-dark"
          >
            @brechobalonefebassi
          </Link>
          <p className="text-xs text-balone-muted">
            © {new Date().getFullYear()} Brechó Balonê. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
