/* DESIGN: Industrial Automotriz Premium — Servicios — Tema Claro */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, ShieldCheck, Users, Clock, Wrench, HeadphonesIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import { IMAGES, COMPANY } from "@/lib/constants";

const services = [
  { icon: Truck, title: "Envío a Domicilio", desc: "Entregamos tus repuestos directamente a tu taller o domicilio en Tegucigalpa y alrededores.", image: IMAGES.realDeliverySingle },
  { icon: ShieldCheck, title: "Garantía en Productos", desc: "Todos nuestros productos cuentan con garantía de calidad. Trabajamos con marcas reconocidas.", image: IMAGES.realSellerProducts },
  { icon: Users, title: "Vendedores Especializados", desc: "Nuestro equipo de 11 vendedores expertos te asesora para encontrar el repuesto exacto.", image: IMAGES.realDeliveryTeam },
  { icon: Clock, title: "Disponibilidad Inmediata", desc: "Amplio inventario en stock para entrega inmediata. Si no lo tenemos, lo conseguimos rápido.", image: IMAGES.realEmployeeProducts },
  { icon: Wrench, title: "Asesoría Técnica", desc: "Te ayudamos a identificar la pieza correcta con asesoría técnica para tu marca y modelo.", image: IMAGES.realSellerRadio },
  { icon: HeadphonesIcon, title: "Atención Personalizada", desc: "Brindamos atención directa por WhatsApp, teléfono o en nuestra tienda física.", image: IMAGES.realCustomerService },
];

export default function ServicesSection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  /** Avanza o retrocede en el lightbox, dando la vuelta en los extremos. */
  const step = (delta: number) =>
    setLightbox((current) =>
      current === null ? current : (current + delta + services.length) % services.length,
    );

  useEffect(() => {
    if (lightbox === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  return (
    <section id="servicios" className="pt-20 lg:pt-28 pb-6 lg:pb-8 relative overflow-hidden bg-neutral-50">
      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#b7212c]" />
            <span className="text-[#b7212c] text-xs font-semibold uppercase tracking-[0.25em]" style={{ fontFamily: "var(--font-heading)" }}>
              Lo que ofrecemos
            </span>
            <div className="w-10 h-[2px] bg-[#b7212c]" />
          </div>
          <h2 className="font-bold text-[#1d1d1b] uppercase text-[42px]" style={{ fontFamily: "var(--font-heading)" }}>
            Nuestros <span className="text-[#b7212c]">Servicios</span>
          </h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden transition-all duration-500 border border-neutral-200 hover:border-[#b7212c] bg-white shadow-sm hover:shadow-lg flex flex-col"
            >
              <div className="h-1.5 w-full shrink-0 bg-[#b7212c]" />

              <div className="p-6 lg:p-7 flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-[#1d1d1b] font-bold uppercase tracking-wide text-[20px]" style={{ fontFamily: "var(--font-heading)" }}>
                    {s.title}
                  </h3>
                  <div className="w-9 h-9 shrink-0 flex items-center justify-center bg-neutral-50 border border-neutral-200 group-hover:bg-[#b7212c] group-hover:border-[#b7212c] transition-all duration-300">
                    <s.icon className="w-4 h-4 text-[#b7212c] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#b7212c] to-[#b7212c] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#1d1d1b]/95 flex items-center justify-center p-4 lg:p-8"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Cerrar"
              className="absolute top-4 right-4 w-12 h-12 bg-[#1d1d1b]/10 flex items-center justify-center text-white hover:bg-[#1d1d1b]/20 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); step(-1); }}
              aria-label="Imagen anterior"
              className="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#1d1d1b]/10 flex items-center justify-center text-white hover:bg-[#1d1d1b]/20 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); step(1); }}
              aria-label="Imagen siguiente"
              className="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#1d1d1b]/10 flex items-center justify-center text-white hover:bg-[#1d1d1b]/20 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <motion.div
              key={lightbox}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-5xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* La imagen cede altura para que el texto de abajo nunca quede cortado */}
              <img
                src={services[lightbox].image}
                alt={services[lightbox].title}
                className="w-full flex-1 min-h-0 object-contain"
              />
              <div className="mt-4 text-center shrink-0">
                <h3 className="text-[#1d1d1b] font-bold uppercase tracking-wide text-[32px]" style={{ fontFamily: "var(--font-heading)" }}>
                  {services[lightbox].title}
                </h3>
                <p className="text-neutral-500 text-sm mt-1 max-w-2xl mx-auto">{services[lightbox].desc}</p>
                <p className="text-neutral-500 text-xs mt-3 tracking-widest">{lightbox + 1} / {services.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
