/* DESIGN: Industrial Automotriz Premium — Propuesta de valor en tres pilares */
import { motion } from "framer-motion";
import { Gem, Package, Users } from "lucide-react";
import { VALUE_PROPS } from "@/lib/constants";

const icons = { Gem, Package, Users } as const;

export default function ValuePropsSection() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#b7212c] rounded-full blur-3xl opacity-20" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#b7212c]" />
            <span className="section-label">Por qué elegirnos</span>
            <div className="w-10 h-[2px] bg-[#b7212c]" />
          </div>
          <h2 className="section-title text-neutral-900 text-[42px]">
            Nuestra <span className="text-gradient-red">propuesta de valor</span>
          </h2>
          <p className="text-neutral-700 text-sm lg:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Tres pilares que nos diferencian en el mercado hondureño.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUE_PROPS.map((p, i) => {
            const Icon = icons[p.icon as keyof typeof icons];
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative bg-white border border-neutral-200 p-8 group shadow-sm hover:shadow-xl hover:border-[#b7212c] transition-all duration-500 hover:-translate-y-1"
              >
                {/* Barra lateral de acento */}
                <div className="absolute top-0 left-0 w-1 h-full bg-[#b7212c]" />

                <div className="w-12 h-12 bg-[#b7212c] flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3
                  className="section-title text-neutral-900 mb-2 text-[24px] lg:text-[26px] leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {p.title}
                </h3>
                <p className="text-[#b7212c] text-sm font-bold mb-3">{p.lead}</p>
                <p className="text-neutral-700 text-sm leading-relaxed">{p.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
