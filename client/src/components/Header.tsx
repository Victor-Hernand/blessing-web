/* DESIGN: Industrial Automotriz Premium — Header sticky con transiciones */
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { COMPANY } from "@/lib/constants";

/* El orden sigue el de las secciones en la página; Garantía va al final
   por ser una página aparte. */
const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Categorías", href: "#categorias" },
  { label: "Servicios", href: "#servicios" },
  { label: "Marcas", href: "#marcas" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
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
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-neutral-900/95 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-neutral-900 shadow-md"
      }`}
    >
      {/* Línea de acento roja + progreso de lectura */}
      <div className="relative h-[3px] bg-gradient-to-r from-red-800 via-red-600 to-red-800">
        <motion.div
          style={{ scaleX: progreso, transformOrigin: "0% 50%" }}
          className="absolute inset-0 bg-amber-400"
          aria-hidden="true"
        />
      </div>

      <div className="container flex items-center justify-between h-[72px] lg:h-20">
        {/* Logo */}
        <a href="#inicio" className="flex items-center shrink-0 group">
          <img
            src="/images/logo-negativo.png"
            alt="Auto Repuestos Blessing"
            className="h-12 lg:h-14 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-[13px] font-medium transition-all duration-200 uppercase tracking-wider ${
                  isActive ? "text-red-400" : "text-gray-300 hover:text-red-400"
                }`}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-1/2 h-[2px] bg-red-500"
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
        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-3">
            <a href={COMPANY.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-neutral-400 hover:text-red-400 transition-colors">
              <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-neutral-400 hover:text-red-400 transition-colors">
              <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href={COMPANY.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-neutral-400 hover:text-red-400 transition-colors">
              <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            </a>
          </div>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2.5 bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white px-7 py-3.5 text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-red-700/20 uppercase tracking-wider hover:translate-y-[-1px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <Phone className="w-4 h-4" />
            Cotizar
            <ChevronRight className="w-4 h-4 -mr-1" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-red-400 transition-colors"
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
            className="lg:hidden bg-neutral-900 border-t border-white/10 overflow-hidden shadow-lg"
          >
            <nav className="container py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-red-400 hover:bg-neutral-950/5 transition-all uppercase tracking-wide border-l-2 border-transparent hover:border-red-500"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-red-700 to-red-800 text-white px-4 py-3 text-sm font-semibold uppercase tracking-wider shadow-md"
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
