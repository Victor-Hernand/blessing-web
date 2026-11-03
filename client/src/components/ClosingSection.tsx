/* DESIGN: Industrial Automotriz Premium — Cierre con llamada a la acción — Tema oscuro de taller */
import { MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function ClosingSection() {
  return (
    <section className="relative overflow-hidden bg-[#171a1e] border-t border-white/10" aria-labelledby="cl-t">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#b7212c] to-transparent" />
      <div className="container py-16 lg:py-24 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-[#b7212c]" />
          <span className="section-label">{COMPANY.name}</span>
          <div className="w-10 h-[2px] bg-[#b7212c]" />
        </div>
        <h2 id="cl-t" className="section-title text-white text-[40px] lg:text-[64px] leading-[0.95]">
          Tu vehículo <br />
          en las mejores <span className="text-[#b7212c]">manos.</span>
        </h2>
        <p className="text-neutral-300 max-w-xl mx-auto mt-6 text-base leading-relaxed">
          Calidad, variedad y precios justos, con un equipo que te asesora de verdad. Escríbenos y cotiza hoy.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#b7212c] hover:bg-[#c92a35] text-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wider transition-colors active:scale-[0.97]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <MessageCircle className="w-4 h-4" /> Cotizar por WhatsApp
          </a>
          <a
            href={`tel:${COMPANY.phone.replace(/\s|-/g, "")}`}
            className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wider transition-colors active:scale-[0.97]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <Phone className="w-4 h-4" /> Llamar {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
