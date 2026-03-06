/*
 * BookingSection — Wellness Editorial
 * Fundo: bege-areia
 * CTA central grande para WhatsApp
 * Passos do processo de agendamento
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageCircle, Calendar, CheckCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5551993525855";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Envie uma mensagem",
    desc: "Clique no botão abaixo e envie uma mensagem pelo WhatsApp. É rápido e fácil!",
  },
  {
    icon: Calendar,
    step: "02",
    title: "Escolha o horário",
    desc: "Combinamos juntos o melhor dia e horário para a sua consulta ou avaliação.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Inicie seu tratamento",
    desc: "Compareça à consulta e dê o primeiro passo para uma vida sem dor.",
  },
];

export default function BookingSection() {
  const ref = useScrollReveal();

  const waLink = (message: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <section id="agendamento" className="py-24 md:py-32 bg-forest-light" ref={ref}>
      <div className="container">
        {/* Section header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-yellow-500" />
            <span className="font-body text-yellow-600 text-sm font-semibold tracking-widest uppercase">
              Agendamento
            </span>
            <span className="w-6 h-px bg-yellow-500" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Agende sua Consulta
          </h2>
          <p className="font-body text-base text-white/80 leading-relaxed">
            O agendamento é simples e rápido. Basta entrar em contato pelo WhatsApp
            e combinamos o melhor horário para você.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="reveal text-center">
              <div className="relative inline-flex items-center justify-center mb-6">
                <span className="font-display text-7xl font-bold text-forest/10 select-none leading-none">
                  {step}
                </span>
                <div className="absolute w-14 h-14 bg-forest rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon size={22} className="text-white" />
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-forest mb-2">{title}</h3>
              <p className="font-body text-sm text-stone-500 leading-relaxed max-w-xs mx-auto">{desc}</p>
            </div>
          ))}
        </div>

        {/* Main CTA card */}
        <div className="reveal bg-forest rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          {/* Decorative blobs */}
          <div
            className="absolute -top-12 -right-12 w-48 h-48 opacity-10"
            style={{
              background: "oklch(0.92 0.04 260)",
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            }}
          />
          <div
            className="absolute -bottom-8 -left-8 w-32 h-32 opacity-10"
            style={{
              background: "oklch(0.62 0.10 50)",
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6 shadow-lg">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>

            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
              Pronto para começar?
            </h3>
            <p className="font-body text-white/80 text-base mb-8 max-w-md mx-auto">
              Entre em contato agora mesmo. Respondo rapidamente e vamos encontrar
              o melhor horário para você.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={waLink("Olá, Rodrigo! Gostaria de agendar uma consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-body font-bold text-base px-8 py-4 rounded-full transition-colors duration-200 shadow-lg wa-pulse"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Agendar pelo WhatsApp
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-body font-semibold text-base px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-200"
              >
                (51) 99352-5855
              </a>
            </div>

            <p className="font-body text-white/50 text-xs mt-6">
              Atendimento em Sapiranga · Parobé · Canela
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
