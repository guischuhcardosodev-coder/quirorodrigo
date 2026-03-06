/*
 * HeroSection — Wellness Editorial
 * Full-bleed com overlay de gradiente escuro
 * Texto à esquerda, CTA proeminente
 * Imagem: hero_chiro (quiropraxista em atendimento)
 */

import { ChevronDown } from "lucide-react";

const WHATSAPP_NUMBER = "5551993525855";
const WHATSAPP_MESSAGE = "Olá, Rodrigo! Gostaria de agendar uma consulta.";
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663405983201/oBUaDRZ6p7o5MHD6H5bqgw/hero_chiro-dXcyXGpoZRQKesnTwpkNeN.webp";

export default function HeroSection() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const scrollToNext = () => {
    const el = document.querySelector("#sobre");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, oklch(0.12 0.07 260 / 0.88) 0%, oklch(0.12 0.07 260 / 0.65) 55%, oklch(0.12 0.07 260 / 0.25) 100%)",
        }}
      />

      {/* Organic blob decoration */}
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 opacity-10"
        style={{
          background: "oklch(0.95 0.02 260)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />

      <div className="container relative z-10 pt-24 pb-20">
        <div className="max-w-2xl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-yellow-400" />
            <span className="font-body text-yellow-300 text-sm font-medium tracking-widest uppercase">
              ABQ 1240 · Quiropraxista
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Livre-se da Dor.{" "}
            <span className="italic text-yellow-300">Sem Remédios.</span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-xl">
            Tratamento quiroprático especializado para dores na coluna, pescoço,
            lombar e articulações. Atendimento em Sapiranga, Parobé e Canela.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-yellow-500 text-white font-body font-semibold text-base px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-all duration-200 wa-pulse"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar pelo WhatsApp
            </a>
            <button
              onClick={() => {
                const el = document.querySelector("#quiropraxia");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white font-body font-semibold text-base px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              Saiba Mais
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-8">
            {[
              { value: "Feevale", label: "Graduado pela Univ." },
              { value: "2023", label: "Formado em" },
              { value: "3 cidades", label: "Atendimento em" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-2xl font-bold text-yellow-300">{stat.value}</span>
                <span className="font-body text-sm text-white/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
