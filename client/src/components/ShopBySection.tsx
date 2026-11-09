/* DESIGN: Industrial Automotriz Premium — Formas de buscar (vehículo, marca de repuesto, batería) — Tema oscuro de taller */
import { useState, type KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BRANDS, whatsappLink } from "@/lib/constants";
import { MARCAS } from "@/lib/vehiculos";

const PESTANAS: { id: "vehiculo" | "marca"; label: string }[] = [
  { id: "vehiculo", label: "Por vehículo" },
  { id: "marca", label: "Por marca de repuesto" },
];

type PestanaId = (typeof PESTANAS)[number]["id"];

/* Marcas más vendidas, en el orden de la referencia */
const MARCAS_DESTACADAS = ["Toyota", "Nissan", "Honda", "Hyundai", "Kia", "Mitsubishi", "Isuzu", "Mazda", "Chevrolet", "Ford", "Suzuki", "Volkswagen"];

export default function ShopBySection() {
  const [activa, setActiva] = useState<PestanaId>("vehiculo");

  // Flechas izquierda/derecha entre pestañas, como un tablist accesible.
  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const delta = e.key === "ArrowRight" ? 1 : -1;
    const siguiente = PESTANAS[(index + delta + PESTANAS.length) % PESTANAS.length];
    setActiva(siguiente.id);
    document.getElementById(`tb-${siguiente.id}`)?.focus();
  };

  const baseTab = "flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider border-b-2 transition-colors duration-200";

  return (
    <section id="buscar" className="pt-8 lg:pt-10 pb-0 bg-[#171a1e] border-t border-white/10" aria-labelledby="sb-t">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-[#b7212c]" />
              <span className="section-label">Compra como prefieras</span>
            </div>
            <h2 id="sb-t" className="section-title text-white text-[36px] lg:text-[42px]">
              Encuentra tu pieza <span className="text-[#b7212c]">a tu manera.</span>
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-base leading-relaxed">
            Busca por la marca de tu vehículo, por la marca del repuesto o encuentra la batería exacta en segundos.
          </p>
        </motion.div>

        <div role="tablist" aria-label="Formas de buscar" className="flex flex-wrap border-b border-white/10 mb-8">
          {PESTANAS.map((p, i) => {
            const selected = activa === p.id;
            return (
              <button
                key={p.id}
                id={`tb-${p.id}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`tp-${p.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiva(p.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                style={{ fontFamily: "var(--font-heading)" }}
                className={`${baseTab} ${selected ? "border-[#b7212c] text-white" : "border-transparent text-neutral-400 hover:text-white"}`}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activa}
            role="tabpanel"
            id={`tp-${activa}`}
            aria-labelledby={`tb-${activa}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {activa === "vehiculo" && (
              <div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 border border-white/10">
                  {MARCAS_DESTACADAS.map((m) => (
                    <a
                      key={m}
                      href={whatsappLink(`Hola, busco repuestos para ${m}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-[#0d0f12] p-5 hover:bg-[#b7212c]/10 transition-colors duration-300 flex flex-col gap-3"
                    >
                      <b className="text-white uppercase tracking-wide text-lg" style={{ fontFamily: "var(--font-heading)" }}>{m}</b>
                      <span className="inline-flex items-center gap-1.5 text-[11px] text-neutral-400 group-hover:text-[#b7212c] uppercase tracking-wider transition-colors">
                        Ver repuestos <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </a>
                  ))}
                </div>
                <p className="mt-5 text-sm text-neutral-400">
                  ¿No ves tu marca? <a href="#buscador" className="text-white underline underline-offset-4 hover:text-[#b7212c]">Elige entre más de {MARCAS.length} marcas</a>, arriba en el buscador.
                </p>
              </div>
            )}

            {activa === "marca" && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 border border-white/10">
                {[...BRANDS.premium.map((b) => ({ nombre: b, premium: true })), ...BRANDS.conventional.map((b) => ({ nombre: b, premium: false }))].map((b) => (
                  <a
                    key={b.nombre}
                    href={whatsappLink(`Hola, quiero cotizar repuestos ${b.nombre}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#0d0f12] p-5 hover:bg-[#b7212c]/10 transition-colors duration-300 flex flex-col gap-2"
                  >
                    <b className="text-white uppercase tracking-wide text-lg" style={{ fontFamily: "var(--font-heading)" }}>{b.nombre}</b>
                    <small className="text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-white">
                      {b.premium ? <span className="bg-[#b7212c] px-2 py-0.5 text-white">Premium</span> : "Aliada"}
                    </small>
                  </a>
                ))}
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
