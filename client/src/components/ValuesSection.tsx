/* DESIGN: Industrial Automotriz Premium — Valores corporativos en grid */
import { motion } from "framer-motion";
import {
  Heart,
  BadgeCheck,
  Eye,
  Users,
  Leaf,
  Flame,
  Handshake,
  Scale,
  Lightbulb,
} from "lucide-react";
import { VALUES } from "@/lib/constants";

const icons = { Heart, BadgeCheck, Eye, Users, Leaf, Flame, Handshake, Scale, Lightbulb } as const;

export default function ValuesSection() {
  return (
    <section id="valores" className="py-20 lg:py-28 bg-neutral-950">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-red-700" />
            <span className="section-label">Lo que nos guía</span>
            <div className="w-10 h-[2px] bg-red-700" />
          </div>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-neutral-50">
            Valores <span className="text-gradient-red">corporativos</span>
          </h2>
          <p className="text-neutral-300 text-sm lg:text-base mt-4 max-w-3xl mx-auto leading-relaxed">
            Los principios que guían cada una de nuestras acciones, decisiones y relaciones con
            clientes, proveedores y colaboradores.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VALUES.map((v, i) => {
            const Icon = icons[v.icon as keyof typeof icons];
            return (
              <motion.article
                key={v.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.1 }}
                className="bg-neutral-900 border border-neutral-800 p-6 group hover:border-red-900 hover:bg-red-950/20 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 shrink-0 bg-red-950/60 border border-red-900/60 flex items-center justify-center group-hover:bg-red-900/50 transition-colors">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <h3
                    className="text-sm font-bold text-neutral-50 uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {v.title}
                  </h3>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed">{v.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
