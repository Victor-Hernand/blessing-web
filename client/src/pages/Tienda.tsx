/* DESIGN: Tienda en línea — catálogo con fotos reales de la tienda, filtros laterales como en catalogo.html — Tema oscuro de taller */
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronRight, SlidersHorizontal, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CATEGORIES, COMPANY, whatsappLink } from "@/lib/constants";
import { PRODUCTOS_TIENDA, type ProductoTienda } from "@/lib/tienda-productos";
import { alternarEnLista, useCotizacion } from "@/lib/cotizacion-store";
import RedCheckbox from "@/components/RedCheckbox";
import RedRadio from "@/components/RedRadio";
import SearchBar from "@/components/SearchBar";
import InfoGlowCard from "@/components/InfoGlowCard";

/* Marcas premium, igual que la lista PREMIUM de catalogo.html. */
const MARCAS_PREMIUM = ["Aisin", "Bosch", "Excedi", "NPW", "Three Five"];

const normalize = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/* Clave de categoría = nombre sin tildes en minúsculas (coincide con la carpeta de fotos). */
const CATEGORIAS = CATEGORIES.map((c) => ({ key: normalize(c.name), name: c.name }));

const MARCAS = Array.from(
  new Set(PRODUCTOS_TIENDA.map((p) => p.marca).filter((m): m is string => Boolean(m))),
).sort((a, b) => a.localeCompare(b, "es"));

const esPremium = (marca: string | null) => Boolean(marca && MARCAS_PREMIUM.includes(marca));

function categoriaInicial(): string {
  if (typeof window === "undefined") return "";
  const cat = new URLSearchParams(window.location.search).get("cat") ?? "";
  return CATEGORIAS.some((c) => c.key === cat) ? cat : "";
}

type Orden = "cat" | "az" | "za";

export default function Tienda() {
  const [categoria, setCategoria] = useState(categoriaInicial);
  const [marcas, setMarcas] = useState<string[]>([]);
  const [soloPremium, setSoloPremium] = useState(false);
  const [orden, setOrden] = useState<Orden>("cat");
  const [busqueda, setBusqueda] = useState("");
  const [filtrosAbiertos, setFiltrosAbiertos] = useState(false);
  const termino = normalize(busqueda.trim());
  const { lista } = useCotizacion();

  const conteoCat = useMemo(() => {
    const mapa: Record<string, number> = {};
    for (const p of PRODUCTOS_TIENDA) mapa[p.categoria] = (mapa[p.categoria] ?? 0) + 1;
    return mapa;
  }, []);

  const conteoMarca = useMemo(() => {
    const mapa: Record<string, number> = {};
    for (const p of PRODUCTOS_TIENDA) if (p.marca) mapa[p.marca] = (mapa[p.marca] ?? 0) + 1;
    return mapa;
  }, []);

  const productos = useMemo<ProductoTienda[]>(() => {
    const filtrados = PRODUCTOS_TIENDA.filter((p) => {
      if (categoria && p.categoria !== categoria) return false;
      if (marcas.length > 0 && (!p.marca || !marcas.includes(p.marca))) return false;
      if (soloPremium && !esPremium(p.marca)) return false;
      if (!termino) return true;
      return normalize(`${p.nombre} ${p.descripcion} ${p.vehiculos} ${p.marca ?? ""} ${p.categoria}`).includes(termino);
    });
    const nombreDe = (p: ProductoTienda) => p.nombre;
    if (orden === "az") return [...filtrados].sort((a, b) => nombreDe(a).localeCompare(nombreDe(b), "es"));
    if (orden === "za") return [...filtrados].sort((a, b) => nombreDe(b).localeCompare(nombreDe(a), "es"));
    return filtrados;
  }, [categoria, marcas, soloPremium, orden, termino]);

  const nombreCategoria = (clave: string) => CATEGORIAS.find((c) => c.key === clave)?.name ?? clave;
  const hayFiltros = Boolean(categoria || marcas.length || soloPremium || termino);

  const limpiar = () => {
    setCategoria("");
    setMarcas([]);
    setSoloPremium(false);
    setBusqueda("");
  };

  const toggleMarca = (m: string) =>
    setMarcas((actual) => (actual.includes(m) ? actual.filter((x) => x !== m) : [...actual, m]));

  const panelFiltros = (
    <>
      <div className="flex items-center justify-between pb-3 border-b-2 border-white/80 mb-5">
        <b className="text-white uppercase tracking-wider text-sm" style={{ fontFamily: "var(--font-heading)" }}>Filtrar</b>
        <div className="flex items-center gap-3">
          <button type="button" onClick={limpiar} className="text-[#b7212c] underline underline-offset-4 text-xs font-semibold uppercase tracking-wider hover:text-white transition-colors">
            Limpiar
          </button>
          <button type="button" onClick={() => setFiltrosAbiertos(false)} aria-label="Cerrar filtros" className="lg:hidden text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <fieldset className="mb-8">
        <legend className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 mb-3" style={{ fontFamily: "var(--font-heading)" }}>Categoría</legend>
        <div className="space-y-1">
          {[{ key: "", name: "Todas", total: PRODUCTOS_TIENDA.length }, ...CATEGORIAS.map((c) => ({ key: c.key, name: c.name, total: conteoCat[c.key] ?? 0 }))].map((c) => (
            <RedRadio key={c.key || "todas"} name="cat" value={c.key} checked={categoria === c.key} onChange={() => setCategoria(c.key)} className="py-1.5 text-sm text-neutral-200 hover:text-white">
              <span className="flex-1">{c.name}</span>
              <i className="not-italic text-xs text-neutral-500">{c.total}</i>
            </RedRadio>
          ))}
        </div>
      </fieldset>

      <fieldset className="mb-8">
        <legend className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 mb-3" style={{ fontFamily: "var(--font-heading)" }}>Marca de repuesto</legend>
        <div className="space-y-1 max-h-72 overflow-y-auto pr-1">
          {MARCAS.map((m) => (
            <RedCheckbox key={m} checked={marcas.includes(m)} onChange={() => toggleMarca(m)} className="py-1.5 text-sm text-neutral-200 hover:text-white">
              <span className="flex-1">{m}</span>
              {esPremium(m) && <span className="text-[9px] font-bold uppercase tracking-wider bg-[#b7212c] text-white px-1.5 py-0.5">Premium</span>}
              <i className="not-italic text-xs text-neutral-500">{conteoMarca[m]}</i>
            </RedCheckbox>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 mb-3" style={{ fontFamily: "var(--font-heading)" }}>Calidad</legend>
        <RedCheckbox checked={soloPremium} onChange={setSoloPremium} className="py-1.5 text-sm text-neutral-200 hover:text-white">
          Solo marcas premium
        </RedCheckbox>
      </fieldset>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0f12] text-[#f4f5f7]">
      <Header />
      <main>
        {/* Cabecera de la tienda */}
        <section className="bg-blueprint border-b border-white/10">
          <div className="container pt-4 lg:pt-6 pb-6 lg:pb-8">
            <nav aria-label="Ruta" className="flex items-center gap-2 text-xs text-neutral-400 uppercase tracking-wider mb-6">
              <a href="/" className="hover:text-white transition-colors">Inicio</a>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white" aria-current="page">Tienda en línea</span>
            </nav>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-[2px] bg-[#b7212c]" />
                  <span className="section-label">Catálogo de repuestos</span>
                </div>
                <h1 className="section-title text-white text-[44px] lg:text-[60px] leading-[0.95]">
                  Repuestos para <span className="text-[#b7212c]">tu vehículo.</span>
                </h1>
                <dl className="flex flex-wrap gap-x-8 gap-y-3 mt-6">
                  {[
                    { n: PRODUCTOS_TIENDA.length, l: "Repuestos" },
                    { n: MARCAS.length, l: "Marcas" },
                    { n: CATEGORIAS.length, l: "Categorías" },
                  ].map((d) => (
                    <div key={d.l} className="flex items-baseline gap-2">
                      <dt className="sr-only">{d.l}</dt>
                      <dd className="text-white text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>{d.n}</dd>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">{d.l}</span>
                    </div>
                  ))}
                </dl>
              </div>
              <InfoGlowCard
                title="Importante"
                text="Fotos de referencia de nuestra tienda. Precio y existencia se confirman por WhatsApp antes de facturar."
                linkHref={COMPANY.whatsapp}
                linkLabel="Consultar por WhatsApp"
              />
            </div>

            <div className="mt-8">
              <SearchBar
                id="buscar-tienda"
                value={busqueda}
                onChange={setBusqueda}
                placeholder="Busca por repuesto o marca: pastillas, Wagner, bomba de agua…"
                ariaLabel="Buscar repuesto"
              />
            </div>
          </div>
        </section>

        <section className="container py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
            {/* Filtros: lateral en escritorio; en móvil se abren con botón */}
            <aside aria-label="Filtros" className="hidden lg:block self-start sticky top-28">
              {panelFiltros}
            </aside>

            <AnimatePresence>
              {filtrosAbiertos && (
                <motion.aside
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  aria-label="Filtros"
                  className="fixed inset-y-0 left-0 z-[60] w-[86%] max-w-sm bg-[#0d0f12] border-r border-white/10 p-6 overflow-y-auto lg:hidden"
                >
                  {panelFiltros}
                </motion.aside>
              )}
            </AnimatePresence>

            <div>
              {/* Barra: conteo, filtros móviles y orden */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <p className="text-sm text-neutral-400" aria-live="polite">
                  <span className="text-white font-semibold">{productos.length}</span> {productos.length === 1 ? "repuesto" : "repuestos"}
                  {categoria && <> en <span className="text-white">{nombreCategoria(categoria)}</span></>}
                </p>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setFiltrosAbiertos(true)}
                    className="lg:hidden inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    <SlidersHorizontal className="w-4 h-4" /> Filtros
                  </button>
                  <label className="flex items-center gap-2 text-sm text-neutral-400">
                    <span className="sr-only">Ordenar</span>
                    <select
                      value={orden}
                      onChange={(e) => setOrden(e.target.value as Orden)}
                      className="bg-[#171a1e] border border-white/15 text-sm text-white px-3 py-2 focus:outline-none focus:border-[#b7212c]"
                    >
                      <option value="cat">Ordenar por categoría</option>
                      <option value="az">Nombre A–Z</option>
                      <option value="za">Nombre Z–A</option>
                    </select>
                  </label>
                </div>
              </div>

              {hayFiltros && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {categoria && <Chip texto={nombreCategoria(categoria)} onQuitar={() => setCategoria("")} />}
                  {marcas.map((m) => <Chip key={m} texto={m} onQuitar={() => toggleMarca(m)} />)}
                  {soloPremium && <Chip texto="Premium" onQuitar={() => setSoloPremium(false)} />}
                </div>
              )}

              {productos.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-px bg-white/10 border border-white/10">
                  {productos.map((p, i) => (
                    <motion.article
                      key={p.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: Math.min(i, 12) * 0.02, ease: [0.23, 1, 0.32, 1] }}
                      className="group bg-[#0d0f12] flex flex-col hover:bg-[#171a1e] transition-colors duration-300"
                    >
                      <div className="aspect-square bg-neutral-100 flex items-center justify-center overflow-hidden">
                        <img
                          src={p.imagen}
                          alt={p.nombre}
                          loading="lazy"
                          className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 lg:p-5 flex-1 flex flex-col">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] uppercase tracking-widest text-neutral-400">{nombreCategoria(p.categoria)}</span>
                          {p.marca && (
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-[#b7212c] text-white px-2 py-0.5">{p.marca}</span>
                          )}
                        </div>
                        <h2 className="text-white font-semibold text-[15px] leading-snug mb-2">{p.nombre}</h2>
                        <p className="text-neutral-400 text-xs leading-relaxed mb-3">{p.descripcion}</p>
                        <p className="text-[11px] text-neutral-300 border-l-2 border-[#b7212c] pl-2 mb-4 flex-1">
                          <span className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-0.5">Para</span>
                          {p.vehiculos}
                        </p>
                        <button
                          type="button"
                          onClick={() => alternarEnLista({ id: p.id, nombre: p.nombre, marca: p.marca })}
                          aria-pressed={lista.some((i) => i.id === p.id)}
                          className={`mb-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 active:scale-[0.97] ${
                            lista.some((i) => i.id === p.id) ? "bg-white text-[#0d0f12]" : "bg-[#b7212c] hover:bg-[#c92a35] text-white"
                          }`}
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {lista.some((i) => i.id === p.id) ? "✓ En mi lista" : "+ Agregar a mi lista"}
                        </button>
                        <a
                          href={whatsappLink(`Hola, quisiera cotizar: ${p.nombre}${p.marca ? ` (${p.marca})` : ""}.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#b7212c] hover:bg-[#b7212c] text-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 active:scale-[0.97]"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          <MessageCircle className="w-4 h-4" /> Cotizar
                        </a>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="border border-dashed border-white/20 bg-[#171a1e] p-10 text-center">
                  <h2 className="section-title text-white text-2xl mb-3">No encontramos ese repuesto en la vista previa</h2>
                  <p className="text-neutral-300 mb-6">Pero seguro lo conseguimos. Escríbenos y un asesor lo busca por ti.</p>
                  <a
                    href={whatsappLink(`Hola, ¿tienen disponible: ${busqueda.trim()}?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#b7212c] hover:bg-[#c92a35] text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors active:scale-[0.97]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    <MessageCircle className="w-4 h-4" /> Pedir por WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function Chip({ texto, onQuitar }: { texto: string; onQuitar: () => void }) {
  return (
    <button
      type="button"
      onClick={onQuitar}
      className="inline-flex items-center gap-2 bg-[#171a1e] border border-white/15 hover:border-[#b7212c] px-3 py-1.5 text-xs text-white"
    >
      {texto} <X className="w-3 h-3" />
    </button>
  );
}
