import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";

const tonePoints = [
  "Cercano y humano: habla como una persona, no como una empresa distante.",
  "Sincero: comunica con transparencia y lenguaje cotidiano.",
  "Optimista: transmite energía, confianza y soluciones.",
  "Comercial: destaca precios y beneficios sin perder calidez.",
];

export default function CommunicationToneSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(127,29,29,0.18),transparent_45%)]" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h2
                className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-neutral-50 sm:text-5xl lg:text-7xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Tono y Estilo de
                <span className="block text-gradient-red">COMUNICACIÓN</span>
              </h2>
            </div>

            <div className="mb-8 h-px w-full max-w-[580px] bg-neutral-700" />

            <p className="max-w-[760px] text-base leading-relaxed text-neutral-300 sm:text-lg">
              El tono de Blessing debe reflejar cercanía, sencillez y credibilidad, proyectando
              siempre energía positiva y confianza.
            </p>

            <div className="mt-10 max-w-[720px]">
              <h3
                className="mb-4 text-3xl font-black uppercase tracking-[-0.03em] text-neutral-50"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Tono General
              </h3>

              <p className="mb-6 text-base leading-relaxed text-neutral-300 sm:text-lg">
                El tono general es para sentar la base de la personalidad de la marca y crear la
                conexión emocional con los clientes, generando confianza y credibilidad por medio de
                una comunicación coherente.
              </p>

              <ol className="space-y-4 text-base leading-relaxed text-neutral-200 sm:text-lg">
                {tonePoints.map((point, index) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-700 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="pointer-events-none absolute -right-2 top-2 hidden h-28 w-28 rotate-45 rounded-2xl border-[10px] border-red-700/90 lg:block" />
            <div className="pointer-events-none absolute -left-2 bottom-6 hidden h-28 w-28 rotate-45 rounded-2xl border-[10px] border-red-700/90 lg:block" />

            <div className="relative overflow-hidden rounded-[28px] border border-neutral-800 bg-neutral-900 shadow-2xl shadow-black/30">
              <img
                src={IMAGES.realDeliverySingle}
                alt="Empleado de Blessing sonriendo durante la atención al cliente"
                className="h-[420px] w-full object-cover object-center sm:h-[520px] lg:h-[620px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
