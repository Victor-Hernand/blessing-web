/* DESIGN: Industrial Automotriz Premium — Marcas con marquee infinito */
import { motion } from "framer-motion";
import { BRANDS } from "@/lib/constants";

const allBrands = [...BRANDS.premium, ...BRANDS.conventional];

function BrandCard({ name, isPremium }: { name: string; isPremium: boolean }) {
  return (
    <div className="group flex-shrink-0 w-44 sm:w-52 h-28 bg-neutral-950 border border-neutral-800 flex flex-col items-center justify-center px-4 hover:border-red-300 hover:shadow-xl hover:shadow-red-100/30 transition-all duration-300 mx-2.5 hover:-translate-y-1">
      <span className="text-lg font-bold text-neutral-200 group-hover:text-red-700 transition-colors uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>
        {name}
      </span>
      {isPremium && (
        <span className="text-[9px] text-amber-600 font-semibold uppercase tracking-widest mt-1.5 bg-amber-500/15 px-2 py-0.5 border border-amber-200/50">Premium</span>
      )}
    </div>
  );
}

export default function BrandsSection() {
  return (
    <section id="marcas" className="py-20 lg:py-28 bg-neutral-900 overflow-hidden">
      <div className="container mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-red-700" />
            <span className="section-label">Nuestros aliados</span>
            <div className="w-10 h-[2px] bg-red-700" />
          </div>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-neutral-50">
            Marcas <span className="text-gradient-red">Destacadas</span>
          </h2>
          <p className="text-neutral-400 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Trabajamos con las mejores marcas del mercado automotriz para garantizar calidad y rendimiento en cada producto.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee - Row 1 */}
      <div className="relative mb-5">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-900 to-transparent z-10" />
        <div className="flex animate-marquee">
          {[...allBrands, ...allBrands].map((brand, i) => (
            <BrandCard key={`row1-${i}`} name={brand} isPremium={BRANDS.premium.includes(brand)} />
          ))}
        </div>
      </div>

      {/* Infinite Marquee - Row 2 (reverse) */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-900 to-transparent z-10" />
        <div className="flex" style={{ animation: "marquee 25s linear infinite reverse" }}>
          {[...BRANDS.conventional, ...BRANDS.premium, ...BRANDS.conventional, ...BRANDS.premium].map((brand, i) => (
            <BrandCard key={`row2-${i}`} name={brand} isPremium={BRANDS.premium.includes(brand)} />
          ))}
        </div>
      </div>

      {/* Brand categories summary */}
      <div className="container mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-950 border border-neutral-800 p-6 hover:shadow-lg hover:shadow-amber-100/20 hover:border-amber-200 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-amber-500/15 flex items-center justify-center">
                <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              </div>
              <h3 className="font-bold text-neutral-100 uppercase tracking-wide text-sm" style={{ fontFamily: "var(--font-heading)" }}>Marcas Premium</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {BRANDS.premium.map(b => (
                <span key={b} className="bg-amber-500/15 border border-amber-900/60 text-amber-300 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider hover:bg-amber-100 transition-colors">{b}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-neutral-950 border border-neutral-800 p-6 hover:shadow-lg hover:shadow-black/40 hover:border-neutral-700 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-neutral-900 flex items-center justify-center">
                <svg className="w-4 h-4 text-neutral-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              </div>
              <h3 className="font-bold text-neutral-100 uppercase tracking-wide text-sm" style={{ fontFamily: "var(--font-heading)" }}>Marcas Convencionales</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {BRANDS.conventional.map(b => (
                <span key={b} className="bg-neutral-900 border border-neutral-800 text-neutral-200 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-900 transition-colors">{b}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
