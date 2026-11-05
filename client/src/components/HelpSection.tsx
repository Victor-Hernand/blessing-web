/* DESIGN: Industrial Automotriz Premium — Tarjetas de ayuda (WhatsApp, llamada, asesoría, visita) — Tema oscuro de taller */
import { MessageCircle, Phone, Headphones, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const TARJETAS = [
  { icon: MessageCircle, titulo: "WhatsApp", detalle: COMPANY.phone, href: COMPANY.whatsapp, externo: true },
  { icon: Phone, titulo: "Llámanos", detalle: "Lunes a sábado", href: `tel:${COMPANY.phone.replace(/\s|-/g, "")}`, externo: false },
  { icon: Headphones, titulo: "Asesoría experta", detalle: "Te guiamos con la pieza exacta", href: COMPANY.whatsapp, externo: true },
  { icon: MapPin, titulo: "Visítanos", detalle: "Colonia Kennedy, Tegucigalpa", href: "https://www.google.com/maps/dir/?api=1&destination=14.0641018%2C-87.176339", externo: true },
];

export default function HelpSection() {
  return (
    <section className="pt-8 lg:pt-10 pb-14 lg:pb-20 bg-[#0d0f12] border-t border-white/10" aria-labelledby="help-t">
      <div className="container">
        <div className="mb-10 lg:mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-[#b7212c]" />
              <span className="section-label">Estamos listos para ayudarte</span>
            </div>
            <h2 id="help-t" className="section-title text-white text-[36px] lg:text-[42px]">
              ¿No encontraste <span className="text-[#b7212c]">lo que buscabas?</span>
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-base leading-relaxed">
            ¿No sabes qué repuesto necesitas o cómo comprar? Escríbenos y un asesor te guía con la pieza exacta.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {TARJETAS.map((t) => (
            <a
              key={t.titulo}
              href={t.href}
              {...(t.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-center gap-4 bg-[#0d0f12] p-6 hover:bg-[#171a1e] transition-colors duration-300"
            >
              <span className="w-12 h-12 shrink-0 flex items-center justify-center border border-[#b7212c]/60 group-hover:bg-[#b7212c] group-hover:border-[#b7212c] transition-colors duration-300">
                <t.icon className="w-5 h-5 text-[#b7212c] group-hover:text-white transition-colors duration-300" />
              </span>
              <span className="min-w-0">
                <b className="block text-white uppercase tracking-wide text-[17px]" style={{ fontFamily: "var(--font-heading)" }}>
                  {t.titulo}
                </b>
                <small className="block text-neutral-400 text-xs leading-snug">{t.detalle}</small>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
