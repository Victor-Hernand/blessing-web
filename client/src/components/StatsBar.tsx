/* DESIGN: Industrial Automotriz Premium — Stats con contadores animados — Tema Claro */
import { useCountUp } from "@/hooks/useCountUp";
import { STATS } from "@/lib/constants";
import { motion } from "framer-motion";

function StatItem({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center px-4 py-8 lg:py-10 relative group"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-red-600/30 group-hover:w-16 group-hover:bg-red-600 transition-all duration-500" />
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-red-800 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
        {count}<span className="text-red-500">{suffix}</span>
      </div>
      <div className="text-neutral-400 text-[11px] sm:text-xs uppercase tracking-[0.2em] font-medium" style={{ fontFamily: "var(--font-heading)" }}>
        {label}
      </div>
    </motion.div>
  );
}

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden bg-neutral-900 border-y border-neutral-800">
      {/* Top red line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-red-600 to-transparent" />

      <div className="container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-800">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom red line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-red-600 to-transparent" />
    </section>
  );
}
