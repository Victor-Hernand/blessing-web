import { ChevronRight, MapPin, Store, Truck, Clock } from "lucide-react";
import { IMAGES, whatsappLink } from "@/lib/constants";
import { useState } from "react";
import { motion } from "framer-motion";
import VehicleSelector, { SELECCION_VACIA, type Seleccion } from "@/components/VehicleSelector";

/* Mismas garantías de servicio que la página de referencia */
const VENTAJAS = [
  { icon: Store, label: "Retiro en tienda" },
  { icon: Truck, label: "Envío a domicilio" },
  { icon: Clock, label: "Abierto de lunes a sábado" },
];

export default function HeroBanner() {
  const [vehiculo, setVehiculo] = useState<Seleccion>(SELECCION_VACIA);
  const completo = Boolean(vehiculo.marca && vehiculo.modelo && vehiculo.anio);
  const descripcionVehiculo = completo
    ? `${vehiculo.marca} ${vehiculo.modelo} ${vehiculo.anio}${vehiculo.vin ? ` (VIN ${vehiculo.vin})` : ""}`
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
            className="img-reveal absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Degradado oscuro a la izquierda, para que el titular se lea sobre la fachada */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f12]/90 via-[#0d0f12]/55 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-start items-start text-left p-6 pt-4 sm:p-10 sm:pt-12 lg:p-14 lg:pt-16">
            <span
              className="text-[#b7212c] text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Auto Repuestos Blessing
            </span>
            <h1
              className="section-title text-white leading-[0.95] text-[44px] sm:text-[60px] lg:text-[80px] [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              La calidad <br />
              no es <span className="text-[#b7212c]">cara.</span>
            </h1>

            <p className="text-neutral-200 text-sm sm:text-base lg:text-lg leading-relaxed mt-4 lg:mt-6 max-w-md [text-shadow:0_1px_12px_rgba(0,0,0,0.75)]">
              Repuestos para más de 60 marcas de vehículos, con asesoría experta, retiro en tienda y entrega a domicilio en Tegucigalpa.
            </p>
          </div>

          <span
            className="absolute bottom-4 left-4 bg-[#b7212c] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Desde 2016
          </span>
        </div>

      </div>

      {/* Buscador de punta a punta de la pantalla */}
      <div id="buscador">
        <VehicleSelector
          value={vehiculo}
          onChange={setVehiculo}
          cotizarHref={whatsappLink(mensajeCotizar)}
        />
      </div>

      {/* Barra de confianza */}
      <div className="bg-[#171a1e] border-y border-white/10">
        <ul className="container grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-6 py-4 sm:py-5">
          {VENTAJAS.map((v, i) => (
            <motion.li
              key={v.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="group flex items-center gap-4"
            >
              <span className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 border border-[#b7212c]/60 flex items-center justify-center transition-all duration-300 group-hover:bg-[#b7212c] group-hover:border-[#b7212c] group-hover:-translate-y-1">
                <v.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#b7212c] group-hover:text-white transition-colors duration-300" />
              </span>
              <span className="text-white text-base sm:text-lg font-semibold leading-tight transition-colors duration-300 group-hover:text-[#b7212c]">
                {v.label}
              </span>
            </motion.li>
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
