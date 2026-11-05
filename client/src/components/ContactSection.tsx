/* DESIGN: Industrial Automotriz Premium — Contacto — Tema Claro */
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink, Users } from "lucide-react";
import { COMPANY, SELLERS } from "@/lib/constants";
import CarAnimation from "@/components/CarAnimation";
import SquircleDefs from "@/components/SquircleDefs";

export default function ContactSection() {
  return (
    <section id="contacto" className="pt-6 lg:pt-8 pb-6 lg:pb-8 bg-[#0d0f12]">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#b7212c]" />
            <span className="section-label">Comunícate con nosotros</span>
            <div className="w-10 h-[2px] bg-[#b7212c]" />
          </div>
          <h2 className="section-title text-white text-[42px]">
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
            <h3 className="font-bold text-white uppercase tracking-wide mb-6 text-[32px]" style={{ fontFamily: "var(--font-heading)" }}>
              Información de Contacto
            </h3>

            <a href={`tel:${COMPANY.phone}`} className="flex items-start gap-4 p-4 bg-[#171a1e] border border-white/10 hover:border-[#b7212c] hover:shadow-md transition-[color,background-color,border-color,box-shadow,transform,opacity,width,height] group">
              <div className="w-10 h-10 bg-[#b7212c] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-medium mb-0.5">Teléfono</div>
                <div className="text-white font-semibold group-hover:text-[#b7212c] transition-colors">{COMPANY.phone}</div>
              </div>
            </a>

            <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-4 p-4 bg-[#171a1e] border border-white/10 hover:border-[#b7212c] hover:shadow-md transition-[color,background-color,border-color,box-shadow,transform,opacity,width,height] group">
              <div className="w-10 h-10 bg-[#b7212c] flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-medium mb-0.5">Email</div>
                <div className="text-white font-semibold group-hover:text-[#b7212c] transition-colors text-sm">{COMPANY.email}</div>
              </div>
            </a>

            <div className="flex items-start gap-4 p-4 bg-[#171a1e] border border-white/10">
              <div className="w-10 h-10 bg-[#b7212c] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-medium mb-0.5">Dirección</div>
                <div className="text-white text-sm leading-relaxed">{COMPANY.address}</div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[#171a1e] border border-white/10">
              <div className="w-10 h-10 bg-[#b7212c] flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-medium mb-0.5">Horario</div>
                <div className="text-white text-sm">{COMPANY.schedule.weekdays}</div>
                <div className="text-white text-sm">{COMPANY.schedule.saturday}</div>
                <div className="text-[#b7212c] text-sm font-medium">{COMPANY.schedule.sunday}</div>
              </div>
            </div>

          </motion.div>

          {/* Sellers Directory — Light theme */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-[#171a1e] border border-white/10 p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6 text-[#b7212c]" />
                <h3 className="font-bold text-white uppercase tracking-wide text-[32px]" style={{ fontFamily: "var(--font-heading)" }}>
                  Directorio de Vendedores
                </h3>
              </div>
              <p className="text-neutral-400 text-sm mb-6">
                Contáctanos directamente con cualquiera de nuestros vendedores especializados para asesoría personalizada.
              </p>
              <div className="overflow-hidden">
              <div className="flex w-max gap-2.5 animate-marquee">
                {[...SELLERS, ...SELLERS].map((seller, i) => (
                  <a
                    key={`${seller.name}-${i}`}
                    href={`https://wa.me/504${seller.phone.replace(/-/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-72 shrink-0 flex items-center gap-3 p-3 bg-[#0d0f12] border border-white/10 hover:border-green-400 hover:bg-green-950/40 transition-[color,background-color,border-color,box-shadow,transform,opacity,width,height] duration-300"
                  >
                    <div className="w-9 h-9 bg-green-500/15 border border-green-900/60 flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:border-green-600 transition-[color,background-color,border-color,box-shadow,transform,opacity,width,height] duration-300">
                      <MessageCircle className="w-4 h-4 text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-white truncate group-hover:text-green-700 transition-colors">{seller.name}</div>
                      <div className="text-xs text-neutral-400 flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        {seller.phone}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              </div>
              {/* Social links */}
              <SquircleDefs />
              <div className="flex items-end gap-x-3 pt-4 pb-2">
                <a href={COMPANY.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ clipPath: "url(#squircleClip)" }} className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg border border-blue-500/50 text-white transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ clipPath: "url(#squircleClip)" }} className="w-10 h-10 bg-gradient-to-br from-pink-600 to-purple-800 flex items-center justify-center shadow-lg border border-pink-500/50 text-white transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href={COMPANY.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" style={{ clipPath: "url(#squircleClip)" }} className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-lg border border-gray-600/50 text-white transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.030-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
                <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ clipPath: "url(#squircleClip)" }} className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg border border-green-400/50 text-white transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
            <CarAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
