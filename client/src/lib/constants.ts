/* ============================================================
 * DESIGN: Industrial Automotriz Premium — Clase Mundial
 * Colors: Rojo carmesí, Negro carbón, Blanco humo, Amarillo dorado
 * Fonts: Oswald (headings) + Roboto (body) + Playfair Display (accent)
 * ============================================================ */

export const IMAGES = {
  heroPremium: "/images/hero-blessing.jpg",
  bannerLocal: "/images/banner-local.jpg",
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
  realTeamStore: "/images/real-team-store.jpg",
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
  careersUrl: "https://recruit.capgrupo.com/aplicar",
  careersLinkedin: "https://www.linkedin.com/company/caphn/posts/?feedView=all",
  coords: { lat: 14.0641018, lng: -87.176339 },
  mapsUrl:
    "https://www.google.com/maps/place/AUTOREPUESTOS+BLESSING/@14.0641018,-87.176339,17z/data=!3m1!4b1!4m6!3m5!1s0x8f6fbd1165642125:0x38c73471ee8919db!8m2!3d14.0641018!4d-87.176339!16s%2Fg%2F11fpj7mxkh?hl=es",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=AUTOREPUESTOS+BLESSING,+Tegucigalpa,+Honduras&ll=14.0641018,-87.176339&z=17&hl=es&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=14.0641018%2C-87.176339",
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

/** Opciones del formulario de cotización mayorista. */
export const CLIENT_TYPES = [
  "Taller mecánico",
  "Tienda de repuestos",
  "Distribuidor / Mayorista",
  "Flota de vehículos",
  "Particular / Consumidor final",
  "Otro",
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
  conventional: [
    "Welmet", "Motorteck", "EDK", "Syntecfil", "Freemap", "Kaizen",
    "Wagner", "Endo", "Peak", "Koyo", "Honda",
  ],
};

/** Proveedores con los que trabajamos, todos con estándares de calidad de la industria. */
export const SUPPLIERS = [
  "La Meta",
  "Inversiones Venitez",
  "Suazo",
  "Reasa",
  "Acavisa",
];

/** Los tres pilares de la propuesta de valor. */
export const VALUE_PROPS = [
  {
    icon: "Gem",
    title: "La calidad no es cara",
    lead: "Nuestro lema y nuestra promesa central.",
    text: "Demostramos día a día que es posible ofrecer autopartes de alta calidad a precios justos y accesibles. No tenés que elegir entre calidad o precio: obtenés ambos, gracias a relaciones sólidas con proveedores y una gestión eficiente de inventario.",
  },
  {
    icon: "Package",
    title: "Inventario amplio y disponibilidad inmediata",
    lead: "Sin esperas de días ni semanas.",
    text: "Contamos con un inventario robusto que abarca las marcas y modelos más comunes en Honduras. Para reparaciones urgentes esto es esencial; para talleres mecánicos significa mantener sus operaciones sin interrupciones.",
  },
  {
    icon: "Users",
    title: "Atención personalizada y asesoría experta",
    lead: "No solo vendemos autopartes: asesoramos.",
    text: "Nuestro equipo está capacitado para comprender tus necesidades, explicar opciones y recomendar soluciones que realmente funcionen. Al elegirnos recibís asesoría honesta y soluciones efectivas.",
  },
];

/** Valores corporativos: los principios que guían cada decisión. */
export const VALUES = [
  {
    icon: "Heart",
    title: "Compromiso con el cliente",
    text: "La satisfacción del cliente es nuestra máxima prioridad. Atendemos cada necesidad con un enfoque personalizado y el compromiso de encontrar la mejor solución para su vehículo.",
  },
  {
    icon: "BadgeCheck",
    title: "Calidad",
    text: "Las autopartes son componentes críticos que afectan la seguridad del vehículo. Por eso seleccionamos cuidadosamente cada pieza, trabajando solo con marcas reconocidas y proveedores confiables.",
  },
  {
    icon: "Eye",
    title: "Honestidad y transparencia",
    text: "Información clara sobre productos y precios. Si un producto económico satisface la necesidad, lo indicamos; si se requiere mayor calidad, explicamos sus ventajas.",
  },
  {
    icon: "Users",
    title: "Trabajo en equipo",
    text: "Desde los vendedores hasta el personal de logística, cada miembro comparte el mismo compromiso con la excelencia y la atención al cliente.",
  },
  {
    icon: "Leaf",
    title: "Responsabilidad social",
    text: "Operamos de manera responsable, cuidando el medio ambiente y contribuyendo al desarrollo de nuestras comunidades, con oportunidades de crecimiento para nuestro equipo.",
  },
  {
    icon: "Flame",
    title: "Pasión por lo que hacemos",
    text: "Nos motiva una verdadera pasión por el sector automotriz, reflejada en nuestro conocimiento técnico y en el orgullo de que un cliente vuelva satisfecho.",
  },
  {
    icon: "Handshake",
    title: "Colaboración",
    text: "Valoramos el trabajo en equipo dentro de la organización y con proveedores y socios comerciales, construyendo relaciones sólidas y objetivos comunes.",
  },
  {
    icon: "Scale",
    title: "Integridad",
    text: "Operamos con los más altos estándares éticos en todas nuestras transacciones. La integridad es un principio innegociable.",
  },
  {
    icon: "Lightbulb",
    title: "Innovación",
    text: "Apertura a nuevas ideas, productos y tecnologías que nos permitan mejorar continuamente el servicio y ofrecer soluciones más efectivas.",
  },
];

export const STATS = [
  { value: 10, suffix: "+", label: "Años de Experiencia" },
  { value: 46, suffix: "+", label: "Colaboradores" },
  { value: 10, suffix: "", label: "Categorías de Productos" },
  { value: 11, suffix: "", label: "Vendedores Especializados" },
];
