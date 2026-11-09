import { ArrowRight, Phone } from "lucide-react";
import { MARCAS, TIPOS_REPUESTO, VEHICULOS } from "@/lib/vehiculos";

export type Seleccion = { marca: string; modelo: string; anio: string; vin: string; tipo: string };

export const SELECCION_VACIA: Seleccion = { marca: "", modelo: "", anio: "", vin: "", tipo: "" };

const selectClass =
  "w-full bg-[#0d0f12] border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#b7212c] focus:ring-1 focus:ring-[#b7212c]";

const labelClass =
  "block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1.5";

interface Props {
  value: Seleccion;
  onChange: (next: Seleccion) => void;
  cotizarHref: string;
}

export default function VehicleSelector({ value, onChange, cotizarHref }: Props) {
  const { marca, modelo, anio, vin, tipo } = value;
  const catalogo = marca ? VEHICULOS[marca] : undefined;
  const modelos = catalogo ? Object.keys(catalogo) : [];
  // Años del 2001 al año actual, del más reciente al más antiguo.
  const anioActual = new Date().getFullYear();
  const anios = Array.from({ length: anioActual - 2001 + 1 }, (_, i) => anioActual - i);

  return (
    <div className="bg-[#171a1e] border-y border-white/10 px-4 py-6 sm:px-6 lg:px-12 lg:py-8">
      <p
        className="text-center text-[#ff5c66] text-[11px] font-medium uppercase tracking-[0.2em] mb-1"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Encuentra tu repuesto
      </p>
      <h2
        className="section-title text-center text-white text-[26px] lg:text-[32px]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        ¡Encuentra los repuestos ideales para tu vehículo!
      </h2>
      <p className="text-center text-neutral-400 text-sm mt-1">
        Selecciona tu auto o escribe sus datos y descubre las piezas que necesita para seguir en marcha.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mt-5">
        <div>
          <label className={labelClass} htmlFor="veh-marca">Marca</label>
          <input
            id="veh-marca"
            type="text"
            list="veh-marcas-lista"
            className={selectClass}
            placeholder="Escribe o selecciona"
            autoComplete="off"
            value={marca}
            onChange={e => onChange({ ...SELECCION_VACIA, tipo, marca: e.target.value })}
          />
          <datalist id="veh-marcas-lista">
            {MARCAS.map(m => (
              <option key={m} value={m} />
            ))}
          </datalist>
        </div>

        <div>
          <label className={labelClass} htmlFor="veh-modelo">Modelo</label>
          <input
            id="veh-modelo"
            type="text"
            list="veh-modelos-lista"
            className={selectClass}
            placeholder="Escribe o selecciona"
            autoComplete="off"
            value={modelo}
            onChange={e => onChange({ ...value, modelo: e.target.value, anio: "", vin: "" })}
          />
          <datalist id="veh-modelos-lista">
            {modelos.map(m => (
              <option key={m} value={m} />
            ))}
          </datalist>
        </div>

        <div>
          <label className={labelClass} htmlFor="veh-anio">Año</label>
          <input
            id="veh-anio"
            type="text"
            inputMode="numeric"
            list="veh-anios-lista"
            maxLength={4}
            className={selectClass}
            placeholder="Ej. 2016"
            autoComplete="off"
            value={anio}
            onChange={e => onChange({ ...value, anio: e.target.value.replace(/\D/g, "") })}
          />
          <datalist id="veh-anios-lista">
            {anios.map(a => (
              <option key={a} value={a} />
            ))}
          </datalist>
        </div>

        <div>
          <label className={labelClass} htmlFor="veh-vin">VIN</label>
          <input
            id="veh-vin"
            type="text"
            maxLength={17}
            className={`${selectClass} uppercase`}
            placeholder="Ej. JTDKB20U123456789"
            autoComplete="off"
            value={vin}
            onChange={e => onChange({ ...value, vin: e.target.value.toUpperCase().replace(/\s/g, "") })}
          />
        </div>

        <div className="col-span-2 lg:col-span-1">
          <label className={labelClass} htmlFor="veh-tipo">Tipo de repuesto</label>
          <input
            id="veh-tipo"
            type="text"
            list="veh-tipos-lista"
            className={selectClass}
            placeholder="Escribe o selecciona"
            autoComplete="off"
            value={tipo}
            onChange={e => onChange({ ...value, tipo: e.target.value })}
          />
          <datalist id="veh-tipos-lista">
            {TIPOS_REPUESTO.map(t => (
              <option key={t} value={t} />
            ))}
          </datalist>
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <a
          href={cotizarHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#b7212c] hover:bg-[#c92a35] text-white px-6 sm:px-10 py-3 text-sm font-bold uppercase tracking-wider transition-colors duration-300 active:scale-[0.97]"
        >
          <Phone className="w-4 h-4" />
          Cotizar por WhatsApp
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
