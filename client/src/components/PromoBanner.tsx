/* DESIGN: Industrial Automotriz Premium — Banner promocional — Tema Claro */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden min-h-[460px] lg:min-h-[560px] flex items-center">
      {/* Background image - real delivery team photo */}
      <div className="absolute inset-0">
        <img src="/images/mayoristas-equipo.jpg" alt="Equipo de Blessing frente al mostrador, con aceites y repuestos al fondo" loading="lazy" className="w-full h-full object-cover object-[50%_75%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f12]/95 via-[#0d0f12]/70 to-[#0d0f12]/15" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d0f12]/80 to-transparent" />
      </div>

      {/* Top accent */}

      <div className="container relative z-10 py-16 lg:py-20 w-full">
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
              className="group inline-flex items-center justify-center gap-2.5 bg-white text-[#b7212c] px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-neutral-100 transition-[color,background-color,border-color,box-shadow,transform,opacity,width,height] duration-300 hover:translate-y-[-2px]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Solicitar Cotización
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent */}
    </section>
  );
}
