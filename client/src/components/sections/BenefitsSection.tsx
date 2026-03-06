/*
 * BenefitsSection — Wellness Editorial
 * Fundo: verde-floresta escuro (seção de destaque)
 * Grid de benefícios com ícones brancos
 * Texto claro sobre fundo escuro
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  HeartPulse,
  Moon,
  Dumbbell,
  Brain,
  Smile,
  Zap,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const CLINIC_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663405983201/oBUaDRZ6p7o5MHD6H5bqgw/clinic_interior-d7AwXiAaZZJTj4ThZeYSHe.webp";

const benefits = [
  {
    icon: HeartPulse,
    title: "Alívio da Dor",
    desc: "Redução significativa de dores crônicas e agudas sem o uso de medicamentos.",
  },
  {
    icon: Moon,
    title: "Melhor Qualidade de Sono",
    desc: "Pacientes relatam dormir melhor após o alinhamento vertebral.",
  },
  {
    icon: Dumbbell,
    title: "Mais Mobilidade",
    desc: "Recuperação da amplitude de movimento e flexibilidade articular.",
  },
  {
    icon: Brain,
    title: "Clareza Mental",
    desc: "Sistema nervoso funcionando bem melhora o foco e a concentração.",
  },
  {
    icon: Smile,
    title: "Bem-Estar Geral",
    desc: "Pacientes relatam melhora no humor e na disposição para o dia a dia.",
  },
  {
    icon: Zap,
    title: "Mais Energia",
    desc: "Sem dor e com o sistema nervoso equilibrado, o corpo tem mais vitalidade.",
  },
  {
    icon: TrendingUp,
    title: "Performance Esportiva",
    desc: "Atletas melhoram seu desempenho com a coluna alinhada e nervos livres.",
  },
  {
    icon: ShieldCheck,
    title: "Prevenção",
    desc: "Tratamento regular previne lesões futuras e mantém a saúde da coluna.",
  },
];

export default function BenefitsSection() {
  const ref = useScrollReveal();

  return (
    <section id="beneficios" className="py-24 md:py-32 bg-forest" ref={ref}>
      <div className="container">
        {/* Section header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-yellow-400" />
            <span className="font-body text-yellow-400 text-sm font-semibold tracking-widest uppercase">
              Benefícios
            </span>
            <span className="w-6 h-px bg-yellow-400" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Por que fazer Quiropraxia?
          </h2>
          <p className="font-body text-base text-white/75 leading-relaxed">
            Além do alívio da dor, o tratamento quiroprático traz uma série de benefícios
            para a sua saúde e qualidade de vida.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="reveal card-lift bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-colors duration-200"
            >
              <div className="w-10 h-10 bg-terracotta rounded-xl flex items-center justify-center mb-4">
                <Icon size={18} className="text-white" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{title}</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Clinic image + quote */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={CLINIC_IMAGE}
              alt="Clínica de quiropraxia — ambiente acolhedor"
              className="w-full h-72 object-cover"
            />
          </div>
          <div className="space-y-6">
            <blockquote className="border-l-4 border-yellow-400 pl-6">
              <p className="font-display text-2xl md:text-3xl italic text-white leading-relaxed">
                "Você não precisa viver com dor. Existe uma solução natural e eficaz esperando por você."
              </p>
              <footer className="font-body text-sm text-white/60 mt-3">
                — Rodrigo Schuh Cardoso, Quiropraxista
              </footer>
            </blockquote>
            <a
              href={`https://wa.me/5551993525855?text=${encodeURIComponent("Olá, Rodrigo! Quero saber mais sobre os benefícios da quiropraxia.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-yellow-500 text-white font-body font-semibold text-sm px-7 py-3.5 rounded-full hover:opacity-90 transition-all duration-200 shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Começar Meu Tratamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
