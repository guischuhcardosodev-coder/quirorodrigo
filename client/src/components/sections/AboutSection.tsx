/*
 * AboutSection — Wellness Editorial
 * Split-screen: foto à esquerda (blob shape), texto à direita
 * Fundo: bege-areia (#F5ECD7)
 * Tipografia: Cormorant Garamond títulos, Nunito corpo
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, MapPin, Award } from "lucide-react";

const ABOUT_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jypAbxE2IjcygcOFthfecN6-wZJwcyGTEQ&s";

export default function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section id="sobre" className="py-24 md:py-32 bg-sand" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <div className="reveal relative flex justify-center lg:justify-start">
            {/* Decorative background blob */}
            <div
              className="absolute -top-8 -left-8 w-72 h-72 opacity-30"
              style={{
                background: "oklch(0.25 0.08 260)",
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              }}
            />
            {/* Photo frame */}
            <div
              className="relative w-72 h-96 md:w-80 md:h-[480px] overflow-hidden shadow-2xl"
              style={{ borderRadius: "40% 60% 55% 45% / 45% 40% 60% 55%" }}
            >
              <img
                src={ABOUT_IMAGE}
                alt="Rodrigo Schuh Cardoso — Quiropraxista"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Floating credential badge */}
            <div className="absolute -bottom-4 -right-4 md:right-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center flex-shrink-0">
                <Award size={18} className="text-white" />
              </div>
              <div>
                <p className="font-body text-xs text-stone-500 leading-none mb-0.5">Registro</p>
                <p className="font-display text-base font-bold text-forest leading-none">ABQ 1240</p>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="space-y-6">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-px bg-yellow-500" />
                <span className="font-body text-yellow-600 text-sm font-semibold tracking-widest uppercase">
                  Sobre Mim
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-forest leading-tight">
                Rodrigo Schuh Cardoso
              </h2>
              <p className="font-display text-xl italic text-stone-500 mt-1">Quiropraxista</p>
            </div>

            <p className="reveal font-body text-base text-stone-600 leading-relaxed">
              Sou quiropraxista graduado pela Universidade Feevale em 2023, com registro ABQ 1240.
              Minha missão é ajudar pessoas a viverem sem dor, tratando a causa do problema de forma
              natural — sem uso de medicamentos.
            </p>

            <p className="reveal font-body text-base text-stone-600 leading-relaxed">
              Acredito que o corpo humano tem uma capacidade extraordinária de se curar quando a
              coluna vertebral está alinhada e o sistema nervoso funciona sem interferências. Por
              isso, utilizo técnicas quiropraxistas precisas e seguras para restaurar o equilíbrio
              do seu corpo.
            </p>

            <p className="reveal font-body text-base text-stone-600 leading-relaxed">
              Atendo em Sapiranga, Parobé e Canela, oferecendo um atendimento personalizado,
              humanizado e focado nos seus resultados.
            </p>

            <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { icon: GraduationCap, text: "Graduado pela Universidade Feevale (2023)" },
                { icon: MapPin, text: "Sapiranga, Parobé e Canela — RS" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-forest/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={16} className="text-forest" />
                  </div>
                  <p className="font-body text-sm text-stone-600 leading-snug">{text}</p>
                </div>
              ))}
            </div>

            <div className="reveal pt-2">
              <a
                href={`https://wa.me/5551993525855?text=${encodeURIComponent("Olá, Rodrigo! Gostaria de agendar uma consulta.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-forest text-white font-body font-semibold text-sm px-7 py-3.5 rounded-full hover:opacity-90 transition-all duration-200 shadow-md"
              >
                Fale Comigo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
