/* DESIGN: Industrial Automotriz Premium — Ubicación con mapa — Tema Claro */
import { motion } from "framer-motion";
import { MapPin, Navigation, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function LocationSection() {
  return (
    <section id="ubicacion" className="pt-6 lg:pt-8 pb-20 lg:pb-28 bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#b7212c]" />
            <span className="section-label">Encuéntranos</span>
            <div className="w-10 h-[2px] bg-[#b7212c]" />
          </div>
          <h2 className="section-title text-[#1d1d1b] text-[42px]">
            Nuestra <span className="text-gradient-red">Ubicación</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white border border-neutral-200 p-2 shadow-lg shadow-black/5">
              <iframe
                src={COMPANY.mapsEmbedUrl}
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Auto Repuestos Blessing"
                className="w-full"
              />
            </div>
          </motion.div>

          {/* Address Card — Light theme */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#b7212c] p-6 lg:p-8 flex flex-col justify-between shadow-2xl shadow-[#b7212c]/20"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-white flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#b7212c]" />
                </div>
                <h3 className="font-bold text-white uppercase tracking-wide text-[32px]" style={{ fontFamily: "var(--font-heading)" }}>
                  Dirección
                </h3>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-8">
                {COMPANY.address}
              </p>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#1d1d1b]/10 border border-white/15 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs text-white/70 uppercase tracking-wider font-medium" style={{ fontFamily: "var(--font-heading)" }}>Horario</span>
              </div>
              <div className="space-y-3 mb-8 pl-11">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <div className="w-1.5 h-1.5 bg-green-400" />
                  {COMPANY.schedule.weekdays}
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <div className="w-1.5 h-1.5 bg-white" />
                  {COMPANY.schedule.saturday}
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-[#b7212c]" />
                  {COMPANY.schedule.sunday}
                </div>
              </div>
            </div>
            <a
              href={COMPANY.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-[#b7212c] px-6 py-3.5 font-bold uppercase tracking-wider transition-all text-sm shadow-lg shadow-black/20 hover:translate-y-[-2px]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Navigation className="w-4 h-4" />
              Cómo Llegar
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
