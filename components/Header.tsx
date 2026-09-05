"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "#nos-actions", label: "Nos actions" },
  { href: "#galerie", label: "Galerie" },
  { href: "#nous-rejoindre", label: "Nous rejoindre" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
      style={{ backgroundColor: "#FAFAF8" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8">
        <a
          href="#accueil"
          className="shrink-0"
          aria-label="AGPR — Retour à l'accueil"
        >
          <Logo className="h-14 w-[150px] sm:h-16 sm:w-[170px]" priority />
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-agpr-forest transition-colors hover:bg-agpr-green/10 hover:text-agpr-green-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="lg:hidden rounded-lg p-2 text-agpr-forest hover:bg-agpr-green/10"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="lg:hidden border-t border-agpr-green/20 px-4 py-4"
          style={{ backgroundColor: "#FAFAF8" }}
          aria-label="Navigation mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-base font-semibold text-agpr-forest hover:bg-agpr-green/10"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
