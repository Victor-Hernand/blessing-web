/* DESIGN: Zona de ofertas — réplica visual de la sección "ofertas" del index.html: fondo rojo con rayas, cinta inclinada, tickets blancos — Tema de taller */
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Zap, ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/constants";

const CINTA = ["Ofertas del mes", "Liquidación", "Hasta agotar existencias", "Precios especiales"];

const TICKETS = [
  {
    etiqueta: "Oferta del mes",
    titulo: "Mantenimiento",
    detalle: "Aceite, filtro de aceite y filtro de aire",
    imagen: "/images/oferta-cut-filtros.webp",
    mensaje: "Hola, me interesa la oferta: Mantenimiento — Aceite, filtro de aceite y filtro de aire.",
    franja: "bg-[#0d0f12] text-white",
  },
  {
    etiqueta: "Oferta del mes",
    titulo: "Suspensión",
    detalle: "Amortiguadores y rótulas",
    imagen: "/images/oferta-cut-suspension.webp",
    mensaje: "Hola, me interesa la oferta: Suspensión — Amortiguadores y rótulas.",
    franja: "bg-[#0d0f12] text-white",
  },
  {
    etiqueta: "Liquidación",
    titulo: "Liquidación",
    detalle: "Accesorios seleccionados",
    imagen: "/images/oferta-cut-accesorios.webp",
    mensaje: "Hola, me interesa la oferta: Liquidación — Accesorios seleccionados.",
    franja: "bg-[#b7212c] text-white",
  },
];

/** Fin del mes en curso, a las 23:59:59 (hora local): las ofertas son "del mes". */
function finDelMes(): Date {
  const hoy = new Date();
  return new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0, 23, 59, 59);
}

function restante(hasta: Date) {
  const ms = Math.max(0, hasta.getTime() - Date.now());
  const s = Math.floor(ms / 1000);
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

/* Rayas diagonales sobre el rojo, como el fondo de la referencia */
const FONDO_RAYAS =
  "repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 2px, transparent 2px 22px)";

export default function OffersSection() {
  const [hasta] = useState(finDelMes);
  const [tiempo, setTiempo] = useState(() => restante(hasta));

  useEffect(() => {
    const id = window.setInterval(() => setTiempo(restante(hasta)), 1000);
    return () => window.clearInterval(id);
  }, [hasta]);

  const mesFin = hasta.toLocaleDateString("es-HN", { day: "numeric", month: "long" });
  const cintaDoble = [...CINTA, ...CINTA];
  const cuenta: { k: "d" | "h" | "m" | "s"; etiqueta: string }[] = [
    { k: "d", etiqueta: "Días" },
    { k: "h", etiqueta: "Horas" },
    { k: "m", etiqueta: "Min" },
    { k: "s", etiqueta: "Seg" },
  ];

  return (
    <section
      id="ofertas"
      aria-labelledby="of-t"
      className="relative overflow-hidden bg-[#b7212c] text-white"
      style={{ backgroundImage: `${FONDO_RAYAS}, linear-gradient(160deg, #c4262f 0%, #a51d26 100%)` }}
    >
      {/* Cinta negra inclinada con texto alterno relleno / contorno */}
      <div className="relative -rotate-[1.5deg] bg-[#0d0f12] py-3 overflow-hidden" aria-hidden="true">
        <div className="flex w-max animate-marquee">
          {cintaDoble.map((t, i) => {
            const contorno = i % 2 === 1;
            return (
              <span key={i} className="flex items-center gap-6 px-6 whitespace-nowrap" style={{ fontFamily: "var(--font-heading)" }}>
                <span
                  className={`text-[26px] sm:text-[32px] font-bold uppercase tracking-wide ${contorno ? "text-transparent [-webkit-text-stroke:1px_#f4f5f7]" : "text-white"}`}
                >
                  {t}
                </span>
                <span className="w-2.5 h-2.5 bg-[#b7212c] rotate-45 shrink-0" />
              </span>
            );
          })}
        </div>
      </div>

      <div className="container py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          {/* Texto y cuenta regresiva */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <span
              className="inline-flex items-center gap-2 bg-white text-[#b7212c] text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Zap className="w-3.5 h-3.5" /> Zona de ofertas
            </span>
            <h2 id="of-t" className="font-bold uppercase text-[56px] lg:text-[84px] leading-[0.9] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="block text-white">Ofertas que</span>
              <span className="block text-[#0d0f12]">no esperan.</span>
            </h2>
            <p className="text-white/90 text-base lg:text-lg leading-relaxed max-w-md mb-8">
              Promociones del mes y liquidaciones por tiempo limitado. Cuando se acaban, se acaban.
            </p>

            <div className="flex gap-2 max-w-md" aria-label="Tiempo restante de las ofertas del mes">
              {cuenta.map((c, i) => (
                <motion.div
                  key={c.k}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                  className="flex-1 bg-[#0d0f12] py-3 text-center overflow-hidden"
                >
                  <div className="relative h-10 overflow-hidden">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.b
                        key={pad(tiempo[c.k])}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute inset-0 flex items-center justify-center text-white text-4xl"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {pad(tiempo[c.k])}
                      </motion.b>
                    </AnimatePresence>
                  </div>
                  <small className="text-neutral-400 text-[10px] uppercase tracking-widest">{c.etiqueta}</small>
                </motion.div>
              ))}
            </div>
            <p className="text-white/85 text-sm mt-4 max-w-md">Vigentes hasta el {mesFin} o hasta agotar existencias.</p>
          </motion.div>

          {/* Oferta destacada */}
          <motion.article
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative bg-[#0d0f12] shadow-2xl shadow-black/40"
          >
            <span className="absolute -top-8 -right-6 z-10 w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg" aria-hidden="true">
              <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full animate-[spin_18s_linear_infinite]">
                <defs>
                  <path id="sc-oferta" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
                </defs>
                <text className="fill-[#0d0f12] text-[11px] font-bold uppercase tracking-[0.15em]" style={{ fontFamily: "var(--font-heading)" }}>
                  <textPath href="#sc-oferta">OFERTA DEL MES · OFERTA DEL MES · </textPath>
                </text>
              </svg>
              <b className="relative w-10 h-10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#b7212c]" />
              </b>
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.1fr] items-center gap-6 p-6 lg:p-8">
              <div className="flex items-center justify-center py-4">
                <motion.img
                  src="/images/oferta-cut-frenos.webp"
                  alt="Pastillas y discos de freno"
                  loading="lazy"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full max-w-[260px] h-auto object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.6)]"
                />
              </div>
              <div>
                <small className="text-[#b7212c] text-[11px] font-bold uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-heading)" }}>Destacada</small>
                <h3 className="text-white font-bold uppercase text-[40px] lg:text-[48px] leading-[0.95] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
                  Combo<br />frenos
                </h3>
                <p className="text-neutral-300 mt-2 mb-5">Pastillas y discos para tu vehículo</p>
                <div className="flex items-center gap-4 border-y border-white/10 py-4 mb-5">
                  <span className="text-neutral-400 text-[11px] uppercase tracking-widest">Precio</span>
                  <b className="text-white text-2xl" style={{ fontFamily: "var(--font-heading)" }}>Especial</b>
                </div>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  href={whatsappLink("Hola, me interesa la oferta: Combo frenos — Pastillas y discos para tu vehículo.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 bg-[#b7212c] hover:bg-[#c92a35] text-white py-3.5 text-xs font-bold uppercase tracking-wider transition-colors active:scale-[0.97]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <MessageCircle className="w-4 h-4" /> La quiero
                </motion.a>
              </div>
            </div>
          </motion.article>
        </div>

        {/* Tickets: tarjetas blancas con franja lateral y muescas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {TICKETS.map((t, i) => (
            <motion.article
              key={t.titulo}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] }}
              className="group relative flex bg-white text-[#0d0f12] shadow-xl shadow-black/20 min-h-[210px] transition-shadow duration-300 hover:shadow-2xl"
            >
              <div className={`${t.franja} w-12 shrink-0 flex items-center justify-center`}>
                <span className="[writing-mode:vertical-rl] rotate-180 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-heading)" }}>
                  {t.etiqueta}
                </span>
              </div>
              <span className="absolute left-12 top-0 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#b7212c]" aria-hidden="true" />
              <span className="absolute left-12 bottom-0 -translate-x-1/2 translate-y-1/2 w-5 h-5 rounded-full bg-[#b7212c]" aria-hidden="true" />
              <div className="flex-1 flex p-5 gap-4 items-center">
                <div className="w-24 h-24 shrink-0 flex items-center justify-center">
                  <img src={t.imagen} alt="" loading="lazy" className="max-w-full max-h-full object-contain transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:-rotate-3" />
                </div>
                <div className="min-w-0">
                  <small className="text-[#b7212c] text-[10px] font-bold uppercase tracking-[0.18em]">{t.etiqueta}</small>
                  <h3 className="font-bold uppercase text-[24px] leading-tight mt-0.5" style={{ fontFamily: "var(--font-heading)" }}>{t.titulo}</h3>
                  <p className="text-neutral-600 text-sm leading-snug mb-2">{t.detalle}</p>
                  <a
                    href={whatsappLink(t.mensaje)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#b7212c] hover:text-[#0d0f12] text-xs font-bold uppercase tracking-wider transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> La quiero <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="text-white/70 text-xs mt-8">Contenido de ejemplo: Mercadeo define cada mes los productos, precios y vigencia.</p>
      </div>
    </section>
  );
}
