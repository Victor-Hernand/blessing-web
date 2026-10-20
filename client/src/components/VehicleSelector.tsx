import { ArrowRight, Phone } from "lucide-react";
import { MARCAS, TIPOS_REPUESTO, VEHICULOS } from "@/lib/vehiculos";

export type Seleccion = { marca: string; modelo: string; anio: string; motor: string; tipo: string };

export const SELECCION_VACIA: Seleccion = { marca: "", modelo: "", anio: "", motor: "", tipo: "" };

const selectClass =
  "w-full bg-white border border-neutral-300 px-3 py-2.5 text-sm text-[#1d1d1b] focus:outline-none focus:border-[#b7212c] focus:ring-1 focus:ring-[#b7212c] disabled:bg-neutral-100 disabled:text-neutral-400";

const labelClass =
  "block text-[11px] font-semibold text-white uppercase tracking-wider mb-1.5";

interface Props {
  value: Seleccion;
  onChange: (next: Seleccion) => void;
  cotizarHref: string;
}

export default function VehicleSelector({ value, onChange, cotizarHref }: Props) {
  const { marca, modelo, anio, motor, tipo } = value;
  const catalogo = marca ? VEHICULOS[marca] : undefined;
  // Marca sin catálogo: el cliente escribe modelo, año y motor.
  const libre = Boolean(marca) && !catalogo;
  const modelos = catalogo ? Object.keys(catalogo) : [];
  const detalle = catalogo && modelo ? catalogo[modelo] : undefined;
  // Años del 2001 al año actual, del más reciente al más antiguo.
  const anioActual = new Date().getFullYear();
  const anios = Array.from({ length: anioActual - 2001 + 1 }, (_, i) => anioActual - i);

  return (
    <div className="mt-6 bg-[#b7212c] py-6">
     <div className="container">
      <h2
        className="section-title text-white text-[42px]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        ¡Encuentra los repuestos ideales para tu vehículo!
      </h2>
      <p className="text-white/90 text-sm mt-1">
        Selecciona tu auto y descubre las piezas que necesita para seguir en marcha.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mt-4">
        <div>
          <label className={labelClass} htmlFor="veh-marca">Marca</label>
          <select
            id="veh-marca"
            className={selectClass}
            value={marca}
            onChange={e => onChange({ ...SELECCION_VACIA, tipo, marca: e.target.value })}
          >
            <option value="">[Seleccionar]</option>
            {MARCAS.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="veh-modelo">Modelo</label>
          {libre ? (
            <input
              id="veh-modelo"
              type="text"
              className={selectClass}
              placeholder="Escribe el modelo"
              value={modelo}
              onChange={e => onChange({ ...value, modelo: e.target.value, anio: "", motor: "" })}
            />
          ) : (
            <select
              id="veh-modelo"
              className={selectClass}
              value={modelo}
              disabled={!marca}
              onChange={e => onChange({ ...value, modelo: e.target.value, anio: "", motor: "" })}
            >
              <option value="">[Seleccionar]</option>
              {modelos.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="veh-anio">Año</label>
          {libre ? (
            <input
              id="veh-anio"
              type="number"
              inputMode="numeric"
              className={selectClass}
              placeholder="Ej. 2016"
              disabled={!modelo}
              value={anio}
              onChange={e => onChange({ ...value, anio: e.target.value })}
            />
          ) : (
            <select
              id="veh-anio"
              className={selectClass}
              value={anio}
              disabled={!modelo}
              onChange={e => onChange({ ...value, anio: e.target.value })}
            >
              <option value="">[Seleccionar]</option>
              {anios.map(a => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          )}
        </div>

        <div>
          <label className={labelClass} htmlFor="veh-motor">Motor</label>
          {libre ? (
            <input
              id="veh-motor"
              type="text"
              className={selectClass}
              placeholder="Ej. 1.8L"
              disabled={!modelo}
              value={motor}
              onChange={e => onChange({ ...value, motor: e.target.value })}
            />
          ) : (
            <select
              id="veh-motor"
              className={selectClass}
              value={motor}
              disabled={!detalle}
              onChange={e => onChange({ ...value, motor: e.target.value })}
            >
              <option value="">[Seleccionar]</option>
              {detalle?.motores.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          )}
        </div>
        <div className="col-span-2 lg:col-span-1">
          <label className={labelClass} htmlFor="veh-tipo">Tipo de repuesto</label>
          <select
            id="veh-tipo"
            className={selectClass}
            value={tipo}
            onChange={e => onChange({ ...value, tipo: e.target.value })}
          >
            <option value="">[Seleccionar]</option>
            {TIPOS_REPUESTO.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <a
          href={cotizarHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-[#b7212c] px-6 py-2.5 text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
        >
          <Phone className="w-4 h-4" />
          Cotizar
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
     </div>
    </div>
  );
}
