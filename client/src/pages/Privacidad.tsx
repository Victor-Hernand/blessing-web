/* DESIGN: Política de privacidad — Auto Repuestos Blessing
 * Estilo: página de texto legal, tema claro, tipografía Oswald + Roboto
 */
import { Link } from "wouter";
import { COMPANY } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FECHA_VIGENTE = "30 de octubre de 2026";

const SECCIONES: { titulo: string; parrafos: (string | string[])[] }[] = [
  {
    titulo: "1. Responsable",
    parrafos: [
      `${COMPANY.name} (RTN ${COMPANY.rtn}) es responsable de los datos personales que usted nos entrega a través de este sitio, ${COMPANY.website}.`,
      `Domicilio: ${COMPANY.address}.`,
      `Para consultas sobre esta política o sobre sus datos, escriba a ${COMPANY.email}.`,
    ],
  },
  {
    titulo: "2. Datos que recopilamos",
    parrafos: [
      "Solo recibimos los datos que usted escribe en nuestros formularios:",
      [
        "Solicitud de cotización mayorista: nombre, empresa (opcional), tipo de cliente, teléfono, correo (opcional) y el detalle de los productos o mensaje que incluya.",
        "Reclamo de garantía: los datos que incluya en el formulario de la página de garantía, como nombre, teléfono, vehículo y la descripción de la pieza.",
        "Registro de aceptación: la fecha y la versión de esta política que usted acepta al enviar el formulario de cotización.",
      ],
      "Además, el navegador y el servidor de alojamiento generan datos técnicos básicos de cada visita, como la dirección IP y el tipo de navegador.",
      "No solicitamos datos sensibles (salud, religión, afiliación política, origen étnico ni datos biométricos). Si los incluye por iniciativa propia en un mensaje, los usamos solo para atender su solicitud.",
    ],
  },
  {
    titulo: "3. Para qué usamos sus datos",
    parrafos: [
      [
        "Atender su solicitud de cotización y comunicarnos con usted.",
        "Tramitar reclamos de garantía.",
        "Registrar su aceptación de esta política, como evidencia de su consentimiento.",
        "Mantener la seguridad del sitio y cumplir obligaciones legales y contables.",
        "Generar estadísticas agregadas y anónimas sobre el uso del sitio.",
      ],
      "No usamos sus datos con fines de publicidad y no los vendemos ni los cedemos a terceros con fines comerciales.",
    ],
  },
  {
    titulo: "4. Base legal",
    parrafos: [
      "Tratamos sus datos con base en su consentimiento, que usted otorga al marcar la casilla de aceptación antes de enviar el formulario de cotización; en nuestro interés legítimo de proteger el sitio; y en el cumplimiento de obligaciones legales aplicables en Honduras.",
      "Usted puede retirar su consentimiento en cualquier momento, escribiendo a la dirección indicada en la sección 10.",
    ],
  },
  {
    titulo: "5. Cómo se envían los formularios",
    parrafos: [
      "Nuestros formularios no guardan sus datos en una base de datos del sitio. Al enviarlos, se abre WhatsApp con el mensaje ya preparado, y ese mensaje llega a nuestros asesores comerciales.",
      "Por eso, la conversación se rige también por la política de privacidad de WhatsApp, operado por Meta.",
    ],
  },
  {
    titulo: "6. Con quién compartimos los datos",
    parrafos: [
      [
        "Asesores comerciales y personal de Auto Repuestos Blessing que atiende su solicitud o reclamo.",
        "Proveedores tecnológicos que alojan el sitio y sus respaldos, bajo contrato con cláusulas de confidencialidad.",
        "Autoridades hondureñas, solo ante un requerimiento judicial o administrativo válido.",
        "Asesores legales o auditores, bajo obligación de confidencialidad.",
      ],
      "Algunos proveedores pueden alojar datos fuera de Honduras. En esos casos exigimos medidas de seguridad equivalentes a las descritas en la sección 8.",
    ],
  },
  {
    titulo: "7. Cookies y almacenamiento en su navegador",
    parrafos: [
      "El sitio no usa cookies publicitarias ni de seguimiento de terceros.",
      "El navegador guarda en su equipo, solo para la experiencia de navegación, su preferencia de tema (claro u oscuro). Ese dato no se envía a nuestros servidores.",
      "Si la analítica anónima de visitas está activa, sus datos se usan solo para estadísticas agregadas.",
      "La tipografía del sitio se carga desde Google Fonts, por lo que su navegador se conecta a servidores de Google, que pueden registrar su dirección IP.",
      "Los botones de WhatsApp, Google Maps y redes sociales abren servicios externos con sus propias políticas de privacidad. Puede borrar o bloquear las cookies desde la configuración de su navegador.",
    ],
  },
  {
    titulo: "8. Seguridad",
    parrafos: [
      "Aplicamos medidas técnicas y organizativas razonables para proteger sus datos contra acceso no autorizado, pérdida o alteración, incluida la conexión cifrada (HTTPS) en todo el sitio y el acceso restringido al personal autorizado.",
      "Si ocurriera un incidente de seguridad que afecte sus datos, le informaremos en un plazo máximo de 72 horas desde que lo confirmemos, indicando el alcance y las medidas tomadas.",
    ],
  },
  {
    titulo: "9. Plazo de conservación",
    parrafos: [
      [
        "Solicitudes de cotización y reclamos de garantía: 12 meses desde que se resuelven, salvo que la ley exija un plazo mayor.",
        "Registro de aceptación de esta política: mientras se conserve la solicitud o reclamo asociado.",
        "Registros técnicos del servidor: 24 meses, salvo que formen parte de una investigación o de un requerimiento legal.",
      ],
      "Vencido el plazo, los datos se eliminan de forma segura o se anonimizan.",
    ],
  },
  {
    titulo: "10. Sus derechos",
    parrafos: [
      "Puede solicitar acceso, rectificación, cancelación y oposición sobre sus datos (derechos ARCO), así como una copia en formato legible. También puede retirar en cualquier momento la autorización que nos dio.",
      `Para ejercer sus derechos, escriba a ${COMPANY.email} indicando el derecho que ejerce, los datos a los que se refiere y el correo o teléfono con el que nos contactó. Responderemos en un plazo máximo de 10 días hábiles; si la solicitud es compleja, el plazo podrá ampliarse 10 días hábiles más, y se lo comunicaremos.`,
      "Si no recibe respuesta o no está conforme, puede acudir a la acción de Hábeas Data ante los tribunales hondureños competentes.",
    ],
  },
  {
    titulo: "11. Postulaciones de empleo",
    parrafos: [
      "Las postulaciones de empleo no se reciben en este sitio. Se reciben en CAP Recruit (recruit.capgrupo.com), que tiene su propio aviso de privacidad.",
    ],
  },
  {
    titulo: "12. Menores de edad",
    parrafos: [
      "Nuestros servicios no están dirigidos a menores de 18 años. Si un menor nos envió datos personales, escríbanos a la dirección de la sección 10 para eliminarlos.",
    ],
  },
  {
    titulo: "13. Cambios a esta política",
    parrafos: [
      "Podemos actualizar esta política cuando cambien nuestros servicios, proveedores o la legislación aplicable. La versión vigente estará siempre publicada en esta página, con su fecha de última actualización.",
    ],
  },
];

export default function Privacidad() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="bg-neutral-50 py-12 lg:py-16">
          <div className="container max-w-3xl">
            <Link href="/contactos" className="text-xs font-semibold uppercase tracking-wider text-[#b7212c] hover:underline">
              ← Volver a contactos
            </Link>
            <h1 className="mt-4 font-bold text-[#1d1d1b] uppercase tracking-wide text-[36px] lg:text-[42px]" style={{ fontFamily: "var(--font-heading)" }}>
              Política de privacidad <span className="text-gradient-red">y uso de datos</span>
            </h1>
            <p className="mt-3 text-sm text-neutral-500">Última actualización: {FECHA_VIGENTE}</p>

            <p className="mt-8 text-neutral-700 leading-relaxed">
              Esta política explica qué datos personales recopilamos a través de {COMPANY.website}, para qué los usamos, con quién los
              compartimos y cómo puede ejercer sus derechos.
            </p>

            <div className="mt-10 space-y-8">
              {SECCIONES.map(seccion => (
                <div key={seccion.titulo}>
                  <h2 className="font-bold text-[#1d1d1b] text-lg mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                    {seccion.titulo}
                  </h2>
                  <div className="space-y-3 text-neutral-700 leading-relaxed text-[15px]">
                    {seccion.parrafos.map((p, i) =>
                      Array.isArray(p) ? (
                        <ul key={i} className="list-disc pl-6 space-y-1.5">
                          {p.map(item => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p key={i}>{p}</p>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
