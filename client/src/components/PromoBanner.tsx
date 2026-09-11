/* DESIGN: Industrial Automotriz Premium — Banner promocional — Tema Claro */
import { motion } from "framer-motion";
import { ArrowRight, Percent, Truck } from "lucide-react";
import { COMPANY, IMAGES } from "@/lib/constants";

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image - real delivery team photo */}
      <div className="absolute inset-0">
        <img src={IMAGES.realDeliveryTeam} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-800/92 via-red-700/88 to-red-800/80" />
      </div>

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

      <div className="container relative z-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <Percent className="w-7 h-7 text-amber-300" />
              <span className="text-amber-300 text-xs font-bold uppercase tracking-[0.25em]" style={{ fontFamily: "var(--font-heading)" }}>
                Promoción Especial
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              Precios Especiales
              <br />
              <span className="text-amber-300">al por Mayor</span>
            </h2>
            <p className="text-red-100/80 text-base sm:text-lg max-w-lg leading-relaxed">
              Consulta nuestros precios especiales para talleres mecánicos, distribuidores y compras al por mayor. Descuentos exclusivos por volumen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 lg:justify-end"
          >
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 bg-white text-red-800 px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-neutral-100 transition-all duration-300 shadow-xl hover:translate-y-[-2px]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Solicitar Cotización
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-neutral-950/10 hover:border-white/50 transition-all duration-300"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Truck className="w-4 h-4" />
              Envío a Domicilio
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
    </section>
  );
}
