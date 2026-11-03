/* DESIGN: Industrial Automotriz Premium — Categorías con tarjetas impactantes */
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cog, CircleDot, ArrowUpDown, LifeBuoy, Zap, Thermometer, Settings, Filter, Droplets, Wrench, ArrowRight, Search, X, MessageCircle, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { CATEGORIES, whatsappLink } from "@/lib/constants";
import CompanyCarousel from "@/components/CompanyCarousel";

const iconMap: Record<string, React.ElementType> = {
  Cog, CircleDot, ArrowUpDown, LifeBuoy, Zap, Thermometer, Settings, Filter, Droplets, Wrench,
};


/** Minúsculas y sin tildes, para que "direccion" encuentre "Dirección". */
const normalize = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export default function CategoriesSection() {
  const [query, setQuery] = useState("");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const term = normalize(query.trim());
  const isSearching = term.length > 0;

  const results = useMemo(() => {
    if (!isSearching) return [];
    return CATEGORIES.flatMap((cat) => {
      const categoryMatches = normalize(cat.name).includes(term);
      return cat.products
        .filter((product) => categoryMatches || normalize(product).includes(term))
        .map((product) => ({ product, category: cat }));
    });
  }, [term, isSearching]);

  /** Avanza o retrocede entre categorías, dando la vuelta en los extremos. */
  const step = (delta: number) =>
    setLightbox((current) =>
      current === null ? current : (current + delta + CATEGORIES.length) % CATEGORIES.length,
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
    <section id="categorias" className="pt-10 lg:pt-12 pb-10 lg:pb-12 bg-[#0d0f12]">
      <div className="container">
        {/* Presentación de la empresa, antes del catálogo */}
        <div className="mb-12 lg:mb-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
          <h2 className="section-title text-white text-[28px] lg:text-[36px] mb-4">
            Conoce nuestra empresa
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed text-justify mb-6">
            Auto Repuestos Blessing es una empresa hondureña dedicada a la venta de autopartes y accesorios vehiculares. Nos hemos consolidado como referentes en el mercado gracias a nuestra amplia variedad de productos, precios accesibles y un equipo de profesionales comprometidos con brindar la mejor atención.
          </p>
          <a
            href="/nosotros"
            className="group inline-flex items-center gap-2 bg-[#b7212c] hover:bg-[#c92a35] text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors active:scale-[0.97]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Conocer más sobre nosotros
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <CompanyCarousel />
          </motion.div>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#b7212c]" />
            <span className="section-label">Nuestro catálogo</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="font-bold uppercase text-white text-[44px] lg:text-[64px] leading-[0.95]" style={{ fontFamily: "var(--font-heading)" }}>
              Todo lo que tu<br /><span className="text-[#b7212c]">vehículo necesita.</span>
            </h2>
            <div className="flex flex-col gap-5 max-w-md">
              <p className="text-neutral-300 text-base leading-relaxed">
                Diez líneas de repuesto, marcas premium y convencionales, listas para tu vehículo.
              </p>
              <a
                href="/tienda"
                className="inline-flex w-fit items-center gap-2 bg-[#b7212c] hover:bg-[#c92a35] text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors active:scale-[0.97]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ver toda la tienda <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Buscador de repuestos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar repuesto: frenos, amortiguadores, dirección..."
              aria-label="Buscar repuestos"
              className="w-full border border-white/10 bg-[#171a1e] focus:bg-[#0d0f12] pl-12 pr-12 py-4 text-sm text-white placeholder:text-neutral-400 outline-none focus:border-[#b7212c] focus:ring-2 focus:ring-[#b7212c]/15 transition-[color,background-color,border-color,box-shadow,transform,opacity,width,height] duration-300"
            />
            {isSearching && (
              <button
                onClick={() => setQuery("")}
                aria-label="Limpiar búsqueda"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-[#b7212c] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          {isSearching && (
            <p className="mt-3 text-sm text-neutral-400">
              {results.length > 0
                ? `${results.length} ${results.length === 1 ? "repuesto encontrado" : "repuestos encontrados"} para «${query.trim()}»`
                : `Sin coincidencias para «${query.trim()}»`}
            </p>
          )}
        </motion.div>

        {isSearching ? (
          /* ═══ Resultados de búsqueda ═══ */
          results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {results.map(({ product, category }) => {
                const Icon = iconMap[category.icon];
                return (
                  <a
                    key={`${category.name}-${product}`}
                    href={whatsappLink(`Hola, quiero consultar por: ${product} (${category.name})`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 bg-[#171a1e] border border-white/10 p-4 hover:border-[#b7212c] hover:bg-[#b7212c]/5 hover:shadow-lg hover:shadow-[#b7212c]/50 transition-[color,background-color,border-color,box-shadow,transform,opacity,width,height] duration-300 active:scale-[0.97]"
                  >
                    <div className="w-11 h-11 shrink-0 bg-[#0d0f12] border border-white/10 flex items-center justify-center group-hover:bg-[#b7212c] group-hover:border-[#b7212c] transition-[color,background-color,border-color,box-shadow,transform,opacity,width,height] duration-300 active:scale-[0.97]">
                      {Icon && <Icon className="w-5 h-5 text-[#b7212c] group-hover:text-white transition-colors duration-300" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-white group-hover:text-[#b7212c] transition-colors truncate text-[32px]" style={{ fontFamily: "var(--font-heading)" }}>
                        {product}
                      </h3>
                      <p className="text-[11px] text-neutral-400 uppercase tracking-wider">{category.name}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 shrink-0 text-gray-300 group-hover:text-[#b7212c] group-hover:translate-x-1 transition-[color,background-color,border-color,box-shadow,transform,opacity,width,height] duration-300" />
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="border border-dashed border-white/20 bg-[#171a1e] p-10 text-center">
              <p className="text-neutral-300 mb-5">
                No listamos ese repuesto en el sitio, pero es muy probable que lo tengamos en tienda.
              </p>
              <a
                href={whatsappLink(`Hola, ¿tienen disponible: ${query.trim()}?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#b7212c] text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-[color,background-color,border-color,box-shadow,transform,opacity,width,height] duration-300 active:scale-[0.97]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <MessageCircle className="w-4 h-4" />
                Consultar por WhatsApp
              </a>
            </div>
          )
        ) : (
          <>
            {/* Bento: 10 categorías. 01 Motor ocupa 2x2; 02 Frenos ocupa 2 columnas; 03–04 van debajo; 05–10 en filas de 4. */}
            <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[260px] gap-px bg-white/10 border border-white/10">
              {CATEGORIES.map((cat, i) => {
                const clave = normalize(cat.name);
                const numero = String(i + 1).padStart(2, "0");
                const span =
                  i === 0 ? "col-span-2 row-span-2 lg:row-span-2" :
                  i === 1 ? "col-span-2" :
                  i >= 8 ? "col-span-2" : "";
                return (
                  <motion.button
                    key={cat.name}
                    type="button"
                    onClick={() => setLightbox(i)}
                    aria-label={`Ver ${cat.name}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.23, 1, 0.32, 1] }}
                    whileTap={{ scale: 0.98 }}
                    className={`group relative w-full h-full overflow-hidden bg-[#0d0f12] text-left cursor-zoom-in ${span}`}
                  >
                    {/* Brillo rojo detrás del producto */}
                    <span className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(183,33,44,0.35),transparent_60%)] opacity-70 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                    {/* Marca de agua con el nombre de la categoría */}
                    <span
                      className="absolute bottom-0 left-2 text-white/[0.05] font-bold uppercase leading-none whitespace-nowrap select-none text-[72px] lg:text-[96px]"
                      style={{ fontFamily: "var(--font-heading)" }}
                      aria-hidden="true"
                    >
                      {cat.name}
                    </span>

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="flex items-center gap-2 text-white text-[11px] tracking-[0.2em]" style={{ fontFamily: "var(--font-heading)" }}>
                        <span className="w-4 h-px bg-[#b7212c]" />{numero}
                      </span>
                      <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-500">Blessing</span>
                    </div>

                    <img
                      src={`/images/cut-${clave}.webp`}
                      alt=""
                      loading="lazy"
                      className="absolute left-1/2 top-[14%] -translate-x-1/2 h-[46%] w-auto max-w-[70%] object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-2 group-hover:scale-105"
                    />

                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10 bg-gradient-to-t from-[#0d0f12] via-[#0d0f12]/85 to-transparent">
                      <h3 className="font-bold text-white uppercase leading-tight text-[24px] lg:text-[28px] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                        {cat.name}
                      </h3>
                      <p className="text-neutral-300 text-[12px] leading-snug line-clamp-2 mb-2">{cat.description}</p>
                      <span className="inline-flex items-center gap-1.5 text-[#b7212c] group-hover:text-white text-[11px] font-bold uppercase tracking-wider transition-colors duration-300" style={{ fontFamily: "var(--font-heading)" }}>
                        Ver repuestos <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Lightbox de categoría */}
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
              aria-label="Categoría anterior"
              className="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#1d1d1b]/10 flex items-center justify-center text-white hover:bg-[#1d1d1b]/20 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); step(1); }}
              aria-label="Categoría siguiente"
              className="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#1d1d1b]/10 flex items-center justify-center text-white hover:bg-[#1d1d1b]/20 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={lightbox}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-4xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* La imagen cede altura para que el texto de abajo nunca quede cortado */}
              <img
                src={"imageFull" in CATEGORIES[lightbox] ? CATEGORIES[lightbox].imageFull : CATEGORIES[lightbox].image}
                alt={CATEGORIES[lightbox].name}
                className="w-full flex-1 min-h-0 object-contain"
              />
              <div className="mt-5 text-center shrink-0">
                <h3 className="text-white font-bold uppercase tracking-wide text-[32px]" style={{ fontFamily: "var(--font-heading)" }}>
                  {CATEGORIES[lightbox].name}
                </h3>
                <p className="text-neutral-400 text-sm mt-2">{CATEGORIES[lightbox].description}</p>

                <div className="flex flex-wrap justify-center gap-2 mt-5 max-h-[16vh] overflow-y-auto">
                  {CATEGORIES[lightbox].products.map((product) => (
                    <span key={product} className="bg-[#1d1d1b]/10 text-gray-200 text-xs px-3 py-1.5">
                      {product}
                    </span>
                  ))}
                </div>

                <a
                  href={whatsappLink(`Hola, quiero consultar por repuestos de ${CATEGORIES[lightbox].name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 bg-[#b7212c] text-white px-7 py-3 text-xs font-semibold uppercase tracking-wider transition-[color,background-color,border-color,box-shadow,transform,opacity,width,height] duration-300 active:scale-[0.97]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Consultar por WhatsApp
                </a>

                <p className="text-neutral-400 text-xs mt-5 tracking-widest">{lightbox + 1} / {CATEGORIES.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
