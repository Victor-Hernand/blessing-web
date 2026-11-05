/* Franja de avisos en movimiento, bajo el header (como el ticker del sitio de referencia). */
const AVISOS = [
  "Envío a domicilio en Tegucigalpa",
  "Arma tu lista y recógela en tienda",
  "Más de 60 marcas de vehículos",
  "Lunes a sábado",
  "WhatsApp +504 9250-7107",
  "Precios preferenciales por volumen",
  "La calidad no es cara",
];

export default function TickerBar() {
  // Se duplica la lista: el marquee se desplaza -50%, así el bucle no se corta.
  const items = [...AVISOS, ...AVISOS];
  return (
    <div className="bg-[#b7212c] text-white overflow-hidden" aria-label="Avisos" role="region">
      <div className="flex w-max animate-marquee py-2">
        {items.map((texto, i) => (
          <span
            key={i}
            className="flex items-center gap-8 px-8 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] whitespace-nowrap"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {texto}
            <span aria-hidden="true" className="w-1.5 h-1.5 bg-white/70 rotate-45" />
          </span>
        ))}
      </div>
    </div>
  );
}
