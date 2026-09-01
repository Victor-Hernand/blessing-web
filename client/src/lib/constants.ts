/* ============================================================
 * DESIGN: Industrial Automotriz Premium — Clase Mundial
 * Colors: Rojo carmesí, Negro carbón, Blanco humo, Amarillo dorado
 * Fonts: Oswald (headings) + Roboto (body) + Playfair Display (accent)
 * ============================================================ */

export const IMAGES = {
  heroPremium: "/images/hero-blessing.jpg",
  // Category images (real store photos)
  categoryEngine: "/images/category-motor.jpg",
  categoryBrakes: "/images/category-frenos.jpg",
  categorySuspension: "/images/category-suspension.jpg",
  // Versiones sin recortar: la tarjeta usa un recorte apaisado, el visor muestra la pieza completa
  categoryEngineFull: "/images/category-motor-full.jpg",
  categoryBrakesFull: "/images/category-frenos-full.jpg",
  categorySuspensionFull: "/images/category-suspension-full.jpg",
  // Imágenes de producto (piezas de campañas propias de la empresa)
  categorySteering: "/images/category-direccion.jpg",
  categoryElectric: "/images/category-electrico.jpg",
  categoryCooling: "/images/category-refrigeracion.jpg",
  categoryTransmission: "/images/category-transmision.jpg",
  categoryFilters: "/images/category-filtros.jpg",
  categoryLubricants: "/images/category-lubricantes.jpg",
  categoryAccessories: "/images/category-accesorios.jpg",
  // Real photos from the company (local assets in client/public/images)
  realCustomerService: "/images/real-customer-service.jpeg",
  realSellerRadio: "/images/real-seller-radio.jpeg",
  realEmployeeProducts: "/images/real-employee-products.jpeg",
  realDeliveryTeam: "/images/real-delivery-team.jpeg",
  realDeliverySingle: "/images/real-delivery-single.jpeg",
  realEmployeeBag: "/images/real-employee-bag.jpeg",
  realSellerProducts: "/images/real-seller-products.jpeg",
  realClientDelivery: "/images/real-client-delivery.jpeg",
};

export const COMPANY = {
  name: "Auto Repuestos Blessing",
  slogan: "La calidad no es cara",
  phone: "+504 9250-7107",
  email: "ventas@arblessing.com",
  address: "Colonia Kennedy, al final de la primera entrada, frente al Instituto Técnico Honduras. Tegucigalpa, Honduras",
  rtn: "08011988090350",
  facebook: "https://www.facebook.com/arsblessing/",
  instagram: "https://www.instagram.com/autorepuestosblessing/",
  tiktok: "https://www.tiktok.com/@autorepuestosblessing",
  whatsapp: "https://wa.me/50492507107",
  website: "https://autorepuestosblessing.com",
  schedule: {
    weekdays: "Lunes a Viernes: 8:00 AM - 5:30 PM",
    saturday: "Sábados: 8:00 AM - 4:00 PM",
    sunday: "Domingos: Cerrado",
  },
};

export const SELLERS = [
  { name: "Gustavo Adolfo Solorzano", phone: "9615-1780" },
  { name: "Ariel Ivan Silva Bustillo", phone: "9615-1932" },
  { name: "Edgar Hernan Montoya Banegas", phone: "9615-2437" },
  { name: "Nolvin Mondragón", phone: "9509-4935" },
  { name: "Gerson Raudales ", phone: "9509-5106" },
  { name: "Oscar David Alvarado Reyes", phone: "9509-5163" },
  { name: "Marvin Antonio Martínez Mendéz", phone: "9509-5454" },
  { name: "Yonathan Triminio", phone: "9762-6848" },
  { name: "Allan Palma", phone: "9452-5432" },
];

export const CATEGORIES = [
  {
    name: "Motor",
    icon: "Cog",
    image: IMAGES.categoryEngine,
    imageFull: IMAGES.categoryEngineFull,
    description: "Pistones, anillos, cojinetes, juntas, válvulas, cadenas de distribución",
    products: ["Pistones", "Anillos de pistón", "Cojinetes", "Juntas y empaques", "Empaques de culata", "Válvulas", "Cadena de distribución", "Banda de distribución"],
  },
  {
    name: "Frenos",
    icon: "CircleDot",
    image: IMAGES.categoryBrakes,
    imageFull: IMAGES.categoryBrakesFull,
    description: "Pastillas, discos, tambores, zapatas, bombas, mangueras",
    products: ["Pastillas de freno", "Discos de freno", "Tambores de freno", "Zapatas de freno", "Bombas de freno", "Mangueras de freno"],
  },
  {
    name: "Suspensión",
    icon: "ArrowUpDown",
    image: IMAGES.categorySuspension,
    imageFull: IMAGES.categorySuspensionFull,
    description: "Terminales, rótulas, amortiguadores, resortes, brazos",
    products: ["Amortiguadores", "Rótulas", "Terminales", "Resortes", "Brazos de suspensión", "Bujes de suspensión"],
  },
  {
    name: "Dirección",
    icon: "LifeBuoy",
    image: IMAGES.categorySteering,
    description: "Cremalleras, bombas de poder, terminales, barras, crucetas",
    products: ["Cremalleras de dirección", "Bombas de dirección hidráulica", "Terminales de dirección", "Barras de dirección", "Crucetas", "Fluido de dirección"],
  },
  {
    name: "Eléctrico",
    icon: "Zap",
    image: IMAGES.categoryElectric,
    description: "Baterías, alternadores, arrancadores, sensores, fusibles",
    products: ["Baterías", "Alternadores", "Arrancadores", "Sensores", "Fusibles", "Bujías"],
  },
  {
    name: "Refrigeración",
    icon: "Thermometer",
    image: IMAGES.categoryCooling,
    description: "Radiadores, ventiladores, termostatos, bombas de agua",
    products: ["Radiadores", "Ventiladores", "Termostatos", "Bombas de agua", "Mangueras de radiador"],
  },
  {
    name: "Transmisión",
    icon: "Settings",
    image: IMAGES.categoryTransmission,
    description: "Kits de embrague, discos, prensas, collares",
    products: ["Kits de embrague", "Discos de embrague", "Prensas de embrague", "Collarines"],
  },
  {
    name: "Filtros",
    icon: "Filter",
    image: IMAGES.categoryFilters,
    description: "Aceite, combustible, aire y cabina para todas las marcas",
    products: ["Filtros de aceite", "Filtros de combustible", "Filtros de aire", "Filtros de cabina"],
  },
  {
    name: "Lubricantes",
    icon: "Droplets",
    image: IMAGES.categoryLubricants,
    description: "Aceites de motor, fluidos de transmisión, refrigerantes",
    products: ["Aceites de motor", "Fluidos de transmisión", "Refrigerantes", "Grasas"],
  },
  {
    name: "Accesorios",
    icon: "Wrench",
    image: IMAGES.categoryAccessories,
    description: "Espejos, luces, faros, limpiaparabrisas, bocinas",
    products: ["Espejos", "Luces", "Faros", "Limpiaparabrisas", "Bocinas"],
  },
];

/** Enlace de WhatsApp con mensaje prellenado. */
export const whatsappLink = (message: string) =>
  `${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;

export const MISSION =
  "Brindar repuestos automotrices confiables y de calidad, acompañados de una atención ágil y personalizada, para contribuir al buen funcionamiento y seguridad de los vehículos de nuestros clientes.";

export const VISION =
  "Ser una empresa referente en el mercado de repuestos automotrices, reconocida por la variedad de nuestros productos, la confianza de nuestras marcas, el excelente servicio y el compromiso permanente con nuestros clientes.";

export const BRANDS = {
  premium: ["Bosch", "Aisin", "NPW", "Tree Five", "Excedi"],
  conventional: ["Welmet", "Motorteck", "EDK", "Syntecfil", "Freemap", "Kaizen"],
};

export const STATS = [
  { value: 10, suffix: "+", label: "Años de Experiencia" },
  { value: 46, suffix: "+", label: "Colaboradores" },
  { value: 10, suffix: "", label: "Categorías de Productos" },
  { value: 11, suffix: "", label: "Vendedores Especializados" },
];
