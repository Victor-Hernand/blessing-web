// ============================================================
// MANSIAGO PAGE — Dark theme, Yellow/Gold accents
// Colores: #1d1d1b (negro) / #e2d337 (amarillo) / #bc8827 (dorado) / #fef8de (crema)
// Tipografía: Montserrat (headings) + Poppins (body)
// ============================================================
import { useState, useEffect, useRef, useCallback } from "react";
import {
  Droplets, Zap, Filter, Battery, CircuitBoard, Wrench,
  Phone, Mail, MapPin, Clock, ChevronRight, ExternalLink,
  Shield, TrendingUp, Handshake, Award, Menu, X,
  Facebook, Instagram, ArrowUp, Truck, Star, Globe
} from "lucide-react";
import {
  MANSIAGO_IMAGES, MANSIAGO_INFO, MANSIAGO_PRODUCTS,
  MANSIAGO_BRANDS, MANSIAGO_SELLERS, MANSIAGO_STATS,
  MANSIAGO_VALUES
} from "@/lib/mansiago-constants";

// ---- Utility: Icon resolver ----
const iconMap: Record<string, React.ElementType> = {
  Droplets, Zap, Filter, Battery, CircuitBoard, Wrench,
  Shield, TrendingUp, Handshake, Award,
};
function DynIcon({ name, size, className }: { name: string; size?: number; className?: string }) {
  const Comp = iconMap[name] || Wrench;
  return <Comp size={size} className={className} />;
}

// ---- Hook: count-up animation ----
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(id); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(id);
  }, [started, target, duration]);

  return { count, ref };
}

// ---- Hook: scroll reveal ----
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ================================================================
   MANSIAGO TOP BAR
   ================================================================ */
function MTopBar() {
  return (
    <div className="bg-white text-gray-400 text-xs border-b border-[#333]" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-9">
        <div className="flex items-center gap-5">
          <a href={`tel:${MANSIAGO_INFO.phone}`} className="flex items-center gap-1.5 hover:text-[#e2d337] transition-colors">
            <Phone size={11} /> <span className="hidden sm:inline">{MANSIAGO_INFO.phoneDisplay}</span>
          </a>
          <a href={`mailto:${MANSIAGO_INFO.email}`} className="flex items-center gap-1.5 hover:text-[#e2d337] transition-colors">
            <Mail size={11} /> <span className="hidden sm:inline">{MANSIAGO_INFO.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href={MANSIAGO_INFO.facebook} target="_blank" rel="noopener" className="hover:text-[#e2d337] transition-colors"><Facebook size={13} /></a>
          <a href={MANSIAGO_INFO.instagram} target="_blank" rel="noopener" className="hover:text-[#e2d337] transition-colors"><Instagram size={13} /></a>
          <a href={MANSIAGO_INFO.website} target="_blank" rel="noopener" className="hover:text-[#e2d337] transition-colors"><Globe size={13} /></a>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   MANSIAGO HEADER
   ================================================================ */
function MHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Inicio", href: "#m-inicio" },
    { label: "Productos", href: "#m-productos" },
    { label: "Cobertura", href: "#m-cobertura" },
    { label: "Nosotros", href: "#m-nosotros" },
    { label: "Contacto", href: "#m-contacto" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-black/30"
          : "bg-neutral-50"
      }`}
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <a href="#m-inicio" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full bg-[#e2d337] flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 40 40" className="w-8 h-8">
              <defs>
                <linearGradient id="dropGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#e2d337" />
                  <stop offset="100%" stopColor="#bc8827" />
                </linearGradient>
              </defs>
              <circle cx="20" cy="20" r="18" fill="#1d1d1b" />
              <path d="M20 8 C20 8 12 18 12 23 C12 27.4 15.6 31 20 31 C24.4 31 28 27.4 28 23 C28 18 20 8 20 8Z" fill="url(#dropGrad)" />
            </svg>
          </div>
          <div className="hidden sm:block">
            <div className="text-[#1d1d1b] font-extrabold text-sm tracking-wider leading-tight" style={{ fontStyle: "italic" }}>
              DISTRIBUIDORA
            </div>
            <div className="text-[#e2d337] font-black text-lg tracking-widest leading-tight -mt-0.5" style={{ fontStyle: "italic" }}>
              MANSIAGO
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative px-4 py-2 text-sm font-semibold text-gray-300 uppercase tracking-wider hover:text-[#e2d337] transition-colors group"
            >
              {l.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#e2d337] group-hover:w-3/4 transition-all duration-300" />
            </a>
          ))}
          <a
            href={MANSIAGO_INFO.whatsappLink}
            target="_blank"
            rel="noopener"
            className="ml-4 px-5 py-2 bg-[#e2d337] text-[#1d1d1b] font-bold text-sm uppercase tracking-wider hover:bg-[#efc715] transition-all hover:shadow-lg hover:shadow-[#e2d337]/20"
          >
            Cotizar Ahora
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-[#1d1d1b] p-2">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#333] animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-gray-300 font-semibold uppercase tracking-wider hover:text-[#e2d337] hover:bg-neutral-50 transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href={MANSIAGO_INFO.whatsappLink}
              target="_blank"
              rel="noopener"
              className="mt-2 px-4 py-3 bg-[#e2d337] text-[#1d1d1b] font-bold text-center uppercase tracking-wider"
            >
              Cotizar Ahora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ================================================================
   HERO SECTION
   ================================================================ */
function MHero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section id="m-inicio" className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={MANSIAGO_IMAGES.hero}
          alt="Distribuidora Mansiago warehouse"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d1d1b] via-[#1d1d1b]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1b] via-transparent to-[#1d1d1b]/40" />
      </div>

      {/* Decorative diagonal stripe */}
      <div className="absolute right-0 top-0 w-2 h-full bg-gradient-to-b from-[#e2d337] via-[#bc8827] to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#e2d337] via-[#bc8827] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 border border-[#e2d337]/40 bg-[#e2d337]/10 mb-6 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-2 h-2 bg-[#e2d337] rounded-full animate-pulse" />
            <span className="text-[#e2d337] text-xs font-semibold uppercase tracking-[0.2em]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Distribuidora B2B Honduras
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`transition-all duration-700 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span className="block text-[#1d1d1b] text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.05] tracking-tight" style={{ fontStyle: "italic" }}>
              Calidad que
            </span>
            <span className="block text-[#e2d337] text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[1.05] tracking-tight" style={{ fontStyle: "italic" }}>
              te impulsa
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`mt-6 text-gray-300 text-lg sm:text-xl leading-relaxed max-w-lg transition-all duration-700 delay-400 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Importamos y distribuimos autopartes, lubricantes e inyectores originales a todo Honduras.
            Tu socio estratégico en el sector automotriz.
          </p>

          {/* CTA buttons */}
          <div
            className={`mt-8 flex flex-wrap gap-4 transition-all duration-700 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href={MANSIAGO_INFO.whatsappLink}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#e2d337] text-[#1d1d1b] font-bold uppercase tracking-wider text-sm hover:bg-[#efc715] transition-all hover:shadow-xl hover:shadow-[#e2d337]/25"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Solicitar Cotización
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#m-productos"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/20 text-[#1d1d1b] font-bold uppercase tracking-wider text-sm hover:border-[#e2d337] hover:text-[#e2d337] transition-all"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Ver Catálogo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   STATS BAR
   ================================================================ */
function MStatsBar() {
  return (
    <section className="relative bg-[#e2d337] py-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #1d1d1b 0, #1d1d1b 1px, transparent 0, transparent 50%)`,
          backgroundSize: "12px 12px",
        }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {MANSIAGO_STATS.map((s, i) => {
          const { count, ref } = useCountUp(s.value);
          return (
            <div key={i} ref={ref} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#1d1d1b]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {count}{s.suffix}
              </div>
              <div className="text-[#585755] text-xs sm:text-sm font-semibold uppercase tracking-wider mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {s.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ================================================================
   PRODUCTS SECTION
   ================================================================ */
function MProducts() {
  const { ref, visible } = useReveal();
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <section id="m-productos" className="bg-[#fef8de] py-20 lg:py-28" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1 bg-[#e2d337]/20 text-[#bc8827] text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Nuestro Catálogo
          </span>
          <h2 className="font-black uppercase tracking-tight text-[42px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Productos de <span className="text-[#bc8827]">Calidad</span>
          </h2>
          <p className="mt-4 text-[#585755] max-w-2xl mx-auto text-lg">
            Importamos directamente desde USA, Japón y China para ofrecerte las mejores marcas al mejor precio.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {MANSIAGO_PRODUCTS.map((p, i) => (
            <div
              key={p.id}
              className={`group relative bg-white border-2 border-transparent hover:border-[#e2d337] p-6 transition-all duration-500 cursor-pointer ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${activeProduct === i ? "border-[#e2d337] shadow-lg shadow-[#e2d337]/10" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onMouseEnter={() => setActiveProduct(i)}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                  activeProduct === i ? "bg-[#e2d337]" : "bg-neutral-50"
                }`}>
                  <DynIcon name={p.icon} size={24} className={`transition-colors ${activeProduct === i ? "text-[#1d1d1b]" : "text-[#e2d337]"}`} />
                </div>
                <div>
                  <h3 className="font-bold group-hover:text-[#bc8827] transition-colors text-[32px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {p.title}
                  </h3>
                  <p className="text-[#585755] text-sm mt-1 leading-relaxed">{p.description}</p>
                </div>
              </div>
              {/* Items list */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.items.map((item) => (
                  <span key={item} className="text-xs px-2.5 py-1 bg-[#fef8de] text-[#585755] font-medium">
                    {item}
                  </span>
                ))}
              </div>
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[24px] border-t-[#e2d337] border-l-[24px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Featured product images */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { img: MANSIAGO_IMAGES.injectors, label: "Inyectores Originales", sub: "Producto Estrella" },
            { img: MANSIAGO_IMAGES.lubricants, label: "Lubricantes Premium", sub: "Alto Rendimiento" },
            { img: MANSIAGO_IMAGES.delivery, label: "Distribución Nacional", sub: "Cobertura Total" },
          ].map((item, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden aspect-[4/3] transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 6) * 100}ms` }}
            >
              <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1b] via-[#1d1d1b]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <span className="text-[#e2d337] text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {item.sub}
                </span>
                <h3 className="text-[#1d1d1b] font-bold mt-1 text-[32px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {item.label}
                </h3>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-[#e2d337] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                <ChevronRight size={18} className="text-[#1d1d1b]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   ABOUT / VALUES SECTION
   ================================================================ */
function MAbout() {
  const { ref, visible } = useReveal();

  return (
    <section id="m-nosotros" className="bg-neutral-50 py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e2d337] via-[#bc8827] to-transparent" />
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#e2d337]/5 blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Text */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <span className="inline-block px-4 py-1 bg-[#e2d337]/10 border border-[#e2d337]/30 text-[#e2d337] text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Quiénes Somos
            </span>
            <h2 className="font-black text-[#1d1d1b] uppercase tracking-tight leading-[1.1] text-[42px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Tu socio <span className="text-[#e2d337]">estratégico</span> en autopartes
            </h2>
            <p className="mt-6 text-gray-300 text-lg leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Distribuidora Mansiago es una empresa hondureña dedicada a la importación y distribución de autopartes,
              lubricantes e inyectores de combustible originales. Formamos parte del <strong className="text-[#1d1d1b]">Grupo CAP Honduras</strong> y
              nos especializamos en el modelo B2B, sirviendo a talleres, tiendas de repuestos y distribuidores en todo el país.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Nuestra misión es impulsar el crecimiento de nuestros clientes comerciales ofreciendo productos de calidad,
              precios competitivos y un servicio de distribución que llega a los 18 departamentos de Honduras.
            </p>

            {/* Values grid */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {MANSIAGO_VALUES.map((v, i) => (
                <div
                  key={v.title}
                  className={`p-4 bg-white border border-[#333] hover:border-[#e2d337]/40 transition-all duration-500 group ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${(i + 2) * 150}ms` }}
                >
                  <DynIcon name={v.icon} size={20} className="text-[#e2d337] mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="text-[#1d1d1b] font-bold text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>{v.title}</h4>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>{v.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image composition */}
          <div className={`relative transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="relative">
              <img
                src={MANSIAGO_IMAGES.hero}
                alt="Distribuidora Mansiago bodega"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1b] via-transparent to-transparent" />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-5 border-l-4 border-[#e2d337]">
                <div className="text-[#e2d337] text-3xl font-black" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Grupo CAP
                </div>
                <div className="text-gray-400 text-sm mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Honduras — Distribución Nacional
                </div>
              </div>
            </div>
            {/* Decorative corner */}
            <div className="absolute -top-3 -right-3 w-20 h-20 border-t-4 border-r-4 border-[#e2d337]" />
            <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-4 border-l-4 border-[#e2d337]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   COVERAGE / ZONES MAP
   ================================================================ */
function MCoverage() {
  const { ref, visible } = useReveal();
  const [activeZone, setActiveZone] = useState(0);

  return (
    <section id="m-cobertura" className="bg-white py-20 lg:py-28 relative" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e2d337] to-transparent opacity-40" />

      <div ref={ref} className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1 bg-[#e2d337]/10 border border-[#e2d337]/30 text-[#e2d337] text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Cobertura Nacional
          </span>
          <h2 className="font-black text-[#1d1d1b] uppercase tracking-tight text-[42px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Llegamos a <span className="text-[#e2d337]">todo Honduras</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Nuestro equipo de vendedores cubre los 18 departamentos del país, llevando calidad hasta tu negocio.
          </p>
        </div>

        {/* Sellers grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MANSIAGO_SELLERS.map((seller, i) => (
            <div
              key={seller.name}
              className={`relative bg-neutral-50 border border-[#333] p-6 transition-all duration-500 cursor-pointer group ${
                activeZone === i ? "border-[#e2d337] shadow-lg shadow-[#e2d337]/10" : "hover:border-[#e2d337]/40"
              } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onMouseEnter={() => setActiveZone(i)}
            >
              {/* Zone badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider transition-colors ${
                activeZone === i ? "bg-[#e2d337] text-[#1d1d1b]" : "bg-white text-[#e2d337]"
              }`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <MapPin size={12} />
                {seller.zone}
              </div>

              <h3 className="text-[#1d1d1b] font-bold text-[32px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {seller.name}
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {seller.departments.map((dept) => (
                  <span key={dept} className="text-xs px-2.5 py-1 bg-white text-gray-400 border border-[#333]">
                    {dept}
                  </span>
                ))}
              </div>

              {seller.phone && (
                <a
                  href={`https://wa.me/504${seller.phone}`}
                  target="_blank"
                  rel="noopener"
                  className="mt-4 inline-flex items-center gap-2 text-[#e2d337] text-sm font-semibold hover:underline"
                >
                  <Phone size={14} />
                  {seller.phone}
                  <ExternalLink size={12} />
                </a>
              )}

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-t-[#e2d337] border-l-[20px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a
            href={MANSIAGO_INFO.whatsappLink}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#e2d337] text-[#1d1d1b] font-bold uppercase tracking-wider text-sm hover:bg-[#efc715] transition-all hover:shadow-xl hover:shadow-[#e2d337]/25"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <Truck size={18} />
            Solicita tu Ruta de Distribución
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   BRANDS MARQUEE
   ================================================================ */
function MBrands() {
  const { ref, visible } = useReveal();
  const allBrands = [...MANSIAGO_BRANDS, ...MANSIAGO_BRANDS];

  return (
    <section className="bg-neutral-50 py-16 overflow-hidden border-y border-[#333]">
      <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
        <div className="text-center mb-10">
          <h2 className="font-black text-[#1d1d1b] uppercase tracking-tight text-[42px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Marcas que <span className="text-[#e2d337]">Distribuimos</span>
          </h2>
        </div>

        {/* Marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1d1d1b] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1d1d1b] to-transparent z-10" />
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee items-center gap-12 whitespace-nowrap">
              {allBrands.map((brand, i) => (
                <div
                  key={`${brand}-${i}`}
                  className="flex-shrink-0 px-8 py-4 bg-white border border-[#333] hover:border-[#e2d337]/40 transition-all group"
                >
                  <span className="text-gray-400 group-hover:text-[#e2d337] font-bold text-lg tracking-wider uppercase transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   CTA BANNER
   ================================================================ */
function MCta() {
  const { ref, visible } = useReveal();

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={MANSIAGO_IMAGES.delivery} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#e2d337]/10 to-transparent" />
      </div>

      <div ref={ref} className={`relative z-10 max-w-4xl mx-auto px-4 text-center transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#e2d337]/10 border border-[#e2d337]/30 mb-6">
          <Star size={14} className="text-[#e2d337]" />
          <span className="text-[#e2d337] text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Únete a nuestra red
          </span>
        </div>
        <h2 className="font-black text-[#1d1d1b] uppercase tracking-tight leading-tight text-[42px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          ¿Tienes un taller o tienda de <span className="text-[#e2d337]">repuestos?</span>
        </h2>
        <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Conviértete en distribuidor autorizado de Mansiago. Accede a precios mayoristas, crédito comercial y entrega directa en tu negocio.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={MANSIAGO_INFO.whatsappLink}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#e2d337] text-[#1d1d1b] font-bold uppercase tracking-wider text-sm hover:bg-[#efc715] transition-all hover:shadow-xl hover:shadow-[#e2d337]/25"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Quiero ser Distribuidor
            <ChevronRight size={16} />
          </a>
          <a
            href={`tel:${MANSIAGO_INFO.phone}`}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-[#1d1d1b] font-bold uppercase tracking-wider text-sm hover:border-[#e2d337] hover:text-[#e2d337] transition-all"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <Phone size={16} />
            Llamar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   CONTACT SECTION
   ================================================================ */
function MContact() {
  const { ref, visible } = useReveal();

  return (
    <section id="m-contacto" className="bg-[#fef8de] py-20 lg:py-28" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1 bg-[#e2d337]/20 text-[#bc8827] text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Contáctanos
          </span>
          <h2 className="font-black uppercase tracking-tight text-[42px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Estamos para <span className="text-[#bc8827]">Servirte</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className={`space-y-6 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            {[
              { icon: MapPin, label: "Dirección", value: MANSIAGO_INFO.address },
              { icon: Phone, label: "WhatsApp", value: MANSIAGO_INFO.phoneDisplay, link: MANSIAGO_INFO.whatsappLink },
              { icon: Mail, label: "Correo", value: MANSIAGO_INFO.email, link: `mailto:${MANSIAGO_INFO.email}` },
              { icon: Clock, label: "Horario", value: MANSIAGO_INFO.schedule },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-neutral-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e2d337] transition-colors">
                  <item.icon size={20} className="text-[#e2d337] group-hover:text-[#1d1d1b] transition-colors" />
                </div>
                <div>
                  <div className="text-[#585755] text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {item.label}
                  </div>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener" className="text-[#1d1d1b] font-medium hover:text-[#bc8827] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#1d1d1b] font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="pt-4 border-t border-[#e2d337]/30">
              <p className="text-[#585755] text-xs font-bold uppercase tracking-wider mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Síguenos
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: MANSIAGO_INFO.facebook, label: "Facebook" },
                  { icon: Instagram, href: MANSIAGO_INFO.instagram, label: "Instagram" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener"
                    className="w-10 h-10 bg-neutral-50 flex items-center justify-center hover:bg-[#e2d337] transition-colors group"
                  >
                    <s.icon size={18} className="text-[#e2d337] group-hover:text-[#1d1d1b] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="w-full aspect-[4/3] bg-neutral-50 overflow-hidden border-4 border-[#1d1d1b]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.123456789!2d-87.2!3d14.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDA0JzQ4LjAiTiA4N8KwMTInMDAuMCJX!5e0!3m2!1ses!2shn!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Distribuidora Mansiago"
              />
            </div>
            <p className="text-[#585755] text-sm mt-3 text-center">
              Barrio Guacerique, Bulevar Comunidad Europea, frente a Aire Frío
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   FOOTER
   ================================================================ */
function MFooter() {
  return (
    <footer className="bg-white border-t border-[#333]" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#e2d337] flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-8 h-8">
                  <circle cx="20" cy="20" r="18" fill="#1d1d1b" />
                  <path d="M20 8 C20 8 12 18 12 23 C12 27.4 15.6 31 20 31 C24.4 31 28 27.4 28 23 C28 18 20 8 20 8Z" fill="#e2d337" />
                </svg>
              </div>
              <div>
                <div className="text-[#1d1d1b] font-extrabold text-xs tracking-wider" style={{ fontStyle: "italic", fontFamily: "'Montserrat', sans-serif" }}>DISTRIBUIDORA</div>
                <div className="text-[#e2d337] font-black text-base tracking-widest -mt-0.5" style={{ fontStyle: "italic", fontFamily: "'Montserrat', sans-serif" }}>MANSIAGO</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Calidad que te impulsa. Importación y distribución de autopartes, lubricantes e inyectores originales a todo Honduras.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[#1d1d1b] font-bold text-sm uppercase tracking-wider mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Productos</h4>
            <ul className="space-y-2">
              {["Lubricantes", "Inyectores", "Filtros", "Baterías", "Sistema Eléctrico", "Accesorios"].map((p) => (
                <li key={p}>
                  <a href="#m-productos" className="text-gray-500 text-sm hover:text-[#e2d337] transition-colors">{p}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[#1d1d1b] font-bold text-sm uppercase tracking-wider mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Empresa</h4>
            <ul className="space-y-2">
              {[
                { label: "Nosotros", href: "#m-nosotros" },
                { label: "Cobertura", href: "#m-cobertura" },
                { label: "Contacto", href: "#m-contacto" },
                { label: "Auto Repuestos Blessing", href: "/" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-gray-500 text-sm hover:text-[#e2d337] transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#1d1d1b] font-bold text-sm uppercase tracking-wider mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-500 text-sm">
                <Phone size={14} className="text-[#e2d337]" />
                <a href={`tel:${MANSIAGO_INFO.phone}`} className="hover:text-[#e2d337] transition-colors">{MANSIAGO_INFO.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-2 text-gray-500 text-sm">
                <Mail size={14} className="text-[#e2d337]" />
                <a href={`mailto:${MANSIAGO_INFO.email}`} className="hover:text-[#e2d337] transition-colors">{MANSIAGO_INFO.email}</a>
              </li>
              <li className="flex items-start gap-2 text-gray-500 text-sm">
                <MapPin size={14} className="text-[#e2d337] mt-0.5 flex-shrink-0" />
                <span>Tegucigalpa, Honduras</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#333]">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Distribuidora Mansiago — Grupo CAP Honduras. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href={MANSIAGO_INFO.facebook} target="_blank" rel="noopener" className="text-gray-600 hover:text-[#e2d337] transition-colors"><Facebook size={16} /></a>
            <a href={MANSIAGO_INFO.instagram} target="_blank" rel="noopener" className="text-gray-600 hover:text-[#e2d337] transition-colors"><Instagram size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ================================================================
   WHATSAPP FLOATING BUTTON
   ================================================================ */
function MWhatsApp() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={MANSIAGO_INFO.whatsappLink}
      target="_blank"
      rel="noopener"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform pulse-glow"
      title="Cotizar por WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

/* ================================================================
   SCROLL TO TOP BUTTON
   ================================================================ */
function MScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-neutral-50 border border-[#e2d337]/40 flex items-center justify-center hover:bg-[#e2d337] hover:text-[#1d1d1b] text-[#e2d337] transition-all shadow-lg"
    >
      <ArrowUp size={20} />
    </button>
  );
}

/* ================================================================
   MAIN PAGE EXPORT
   ================================================================ */
export default function Mansiago() {
  return (
    <div className="min-h-screen bg-white">
      <MTopBar />
      <MHeader />
      <MHero />
      <MStatsBar />
      <MProducts />
      <MAbout />
      <MCoverage />
      <MBrands />
      <MCta />
      <MContact />
      <MFooter />
      <MWhatsApp />
      <MScrollTop />
    </div>
  );
}
