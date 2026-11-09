/* DESIGN: Industrial Automotriz Premium — Banner promocional — Tema Claro */
import { motion } from "framer-motion";

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden bg-metal min-h-[460px] lg:min-h-[560px] flex flex-col justify-between">
      {/* Escritorio: foto de fondo detrás de todo el banner */}
      <div className="absolute inset-0 hidden lg:block">
        <img src="/images/promo-equipo-tienda.jpg" alt="Equipo de Blessing frente a su tienda" loading="lazy" className="w-full h-full object-cover object-[50%_40%]" />
      </div>

      {/* 1. Texto arriba: en horizontal, para no tapar los rostros de la foto */}
      <div className="container relative z-10 pt-12 lg:pt-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-white text-xs font-bold uppercase tracking-[0.25em]" style={{ fontFamily: "var(--font-heading)" }}>
                Beneficios Exclusivos para Compras al detalle
              </span>
            </div>
            <h2 className="font-bold text-white uppercase leading-tight mb-5 text-[42px]" style={{ fontFamily: "var(--font-heading)" }}>
              Precios Competitivos
              <br />
              <span className="text-white">en cada compra</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pt-10"
          >
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Encuentra repuestos de calidad a precios competitivos en cada compra. Te atendemos con asesoría personalizada para que encuentres la pieza exacta para tu vehículo, con disponibilidad inmediata y el mejor valor para tu bolsillo.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. Móvil: franja de la foto entre el texto y el botón */}
      <div className="relative z-0 mt-8 h-[300px] lg:hidden">
        <img src="/images/promo-equipo-tienda.jpg" alt="Equipo de Blessing frente a su tienda" loading="lazy" className="w-full h-full object-cover object-[50%_45%]" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#3a3e45] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#3a3e45] to-transparent" />
      </div>

      <div className="pb-12 lg:pb-16" />
    </section>
  );
}
