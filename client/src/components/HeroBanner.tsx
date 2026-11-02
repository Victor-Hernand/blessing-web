import { ChevronRight, MapPin, ShieldCheck, Truck, Tag, Headphones } from "lucide-react";
import { IMAGES, whatsappLink } from "@/lib/constants";
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
    <section id="inicio" className="bg-blueprint">
      <div>
        {/* Foto de punta a punta con el titular encima, en el lado derecho */}
        <div className="relative w-full h-[68vh] min-h-[460px] overflow-hidden border-y border-white/10 bg-[#171a1e]">
          {/* Sin recorte: se muestra la foto completa, con todo el equipo */}
          <img
            src={IMAGES.heroPremium}
            alt="Equipo de Auto Repuestos Blessing frente a su tienda"
            fetchPriority="high"
            className="img-reveal absolute inset-0 w-full h-full object-cover object-[50%_70%]"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start text-left p-6 sm:p-10 lg:p-14">
            <h1
              className="section-title text-white leading-[0.95] text-[44px] sm:text-[60px] lg:text-[80px] [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              La calidad <br />
              no es <span className="text-[#b7212c]">cara.</span>
            </h1>

            <p className="text-neutral-200 text-sm sm:text-base lg:text-lg leading-relaxed mt-4 lg:mt-6 max-w-md [text-shadow:0_1px_12px_rgba(0,0,0,0.75)]">
              Repuestos originales y alternos para tu vehículo con variedad, precios accesibles y entrega el mismo día en Tegucigalpa.
            </p>
          </div>

          <span
            className="absolute bottom-4 left-4 bg-[#b7212c] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Entrega hoy
          </span>
        </div>

      </div>

      {/* Buscador de punta a punta de la pantalla */}
      <div>
        <VehicleSelector
          value={vehiculo}
          onChange={setVehiculo}
          cotizarHref={whatsappLink(mensajeCotizar)}
        />
      </div>

      {/* Barra de confianza */}
      <div className="bg-[#171a1e] border-y border-white/10">
        <ul className="container grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5 py-6">
          {VENTAJAS.map(v => (
            <li key={v.label} className="flex items-center gap-3">
              <span className="w-10 h-10 shrink-0 border border-[#b7212c]/60 flex items-center justify-center">
                <v.icon className="w-[18px] h-[18px] text-[#b7212c]" />
              </span>
              <span className="text-white text-sm font-semibold leading-tight">
                {v.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#ubicacion"
        className="flex items-center justify-center gap-2 bg-[#b7212c] hover:bg-[#c92a35] text-white text-xs sm:text-sm font-semibold px-4 py-3 transition-colors active:scale-[0.97]"
      >
        <MapPin className="w-4 h-4 shrink-0" />
        <span>Col. Kennedy, frente al Instituto Técnico Honduras</span>
        <ChevronRight className="w-4 h-4 shrink-0" />
      </a>
    </section>
  );
}
