/*
 * TreatmentsSection — Wellness Editorial
 * Fundo: bege-areia
 * Grid de cards com ícones e condições tratadas
 * Hover: card-lift com sombra verde-floresta
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";

const TREATMENT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663405983201/oBUaDRZ6p7o5MHD6H5bqgw/treatment_session-krhMc9UdWq82WT6H6Tig7D.webp";

const conditions = [
  {
    emoji: "🔙",
    title: "Dor Lombar",
    desc: "A dor nas costas é uma das queixas mais comuns. A quiropraxia trata a causa raiz, aliviando tensão muscular e compressão nervosa.",
  },
  {
    emoji: "🦴",
    title: "Hérnia de Disco",
    desc: "Ajustes vertebrais específicos reduzem a pressão sobre o disco e aliviam a dor irradiada para os membros.",
  },
  {
    emoji: "🤕",
    title: "Dor Cervical",
    desc: "Tensão no pescoço, rigidez e dor ao girar a cabeça respondem muito bem ao tratamento quiroprático.",
  },
  {
    emoji: "🤯",
    title: "Cefaleia e Enxaqueca",
    desc: "Muitas dores de cabeça têm origem cervical. O ajuste vertebral pode reduzir significativamente a frequência e intensidade.",
  },
  {
    emoji: "🦵",
    title: "Ciática",
    desc: "Dor que irradia da lombar para a perna (nervo ciático) é tratada com ajustes que liberam a compressão nervosa.",
  },
  {
    emoji: "💪",
    title: "Dor no Ombro",
    desc: "Problemas no ombro frequentemente têm relação com a coluna cervical e torácica, que a quiropraxia trata.",
  },
  {
    emoji: "🏃",
    title: "Dores Esportivas",
    desc: "Atletas e praticantes de atividade física se beneficiam do tratamento para recuperação e prevenção de lesões.",
  },
  {
    emoji: "🪑",
    title: "Postura e Escoliose",
    desc: "Desvios posturais e escoliose funcional são abordados com ajustes e orientações de postura.",
  },
  {
    emoji: "🦶",
    title: "Dor no Joelho e Tornozelo",
    desc: "Desalinhamentos pélvicos afetam os membros inferiores. O tratamento global melhora a biomecânica.",
  },
];

export default function TreatmentsSection() {
  const ref = useScrollReveal();

  return (
    <section id="tratamentos" className="py-24 md:py-32 bg-forest-light" ref={ref}>
      <div className="container">
        {/* Section header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-yellow-500" />
            <span className="font-body text-yellow-600 text-sm font-semibold tracking-widest uppercase">
              Tratamentos
            </span>
            <span className="w-6 h-px bg-yellow-500" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Quais Dores Eu Trato?
          </h2>
          <p className="font-body text-base text-white/80 leading-relaxed">
            A quiropraxia é eficaz no tratamento de diversas condições musculoesqueléticas.
            Se você sofre com alguma das condições abaixo, posso ajudar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {conditions.map((condition, i) => (
            <div
              key={condition.title}
              className="reveal card-lift bg-white/95 rounded-2xl p-6 shadow-sm border border-stone-100"
            >
              <div className="text-3xl mb-3">{condition.emoji}</div>
              <h3 className="font-display text-xl font-bold text-forest mb-2">{condition.title}</h3>
              <p className="font-body text-sm text-stone-500 leading-relaxed">{condition.desc}</p>
            </div>
          ))}
        </div>

        {/* Featured image + CTA */}
        <div className="reveal relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={TREATMENT_IMAGE}
            alt="Sessão de quiropraxia — tratamento cervical"
            className="w-full h-64 md:h-80 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/90 to-forest/50 flex items-center">
            <div className="p-8 md:p-12 max-w-xl">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
                Não deixe a dor limitar sua vida
              </h3>
              <p className="font-body text-white/85 text-base mb-6">
                Agende sua avaliação e descubra como a quiropraxia pode transformar sua qualidade de vida.
              </p>
              <a
                href={`https://wa.me/5551993525855?text=${encodeURIComponent("Olá, Rodrigo! Gostaria de agendar uma avaliação.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-forest font-body font-bold text-sm px-7 py-3.5 rounded-full hover:bg-sand transition-colors duration-200 shadow-md"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-green-600" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Agendar Avaliação Gratuita
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
