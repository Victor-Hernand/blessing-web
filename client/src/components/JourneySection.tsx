/* DESIGN: Industrial Automotriz Premium — "Del mostrador a tu puerta" (réplica de la sección proceso del index.html) — Tema oscuro de taller */
import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";

const CAPITULOS = [
  {
    titulo: ["Nos dices", "tu vehículo."],
    texto: "Marca, modelo, año y motor. Si lo tienes, el número VIN. Con eso empezamos a buscar la pieza exacta.",
    puntos: ["WhatsApp, teléfono o tienda", "Más de 60 marcas de vehículos"],
    imagen: "/images/real-customer-service.jpeg",
    alt: "Asesoría en mostrador",
    etiqueta: "Asesoría en mostrador",
  },
  {
    titulo: ["Confirmamos", "la pieza."],
    texto: "Un asesor especializado verifica la compatibilidad y te ofrece opciones de calidad y precio, sin rodeos.",
    puntos: ["Asesoría técnica", "Marcas premium y convencionales"],
    imagen: "/images/real-employee-products.jpeg",
    alt: "Preparación del pedido",
    etiqueta: "Preparación del pedido",
  },
  {
    titulo: ["Sale de", "nuestra tienda."],
    texto: "Preparamos tu pedido con inventario disponible para entrega inmediata. Si no lo tenemos, lo conseguimos rápido.",
    puntos: ["Inventario amplio", "Preparación ágil"],
    imagen: "/images/tienda-salida.jpg",
    alt: "Clientes y personal de Blessing en la tienda",
    etiqueta: "Delivery desde nuestra tienda",
  },
  {
    titulo: ["Llega a tu", "taller o casa."],
    texto: "Entregamos en Tegucigalpa y alrededores, o lo retiras listo y facturado en nuestra tienda.",
    puntos: ["Envío a domicilio", "Retiro en tienda"],
    imagen: "/images/entrega-domicilio.jpg",
    alt: "Motociclistas de Blessing listos para la entrega a domicilio",
    etiqueta: "Entrega a domicilio",
  },
];

/* Alto de la sección: cada capítulo ocupa una "pantalla" de scroll.
   Mientras bajas con la rueda, la parte visible (sticky) cambia de capítulo. */
const ALTO_POR_CAPITULO = 100;

export default function JourneySection() {
  const [activo, setActivo] = useState(0);
  const contenedor = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: contenedor, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const n = CAPITULOS.length;
    const indice = Math.min(n - 1, Math.max(0, Math.floor(p * n)));
    setActivo((actual) => (actual === indice ? actual : indice));
  });

  const cap = CAPITULOS[activo];

  return (
    <section
      id="proceso"
      ref={contenedor}
      aria-label="Cómo compras en Blessing"
      className="relative bg-[#0d0f12] border-t border-white/10"
      style={{ height: `${CAPITULOS.length * ALTO_POR_CAPITULO}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Texto del capítulo activo */}
          <div>
            <span className="inline-flex items-center gap-3 text-[#b7212c] text-xs font-semibold uppercase tracking-[0.25em] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="w-10 h-[2px] bg-[#b7212c]" /> Del mostrador a tu puerta
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={activo}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              >
                <span className="block text-neutral-500 text-sm font-semibold tracking-widest mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  {String(activo + 1).padStart(2, "0")} / {String(CAPITULOS.length).padStart(2, "0")}
                </span>
                <h2 className="section-title text-white text-[44px] lg:text-[60px] leading-[0.95] mb-5">
                  {cap.titulo[0]}<br /><span className="text-[#b7212c]">{cap.titulo[1]}</span>
                </h2>
                <p className="text-neutral-300 text-base lg:text-lg leading-relaxed max-w-md mb-6">{cap.texto}</p>
                <ul className="space-y-2 text-sm text-neutral-200">
                  {cap.puntos.map((p) => (
                    <li key={p} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-[#b7212c] rotate-45 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            {/* Riel de capítulos: se llena a medida que avanza el scroll */}
            <div className="flex gap-2 mt-10" role="list" aria-label="Pasos de la compra">
              {CAPITULOS.map((c, i) => (
                <div key={c.etiqueta} role="listitem" aria-current={i === activo ? "step" : undefined} className="flex-1 h-1.5 bg-white/10 overflow-hidden">
                  <motion.span
                    className="block h-full bg-[#b7212c]"
                    initial={false}
                    animate={{ width: i <= activo ? "100%" : "0%" }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Foto del capítulo activo */}
          <div className="relative aspect-[4/3] bg-[#171a1e] border-2 border-white/25 ring-1 ring-[#b7212c]/60 ring-offset-4 ring-offset-[#0d0f12] overflow-hidden isolate">
            {/* Las fotos se cruzan (fundido) y cada una crece lentamente mientras está visible */}
            <AnimatePresence initial={false}>
              <motion.img
                key={cap.imagen}
                src={cap.imagen}
                alt={cap.alt}
                loading="lazy"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1.08 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 0.9, ease: [0.23, 1, 0.32, 1] },
                  scale: { duration: 8, ease: "linear" },
                }}
                className="absolute inset-0 w-full h-full object-cover [backface-visibility:hidden] [transform:translateZ(0)]"
              />
            </AnimatePresence>
            <span
              className="absolute bottom-4 left-4 bg-[#b7212c] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {cap.etiqueta}
            </span>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
