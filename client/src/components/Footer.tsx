/* DESIGN: Industrial Automotriz Premium — Footer — Tema Claro */
import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from "lucide-react";
import { COMPANY, CATEGORIES } from "@/lib/constants";

const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Categorías", href: "#categorias" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Marcas", href: "#marcas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-red-900 text-red-100/80 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500" />

      <div className="container py-14 lg:py-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-5">
              <img
                src="/images/logo-white.png"
                alt="Auto Repuestos Blessing"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed mb-4 text-red-200/60">
              Más de 10 años brindando autopartes de calidad a precios justos en Honduras.
            </p>
            <p className="text-amber-400/80 italic text-sm" style={{ fontFamily: "var(--font-accent)" }}>
              "{COMPANY.slogan}"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="flex items-center gap-2 text-sm text-red-200/70 hover:text-amber-300 transition-colors group">
                    <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-amber-500 group-hover:scale-125 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Categorías
            </h4>
            <ul className="space-y-2.5">
              {CATEGORIES.slice(0, 6).map(cat => (
                <li key={cat.name}>
                  <a href="#categorias" className="flex items-center gap-2 text-sm text-red-200/70 hover:text-amber-300 transition-colors group">
                    <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-amber-500 group-hover:scale-125 transition-transform" />
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Contacto
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY.phone}`} className="text-sm text-red-200/70 hover:text-amber-300 transition-colors">{COMPANY.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY.email}`} className="text-sm text-red-200/70 hover:text-amber-300 transition-colors break-all">{COMPANY.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed text-red-200/70">{COMPANY.address}</span>
              </li>
            </ul>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md shadow-green-900/20"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-red-800/50">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-red-300/50">
            &copy; {new Date().getFullYear()} Auto Repuestos Blessing. Todos los derechos reservados. RTN: {COMPANY.rtn}
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-red-300/50 hover:text-amber-300 transition-colors group"
          >
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            Volver arriba
          </button>
        </div>
      </div>
    </footer>
  );
}
