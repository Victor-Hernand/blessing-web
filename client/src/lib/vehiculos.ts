// Catálogo para el selector "¡Encuentra los repuestos ideales para tu vehículo!".
// Revisar y ajustar contra el inventario real: años y motores son de referencia.
const rango = (desde: number, hasta: number) =>
  Array.from({ length: hasta - desde + 1 }, (_, i) => desde + i);

type Modelos = Record<string, { anios: number[]; motores: string[] }>;

export const VEHICULOS: Record<string, Modelos> = {
  Toyota: {
    Corolla: { anios: rango(2015, 2020), motores: ["1.8L", "2.0L"] },
    Yaris: { anios: rango(2015, 2020), motores: ["1.5L"] },
    RAV4: { anios: rango(2016, 2020), motores: ["2.5L"] },
    Hilux: { anios: rango(2016, 2020), motores: ["2.4L Diésel", "2.7L", "2.8L Diésel"] },
    "Land Cruiser": { anios: rango(2016, 2020), motores: ["4.0L V6", "4.6L V8"] },
  },
  Nissan: {
    Sentra: { anios: rango(2015, 2019), motores: ["1.8L"] },
    Versa: { anios: rango(2015, 2019), motores: ["1.6L"] },
    Frontier: { anios: rango(2016, 2020), motores: ["2.5L", "4.0L V6"] },
    Pathfinder: { anios: rango(2016, 2020), motores: ["3.5L V6"] },
  },
  Hyundai: {
    Accent: { anios: rango(2015, 2019), motores: ["1.6L"] },
    Elantra: { anios: rango(2016, 2020), motores: ["1.8L", "2.0L"] },
    Tucson: { anios: rango(2016, 2020), motores: ["2.0L", "2.4L"] },
    "Santa Fe": { anios: rango(2016, 2020), motores: ["2.0L Turbo", "2.4L"] },
  },
  Kia: {
    Rio: { anios: rango(2015, 2019), motores: ["1.4L", "1.6L"] },
    Sportage: { anios: rango(2016, 2020), motores: ["2.0L", "2.4L"] },
  },
  Chevrolet: {
    Aveo: { anios: rango(2015, 2018), motores: ["1.6L"] },
    Silverado: { anios: rango(2016, 2020), motores: ["4.3L V6", "5.3L V8"] },
    Equinox: { anios: rango(2016, 2020), motores: ["1.5L Turbo", "2.4L"] },
  },
  Honda: {
    Civic: { anios: rango(2016, 2020), motores: ["1.5L Turbo", "2.0L"] },
    "CR-V": { anios: rango(2017, 2020), motores: ["1.5L Turbo", "2.4L"] },
  },
  Mazda: {
    Mazda3: { anios: rango(2016, 2020), motores: ["2.0L", "2.5L"] },
    "CX-5": { anios: rango(2016, 2020), motores: ["2.0L", "2.5L"] },
  },
  Ford: {
    Ranger: { anios: rango(2016, 2020), motores: ["2.2L Diésel", "3.2L Diésel"] },
    "F-150": { anios: rango(2016, 2020), motores: ["3.5L V6", "5.0L V8"] },
    Explorer: { anios: rango(2016, 2020), motores: ["2.3L Turbo", "3.5L V6"] },
  },
  Mitsubishi: {
    "Montero Sport": { anios: rango(2016, 2020), motores: ["3.0L V6"] },
    Outlander: { anios: rango(2016, 2020), motores: ["2.0L", "2.4L"] },
  },
  Suzuki: {
    Swift: { anios: rango(2016, 2020), motores: ["1.2L"] },
    Vitara: { anios: rango(2016, 2020), motores: ["1.6L", "1.4L Turbo"] },
  },
  Volkswagen: {
    Jetta: { anios: rango(2016, 2020), motores: ["1.4L Turbo", "2.0L"] },
    Tiguan: { anios: rango(2017, 2020), motores: ["2.0L Turbo"] },
    Amarok: { anios: rango(2017, 2020), motores: ["2.0L Diésel", "3.0L V6"] },
  },
  Subaru: {
    Forester: { anios: rango(2016, 2020), motores: ["2.0L", "2.5L"] },
    Outback: { anios: rango(2016, 2020), motores: ["2.5L"] },
  },
  Isuzu: {
    "D-Max": { anios: rango(2016, 2020), motores: ["1.9L Diésel", "3.0L Diésel"] },
  },
  Jeep: {
    Wrangler: { anios: rango(2018, 2020), motores: ["2.0L Turbo", "3.6L V6"] },
    Cherokee: { anios: rango(2016, 2020), motores: ["2.4L", "3.2L V6"] },
  },
  Dodge: {
    Journey: { anios: rango(2016, 2020), motores: ["2.4L", "3.6L V6"] },
    Charger: { anios: rango(2016, 2020), motores: ["3.6L V6", "5.7L V8"] },
  },
  Ram: {
    "1500": { anios: rango(2016, 2020), motores: ["3.6L V6", "5.7L V8"] },
  },
  GMC: {
    Sierra: { anios: rango(2016, 2020), motores: ["4.3L V6", "5.3L V8"] },
  },
  BMW: {
    "Serie 3": { anios: rango(2016, 2020), motores: ["2.0L Turbo", "3.0L"] },
    X3: { anios: rango(2017, 2020), motores: ["2.0L Turbo", "3.0L"] },
  },
  "Mercedes-Benz": {
    "Clase C": { anios: rango(2016, 2020), motores: ["2.0L Turbo", "3.0L V6"] },
  },
  Audi: {
    A4: { anios: rango(2016, 2020), motores: ["2.0L Turbo"] },
    Q5: { anios: rango(2017, 2020), motores: ["2.0L Turbo"] },
  },
  Lexus: {
    RX: { anios: rango(2016, 2020), motores: ["2.0L Turbo", "3.5L V6"] },
    NX: { anios: rango(2016, 2020), motores: ["2.0L Turbo"] },
  },
  Acura: {
    MDX: { anios: rango(2016, 2020), motores: ["3.5L V6"] },
    RDX: { anios: rango(2016, 2020), motores: ["2.0L Turbo"] },
  },
  Infiniti: {
    QX60: { anios: rango(2016, 2020), motores: ["3.5L V6"] },
    Q50: { anios: rango(2016, 2020), motores: ["2.0L Turbo", "3.0L V6"] },
  },
  "Land Rover": {
    "Discovery Sport": { anios: rango(2016, 2020), motores: ["2.0L Turbo"] },
    Evoque: { anios: rango(2016, 2020), motores: ["2.0L Turbo"] },
  },
  Volvo: {
    XC60: { anios: rango(2016, 2020), motores: ["2.0L Turbo"] },
    XC90: { anios: rango(2016, 2020), motores: ["2.0L Turbo"] },
  },
  Peugeot: {
    208: { anios: rango(2016, 2020), motores: ["1.2L Turbo"] },
    "3008": { anios: rango(2017, 2020), motores: ["1.6L Turbo"] },
  },
  Renault: {
    Duster: { anios: rango(2016, 2020), motores: ["1.6L", "2.0L"] },
    Kwid: { anios: rango(2017, 2020), motores: ["1.0L"] },
  },
  Fiat: {
    Toro: { anios: rango(2016, 2020), motores: ["1.8L", "2.0L Diésel"] },
    Argo: { anios: rango(2018, 2020), motores: ["1.3L"] },
  },
  Chery: {
    "Tiggo 2": { anios: rango(2017, 2020), motores: ["1.5L"] },
    "Tiggo 7": { anios: rango(2019, 2020), motores: ["1.5L Turbo", "2.0L"] },
  },
  "Great Wall": {
    Poer: { anios: rango(2016, 2020), motores: ["2.0L Diésel", "2.4L"] },
    H6: { anios: rango(2016, 2020), motores: ["2.0L Turbo"] },
  },
  Changan: {
    CS35: { anios: rango(2016, 2020), motores: ["1.4L Turbo", "1.6L"] },
  },
  Geely: {
    Emgrand: { anios: rango(2016, 2020), motores: ["1.5L", "1.8L"] },
  },
  Daihatsu: {
    Terios: { anios: rango(2016, 2020), motores: ["1.5L"] },
  },
  Datsun: {
    GO: { anios: rango(2016, 2020), motores: ["1.2L"] },
  },
  Mini: {
    Cooper: { anios: rango(2016, 2020), motores: ["1.5L Turbo", "2.0L Turbo"] },
  },
  Ssangyong: {
    Tivoli: { anios: rango(2016, 2020), motores: ["1.6L"] },
    Korando: { anios: rango(2016, 2020), motores: ["2.0L", "2.2L Diésel"] },
  },
  Haval: {
    H6: { anios: rango(2017, 2020), motores: ["1.5L Turbo", "2.0L Turbo"] },
  },
  Proton: {
    Saga: { anios: rango(2016, 2020), motores: ["1.3L", "1.6L"] },
    Persona: { anios: rango(2016, 2020), motores: ["1.6L"] },
    Iriz: { anios: rango(2016, 2020), motores: ["1.3L", "1.6L"] },
    X50: { anios: rango(2019, 2020), motores: ["1.5L Turbo"] },
    X70: { anios: rango(2019, 2020), motores: ["1.8L", "2.0L"] },
  },
};

// Todas las marcas que aparecen en el selector. Las que no están en VEHICULOS
// muestran "Sin modelos registrados aún" hasta que se carguen sus datos.
export const MARCAS = [
  "Acura", "Alfa Romeo", "Audi", "BMW", "Bentley", "Buick", "BYD", "Cadillac",
  "Changan", "Chery", "Chevrolet", "Chrysler", "Citroën", "Dacia", "Daihatsu",
  "Datsun", "Dodge", "Ferrari", "Fiat", "Foton", "Ford", "Geely", "Genesis",
  "GMC", "Great Wall", "Haval", "Hino", "Honda", "Hyundai", "Infiniti", "Isuzu",
  "Jaguar", "Jeep", "JAC", "Kia", "Lamborghini", "Land Rover", "Lexus", "Lincoln",
  "Lotus", "Mahindra", "Maserati", "Mazda", "McLaren", "Mercedes-Benz", "MG",
  "Mini", "Mitsubishi", "Nissan", "Opel", "Peugeot", "Porsche", "Proton", "Ram",
  "Renault", "Rolls-Royce", "Seat", "Skoda", "Smart", "Ssangyong", "Subaru",
  "Suzuki", "Tata", "Tesla", "Toyota", "Volkswagen", "Volvo",
].sort((a, b) => a.localeCompare(b, "es"));

// Tipos de repuesto para el selector. Editar esta lista para agregar o quitar.
export const TIPOS_REPUESTO = [
  "Motor",
  "Frenos",
  "Suspensión",
  "Dirección",
  "Clutch",
  "Transmisión",
  "Eléctrico",
  "Iluminación",
  "Baterías",
  "Refrigeración",
  "Filtros",
  "Lubricantes",
  "Bombas hidráulicas",
  "Sistema de escape",
  "Llantas y rines",
  "Carrocería y vidrios",
  "Espejos",
  "Accesorios",
];
