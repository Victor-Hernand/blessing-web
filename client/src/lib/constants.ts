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
  facebook: "https://www.facebook.com/profile.php?id=100054467124522",
  instagram: "https://www.instagram.com/autorepuestosblessing/",
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
  { name: "Motor", icon: "Cog", description: "Pistones, anillos, cojinetes, juntas, válvulas, cadenas de distribución" },
  { name: "Frenos", icon: "CircleDot", description: "Pastillas, discos, tambores, zapatas, bombas, mangueras" },
  { name: "Suspensión", icon: "ArrowUpDown", description: "Terminales, rótulas, amortiguadores, resortes, brazos" },
  { name: "Eléctrico", icon: "Zap", description: "Baterías, alternadores, arrancadores, sensores, fusibles" },
  { name: "Refrigeración", icon: "Thermometer", description: "Radiadores, ventiladores, termostatos, bombas de agua" },
  { name: "Transmisión", icon: "Settings", description: "Kits de embrague, discos, prensas, collares" },
  { name: "Filtros", icon: "Filter", description: "Aceite, combustible, aire y cabina para todas las marcas" },
  { name: "Lubricantes", icon: "Droplets", description: "Aceites de motor, fluidos de transmisión, refrigerantes" },
  { name: "Accesorios", icon: "Wrench", description: "Espejos, luces, faros, limpiaparabrisas, bocinas" },
];

export const BRANDS = {
  premium: ["Bosch", "Aisin", "NPW", "Tree Five", "Excedi"],
  conventional: ["Welmet", "Motorteck", "EDK", "Syntecfil", "Freemap", "Kaizen"],
};

export const STATS = [
  { value: 10, suffix: "+", label: "Años de Experiencia" },
  { value: 46, suffix: "+", label: "Colaboradores" },
  { value: 9, suffix: "", label: "Categorías de Productos" },
  { value: 11, suffix: "", label: "Vendedores Especializados" },
];
