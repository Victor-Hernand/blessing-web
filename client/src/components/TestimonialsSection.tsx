/* DESIGN: Industrial Automotriz Premium — Testimonios con tarjetas elegantes */
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Carlos Martínez", role: "Taller Mecánico El Progreso", text: "Excelente servicio y precios justos. Siempre encuentro los repuestos que necesito para mi taller. Los vendedores son muy profesionales.", rating: 5 },
  { name: "María Elena López", role: "Cliente Frecuente", text: "La calidad de los productos es insuperable. Llevo más de 5 años comprando aquí y nunca me han fallado. Recomendados al 100%.", rating: 5 },
  { name: "Roberto Hernández", role: "Distribuidora Hernández", text: "Los precios al por mayor son muy competitivos. La entrega a domicilio nos ahorra mucho tiempo. Son nuestro proveedor principal.", rating: 5 },
  { name: "Ana Gabriela Reyes", role: "Propietaria de Vehículo", text: "Me encanta que tienen asesoría técnica. Me ayudaron a encontrar exactamente lo que necesitaba para mi carro. Muy amables.", rating: 5 },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-950 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-red-900 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-red-900 rounded-full blur-3xl opacity-30" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-red-700" />
            <span className="section-label">Testimonios</span>
            <div className="w-10 h-[2px] bg-red-700" />
          </div>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-neutral-50">
            Lo que dicen <span className="text-gradient-red">nuestros clientes</span>
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-neutral-900 border border-neutral-800 p-6 relative group hover:shadow-xl hover:shadow-red-950/50 hover:border-red-900 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-red-900 group-hover:text-red-700 transition-colors mb-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-neutral-300 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>

              {/* Author */}
              <div className="border-t border-neutral-800 pt-4">
                <div className="font-bold text-neutral-100 text-sm" style={{ fontFamily: "var(--font-heading)" }}>{t.name}</div>
                <div className="text-xs text-neutral-400 mt-0.5">{t.role}</div>
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-red-600 to-red-400 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
