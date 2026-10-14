/* DESIGN: Industrial Automotriz Premium — Hero cinematográfico — Tema Claro */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Truck, Shield, Star, Phone } from "lucide-react";
import { COMPANY, IMAGES } from "@/lib/constants";

const features = [
  { icon: Truck, text: "Envío a Domicilio" },
  { icon: Shield, text: "Garantía en Productos" },
  { icon: Star, text: "Marcas Premium" },
];

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="inicio" className="relative min-h-[94vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with parallax */}
      <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.15}px)` }}>
        <img
          src={IMAGES.heroPremium}
          alt="Auto Repuestos Blessing Showroom"
          className="w-full h-[115%] object-cover"
        />
      </div>
      {/* Gradient overlays — strong scrim only behind the text (left), clears toward the right to reveal the storefront */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/55 to-transparent lg:via-neutral-950/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/45 via-transparent to-transparent" />

      {/* Red accent line left */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-[#b7212c] to-transparent hidden lg:block" />

      {/* Decorative hexagon pattern top-right */}
      <div className="absolute top-20 right-12 opacity-[0.08] hidden xl:block">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <polygon points="100,10 180,55 180,145 100,190 20,145 20,55" fill="none" stroke="#b7212c" strokeWidth="1"/>
          <polygon points="100,30 160,65 160,135 100,170 40,135 40,65" fill="none" stroke="#b7212c" strokeWidth="0.5"/>
          <polygon points="100,50 140,75 140,125 100,150 60,125 60,75" fill="none" stroke="#b7212c" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="container relative z-10 py-16 lg:py-0">
        <div className="max-w-2xl xl:max-w-3xl">
          {/* Location tag */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[2px] bg-[#b7212c]" />
            <span className="text-[#b7212c] text-xs font-semibold uppercase tracking-[0.3em]" style={{ fontFamily: "var(--font-heading)" }}>
              Tegucigalpa, Honduras
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-animate font-bold text-neutral-900 uppercase leading-[0.9] mb-2 text-float text-[42px]" style={{ fontFamily: "var(--font-heading)" }}>
              Auto
              <br />
              Repuestos
            </h1>
            <h1 className="text-animate text-animate-delay-1 text-shimmer font-bold uppercase leading-[0.9] text-[42px]" style={{ fontFamily: "var(--font-heading)" }}>
              Blessing
            </h1>
          </motion.div>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-animate text-animate-delay-2 text-amber-700 text-xl sm:text-2xl lg:text-[1.65rem] mt-5 mb-3 italic"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            "{COMPANY.slogan}"
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-animate text-animate-delay-3 text-neutral-700 text-base sm:text-lg max-w-lg leading-relaxed mb-8"
          >
            Más de 10 años brindando autopartes de calidad a precios justos. Amplio inventario para todas las marcas y modelos de vehículos.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 bg-[#b7212c] hover:bg-[#b7212c] text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#b7212c]/30 hover:shadow-[#b7212c]/40 hover:translate-y-[-2px]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Phone className="w-4 h-4" />
              Cotizar Ahora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#categorias"
              className="inline-flex items-center justify-center gap-2 border-2 border-neutral-200 hover:border-[#b7212c] text-neutral-900 hover:text-[#b7212c] px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-red-50 hover:translate-y-[-2px]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ver Productos
            </a>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-wrap gap-3"
          >
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-neutral-950/70 backdrop-blur-sm border border-neutral-200 px-4 py-2.5 text-xs text-neutral-800 hover:border-[#b7212c] hover:bg-red-50 transition-all duration-300 shadow-sm"
              >
                <f.icon className="w-3.5 h-3.5 text-[#b7212c]" />
                <span className="uppercase tracking-wider font-medium" style={{ fontFamily: "var(--font-heading)" }}>{f.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-neutral-500 text-[10px] uppercase tracking-[0.3em]" style={{ fontFamily: "var(--font-heading)" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-neutral-500" />
        </motion.div>
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute top-20 right-8 w-20 h-20 border-t-2 border-r-2 border-[#b7212c]/15 hidden lg:block" />
      <div className="absolute bottom-20 right-8 w-20 h-20 border-b-2 border-r-2 border-[#b7212c]/15 hidden lg:block" />
    </section>
  );
}
