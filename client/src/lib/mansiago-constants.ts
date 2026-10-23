// ============================================================
// MANSIAGO CONSTANTS — Distribuidora Mansiago
// Colores: Negro #1d1d1b / Amarillo #e2d337 / Dorado #bc8827 / Crema #fef8de
// Tipografía: Poppins (body) + Montserrat Bold (headings)
// ============================================================

export const MANSIAGO_IMAGES = {
  hero: "/images/mansiago-hero.jpg",
  injectors: "/images/mansiago-injectors.jpg",
  lubricants: "/images/mansiago-lubricants.jpg",
  delivery: "/images/mansiago-delivery.jpg",
} as const;

export const MANSIAGO_INFO = {
  name: "Distribuidora Mansiago",
  shortName: "Mansiago",
  slogan: "Calidad que te impulsa",
  phone: "+504 9408-4995",
  phoneDisplay: "9408-4995",
  email: "correo@cap.hn",
  address: "Barrio Guacerique, Bulevar Comunidad Europea, frente a Aire Frío, Tegucigalpa",
  schedule: "Lunes a Viernes: 8:00 AM - 5:00 PM | Sábado: 8:00 AM - 12:00 PM",
  whatsappLink: "https://wa.me/50494084995?text=Hola%2C%20me%20interesa%20cotizar%20productos%20Mansiago",
  facebook: "https://www.facebook.com/distribuidoramansiago",
  instagram: "https://www.instagram.com/distribuidoramansiago",
  tiktok: "https://www.tiktok.com/@distribuidoramansiago",
  website: "https://mansiago.com",
} as const;

export const MANSIAGO_PRODUCTS = [
  {
    id: "lubricantes",
    title: "Lubricantes y Aceites",
    description: "Aceites de motor, transmisión y fluidos de alto rendimiento para todo tipo de vehículos.",
    icon: "Droplets",
    items: ["Aceite de Motor", "Aceite de Transmisión", "Fluido de Frenos", "Refrigerante", "Aditivos", "Power Steering"],
  },
  {
    id: "inyectores",
    title: "Inyectores de Combustible",
    description: "Inyectores 100% originales para las principales marcas automotrices del mercado.",
    icon: "Zap",
    items: ["Toyota", "Hyundai", "Mitsubishi", "Isuzu", "Nissan", "Honda"],
  },
  {
    id: "filtros",
    title: "Filtros Integrales",
    description: "Filtros de aceite, combustible, aire, transmisión y cabina de las mejores marcas.",
    icon: "Filter",
    items: ["Filtro de Aceite", "Filtro de Combustible", "Filtro de Aire", "Filtro ATF", "Filtro de Cabina"],
  },
  {
    id: "baterias",
    title: "Baterías Confiables",
    description: "Baterías de alto rendimiento para automóviles, comerciales y ciclo profundo.",
    icon: "Battery",
    items: ["Automóviles", "Comerciales", "Ciclo Profundo", "Arranque"],
  },
  {
    id: "electrico",
    title: "Sistema Eléctrico",
    description: "Alternadores, motores de arranque, bobinas y bujías de calidad garantizada.",
    icon: "CircuitBoard",
    items: ["Alternadores", "Motores de Arranque", "Bobinas", "Bujías"],
  },
  {
    id: "accesorios",
    title: "Accesorios y Más",
    description: "Bandas, retenedores, parabrisas, balineras y más componentes esenciales.",
    icon: "Wrench",
    items: ["Bandas", "Retenedores", "Parabrisas", "Balineras", "Bufas", "Bombas de Combustible"],
  },
] as const;

export const MANSIAGO_BRANDS = [
  "Wagner",
  "PEAK",
  "JB Weld",
  "Toshiro",
  "Syntecfil",
  "Welmet",
  "Vic",
  "Honda",
  "Toyota",
  "Nissan",
  "Hyundai",
  "Mitsubishi",
  "Isuzu",
] as const;

export const MANSIAGO_SELLERS = [
  {
    name: "David",
    zone: "Zona Centro",
    departments: ["Francisco Morazán", "Comayagua", "La Paz"],
    phone: "",
    target: "L.2,000,000",
  },
  {
    name: "Juan Álvarez",
    zone: "Zona Nororiental",
    departments: ["Cortés", "Colón", "Atlántida", "Islas de la Bahía"],
    phone: "97195349",
    target: "L.1,800,000",
  },
  {
    name: "Maldonado",
    zone: "Zona Oriental",
    departments: ["Olancho", "El Paraíso", "Yoro"],
    phone: "95331112",
    target: "L.1,500,000",
  },
  {
    name: "Guillermo Flores",
    zone: "Zona Occidental",
    departments: ["Santa Bárbara", "Lempira", "Copán", "Intibucá", "Ocotepeque"],
    phone: "96611386",
    target: "L.1,500,000",
  },
  {
    name: "Germán Hernández",
    zone: "Zona Sur",
    departments: ["Choluteca", "Valle"],
    phone: "96733883",
    target: "L.1,000,000",
  },
] as const;

export const MANSIAGO_STATS = [
  { value: 5, suffix: "+", label: "Zonas de Cobertura" },
  { value: 18, suffix: "", label: "Departamentos" },
  { value: 500, suffix: "+", label: "Clientes B2B" },
  { value: 13, suffix: "+", label: "Marcas Premium" },
] as const;

export const MANSIAGO_VALUES = [
  {
    title: "Fuerza",
    description: "Superamos desafíos para que nuestros clientes B2B sean más eficientes y competitivos.",
    icon: "Shield",
  },
  {
    title: "Resiliencia",
    description: "Nos adaptamos y crecemos ante cualquier reto del mercado automotriz.",
    icon: "TrendingUp",
  },
  {
    title: "Lealtad",
    description: "Construimos relaciones de largo plazo basadas en confianza y resultados.",
    icon: "Handshake",
  },
  {
    title: "Calidad",
    description: "Productos originales e importados que garantizan el mejor rendimiento.",
    icon: "Award",
  },
] as const;
