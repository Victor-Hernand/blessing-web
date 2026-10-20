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
    <section id="valores" className="py-20 lg:py-28 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#b7212c]" />
            <span className="section-label">Lo que nos guía</span>
            <div className="w-10 h-[2px] bg-[#b7212c]" />
          </div>
          <h2 className="section-title text-[#1d1d1b] text-[42px]">
            Valores <span className="text-gradient-red">corporativos</span>
          </h2>
          <p className="text-neutral-700 text-sm lg:text-base mt-4 max-w-3xl mx-auto leading-relaxed">
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
                className="bg-neutral-50 border border-neutral-200 p-6 group hover:border-[#b7212c] hover:bg-[#b7212c]/5 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 shrink-0 bg-[#b7212c]/5 border border-[#b7212c]/60 flex items-center justify-center group-hover:bg-[#b7212c]/50 transition-colors">
                    <Icon className="w-5 h-5 text-[#b7212c]" />
                  </div>
                  <h3
                    className="font-bold text-[#1d1d1b] uppercase tracking-wider text-[32px]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {v.title}
                  </h3>
                </div>
                <p className="text-neutral-700 text-sm leading-relaxed">{v.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
