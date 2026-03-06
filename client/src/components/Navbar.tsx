/*
 * Navbar — Wellness Editorial
 * Fundo transparente no topo, sólido ao scroll
 * Logo: nome + título em Cormorant Garamond
 * Links: Nunito, hover com sublinhado animado terracota
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Quiropraxia", href: "#quiropraxia" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Localização", href: "#localizacao" },
];

const WHATSAPP_NUMBER = "5551993525855";
const WHATSAPP_MESSAGE = "Olá, Rodrigo! Gostaria de agendar uma consulta.";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleLinkClick("#hero"); }}
          className="flex flex-col leading-tight"
        >
          <span
            className={`font-display text-xl md:text-2xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-forest" : "text-white"
            }`}
          >
            Rodrigo Schuh Cardoso
          </span>
          <span
            className={`font-body text-xs font-medium tracking-widest uppercase transition-colors ${
              scrolled ? "text-terracotta" : "text-amber-200"
            }`}
          >
            Quiropraxista · ABQ 1240
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
              className={`font-body text-sm font-medium relative group transition-colors ${
                scrolled ? "text-stone-700 hover:text-forest" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-terracotta group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-terracotta text-white font-body text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-all duration-200 shadow-sm" style={{backgroundColor: '#ffdf20'}}
          >
            Agendar Consulta
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-stone-700" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 shadow-lg">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                className="font-body text-sm font-medium text-stone-700 hover:text-forest py-3 px-2 rounded-lg hover:bg-stone-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-terracotta text-white font-body text-sm font-semibold px-5 py-3 rounded-full text-center hover:opacity-90 transition-all duration-200"
            >
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
