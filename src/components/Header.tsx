"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Espaços", href: "#espacos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Visite", href: "#visite" },
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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:py-5">
        <Link
          href="#inicio"
          className="flex flex-col leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-xl tracking-wide text-balone-black md:text-2xl">
            Brechó Balonê
          </span>
          <span className="mt-0.5 font-display text-[11px] italic text-balone-muted md:text-xs">
            Fê Bassi · desde 2010
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.18em] text-balone-text transition-colors hover:text-balone-yellow-dark"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="https://catalogobalone.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-[0.18em] text-balone-yellow-dark transition-colors hover:text-balone-black"
          >
            Catálogo
          </Link>
          <Link
            href="https://instagram.com/brechobalonefebassi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-balone-yellow-dark px-4 py-2 text-xs uppercase tracking-[0.18em] text-white transition-colors hover:bg-balone-black"
          >
            Instagram
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-balone-sand text-balone-black md:hidden"
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
        <div className="border-t border-balone-sand bg-balone-cream md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-balone-sand py-3 text-sm uppercase tracking-[0.18em] text-balone-text last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://catalogobalone.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="border-b border-balone-sand py-3 text-sm uppercase tracking-[0.18em] text-balone-yellow-dark"
            >
              Catálogo
            </Link>
            <Link
              href="https://instagram.com/brechobalonefebassi"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-balone-yellow-dark px-4 py-3 text-xs uppercase tracking-[0.18em] text-white"
            >
              Instagram
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
