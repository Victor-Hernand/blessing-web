/* DESIGN: Industrial Automotriz Premium — Trabaja con nosotros — Tema Oscuro */
import { motion } from "framer-motion";
import { Briefcase, Linkedin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function CareersSection() {
  return (
    <section id="empleo" className="pt-0 pb-20 lg:pb-28 bg-neutral-950">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-red-800 p-8 lg:p-12 shadow-2xl shadow-red-900/20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="flex items-start gap-5">
              <div className="hidden sm:flex w-12 h-12 shrink-0 bg-amber-400 items-center justify-center">
                <Briefcase className="w-6 h-6 text-red-900" />
              </div>
              <div>
                <span className="block text-xs text-amber-300 uppercase tracking-[0.2em] font-medium mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Únete al equipo
                </span>
                <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl text-white mb-3">
                  ¿Deseas trabajar con nosotros?
                </h2>
                <p className="text-red-100/80 text-sm leading-relaxed max-w-xl">
                  Conoce nuestras vacantes disponibles, aplica en línea y mantente al día con
                  las oportunidades que publicamos en LinkedIn.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={COMPANY.careersUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-red-900 px-6 py-3.5 font-bold uppercase tracking-wider transition-all text-sm shadow-lg shadow-amber-900/20 hover:translate-y-[-2px]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Briefcase className="w-4 h-4" />
                Aplicar ahora
              </a>
              <a
                href={COMPANY.careersLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/25 hover:border-amber-300 text-white hover:text-amber-300 px-6 py-3.5 font-bold uppercase tracking-wider transition-all text-sm"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
