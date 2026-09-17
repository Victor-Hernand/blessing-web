/* DESIGN: Industrial Automotriz Premium — Ubicación con mapa — Tema Claro */
import { motion } from "framer-motion";
import { MapPin, Navigation, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function LocationSection() {
  return (
    <section id="ubicacion" className="py-20 lg:py-28 bg-neutral-950">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-red-700" />
            <span className="section-label">Encuéntranos</span>
            <div className="w-10 h-[2px] bg-red-700" />
          </div>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-neutral-50">
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
            <div className="bg-neutral-950 border border-neutral-800 p-2 shadow-lg shadow-black/5">
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
            className="bg-red-800 p-6 lg:p-8 flex flex-col justify-between shadow-2xl shadow-red-900/20"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-amber-400 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-red-900" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
                  Dirección
                </h3>
              </div>
              <p className="text-red-100/80 text-sm leading-relaxed mb-8">
                {COMPANY.address}
              </p>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-neutral-950/10 border border-white/15 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-amber-300" />
                </div>
                <span className="text-xs text-red-200/70 uppercase tracking-wider font-medium" style={{ fontFamily: "var(--font-heading)" }}>Horario</span>
              </div>
              <div className="space-y-3 mb-8 pl-11">
                <div className="flex items-center gap-2 text-red-100/70 text-sm">
                  <div className="w-1.5 h-1.5 bg-green-400" />
                  {COMPANY.schedule.weekdays}
                </div>
                <div className="flex items-center gap-2 text-red-100/70 text-sm">
                  <div className="w-1.5 h-1.5 bg-amber-400" />
                  {COMPANY.schedule.saturday}
                </div>
                <div className="flex items-center gap-2 text-red-200 text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-red-400" />
                  {COMPANY.schedule.sunday}
                </div>
              </div>
            </div>
            <a
              href={COMPANY.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-red-900 px-6 py-3.5 font-bold uppercase tracking-wider transition-all text-sm shadow-lg shadow-amber-900/20 hover:translate-y-[-2px]"
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
