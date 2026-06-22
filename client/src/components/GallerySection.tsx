/* DESIGN: Industrial Automotriz Premium — Galería de fotos reales */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera } from "lucide-react";
import { IMAGES } from "@/lib/constants";

const galleryItems = [
  {
    src: IMAGES.realClientDelivery,
    alt: "Atención al cliente en el mostrador de Auto Repuestos Blessing",
    caption: "Atención Personalizada",
    desc: "Nuestro equipo entregando productos de calidad a nuestros clientes.",
    span: "col-span-2",
  },
  {
    src: IMAGES.realSellerRadio,
    alt: "Asesora especializada de Blessing brindando atención personalizada",
    caption: "Asesoría Técnica",
    desc: "Vendedores expertos que te ayudan a encontrar el repuesto exacto.",
    span: "col-span-1",
  },
  {
    src: IMAGES.realEmployeeProducts,
    alt: "Colaboradora de Blessing con productos en exhibición",
    caption: "Inventario Completo",
    desc: "Amplia variedad de marcas reconocidas en nuestro inventario.",
    span: "col-span-1",
  },
  {
    src: IMAGES.realDeliverySingle,
    alt: "Repartidor de Blessing en motocicleta frente a la tienda",
    caption: "Servicio de Delivery",
    desc: "Entregamos tus repuestos directamente a tu taller o domicilio.",
    span: "col-span-1",
  },
  {
    src: IMAGES.realEmployeeBag,
    alt: "Colaborador de Blessing con producto en tienda",
    caption: "Preparación de Pedidos",
    desc: "Empacamos con cuidado cada pedido para garantizar su integridad.",
    span: "col-span-1",
  },
  {
    src: IMAGES.realSellerProducts,
    alt: "Vendedor especializado de Blessing con productos",
    caption: "Vendedores Especializados",
    desc: "Nuestro equipo conoce cada producto para brindarte la mejor asesoría.",
    span: "col-span-2",
  },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-red-700" />
            <span className="section-label">Nuestro Equipo</span>
            <div className="w-10 h-[2px] bg-red-700" />
          </div>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-gray-900">
            Conoce <span className="text-gradient-red">Blessing</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto mt-4">
            Un equipo comprometido con brindarte la mejor experiencia en autopartes. Conoce a las personas detrás de nuestro servicio.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`${item.span} group relative overflow-hidden cursor-pointer`}
              onClick={() => setLightbox(i)}
            >
              <div className="relative h-[220px] sm:h-[260px] lg:h-[300px] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Always visible bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-white font-bold text-sm uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
                    {item.caption}
                  </div>
                  <p className="text-white/70 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.desc}
                  </p>
                </div>
                {/* Camera icon */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-4 h-4 text-white" />
                </div>
                {/* Red accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-red-600 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 lg:p-8"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[lightbox].src}
                alt={galleryItems[lightbox].alt}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white font-bold text-lg uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
                  {galleryItems[lightbox].caption}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{galleryItems[lightbox].desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
