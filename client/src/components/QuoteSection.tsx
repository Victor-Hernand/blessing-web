/* DESIGN: Industrial Automotriz Premium — Formulario de cotización mayorista.
   No hay backend: el formulario arma un mensaje y abre WhatsApp, igual que el
   formulario de reclamo de garantía. */
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { CLIENT_TYPES, COMPANY, whatsappLink } from "@/lib/constants";

const inputBase =
  "w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/20 transition-colors";
const labelBase =
  "block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1.5";

export default function QuoteSection() {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [tipo, setTipo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Los opcionales se omiten con null; las cadenas vacías son saltos de línea
    // intencionales y deben conservarse.
    const lineas: (string | null)[] = [
      "*SOLICITUD DE COTIZACIÓN MAYORISTA*",
      "",
      `*Nombre:* ${nombre}`,
      empresa ? `*Empresa:* ${empresa}` : null,
      `*Tipo de cliente:* ${tipo}`,
      `*Teléfono:* ${telefono}`,
      correo ? `*Correo:* ${correo}` : null,
      "",
      "*Productos / mensaje:*",
      mensaje,
      "",
      `_Enviado desde ${COMPANY.website}_`,
    ];

    const texto = lineas.filter((l): l is string => l !== null).join("\n");
    window.open(whatsappLink(texto), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="cotizar" className="py-20 lg:py-28 bg-neutral-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-red-700" />
            <span className="section-label">Compras por volumen</span>
            <div className="w-10 h-[2px] bg-red-700" />
          </div>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-neutral-50">
            Solicitar <span className="text-gradient-red">cotización mayorista</span>
          </h2>
          <p className="text-neutral-300 text-sm lg:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Complete el formulario y uno de nuestros asesores comerciales se pondrá en contacto
            con usted.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto bg-neutral-950 border border-neutral-800 p-6 sm:p-8 lg:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-red-700" />

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="q-nombre" className={labelBase}>
                  Nombre completo <span className="text-red-500">*</span>
                </label>
                <input
                  id="q-nombre"
                  type="text"
                  required
                  autoComplete="name"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                  placeholder="Su nombre"
                  className={inputBase}
                />
              </div>
              <div>
                <label htmlFor="q-empresa" className={labelBase}>
                  Empresa
                </label>
                <input
                  id="q-empresa"
                  type="text"
                  autoComplete="organization"
                  value={empresa}
                  onChange={e => setEmpresa(e.target.value)}
                  placeholder="Nombre de su empresa"
                  className={inputBase}
                />
              </div>
            </div>

            <div>
              <label htmlFor="q-tipo" className={labelBase}>
                Tipo de cliente <span className="text-red-500">*</span>
              </label>
              <select
                id="q-tipo"
                required
                value={tipo}
                onChange={e => setTipo(e.target.value)}
                className={`${inputBase} ${tipo ? "" : "text-neutral-500"}`}
              >
                <option value="" disabled>
                  Seleccione una opción
                </option>
                {CLIENT_TYPES.map(t => (
                  <option key={t} value={t} className="text-neutral-100 bg-neutral-950">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="q-telefono" className={labelBase}>
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <input
                  id="q-telefono"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={telefono}
                  onChange={e => setTelefono(e.target.value)}
                  placeholder="+504 ____-____"
                  className={inputBase}
                />
              </div>
              <div>
                <label htmlFor="q-correo" className={labelBase}>
                  Correo electrónico
                </label>
                <input
                  id="q-correo"
                  type="email"
                  autoComplete="email"
                  value={correo}
                  onChange={e => setCorreo(e.target.value)}
                  placeholder="correo@empresa.com"
                  className={inputBase}
                />
              </div>
            </div>

            <div>
              <label htmlFor="q-mensaje" className={labelBase}>
                Mensaje / Productos <span className="text-red-500">*</span>
              </label>
              <textarea
                id="q-mensaje"
                required
                rows={4}
                value={mensaje}
                onChange={e => setMensaje(e.target.value)}
                placeholder="Describa los productos que necesita o el tipo de negocio al que pertenece."
                className={`${inputBase} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 bg-red-700 hover:bg-red-600 text-white px-8 py-4 text-xs font-bold uppercase tracking-wider transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Send className="w-4 h-4" />
              Enviar solicitud de cotización
            </button>

            <p className="text-[11px] text-neutral-500 text-center">
              Al enviar, será redirigido a WhatsApp con su mensaje ya cargado.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
