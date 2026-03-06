/*
 * LocationSection — Wellness Editorial
 * Fundo: branco
 * Mapa do Google Maps integrado
 * Informações de contato e endereço
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Phone, Instagram, Clock } from "lucide-react";
import { MapView } from "@/components/Map";
import { useEffect, useRef } from "react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "R. Primeiro de Maio, 109\nSapiranga, RS, Brasil",
    link: "https://maps.google.com/?q=R.+Primeiro+de+Maio,+109,+Sapiranga,+RS",
  },
  {
    icon: Phone,
    label: "WhatsApp / Telefone",
    value: "(51) 99352-5855",
    link: "https://wa.me/5551993525855?text=Olá%2C+Rodrigo!+Gostaria+de+agendar+uma+consulta.",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@quiro.rodrigo",
    link: "https://www.instagram.com/quiro.rodrigo/",
  },
  {
    icon: Clock,
    label: "Cidades Atendidas",
    value: "Sapiranga · Parobé · Canela",
    link: null,
  },
];

function MapSection() {
  const mapRef = useRef<google.maps.Map | null>(null);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;

    // Center on Sapiranga, RS
    const location = { lat: -29.6386, lng: -51.0077 };
    map.setCenter(location);
    map.setZoom(15);

    // Add marker
    const marker = new google.maps.Marker({
      position: location,
      map,
      title: "Rodrigo Schuh Cardoso — Quiropraxista",
      icon: {
        url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="18" fill="#1B4332" stroke="white" stroke-width="3"/>
            <text x="20" y="26" text-anchor="middle" fill="white" font-size="18">🦴</text>
          </svg>
        `),
        scaledSize: new google.maps.Size(40, 40),
        anchor: new google.maps.Point(20, 20),
      },
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="font-family: 'Nunito', sans-serif; padding: 8px; max-width: 200px;">
          <strong style="color: #1B4332; font-size: 14px;">Rodrigo Schuh Cardoso</strong>
          <p style="color: #555; font-size: 12px; margin: 4px 0 0;">Quiropraxista · ABQ 1240</p>
          <p style="color: #555; font-size: 12px; margin: 2px 0 0;">R. Primeiro de Maio, 109<br>Sapiranga, RS</p>
        </div>
      `,
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });

    infoWindow.open(map, marker);
  };

  return (
    <MapView
      onMapReady={handleMapReady}
      className="w-full h-full rounded-2xl overflow-hidden"
    />
  );
}

export default function LocationSection() {
  const ref = useScrollReveal();

  return (
    <section id="localizacao" className="py-24 md:py-32 bg-forest-light" ref={ref}>
      <div className="container">
        {/* Section header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-yellow-500" />
            <span className="font-body text-yellow-600 text-sm font-semibold tracking-widest uppercase">
              Localização
            </span>
            <span className="w-6 h-px bg-yellow-500" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Onde me Encontrar
          </h2>
          <p className="font-body text-base text-white/80 leading-relaxed">
            Atendo em Sapiranga, Parobé e Canela. Entre em contato para saber
            o endereço completo e os horários disponíveis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact info */}
          <div className="reveal lg:col-span-2 space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, link }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/90 border border-white/20 card-lift"
              >
                <div className="w-10 h-10 bg-forest rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-body text-xs text-stone-500 font-medium uppercase tracking-wider mb-1">
                    {label}
                  </p>
                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm font-semibold text-forest hover:text-forest-light transition-colors whitespace-pre-line"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-body text-sm font-semibold text-forest whitespace-pre-line">
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/5551993525855?text=${encodeURIComponent("Olá, Rodrigo! Gostaria de saber o endereço e horários disponíveis.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-400 text-white font-body font-bold text-sm px-6 py-4 rounded-2xl transition-colors duration-200 shadow-md"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Confirmar Endereço pelo WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className="reveal lg:col-span-3 h-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-stone-100">
            <MapSection />
          </div>
        </div>
      </div>
    </section>
  );
}
