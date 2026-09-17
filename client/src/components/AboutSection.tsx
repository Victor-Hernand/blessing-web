/* DESIGN: Industrial Automotriz Premium — Nosotros con fotos reales */
import { motion } from "framer-motion";
import { CheckCircle2, Users, Award, TrendingUp, Target, Eye } from "lucide-react";
import { IMAGES, COMPANY, MISSION, VISION } from "@/lib/constants";

const highlights = [
  { icon: Award, title: "Calidad Garantizada", desc: "Marcas reconocidas a nivel mundial" },
  { icon: Users, title: "46+ Colaboradores", desc: "Equipo comprometido contigo" },
  { icon: TrendingUp, title: "Precios Competitivos", desc: "Los mejores del mercado" },
];

const values = [
  "Más de 10 años de experiencia en el mercado hondureño",
  "Amplio inventario con más de 10 categorías de productos",
  "Servicio de entrega a domicilio en Tegucigalpa",
  "Asesoría técnica personalizada por vendedores expertos",
  "Alianzas con marcas premium y convencionales",
  "Atención al cliente de lunes a sábado",
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-neutral-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-900 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-900 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side - foto del local */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Imagen principal: el equipo de entrega a domicilio frente al local */}
            <div className="relative overflow-hidden shadow-2xl shadow-black/40">
              <img
                src={IMAGES.realDeliverySingle}
                alt="Equipo de entrega a domicilio de Auto Repuestos Blessing frente a la tienda"
                className="w-full h-[320px] lg:h-[420px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 left-4 lg:left-8 bg-red-700 text-white p-5 shadow-xl shadow-red-900/30"
            >
              <div className="text-3xl font-bold leading-none" style={{ fontFamily: "var(--font-heading)" }}>10+</div>
              <div className="text-[10px] uppercase tracking-wider font-medium opacity-90 mt-1">Años de<br />Experiencia</div>
            </motion.div>
            {/* Corner decorations */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-[3px] border-l-[3px] border-red-700 hidden lg:block" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-red-700" />
              <span className="section-label">Conócenos</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title text-3xl sm:text-4xl lg:text-5xl text-neutral-50 mb-6"
            >
              Sobre <span className="text-gradient-red text-shimmer">Nosotros</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-neutral-300 text-base leading-relaxed mb-4"
            >
              <strong className="text-neutral-100">Auto Repuestos Blessing</strong> es una empresa hondureña dedicada a la venta de autopartes y accesorios vehiculares. Nos hemos consolidado como referentes en el mercado gracias a nuestra amplia variedad de productos, precios accesibles y un equipo de profesionales comprometidos con brindar la mejor atención.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-amber-700 italic text-lg mb-8"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              "{COMPANY.slogan}"
            </motion.p>

            {/* Values checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-neutral-300 text-sm leading-snug">{v}</span>
                </motion.div>
              ))}
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-3 gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-neutral-900 border border-neutral-800 p-4 text-center group hover:border-red-900 hover:bg-red-950/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <h.icon className="w-6 h-6 text-red-700 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-xs font-bold text-neutral-100 uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>{h.title}</div>
                  <p className="text-[10px] text-neutral-400 mt-1 leading-tight">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20 lg:mt-28">
          {[
            { icon: Target, title: "Misión", text: MISSION },
            { icon: Eye, title: "Visión", text: VISION },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative bg-neutral-900 border border-neutral-800 p-8 lg:p-10 hover:border-red-900 hover:bg-red-950/40 hover:shadow-xl hover:shadow-red-950/50 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-red-600 to-red-400 group-hover:w-full transition-all duration-500" />
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center shadow-md shadow-red-900/20">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="section-title text-2xl lg:text-3xl text-neutral-50">{item.title}</h3>
              </div>
              <p className="text-neutral-300 text-base leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
