import { ChevronRight, MapPin, ShieldCheck, Truck, Tag, Headphones } from "lucide-react";
import { whatsappLink } from "@/lib/constants";
import { useState } from "react";
import VehicleSelector, { SELECCION_VACIA, type Seleccion } from "@/components/VehicleSelector";

const VENTAJAS = [
  { icon: ShieldCheck, label: "Productos de calidad" },
  { icon: Truck, label: "Envíos gratis" },
  { icon: Tag, label: "Precios accesibles" },
  { icon: Headphones, label: "Atención personalizada" },
];

export default function HeroBanner() {
  const [vehiculo, setVehiculo] = useState<Seleccion>(SELECCION_VACIA);
  const completo = Boolean(vehiculo.marca && vehiculo.modelo && vehiculo.anio && vehiculo.motor);
  const descripcionVehiculo = completo
    ? `${vehiculo.marca} ${vehiculo.modelo} ${vehiculo.anio} ${vehiculo.motor}`
    : "";
  const repuesto = vehiculo.tipo ? vehiculo.tipo.toLowerCase() : "repuesto";
  const mensajeCotizar = completo
    ? `Hola, quisiera cotizar ${vehiculo.tipo ? "" : "un "}${repuesto} para mi ${descripcionVehiculo}.`
    : `Hola, quisiera cotizar ${vehiculo.tipo ? "" : "un "}${repuesto} para mi vehículo.`;

  return (
    <section id="inicio" className="bg-white">
      <div className="container pt-10 lg:pt-14 text-center">
        <h1
          className="section-title text-[#1d1d1b] leading-tight text-[48px] sm:text-[60px] lg:text-[76px]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Auto Repuestos <span className="text-gradient-red">Blessing</span>
        </h1>
        <p className="text-neutral-500 text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide mt-2">
          La calidad, no es cara
        </p>
      </div>

      <VehicleSelector
        value={vehiculo}
        onChange={setVehiculo}
        cotizarHref={whatsappLink(mensajeCotizar)}
      />

      <div className="container pt-8">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-2.5">
          {VENTAJAS.map(v => (
            <li key={v.label} className="flex items-center gap-2">
              <span className="w-7 h-7 shrink-0 bg-[#b7212c] rounded-full flex items-center justify-center">
                <v.icon className="w-3.5 h-3.5 text-white" />
              </span>
              <span className="text-[#1d1d1b] text-[11px] font-semibold uppercase leading-tight">
                {v.label}
              </span>
            </li>
          ))}
        </ul>
        <a
          href="#ubicacion"
          className="flex items-center gap-2 mt-5 bg-[#b7212c] hover:bg-[#b7212c] text-white text-xs font-semibold px-3 py-2.5 transition-colors"
        >
          <MapPin className="w-4 h-4 shrink-0" />
          <span className="flex-1">Col. Kennedy, frente al Instituto Técnico Honduras</span>
          <ChevronRight className="w-4 h-4 shrink-0" />
        </a>
      </div>

    </section>
  );
}
