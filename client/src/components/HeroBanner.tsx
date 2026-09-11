/* DESIGN: Banner institucional del local.
   El banner trae su texto quemado en la imagen. A ancho completo en escritorio se
   lee bien, pero por debajo de 640px queda en ~6px y es ilegible; por eso en móvil
   se recorta a la parte de la foto y las ventajas se repiten como texto real. */
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronRight, Phone, MapPin, ShieldCheck, Truck, Tag, Headphones } from "lucide-react";
import { IMAGES, COMPANY, whatsappLink } from "@/lib/constants";

const VENTAJAS = [
  { icon: ShieldCheck, label: "Productos de calidad" },
  { icon: Truck, label: "Envíos gratis" },
  { icon: Tag, label: "Precios accesibles" },
  { icon: Headphones, label: "Atención personalizada" },
];

export default function HeroBanner() {
  const [usaRespaldo, setUsaRespaldo] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section id="inicio" className="bg-neutral-950">
      <div className="relative">
      <motion.img
        initial={reduceMotion ? false : { opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        src={IMAGES.bannerLocal}
        alt={`${COMPANY.name} — Col. Kennedy, frente al Instituto Técnico Honduras. Calidad, variedad y confianza.`}
        className={
          usaRespaldo
            ? "w-full h-[clamp(240px,42vw,520px)] object-cover object-top block"
            : // En móvil se recorta al sector del local (derecha de la imagen);
              // desde sm se muestra el banner completo.
              "w-full h-[300px] object-cover object-[78%_50%] sm:h-auto sm:object-contain block"
        }
        width={3150}
        height={1103}
        fetchPriority="high"
        onError={e => {
          // Si falta banner-local.jpg, mostramos la foto del local.
          const img = e.currentTarget;
          if (img.src.endsWith(IMAGES.bannerLocal)) {
            img.src = IMAGES.heroPremium;
            setUsaRespaldo(true);
          }
        }}
      />

        {/* Enlace sobre la barra de dirección que ya trae el banner (medida sobre
            la imagen: y 78.5-90.6%, x hasta 28.7%). Solo desde sm, porque en móvil la
            imagen se recorta y esa barra no se ve. */}
        <a
          href="#ubicacion"
          aria-label="Cómo llegar: ver nuestra ubicación en el mapa"
          title="Cómo llegar"
          className="group hidden sm:flex absolute left-0 top-[78.5%] h-[12.1%] w-[28.7%] items-center justify-end pr-[1.5%] hover:bg-white/15 transition-colors"
        >
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-white shrink-0 drop-shadow group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Solo en móvil: el texto que en la imagen queda ilegible, como HTML real. */}
      <div className="sm:hidden container pt-6">
        <h1
          className="section-title text-2xl text-neutral-50 leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Auto Repuestos <span className="text-gradient-red">Blessing</span>
        </h1>
        <p className="text-amber-300 text-sm font-semibold tracking-wide mt-1">
          Calidad · Variedad · Confianza
        </p>
        <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5 mt-5">
          {VENTAJAS.map(v => (
            <li key={v.label} className="flex items-center gap-2">
              <span className="w-7 h-7 shrink-0 bg-red-700 rounded-full flex items-center justify-center">
                <v.icon className="w-3.5 h-3.5 text-white" />
              </span>
              <span className="text-neutral-200 text-[11px] font-semibold uppercase leading-tight">
                {v.label}
              </span>
            </li>
          ))}
        </ul>
        <a
          href="#ubicacion"
          className="flex items-center gap-2 mt-5 bg-red-800 hover:bg-red-700 text-white text-xs font-semibold px-3 py-2.5 transition-colors"
        >
          <MapPin className="w-4 h-4 shrink-0" />
          <span className="flex-1">Col. Kennedy, frente al Instituto Técnico Honduras</span>
          <ChevronRight className="w-4 h-4 shrink-0" />
        </a>
      </div>

      {/* Llamados a la acción: el banner es una imagen, así que los botones van en HTML */}
      <div className="container py-8 lg:py-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3"
        >
          <a
            href={whatsappLink(
              "Hola, quisiera cotizar un repuesto para mi vehículo.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 bg-red-700 hover:bg-red-600 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-xl hover:translate-y-[-2px]"
          >
            <Phone className="w-4 h-4" />
            Cotizar ahora
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#categorias"
            className="inline-flex items-center justify-center gap-2 border-2 border-neutral-700 hover:border-red-700 text-neutral-100 hover:text-red-400 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-red-950/40 hover:translate-y-[-2px]"
          >
            Ver productos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
