/* DESIGN: Política de Garantía — Auto Repuestos Blessing
 * Estilo: Ejecutivo corporativo, tema claro, tipografía Oswald + Roboto
 * Sin marcas, términos hondureños, sin vehículos excluidos, techo 30 días
 * + Formulario reclamo WhatsApp, FAQ, resultado del reclamo, nota instalación, disclaimer
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, ChevronDown, AlertTriangle, CheckCircle2,
  ArrowLeft, FileText, Clock, XCircle, MessageCircle,
  Wrench, Cog, CircleDot, ArrowUpDown, Zap, Thermometer, Settings, Droplets, Filter,
  HelpCircle, Send, RefreshCw, CreditCard, ArrowRight, Info, ShieldCheck, UserCheck
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import Header from "@/components/Header";

/* ─── WARRANTY TABLE — Max 30 days, no brands, Honduran terms ─── */
const WARRANTY_TABLE = [
  { group: "Amortiguadores", icon: ArrowUpDown, items: [{ parts: "Amortiguadores delanteros y traseros", days: 30 }] },
  { group: "Suspensión y Dirección", icon: ArrowUpDown, items: [{ parts: "Tijeras, muñones, rótulas, terminales de dirección y cremallera, barras estabilizadoras, links, bujes", days: 30 }] },
  { group: "Bombas Hidráulicas", icon: Droplets, items: [{ parts: "Bomba de freno, bomba de clutch, cilindro auxiliar", days: 30 }] },
  { group: "Clutch", icon: Settings, items: [{ parts: "Disco de clutch, plato de presión, collarina, kit de clutch completo", days: 30 }] },
  { group: "Sistema de Enfriamiento", icon: Thermometer, items: [{ parts: "Bomba de agua, radiador, termostato, mangueras de radiador", days: 30 }] },
  { group: "Frenos", icon: CircleDot, items: [{ parts: "Pastillas, fricciones, discos, tambores", days: 30 }, { parts: "Bomba de rueda, caliper, manguera de freno", days: 30 }] },
  { group: "Motor", icon: Cog, items: [{ parts: "Pistones, anillos, metales de biela y bancada, empaques de culata, válvulas, guías de válvula, cadena de tiempo", days: 30 }] },
  { group: "Transmisión", icon: Settings, items: [{ parts: "Puntas de eje (homocineticas), crucetas, bujes de cardán", days: 30 }, { parts: "Bufas, ejes completos, rodamientos de rueda", days: 30 }] },
  { group: "Filtros", icon: Filter, items: [{ parts: "Filtro de aceite, filtro de aire, filtro de combustible, filtro de cabina", days: 15 }] },
  { group: "Eléctrico", icon: Zap, items: [{ parts: "Alternador, motor de arranque (marcha), sensores, bobinas, bujías, cables de bujía, switch, relay, fusibles, bomba eléctrica de gasolina", days: 15 }] },
  { group: "Lubricantes y Fluidos", icon: Droplets, items: [{ parts: "Aceite de motor, líquido de frenos, refrigerante, aceite de transmisión", days: 3 }] },
  { group: "Inyectores de combustible diésel", icon: Zap, items: [{ parts: "Inyectores de combustible diésel", days: 0, label: "No aplica garantía" }] },
  { group: "Repuestos en General", icon: Wrench, items: [{ parts: "Cualquier repuesto no especificado en las categorías anteriores", days: 15 }] },
];

/* ─── Detailed Conditions — Honduran terms ─── */
const CONDITIONS = [
  { title: "Amortiguadores", conditions: ["No aplica si el vástago presenta rayaduras o marcas por uso de tenazas o pinzas al instalar.", "No aplica si tiene golpes en su estructura o bases de fijación.", "No aplica si la falla es por soportes de amortiguador en mal estado.", "No aplica si el daño fue causado por espirales (resortes) en mal estado."] },
  { title: "Frenos", subtitle: "Discos, tambores, pastillas y fricciones", conditions: ["No cubre pastillas que hayan sido lijadas, biseladas o modificadas.", "No cubre desgaste prematuro por uso normal o por mala instalación.", "No aplica en discos dañados por usar pastillas inadecuadas.", "No cubre discos pandeados por sobrecalentamiento o enfriamiento brusco.", "No aplica si el disco o tambor fue rectificado incorrectamente."] },
  { title: "Clutch", subtitle: "Disco, plato de presión y collarina", conditions: ["La garantía solo aplica si la factura incluye: disco, plato y collarina.", "Es requisito presentar factura de rectificado de volante de motor.", "No aplica si hubo desalineación al momento de la instalación."] },
  { title: "Bombas de Freno y Clutch", conditions: ["No aplica si se usó líquido de frenos sucio o reciclado.", "No aplica si hay contaminación en el sistema hidráulico.", "No aplica si la carcasa tiene daño por tensión de faja."] },
  { title: "Suspensión y Dirección", conditions: ["No aplica si el vehículo no tiene alineación y balanceo al día.", "No aplica si el repuesto fue modificado del diseño original.", "No aplica si hay evidencia de golpes, mal uso o mala instalación."] },
  { title: "Motor", subtitle: "Pistones, anillos, metales, empaques", conditions: ["No aplica si se usó aceite fuera de la especificación del fabricante.", "No aplica si el torque aplicado fue incorrecto.", "No aplica si el motor fue mal rectificado.", "No aplica por sobrecalentamiento o sobrecarga del motor."] },
  { title: "Eléctrico", subtitle: "Alternador, marcha, sensores, bujías, bobinas", conditions: ["No aplica si la batería del vehículo está defectuosa.", "No aplica si el sistema eléctrico genera sobrecarga o cortocircuito.", "No aplica si hay contaminación externa (aceite, agua, polvo)."] },
  { title: "Sistema de Enfriamiento", subtitle: "Bomba de agua, radiador, termostato", conditions: ["No aplica si hay sarro por uso de agua corriente en vez de refrigerante.", "No aplica si hay contaminación en el sistema de enfriamiento.", "No aplica si el daño fue por sobrecalentamiento del motor."] },
];

/* ─── FAQ ─── */
const FAQ_ITEMS = [
  { q: "¿Puedo reclamar garantía sin factura?", a: "No. La factura original es el único documento que valida su compra y es requisito indispensable para cualquier reclamo de garantía. Le recomendamos guardar siempre su factura en un lugar seguro." },
  { q: "¿Qué pasa si mi mecánico instaló mal el repuesto?", a: "La garantía no cubre daños causados por mala instalación. Por eso recomendamos que la instalación sea realizada por un mecánico calificado y de confianza. Si tiene dudas sobre la instalación, nuestro equipo puede orientarle." },
  { q: "¿Puedo cambiar el repuesto por otro producto diferente?", a: "La garantía aplica únicamente para el reemplazo del mismo producto. No se realizan cambios por productos diferentes ni devoluciones en efectivo. En casos especiales, se puede otorgar un crédito en tienda." },
  { q: "¿Aplica garantía si compré el repuesto para un carro y lo puse en otro?", a: "No. La garantía solo es válida cuando el repuesto se instala en el vehículo para el cual fue vendido. Aplicar un repuesto en un vehículo diferente invalida automáticamente la cobertura." },
  { q: "¿Cuánto tiempo tardan en resolver mi reclamo?", a: "Una vez recibido el repuesto y la documentación completa, nuestro equipo evalúa el caso en un plazo de 3 a 5 días hábiles. Le notificaremos el resultado por teléfono o WhatsApp." },
  { q: "¿La garantía cubre el costo de la mano de obra del mecánico?", a: "No. La garantía cubre exclusivamente el repuesto defectuoso. Los costos de instalación, desinstalación y mano de obra son responsabilidad del cliente." },
  { q: "¿Qué hago si compré el repuesto y ya pasó el plazo de garantía?", a: "Lamentablemente, una vez vencido el plazo indicado en la tabla de garantías, no es posible realizar reclamos. Le recomendamos revisar el repuesto lo antes posible después de la instalación." },
];

/* ─── Badge color by days ─── */
function getDaysBadge(days: number) {
  if (days === 0) return { bg: "bg-neutral-800", text: "text-white" };
  if (days >= 30) return { bg: "bg-[#b7212c]", text: "text-white" };
  if (days >= 15) return { bg: "bg-neutral-700", text: "text-white" };
  return { bg: "bg-neutral-100", text: "text-neutral-900" };
}

/* ─── Accordion ─── */
function Accordion({ title, subtitle, children, index, defaultOpen = false }: { title: string; subtitle?: string; children: React.ReactNode; index: number; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className={`relative border-b border-neutral-200 ${open ? "bg-white" : "bg-white hover:bg-neutral-50"} transition-colors`}
    >
      {open && <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#b7212c]" />}
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group">
        <div className="flex items-center gap-4 min-w-0">
          <span className={`shrink-0 w-9 h-9 flex items-center justify-center text-xs font-bold tracking-wider transition-colors ${open ? "bg-[#b7212c] text-white" : "bg-neutral-100 text-neutral-700 group-hover:bg-[#b7212c]/10 group-hover:text-[#b7212c]"}`} style={{ fontFamily: "var(--font-heading)" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <span className={`text-base font-bold transition-colors ${open ? "text-[#b7212c]" : "text-neutral-900 group-hover:text-[#b7212c]"}`} style={{ fontFamily: "var(--font-heading)" }}>{title}</span>
            {subtitle && <span className="block text-xs text-neutral-500 mt-0.5">{subtitle}</span>}
          </div>
        </div>
        <div className={`shrink-0 w-8 h-8 border border-neutral-300 flex items-center justify-center transition-all duration-300 ${open ? "rotate-180 border-[#b7212c] text-[#b7212c]" : "text-neutral-600"}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <div className="px-6 pb-6 pl-[4.25rem]">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Claim Form Component ─── */
function ClaimForm() {
  const [name, setName] = useState("");
  const [invoiceNum, setInvoiceNum] = useState("");
  const [product, setProduct] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*RECLAMO DE GARANTÍA — Auto Repuestos Blessing*%0A%0A` +
      `*Nombre:* ${name}%0A` +
      `*No. Factura:* ${invoiceNum}%0A` +
      `*Producto:* ${product}%0A` +
      `*Fecha de compra:* ${purchaseDate}%0A` +
      `*Descripción del problema:*%0A${description}%0A%0A` +
      `_Enviado desde la página web de Auto Repuestos Blessing_`;
    window.open(`https://wa.me/50492507107?text=${msg}`, "_blank");
  };

  const inputBase = "w-full bg-white border border-neutral-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#b7212c] focus:ring-1 focus:ring-[#b7212c]/20 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-1.5" style={{ fontFamily: "var(--font-heading)" }}>Nombre completo</label>
          <input type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="Ej: Juan Pérez" className={inputBase} />
        </div>
        <div>
          <label className="block text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-1.5" style={{ fontFamily: "var(--font-heading)" }}>No. de factura</label>
          <input type="text" required value={invoiceNum} onChange={e => setInvoiceNum(e.target.value)} placeholder="Ej: FAC-001234" className={inputBase} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-1.5" style={{ fontFamily: "var(--font-heading)" }}>Producto / Repuesto</label>
          <input type="text" required value={product} onChange={e => setProduct(e.target.value)} placeholder="Ej: Amortiguador delantero Corolla" className={inputBase} />
        </div>
        <div>
          <label className="block text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-1.5" style={{ fontFamily: "var(--font-heading)" }}>Fecha de compra</label>
          <input type="date" required value={purchaseDate} onChange={e => setPurchaseDate(e.target.value)} className={inputBase} />
        </div>
      </div>
      <div>
        <label className="block text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-1.5" style={{ fontFamily: "var(--font-heading)" }}>Descripción del problema</label>
        <textarea required rows={3} value={description} onChange={e => setDescription(e.target.value)} placeholder="Describa brevemente qué problema presenta el repuesto..." className={`${inputBase} resize-none`} />
      </div>
      <button type="submit" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
        <Send className="w-4 h-4" />
        Enviar reclamo por WhatsApp
      </button>
      <p className="text-[11px] text-neutral-500 mt-2">
        Al presionar "Enviar", se abrirá WhatsApp con su información pre-llenada para que nuestro equipo la reciba directamente.
      </p>
    </form>
  );
}

/* ─── MAIN PAGE ─── */
export default function Garantia() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: "var(--font-body)" }}>

      <Header />

      {/* ═══ Hero — Ejecutivo Corporativo ═══ */}
      <section className="relative bg-white text-neutral-900 border-b border-neutral-200 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-neutral-50 to-white" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        </div>
        <div className="max-w-6xl mx-auto px-5 pt-8 pb-12 lg:pt-10 lg:pb-14 relative z-10">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl mx-auto flex flex-col items-center text-center">
            <h1 className="font-bold leading-[1.1] tracking-tight mb-6 text-[42px]" style={{ fontFamily: "var(--font-heading)" }}>
              Política de <span className="text-[#b7212c]">Garantía</span>
            </h1>
            <p className="text-neutral-500 text-base lg:text-lg leading-relaxed max-w-lg mx-auto">
              Respaldamos cada producto que vendemos. Aquí encontrará los términos, condiciones y tiempos de cobertura de nuestra garantía.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
              <div className="flex items-center gap-2.5 bg-white border border-neutral-200 px-4 py-2.5 shadow-sm">
                <Shield className="w-5 h-5 text-[#b7212c]" />
                <span className="text-sm text-neutral-800 font-semibold">Hasta 30 días</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white border border-neutral-200 px-4 py-2.5 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#b7212c]" />
                <span className="text-sm text-neutral-800 font-semibold">Defectos de fábrica</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white border border-neutral-200 px-4 py-2.5 shadow-sm">
                <RefreshCw className="w-5 h-5 text-[#b7212c]" />
                <span className="text-sm text-neutral-800 font-semibold">Reemplazo directo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ Nota de Instalación Profesional ═══ */}
      <section className="bg-[#b7212c] border-b border-[#b7212c]">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-start sm:items-center gap-3">
          <UserCheck className="w-5 h-5 text-white shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-[13px] text-white leading-relaxed">
            <strong className="font-bold">Recomendación importante:</strong> Para que su garantía sea válida, recomendamos que la instalación de cualquier repuesto sea realizada por un mecánico calificado. Una instalación incorrecta puede invalidar la cobertura.
          </p>
        </div>
      </section>

      {/* ═══ Cobertura General ═══ */}
      <section className="pt-16 lg:pt-20 pb-6 lg:pb-8">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Qué cubre */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white border border-neutral-200 p-7 relative overflow-hidden group hover:border-green-200 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-neutral-900" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-neutral-900 flex items-center justify-center rounded-sm">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-neutral-900 uppercase tracking-wider text-[28px] lg:text-[30px]" style={{ fontFamily: "var(--font-heading)" }}>Nuestra garantía cubre</h3>
              </div>
              <ul className="space-y-3 text-sm text-neutral-700 leading-relaxed">
                <li className="flex items-start gap-2.5"><CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-1" />Desperfectos de fábrica en todos los repuestos adquiridos en nuestra tienda.</li>
                <li className="flex items-start gap-2.5"><CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-1" />Cada producto tiene un período de garantía según su categoría, expresado en días a partir de la fecha de compra.</li>
                <li className="flex items-start gap-2.5"><CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-1" />Cobertura máxima de hasta 30 días calendario.</li>
              </ul>
            </motion.div>

            {/* Qué NO cubre */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white border border-neutral-200 p-7 relative overflow-hidden group hover:border-red-200 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#b7212c]" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#b7212c] flex items-center justify-center rounded-sm">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-neutral-900 uppercase tracking-wider text-[28px] lg:text-[30px]" style={{ fontFamily: "var(--font-heading)" }}>La garantía no cubre</h3>
              </div>
              <ul className="space-y-3 text-sm text-neutral-700 leading-relaxed">
                <li className="flex items-start gap-2.5"><XCircle className="w-3.5 h-3.5 text-[#b7212c] shrink-0 mt-1" />Modificaciones al diseño original del repuesto.</li>
                <li className="flex items-start gap-2.5"><XCircle className="w-3.5 h-3.5 text-[#b7212c] shrink-0 mt-1" />Evidencia de mal uso, golpes o rayaduras.</li>
                <li className="flex items-start gap-2.5"><XCircle className="w-3.5 h-3.5 text-[#b7212c] shrink-0 mt-1" />Mala instalación del producto.</li>
                <li className="flex items-start gap-2.5"><XCircle className="w-3.5 h-3.5 text-[#b7212c] shrink-0 mt-1" />Aplicación incorrecta o en vehículo no especificado por el fabricante.</li>
                <li className="flex items-start gap-2.5"><XCircle className="w-3.5 h-3.5 text-[#b7212c] shrink-0 mt-1" />Inyectores de combustible diésel (no aplican para garantía).</li>
                <li className="flex items-start gap-2.5"><XCircle className="w-3.5 h-3.5 text-[#b7212c] shrink-0 mt-1" />Costos de mano de obra, instalación o desinstalación.</li>
              </ul>
            </motion.div>
          </div>

          {/* ═══ Observaciones ═══ */}
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 w-screen relative left-1/2 -translate-x-1/2 bg-[#b7212c] py-8 overflow-hidden">
            <div className="max-w-6xl mx-auto px-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/15 flex items-center justify-center rounded-sm">
                <Info className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-white uppercase tracking-wider text-[32px]" style={{ fontFamily: "var(--font-heading)" }}>Presentamos las observaciones</h3>
            </div>
            <ul className="space-y-3 text-sm text-white/95 leading-relaxed">
              <li className="flex items-start gap-2.5"><CircleDot className="w-3.5 h-3.5 text-white shrink-0 mt-1" />Los lubricantes y fluidos cuentan con un plazo máximo de 3 días para su devolución o reclamo, siempre y cuando conserven su sello de fábrica intacto.</li>
              <li className="flex items-start gap-2.5"><CircleDot className="w-3.5 h-3.5 text-white shrink-0 mt-1" />Se añade la categoría de inyectores de combustible diésel, los cuales no aplican para garantía.</li>
              <li className="flex items-start gap-2.5"><CircleDot className="w-3.5 h-3.5 text-white shrink-0 mt-1" />Todos los productos, especialmente las partes mecánicas, cuentan con una garantía máxima de 5,000 km o 30 días, lo que ocurra primero.</li>
            </ul>
            </div>
          </motion.div>

          {/* ═══ Resultado del Reclamo ═══ */}
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 bg-white border border-neutral-200 p-7 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#b7212c]" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#b7212c]/10 flex items-center justify-center rounded-sm">
                <ShieldCheck className="w-5 h-5 text-[#b7212c]" />
              </div>
              <h3 className="font-bold text-neutral-900 uppercase tracking-wider text-[32px]" style={{ fontFamily: "var(--font-heading)" }}>¿Qué sucede cuando se aprueba la garantía?</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#b7212c]/10 flex items-center justify-center shrink-0 rounded-sm">
                  <RefreshCw className="w-3.5 h-3.5 text-[#b7212c]" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-neutral-900" style={{ fontFamily: "var(--font-heading)" }}>Reemplazo del producto</p>
                  <p className="text-[12px] text-neutral-500 mt-0.5">Se le entrega un repuesto nuevo del mismo tipo y especificación.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#b7212c]/10 flex items-center justify-center shrink-0 rounded-sm">
                  <CreditCard className="w-3.5 h-3.5 text-[#b7212c]" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-neutral-900" style={{ fontFamily: "var(--font-heading)" }}>Crédito en tienda</p>
                  <p className="text-[12px] text-neutral-500 mt-0.5">En casos especiales, se otorga un crédito equivalente para usar en nuestra tienda.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#b7212c]/10 flex items-center justify-center shrink-0 rounded-sm">
                  <Clock className="w-3.5 h-3.5 text-[#b7212c]" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-neutral-900" style={{ fontFamily: "var(--font-heading)" }}>Tiempo de evaluación</p>
                  <p className="text-[12px] text-neutral-500 mt-0.5">El proceso de evaluación toma de 3 a 5 días hábiles después de recibir el repuesto.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ Tabla de Garantías ═══ */}
      <section className="pt-6 lg:pt-8 pb-6 lg:pb-8 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-px h-8 bg-[#b7212c]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#b7212c] uppercase" style={{ fontFamily: "var(--font-heading)" }}>Tabla de Garantías</span>
            </div>
            <h2 className="font-bold text-neutral-900 tracking-tight text-[42px]" style={{ fontFamily: "var(--font-heading)" }}>Tiempos de cobertura por producto</h2>
            <p className="text-neutral-500 mt-2 text-sm">Todos los períodos se expresan en días calendario a partir de la fecha de compra.</p>
          </motion.div>

          <div className="bg-white border border-neutral-200 overflow-hidden">
            <div className="hidden sm:grid grid-cols-12 bg-neutral-100 text-neutral-900 text-[11px] font-semibold uppercase tracking-[0.15em] py-4 px-6" style={{ fontFamily: "var(--font-heading)" }}>
              <div className="col-span-3">Categoría</div>
              <div className="col-span-6">Repuestos incluidos</div>
              <div className="col-span-3 text-center">Garantía</div>
            </div>
            {WARRANTY_TABLE.map((group, gi) => (
              group.items.map((item, ii) => (
                <motion.div key={`${gi}-${ii}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: gi * 0.03 }} className="grid grid-cols-1 sm:grid-cols-12 border-b border-neutral-200 hover:bg-neutral-900/50 transition-colors">
                  {ii === 0 ? (
                    <div className="col-span-3 px-6 py-4 flex items-center gap-3 border-b sm:border-b-0 sm:border-r border-neutral-200">
                      <group.icon className="w-4 h-4 text-[#b7212c] shrink-0" />
                      <span className="text-[13px] font-bold text-neutral-900 uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>{group.group}</span>
                    </div>
                  ) : (
                    <div className="hidden sm:block col-span-3 px-6 py-4 border-r border-neutral-200" />
                  )}
                  <div className="col-span-6 px-6 py-4 flex items-center border-b sm:border-b-0 sm:border-r border-neutral-200">
                    <p className="text-[13px] text-neutral-700 leading-relaxed">{item.parts}</p>
                  </div>
                  <div className="col-span-3 px-6 py-4 flex items-center justify-center">
                    <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 text-[13px] font-bold ${getDaysBadge(item.days).bg} ${getDaysBadge(item.days).text}`} style={{ fontFamily: "var(--font-heading)" }}>
                      <Clock className="w-3 h-3" />{"label" in item && item.label ? item.label : `${item.days} días`}
                    </span>
                  </div>
                </motion.div>
              ))
            ))}
          </div>
          <div className="flex items-center gap-5 mt-5 text-xs text-neutral-500">
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-[#b7212c] rounded-sm" /> 30 días</div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-neutral-700 rounded-sm" /> 30 días</div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-neutral-100 rounded-sm" /> 15 días</div>
          </div>
        </div>
      </section>

      {/* ═══ Condiciones Detalladas ═══ */}
      <section className="pt-6 lg:pt-8 pb-12 lg:pb-16">
        <div className="max-w-6xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-px h-8 bg-[#b7212c]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#b7212c] uppercase" style={{ fontFamily: "var(--font-heading)" }}>Condiciones Específicas</span>
            </div>
            <h2 className="font-bold text-neutral-900 tracking-tight text-[42px]" style={{ fontFamily: "var(--font-heading)" }}>Exclusiones por categoría</h2>
            <p className="text-neutral-500 mt-2 text-sm">Seleccione una categoría para ver las condiciones que invalidan el reclamo de garantía.</p>
          </motion.div>
          <div className="bg-white border border-neutral-200 overflow-hidden">
            {CONDITIONS.map((cond, i) => (
              <Accordion key={cond.title} title={cond.title} subtitle={cond.subtitle} index={i}>
                <p className="text-[11px] font-semibold text-[#b7212c] uppercase tracking-[0.15em] mb-3" style={{ fontFamily: "var(--font-heading)" }}>La garantía no procede cuando:</p>
                <ul className="space-y-2.5">
                  {cond.conditions.map((c, ci) => (
                    <li key={ci} className="flex items-start gap-3 text-[13px] text-neutral-700 leading-relaxed">
                      <span className="text-red-300 mt-1.5 text-[8px]">&#9679;</span>{c}
                    </li>
                  ))}
                </ul>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Proceso de Reclamo — 3 pasos ═══ */}
      <section className="pt-6 lg:pt-8 pb-12 lg:pb-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-px h-8 bg-[#b7212c]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#b7212c] uppercase" style={{ fontFamily: "var(--font-heading)" }}>Proceso de Reclamo</span>
            </div>
            <h2 className="font-bold text-neutral-900 tracking-tight text-[42px]" style={{ fontFamily: "var(--font-heading)" }}>¿Cómo hacer válida su garantía?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-white border border-neutral-200 overflow-hidden">
            {[
              { icon: FileText, num: "01", title: "Presente su factura", desc: "Lleve su comprobante de compra original con la fecha de adquisición del producto. Sin factura no se puede procesar ningún reclamo." },
              { icon: Wrench, num: "02", title: "Traiga el repuesto", desc: "Presente el repuesto defectuoso junto con su identidad en nuestra tienda o inicie el proceso por WhatsApp." },
              { icon: Clock, num: "03", title: "Dentro del plazo", desc: "El reclamo debe presentarse dentro del período indicado en la tabla. El tiempo de evaluación es de 3 a 5 días hábiles." },
            ].map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`p-8 relative ${i < 2 ? "border-b md:border-b-0 md:border-r border-neutral-200" : ""}`}>
                <span className="absolute top-6 right-6 text-5xl font-bold text-neutral-400" style={{ fontFamily: "var(--font-heading)" }}>{step.num}</span>
                <div className="w-10 h-10 bg-[#b7212c] flex items-center justify-center mb-5"><step.icon className="w-4 h-4 text-white" /></div>
                <h3 className="font-bold text-neutral-900 uppercase tracking-wide mb-2 text-[32px]" style={{ fontFamily: "var(--font-heading)" }}>{step.title}</h3>
                <p className="text-[13px] text-neutral-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Formulario de Reclamo por WhatsApp ═══ */}
      <section className="pt-6 lg:pt-8 pb-12 lg:pb-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-px h-8 bg-[#b7212c]" />
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-[#b7212c] uppercase" style={{ fontFamily: "var(--font-heading)" }}>Reclamo en Línea</span>
                </div>
                <h2 className="font-bold text-neutral-900 tracking-tight mb-4 text-[42px]" style={{ fontFamily: "var(--font-heading)" }}>Inicie su reclamo por WhatsApp</h2>
                <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                  Complete el formulario y su información será enviada directamente a nuestro equipo de atención por WhatsApp. Recibirá respuesta en un plazo de 24 horas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-neutral-50 flex items-center justify-center shrink-0 rounded-sm"><FileText className="w-3.5 h-3.5 text-neutral-700" /></div>
                    <div>
                      <p className="text-[13px] font-semibold text-neutral-800">Tenga a mano su factura</p>
                      <p className="text-[12px] text-neutral-500">Necesitará el número de factura y la fecha de compra.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-neutral-50 flex items-center justify-center shrink-0 rounded-sm"><MessageCircle className="w-3.5 h-3.5 text-neutral-700" /></div>
                    <div>
                      <p className="text-[13px] font-semibold text-neutral-800">Respuesta rápida</p>
                      <p className="text-[12px] text-neutral-500">Nuestro equipo le contactará para coordinar la evaluación.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-neutral-50 border border-neutral-200 p-7">
                <ClaimForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="pt-6 lg:pt-8 pb-12 lg:pb-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-px h-8 bg-[#b7212c]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#b7212c] uppercase" style={{ fontFamily: "var(--font-heading)" }}>Preguntas Frecuentes</span>
            </div>
            <h2 className="font-bold text-neutral-900 tracking-tight text-[42px]" style={{ fontFamily: "var(--font-heading)" }}>Dudas sobre garantías</h2>
            <p className="text-neutral-500 mt-2 text-sm">Respuestas a las consultas más comunes de nuestros clientes.</p>
          </motion.div>
          <div className="bg-white border border-neutral-200 overflow-hidden">
            {FAQ_ITEMS.map((faq, i) => (
              <Accordion key={i} title={faq.q} index={i}>
                <p className="text-sm text-neutral-600 leading-relaxed">{faq.a}</p>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Disclaimer Legal ═══ */}
      <section className="bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-5 py-6">
          <div className="flex items-start gap-3">
            <Info className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
            <div className="text-[12px] text-neutral-500 leading-relaxed space-y-1.5">
              <p>
                <strong className="text-neutral-700">Aviso legal:</strong> Auto Repuestos Blessing se reserva el derecho de inspeccionar y evaluar cualquier producto antes de aprobar un reclamo de garantía. El tiempo de evaluación es de 3 a 5 días hábiles a partir de la recepción del repuesto y la documentación completa.
              </p>
              <p>
                La garantía aplica exclusivamente para repuestos adquiridos directamente en Auto Repuestos Blessing y presentados con factura original vigente. No se aceptan reclamos sin comprobante de compra. Los términos y condiciones de esta política pueden ser actualizados sin previo aviso.
              </p>
              <p>
                Última actualización: {new Date().toLocaleDateString("es-HN", { year: "numeric", month: "long", day: "numeric" })}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-10 lg:py-12 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-white flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="font-bold tracking-tight text-[30px] lg:text-[34px] text-white" style={{ fontFamily: "var(--font-heading)" }}>¿Tiene más dudas sobre su garantía?</h3>
              <p className="text-white/70 text-sm mt-2">Contáctenos por WhatsApp o visítenos directamente en nuestra tienda.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#b7212c] hover:opacity-90 text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-opacity shadow-lg" style={{ fontFamily: "var(--font-heading)" }}>
                <MessageCircle className="w-4 h-4" />WhatsApp
              </a>
              <a href="/" className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-neutral-900 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                <ArrowLeft className="w-4 h-4" />Inicio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="bg-[#b7212c] text-white/80 py-6">
        <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>&copy; {new Date().getFullYear()} <span className="text-white font-semibold">{COMPANY.name}</span>. Todos los derechos reservados.</p>
          <p>{COMPANY.phone}</p>
        </div>
      </footer>
    </div>
  );
}
