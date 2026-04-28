"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Visite", href: "#visite" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-balone-cream/95 backdrop-blur border-b border-balone-sand"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-6 py-4 md:py-5">
        <Link
          href="#inicio"
          className="flex flex-col leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-xl md:text-2xl tracking-wide text-balone-black">
            Brechó Balonê
          </span>
          <span className="font-display text-[11px] md:text-xs italic text-balone-muted mt-0.5">
            Fê Bassi · desde 2010
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.18em] text-balone-text hover:text-balone-yellow-dark transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="https://instagram.com/brechobalonefebassi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-balone-black px-4 py-2 text-xs uppercase tracking-[0.18em] text-balone-cream hover:bg-balone-yellow-dark hover:text-balone-black transition-colors"
          >
            Instagram
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-balone-black/10 text-balone-black"
        >
          <span className="sr-only">Menu</span>
          <div className="relative h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-5 bg-current transition-transform ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[10px] h-[2px] w-5 bg-current transition-transform ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-balone-sand bg-balone-cream">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 md:px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.18em] text-balone-text border-b border-balone-sand last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://instagram.com/brechobalonefebassi"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-balone-black px-4 py-3 text-xs uppercase tracking-[0.18em] text-balone-cream"
            >
              Instagram
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
