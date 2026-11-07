/* DESIGN: Chips "Mi vehículo" y "Mi lista" del header, con su modal y panel lateral — réplica del index.html */
import { Fragment, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Car, List, X, Trash2, MessageCircle, ShoppingCart } from "lucide-react";
import { whatsappLink } from "@/lib/constants";
import IconSlideButton from "@/components/IconSlideButton";
import { MARCAS } from "@/lib/vehiculos";
import { TIENDA_HABILITADA } from "@/lib/flags";
import {
  useCotizacion, guardarVehiculo, quitarVehiculo, quitarDeLista, vaciarLista, type Vehiculo,
} from "@/lib/cotizacion-store";

const ANIO_ACTUAL = new Date().getFullYear();
const ANIOS = Array.from({ length: ANIO_ACTUAL - 2001 + 1 }, (_, i) => String(ANIO_ACTUAL - i));

const chip =
  "hidden lg:inline-flex items-center gap-2 border border-white/20 hover:border-white/60 text-white px-4 py-3 text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap";
const campo =
  "w-full bg-[#0d0f12] border border-white/15 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#b7212c] focus:ring-1 focus:ring-[#b7212c]";
const etiqueta = "block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1.5";

function Fondo({ onCerrar }: { onCerrar: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[60] bg-black/70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onCerrar}
      aria-hidden="true"
    />
  );
}

export default function CotizacionControles() {
  const { vehiculo, lista } = useCotizacion();
  const [abierto, setAbierto] = useState<"vehiculo" | "lista" | null>(null);
  const [borrador, setBorrador] = useState<Vehiculo>({ marca: "", modelo: "", anio: "", motor: "" });
  const [entrega, setEntrega] = useState("Recoger en tienda (Colonia Kennedy)");
  const [nombre, setNombre] = useState("");

  const abrirVehiculo = () => {
    setBorrador(vehiculo ?? { marca: "", modelo: "", anio: "", motor: "" });
    setAbierto("vehiculo");
  };

  const guardar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!borrador.marca) return;
    guardarVehiculo(borrador);
    setAbierto(null);
  };

  const enviarLista = (e: React.FormEvent) => {
    e.preventDefault();
    const partes = lista.map((i, n) => `${n + 1}. ${i.nombre}${i.marca ? ` (${i.marca})` : ""}`);
    const cabecera = nombre.trim() ? `Hola, soy ${nombre.trim()}.` : "Hola,";
    const veh = vehiculo ? ` Mi vehículo: ${vehiculo.marca} ${vehiculo.modelo} ${vehiculo.anio} ${vehiculo.motor}.`.replace(/\s+\./, ".") : "";
    const texto = `${cabecera} quisiera cotizar esta lista:${veh}\n${partes.join("\n")}\nEntrega: ${entrega}.`;
    window.open(whatsappLink(texto), "_blank", "noopener,noreferrer");
  };

  const etiquetaVehiculo = vehiculo ? `${vehiculo.marca} ${vehiculo.modelo}`.trim() : "Mi vehículo";

  return (
    <>
      <button type="button" className={chip} onClick={abrirVehiculo} aria-haspopup="dialog" title="Mi vehículo">
        <Car className="w-4 h-4" />
        <span className="max-w-[140px] truncate">{etiquetaVehiculo}</span>
      </button>
      <button
        type="button"
        className={`${chip} relative`}
        onClick={() => setAbierto("lista")}
        aria-haspopup="dialog"
        aria-label={`Mi lista de cotización, ${lista.length} productos`}
      >
        <List className="w-4 h-4" />
        <span>Mi lista</span>
        <b className="ml-1 min-w-[1.25rem] h-5 px-1 bg-[#1d1d1b] text-white text-[11px] flex items-center justify-center rounded-full">
          {lista.length}
        </b>
      </button>

      <AnimatePresence>
        {abierto === "vehiculo" && (
          <Fragment key="vehiculo">
<Fondo onCerrar={() => setAbierto(null)} />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="veh-t"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              className="fixed left-1/2 top-24 -translate-x-1/2 z-[70] w-[min(92vw,460px)] bg-[#171a1e] border border-white/10 p-6"
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className="text-[#b7212c] text-xs font-semibold uppercase tracking-[0.2em]">Mi vehículo</span>
                  <h2 id="veh-t" className="text-white text-2xl font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>¿Qué vehículo tienes?</h2>
                </div>
                <button type="button" onClick={() => setAbierto(null)} aria-label="Cerrar" className="text-white p-1"><X className="w-5 h-5" /></button>
              </div>
              <form onSubmit={guardar} className="space-y-4">
                <div>
                  <label htmlFor="cv-marca" className={etiqueta}>Marca</label>
                  <select id="cv-marca" className={campo} value={borrador.marca} onChange={(e) => setBorrador({ ...borrador, marca: e.target.value })} required>
                    <option value="">Seleccionar</option>
                    {MARCAS.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="cv-modelo" className={etiqueta}>Modelo</label>
                  <input id="cv-modelo" className={campo} placeholder="Ej.: Hilux" value={borrador.modelo} onChange={(e) => setBorrador({ ...borrador, modelo: e.target.value })} autoComplete="off" />
                </div>
                <div>
                  <label htmlFor="cv-anio" className={etiqueta}>Año</label>
                  <select id="cv-anio" className={campo} value={borrador.anio} onChange={(e) => setBorrador({ ...borrador, anio: e.target.value })}>
                    <option value="">Seleccionar</option>
                    {ANIOS.map((a) => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="cv-motor" className={etiqueta}>Motor <span className="normal-case tracking-normal text-neutral-500">(opcional)</span></label>
                  <input id="cv-motor" className={campo} placeholder="Ej.: 2.4 diésel" value={borrador.motor} onChange={(e) => setBorrador({ ...borrador, motor: e.target.value })} autoComplete="off" />
                </div>
                <p className="text-xs text-neutral-400">Lo guardamos en este navegador para filtrar la tienda y armar tus cotizaciones.</p>
                <div className="flex gap-3 pt-2">
                  <button type="submit" className="flex-1 bg-[#b7212c] hover:bg-[#c92a35] text-white py-3 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>Guardar vehículo</button>
                  {vehiculo && (
                    <button type="button" onClick={() => { quitarVehiculo(); setAbierto(null); }} className="border border-white/20 hover:border-white text-white px-4 py-3 text-xs font-semibold uppercase tracking-wider">Quitar</button>
                  )}
                </div>
              </form>
            </motion.div>
          </Fragment>
        )}

        {abierto === "lista" && (
          <Fragment key="lista">
<Fondo onCerrar={() => setAbierto(null)} />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-labelledby="ld-t"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-[#0d0f12] border-l border-white/10 flex flex-col"
            >
              <div className="flex items-start justify-between p-6 border-b border-white/10">
                <div>
                  <span className="text-[#b7212c] text-xs font-semibold uppercase tracking-[0.2em]">Cotización</span>
                  <h2 id="ld-t" className="text-white text-2xl font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>Mi lista</h2>
                </div>
                <button type="button" onClick={() => setAbierto(null)} aria-label="Cerrar" className="text-white p-1"><X className="w-5 h-5" /></button>
              </div>

              {vehiculo && (
                <p className="px-6 py-3 text-xs text-neutral-300 border-b border-white/10">
                  <span className="text-neutral-500 uppercase tracking-wider mr-2">Para</span>
                  {vehiculo.marca} {vehiculo.modelo} {vehiculo.anio} {vehiculo.motor}
                </p>
              )}

              <div className="flex-1 overflow-y-auto p-6">
                {lista.length === 0 ? (
                  <div className="text-center py-10">
                    <p className="text-neutral-300 mb-5">Tu lista está vacía.</p>
                    {TIENDA_HABILITADA && (
                      <IconSlideButton href="/tienda" label="Ir a la tienda" onClick={() => setAbierto(null)} icon={<ShoppingCart />} />
                    )}
                  </div>
                ) : (
                  <ul className="divide-y divide-white/10">
                    {lista.map((i) => (
                      <li key={i.id} className="flex items-center justify-between gap-3 py-3">
                        <div className="min-w-0">
                          <p className="text-sm text-white leading-snug">{i.nombre}</p>
                          {i.marca && <p className="text-[11px] uppercase tracking-wider text-neutral-400">{i.marca}</p>}
                        </div>
                        <button type="button" onClick={() => quitarDeLista(i.id)} aria-label={`Quitar ${i.nombre}`} className="text-neutral-400 hover:text-[#b7212c] p-2">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {lista.length > 0 && (
                <form onSubmit={enviarLista} className="p-6 border-t border-white/10 space-y-4">
                  <fieldset>
                    <legend className={etiqueta}>¿Cómo lo quieres?</legend>
                    <div className="grid grid-cols-2 gap-2">
                      {["Recoger en tienda (Colonia Kennedy)", "Envío a domicilio"].map((op) => (
                        <label key={op} className={`text-center text-xs cursor-pointer border px-3 py-2.5 ${entrega === op ? "border-[#b7212c] text-white bg-[#b7212c]/10" : "border-white/15 text-neutral-300"}`}>
                          <input type="radio" name="entrega" value={op} checked={entrega === op} onChange={() => setEntrega(op)} className="sr-only" />
                          {op.startsWith("Recoger") ? "Recoger en tienda" : "Envío a domicilio"}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <div>
                    <label htmlFor="cl-nombre" className={etiqueta}>Tu nombre <span className="normal-case tracking-normal text-neutral-500">(opcional)</span></label>
                    <input id="cl-nombre" className={campo} value={nombre} onChange={(e) => setNombre(e.target.value)} autoComplete="name" />
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-[#b7212c] hover:bg-[#c92a35] text-white py-3 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>
                    <MessageCircle className="w-4 h-4" /> Enviar lista por WhatsApp
                  </button>
                  <p className="text-[11px] text-neutral-500 text-center">
                    Un asesor confirma compatibilidad, precio y existencia antes de facturar. <button type="button" onClick={vaciarLista} className="underline hover:text-white">Vaciar lista</button>
                  </p>
                </form>
              )}
            </motion.aside>
          </Fragment>
        )}
      </AnimatePresence>
    </>
  );
}
