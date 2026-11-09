/* DESIGN: Industrial Automotriz Premium — Trabaja con nosotros — Tema Oscuro */
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function CareersSection() {
  return (
    <section id="empleo" className="pt-0 pb-0 bg-metal">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#b7212c] py-5 lg:py-6"
        >
          <div className="container flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="flex items-start gap-5">
              <div className="hidden sm:flex w-12 h-12 shrink-0 bg-metal items-center justify-center">
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
                className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-[#b7212c] px-6 py-3.5 font-bold uppercase tracking-wider transition-[color,background-color,border-color,box-shadow,transform,opacity,width,height] text-sm hover:translate-y-[-2px]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Briefcase className="w-4 h-4" />
                Aplicar ahora
              </a>
              <a
                href={COMPANY.careersLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md border border-[#0077b5] bg-[#0077b5] hover:bg-[#005f91] hover:border-[#005f91] text-white px-5 py-2.5 font-bold uppercase tracking-wider drop-shadow-xl transition-[color,background-color,border-color] duration-300 text-sm"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-6 h-6 shrink-0"
                >
                  <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
