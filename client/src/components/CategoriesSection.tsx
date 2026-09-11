/* DESIGN: Industrial Automotriz Premium — Categorías con tarjetas impactantes */
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cog, CircleDot, ArrowUpDown, LifeBuoy, Zap, Thermometer, Settings, Filter, Droplets, Wrench, ArrowRight, Search, X, MessageCircle, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { CATEGORIES, whatsappLink } from "@/lib/constants";

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
    <section id="categorias" className="py-20 lg:py-28 bg-neutral-950">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-red-700" />
            <span className="section-label">Nuestro catálogo</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-neutral-50">
              Categorías de <span className="text-gradient-red">Productos</span>
            </h2>
            <p className="text-neutral-400 max-w-md text-base leading-relaxed">
              Amplio inventario organizado en categorías para que encuentres exactamente lo que necesitas.
            </p>
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
              className="w-full border border-neutral-800 bg-neutral-900 focus:bg-neutral-950 pl-12 pr-12 py-4 text-sm text-neutral-100 placeholder:text-neutral-400 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all duration-300"
            />
            {isSearching && (
              <button
                onClick={() => setQuery("")}
                aria-label="Limpiar búsqueda"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-red-700 transition-colors"
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
                    className="group flex items-center gap-4 bg-neutral-900 border border-neutral-800 p-4 hover:border-red-900 hover:bg-red-950/40/30 hover:shadow-lg hover:shadow-red-100/20 transition-all duration-300"
                  >
                    <div className="w-11 h-11 shrink-0 bg-neutral-950 border border-neutral-800 flex items-center justify-center group-hover:bg-red-700 group-hover:border-red-700 transition-all duration-300 shadow-sm">
                      {Icon && <Icon className="w-5 h-5 text-red-700 group-hover:text-white transition-colors duration-300" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold text-neutral-100 group-hover:text-red-700 transition-colors truncate" style={{ fontFamily: "var(--font-heading)" }}>
                        {product}
                      </h3>
                      <p className="text-[11px] text-neutral-400 uppercase tracking-wider">{category.name}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 shrink-0 text-gray-300 group-hover:text-red-700 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="border border-dashed border-neutral-800 bg-neutral-900/50 p-10 text-center">
              <p className="text-neutral-300 mb-5">
                No listamos ese repuesto en el sitio, pero es muy probable que lo tengamos en tienda.
              </p>
              <a
                href={whatsappLink(`Hola, ¿tienen disponible: ${query.trim()}?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <MessageCircle className="w-4 h-4" />
                Consultar por WhatsApp
              </a>
            </div>
          )
        ) : (
          <>
            {/* Todas las categorías, en tarjetas del mismo tamaño (2 filas de 5) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {CATEGORIES.map((cat, i) => {
                const Icon = iconMap[cat.icon];
                return (
                  <motion.button
                    key={cat.name}
                    type="button"
                    onClick={() => setLightbox(i)}
                    aria-label={`Ver ${cat.name}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
                    className="group relative h-52 w-full text-left overflow-hidden block cursor-zoom-in"
                  >
                    {cat.image ? (
                      <>
                        <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/65 to-black/30 group-hover:from-black/95 transition-all duration-500" />
                      </>
                    ) : (
                      /* Sin foto de producto todavía: panel de marca con el ícono de la categoría */
                      <div className="absolute inset-0 bg-gradient-to-br from-red-800 to-red-950 flex items-center justify-center overflow-hidden">
                        {Icon && <Icon className="w-24 h-24 text-white/10 group-hover:scale-110 group-hover:text-white/15 transition-all duration-700" strokeWidth={1.2} />}
                      </div>
                    )}
                    <span className="absolute top-3 right-3 w-8 h-8 bg-black/45 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <ZoomIn className="w-3.5 h-3.5 text-white" />
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="w-8 h-8 shrink-0 bg-red-700/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                          {Icon && <Icon className="w-4 h-4 text-white" />}
                        </div>
                        <h3 className="text-base font-bold text-white uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
                          {cat.name}
                        </h3>
                      </div>
                      <p className="text-gray-300 text-[11px] leading-snug line-clamp-2">{cat.description}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-red-600 to-red-400 group-hover:w-full transition-all duration-500" />
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
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 lg:p-8"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Cerrar"
              className="absolute top-4 right-4 w-12 h-12 bg-neutral-950/10 flex items-center justify-center text-white hover:bg-neutral-950/20 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); step(-1); }}
              aria-label="Categoría anterior"
              className="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-neutral-950/10 flex items-center justify-center text-white hover:bg-neutral-950/20 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); step(1); }}
              aria-label="Categoría siguiente"
              className="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-neutral-950/10 flex items-center justify-center text-white hover:bg-neutral-950/20 transition-colors z-10"
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
                <h3 className="text-white font-bold text-2xl uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
                  {CATEGORIES[lightbox].name}
                </h3>
                <p className="text-neutral-400 text-sm mt-2">{CATEGORIES[lightbox].description}</p>

                <div className="flex flex-wrap justify-center gap-2 mt-5 max-h-[16vh] overflow-y-auto">
                  {CATEGORIES[lightbox].products.map((product) => (
                    <span key={product} className="bg-neutral-950/10 text-gray-200 text-xs px-3 py-1.5">
                      {product}
                    </span>
                  ))}
                </div>

                <a
                  href={whatsappLink(`Hola, quiero consultar por repuestos de ${CATEGORIES[lightbox].name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white px-7 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md"
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
