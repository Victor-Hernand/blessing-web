/* DESIGN: Industrial Automotriz Premium — Banner promocional — Tema Claro */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { COMPANY, IMAGES } from "@/lib/constants";

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image - real delivery team photo */}
      <div className="absolute inset-0">
        <img src={IMAGES.promoFrenos} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#b7212c]/92 via-[#b7212c]/88 to-[#b7212c]/80" />
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
              <span className="text-white text-xs font-bold uppercase tracking-[0.25em]" style={{ fontFamily: "var(--font-heading)" }}>
                Beneficios Exclusivos para Compras al por Mayor
              </span>
            </div>
            <h2 className="font-bold text-white uppercase leading-tight mb-5 text-[42px]" style={{ fontFamily: "var(--font-heading)" }}>
              Precios Preferenciales
              <br />
              <span className="text-white">por Volumen</span>
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-lg leading-relaxed">
              Accede a precios competitivos y beneficios exclusivos en compras por volumen. Ofrecemos condiciones especiales para talleres mecánicos, distribuidores y clientes comerciales que buscan calidad, disponibilidad y el mejor valor para su inversión.
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
              className="group inline-flex items-center justify-center gap-2.5 bg-white text-[#b7212c] px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-neutral-100 transition-all duration-300 shadow-xl hover:translate-y-[-2px]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Solicitar Cotización
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
    </section>
  );
}
