/* DESIGN: Industrial Automotriz Premium — Header sticky con transiciones */
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { COMPANY } from "@/lib/constants";
import { destino } from "@/lib/navegacion";
import CotizacionControles from "@/components/CotizacionControles";
import { TIENDA_HABILITADA } from "@/lib/flags";

/* El orden sigue el de las secciones en la página; Garantía va al final
   por ser una página aparte. */
const NAV_LINKS = [
  ...(TIENDA_HABILITADA ? [{ label: "Tienda", href: "/tienda" }] : []),
  { label: "Ofertas", href: "#ofertas" },
  { label: "Marcas", href: "#marcas" },
  { label: "Cómo comprar", href: "#proceso" },
  { label: "Sucursal", href: "#ubicacion" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contactos" },
  { label: "Garantía", href: "/garantia" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.filter(l => l.href.startsWith("#")).map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Progreso de lectura de la página, sobre la línea roja del header.
  const { scrollYProgress } = useScroll();
  const progreso = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <header
      className={`sticky top-0 z-50 transition-[color,background-color,border-color,box-shadow,transform,opacity,width,height] duration-300 border-b border-white/10 ${
        scrolled
          ? "bg-[#0d0f12]/95 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-[#0d0f12]"
      }`}
    >
      {/* Línea de acento roja + progreso de lectura */}
      <div className="relative h-[3px] bg-[#b7212c]">
        <motion.div
          style={{ scaleX: progreso, transformOrigin: "0% 50%" }}
          className="absolute inset-0 bg-amber-400"
          aria-hidden="true"
        />
      </div>

      <div className="container flex items-center justify-between h-[72px] lg:h-20">
        {/* Logo */}
        <a href={destino("#inicio")} className="flex items-center shrink-0 group" aria-label="Auto Repuestos Blessing, inicio">
          <img
            src="/images/logo-white.png"
            alt="Auto Repuestos Blessing"
            className="h-12 lg:h-14 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0 min-w-0" aria-label="Principal">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={destino(link.href)}
                className={`relative whitespace-nowrap px-2 2xl:px-3 py-2 text-[12px] 2xl:text-[13px] font-medium transition-[color,background-color,border-color,box-shadow,transform,opacity,width,height] duration-200 uppercase tracking-wider ${
                  isActive ? "text-[#b7212c]" : "text-neutral-200 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-1/2 h-[2px] bg-[#b7212c]"
                  initial={false}
                  animate={{
                    width: isActive ? "70%" : "0%",
                    x: "-50%",
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ translateX: "-50%" }}
                />
              </a>
            );
          })}
        </nav>

        {/* Redes + CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 2xl:gap-4 shrink-0">
          <CotizacionControles />
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2.5 bg-[#b7212c] text-white px-7 py-3.5 text-sm font-semibold transition-[color,background-color,border-color,box-shadow,transform,opacity,width,height] duration-300 hover:shadow-lg hover:shadow-[#b7212c]/20 uppercase tracking-wider hover:translate-y-[-1px] active:scale-[0.97]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <Phone className="w-4 h-4" />
            Cotizar
            <ChevronRight className="w-4 h-4 -mr-1" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-[#b7212c] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#0d0f12] border-t border-white/10 overflow-hidden"
          >
            <nav className="container py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={destino(link.href)}
                  onClick={() => setMobileOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-3 text-sm font-medium text-neutral-200 hover:text-white hover:bg-white/5 transition-[color,background-color,border-color,box-shadow,transform,opacity,width,height] uppercase tracking-wide border-l-2 border-transparent hover:border-[#b7212c]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 bg-[#b7212c] text-white px-4 py-3 text-sm font-semibold uppercase tracking-wider"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Phone className="w-4 h-4" />
                Cotizar Ahora
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
