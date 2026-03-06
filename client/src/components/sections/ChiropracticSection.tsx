/*
 * ChiropracticSection — Wellness Editorial
 * Fundo: branco com acento verde-floresta
 * Imagem da coluna vertebral iluminada à direita
 * Texto explicativo à esquerda
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Zap, Shield, Activity } from "lucide-react";

const SPINE_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663405983201/oBUaDRZ6p7o5MHD6H5bqgw/spine_wellness-m8Wn8uqZCAV4pAKA3y7YkJ.webp";

const pillars = [
  {
    icon: Zap,
    title: "Ajuste Vertebral",
    desc: "Manobras precisas que restauram o alinhamento da coluna e liberam pressão sobre os nervos.",
  },
  {
    icon: Shield,
    title: "Sem Medicamentos",
    desc: "Tratamento 100% natural que trata a causa do problema, não apenas os sintomas.",
  },
  {
    icon: Activity,
    title: "Sistema Nervoso",
    desc: "Ao liberar interferências na coluna, o sistema nervoso funciona em sua plena capacidade.",
  },
];

export default function ChiropracticSection() {
  const ref = useScrollReveal();

  return (
    <section id="quiropraxia" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-px bg-yellow-500" />
                <span className="font-body text-yellow-600 text-sm font-semibold tracking-widest uppercase">
                  O que é
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-forest leading-tight">
                Quiropraxia
              </h2>
            </div>

            <p className="reveal font-body text-base text-stone-600 leading-relaxed">
              A <strong className="text-forest">quiropraxia</strong> é uma profissão de saúde de
              caráter universitário, reconhecida pela OMS (Organização Mundial da Saúde), que se
              dedica ao diagnóstico, tratamento e prevenção de distúrbios do sistema
              musculoesquelético — especialmente da coluna vertebral.
            </p>

            <p className="reveal font-body text-base text-stone-600 leading-relaxed">
              O quiropraxista utiliza ajustes manuais específicos para corrigir subluxações
              vertebrais (desalinhamentos das vértebras), que podem comprimir nervos e causar dor,
              inflamação e perda de função em diversas partes do corpo.
            </p>

            <blockquote className="reveal border-l-4 border-terracotta pl-5 py-1">
              <p className="font-display text-xl italic text-forest leading-relaxed">
                "A quiropraxia não é apenas sobre estalar as costas — é sobre restaurar a
                comunicação entre o seu cérebro e o seu corpo."
              </p>
              <footer className="font-body text-sm text-stone-500 mt-2">— Rodrigo Schuh Cardoso</footer>
            </blockquote>

            <div className="reveal grid grid-cols-1 gap-4 pt-2">
              {pillars.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 p-4 rounded-xl bg-stone-50 hover:bg-sand transition-colors duration-200">
                  <div className="w-10 h-10 bg-forest rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-body text-sm font-bold text-forest mb-1">{title}</h3>
                    <p className="font-body text-sm text-stone-500 leading-snug">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image column */}
          <div className="reveal order-1 lg:order-2 relative flex justify-center">
            {/* Background decoration */}
            <div
              className="absolute top-8 right-8 w-64 h-64 opacity-20"
              style={{
                background: "oklch(0.95 0.02 260)",
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              }}
            />
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={SPINE_IMAGE}
                alt="Coluna vertebral iluminada — Quiropraxia"
                className="w-full h-auto object-cover"
              />
              {/* Overlay text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-forest/90 to-transparent">
                <p className="font-display text-2xl font-bold text-white italic">
                  Saúde começa pela coluna
                </p>
                <p className="font-body text-sm text-white/80 mt-1">
                  Sistema nervoso livre = corpo saudável
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
