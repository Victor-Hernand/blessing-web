/* DESIGN: Industrial Automotriz Premium — Trabaja con nosotros — Tema Oscuro */
import { motion } from "framer-motion";
import { Briefcase, Linkedin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function CareersSection() {
  return (
    <section id="empleo" className="pt-0 pb-0 bg-white">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#b7212c] py-5 lg:py-6 shadow-2xl shadow-[#b7212c]/20"
        >
          <div className="container flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="flex items-start gap-5">
              <div className="hidden sm:flex w-12 h-12 shrink-0 bg-white items-center justify-center">
                <Briefcase className="w-6 h-6 text-[#b7212c]" />
              </div>
              <div>
                <span className="block text-xs text-white uppercase tracking-[0.2em] font-medium mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Únete al equipo
                </span>
                <h2 className="section-title text-white mb-2 text-[30px] lg:text-[34px]">
                  ¿Deseas trabajar con nosotros?
                </h2>
                <p className="text-white/80 text-sm leading-relaxed max-w-xl">
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
                className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-[#b7212c] px-6 py-3.5 font-bold uppercase tracking-wider transition-all text-sm shadow-lg shadow-black/20 hover:translate-y-[-2px]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Briefcase className="w-4 h-4" />
                Aplicar ahora
              </a>
              <a
                href={COMPANY.careersLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#b7212c] px-6 py-3.5 font-bold uppercase tracking-wider transition-all text-sm"
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
