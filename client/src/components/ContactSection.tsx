/* DESIGN: Industrial Automotriz Premium — Contacto — Tema Claro */
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink, Users } from "lucide-react";
import { COMPANY, SELLERS } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 lg:py-28 bg-neutral-900">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-red-700" />
            <span className="section-label">Comunícate con nosotros</span>
            <div className="w-10 h-[2px] bg-red-700" />
          </div>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-neutral-50">
            Contáctanos <span className="text-gradient-red">Ahora</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-neutral-100 uppercase tracking-wide mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Información de Contacto
            </h3>

            <a href={`tel:${COMPANY.phone}`} className="flex items-start gap-4 p-4 bg-neutral-950 border border-neutral-800 hover:border-red-900 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-red-700 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-medium mb-0.5">Teléfono</div>
                <div className="text-neutral-100 font-semibold group-hover:text-red-700 transition-colors">{COMPANY.phone}</div>
              </div>
            </a>

            <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-4 p-4 bg-neutral-950 border border-neutral-800 hover:border-red-900 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-red-700 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-medium mb-0.5">Email</div>
                <div className="text-neutral-100 font-semibold group-hover:text-red-700 transition-colors text-sm">{COMPANY.email}</div>
              </div>
            </a>

            <div className="flex items-start gap-4 p-4 bg-neutral-950 border border-neutral-800">
              <div className="w-10 h-10 bg-red-700 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-medium mb-0.5">Dirección</div>
                <div className="text-neutral-100 text-sm leading-relaxed">{COMPANY.address}</div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-neutral-950 border border-neutral-800">
              <div className="w-10 h-10 bg-red-700 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-medium mb-0.5">Horario</div>
                <div className="text-neutral-100 text-sm">{COMPANY.schedule.weekdays}</div>
                <div className="text-neutral-100 text-sm">{COMPANY.schedule.saturday}</div>
                <div className="text-red-600 text-sm font-medium">{COMPANY.schedule.sunday}</div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              <a href={COMPANY.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-950 border border-neutral-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white text-neutral-400 transition-all duration-300 shadow-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-950 border border-neutral-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:border-pink-500 hover:text-white text-neutral-400 transition-all duration-300 shadow-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-950 border border-neutral-800 flex items-center justify-center hover:bg-green-600 hover:border-green-600 hover:text-white text-neutral-400 transition-all duration-300 shadow-sm">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Sellers Directory — Light theme */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-neutral-950 border border-neutral-800 p-6 lg:p-8 shadow-lg shadow-black/50">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6 text-red-600" />
                <h3 className="text-lg font-bold text-neutral-50 uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
                  Directorio de Vendedores
                </h3>
              </div>
              <p className="text-neutral-400 text-sm mb-6">
                Contáctanos directamente con cualquiera de nuestros vendedores especializados para asesoría personalizada.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {SELLERS.map((seller, i) => (
                  <motion.a
                    key={seller.name}
                    href={`https://wa.me/504${seller.phone.replace(/-/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="group flex items-center gap-3 p-3 bg-neutral-900 border border-neutral-800 hover:border-green-400 hover:bg-green-950/40 transition-all duration-300"
                  >
                    <div className="w-9 h-9 bg-green-500/15 border border-green-900/60 flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:border-green-600 transition-all duration-300">
                      <MessageCircle className="w-4 h-4 text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-neutral-100 truncate group-hover:text-green-700 transition-colors">{seller.name}</div>
                      <div className="text-xs text-neutral-400 flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        {seller.phone}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
