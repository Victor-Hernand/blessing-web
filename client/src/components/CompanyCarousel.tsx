import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IMAGES } from "@/lib/constants";

/* Fotos reales de la empresa ya incluidas en el sistema. */
const FOTOS = [
  { src: IMAGES.realTeamStore, alt: "Equipo de Blessing detrás del mostrador de la tienda", posicion: "50% 50%" },
  { src: IMAGES.realCustomerService, alt: "Atención al cliente en Auto Repuestos Blessing", posicion: "50% 50%" },
  { src: IMAGES.realSellerProducts, alt: "Vendedores con los productos de Blessing", posicion: "50% 50%" },
  { src: IMAGES.realDeliveryTeam, alt: "Equipo de entregas de Auto Repuestos Blessing", posicion: "50% 50%" },
  { src: IMAGES.realEmployeeBag, alt: "Colaborador de Blessing con sus productos", posicion: "50% 12%" },
];

export default function CompanyCarousel() {
  const [actual, setActual] = useState(0);
  const total = FOTOS.length;
  const [pausado, setPausado] = useState(false);
  const movimientoReducido =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Avance automático cada 5 s. Se detiene al pasar el cursor o enfocar, y no corre si el sistema pide menos movimiento.
  useEffect(() => {
    if (pausado || movimientoReducido) return;
    const id = window.setInterval(() => setActual((c) => (c + 1) % total), 5000);
    return () => window.clearInterval(id);
  }, [pausado, movimientoReducido, total]);

  const avanzar = (paso: number) =>
    setActual((c) => (c + paso + total) % total);

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label="Fotos de la empresa"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocus={() => setPausado(true)}
      onBlur={() => setPausado(false)}
      className="w-full max-w-md lg:ml-auto"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#171a1e]">
        {FOTOS.map((foto, k) => (
          <img
            key={foto.src}
            src={foto.src}
            alt={k === actual ? foto.alt : ""}
            loading={k === 0 ? "eager" : "lazy"}
            aria-hidden={k !== actual}
            style={{ objectPosition: foto.posicion }}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
              k === actual ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <button
          type="button"
          onClick={() => avanzar(-1)}
          aria-label="Foto anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0d0f12]/80 text-white flex items-center justify-center hover:bg-[#b7212c] transition-colors active:scale-[0.97]"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => avanzar(1)}
          aria-label="Foto siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0d0f12]/80 text-white flex items-center justify-center hover:bg-[#b7212c] transition-colors active:scale-[0.97]"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {FOTOS.map((_, k) => (
          <button
            key={k}
            type="button"
            onClick={() => setActual(k)}
            aria-label={`Ver foto ${k + 1}`}
            aria-current={k === actual}
            className={`h-2 transition-all duration-300 ${
              k === actual ? "w-6 bg-[#b7212c]" : "w-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
