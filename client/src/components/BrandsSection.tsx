/* DESIGN: Industrial Automotriz Premium — Marcas con marquee infinito */
import { motion } from "framer-motion";
import { BRANDS } from "@/lib/constants";

const allBrands = [...BRANDS.premium, ...BRANDS.conventional];

function BrandCard({ name, isPremium }: { name: string; isPremium: boolean }) {
  return (
    <div className="group flex-shrink-0 w-44 sm:w-52 h-28 bg-[#b7212c] border border-[#b7212c] flex flex-col items-center justify-center px-4 transition-all duration-300 mx-2.5 hover:-translate-y-1">
      <span className="text-lg font-bold text-white uppercase tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>
        {name}
      </span>
      {isPremium && (
        <span className="text-[9px] text-[#b7212c] font-bold uppercase tracking-widest mt-1.5 bg-white px-2 py-0.5">Premium</span>
      )}
    </div>
  );
}

export default function BrandsSection() {
  return (
    <section id="marcas" className="pt-0 pb-20 lg:pb-28 bg-neutral-50 overflow-hidden">
      <div className="container mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#b7212c]" />
            <span className="section-label">Nuestros aliados</span>
            <div className="w-10 h-[2px] bg-[#b7212c]" />
          </div>
          <h2 className="section-title text-neutral-900 text-[42px]">
            Marcas <span className="text-gradient-red">Destacadas</span>
          </h2>
          <p className="text-neutral-500 mt-4 max-w-xl mx-auto text-base leading-relaxed font-bold">
            Trabajamos con las mejores marcas del mercado automotriz para garantizar calidad y rendimiento en cada producto.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee - Row 1 */}
      <div className="relative mb-5">
        <div className="flex animate-marquee">
          {[...allBrands, ...allBrands].map((brand, i) => (
            <BrandCard key={`row1-${i}`} name={brand} isPremium={BRANDS.premium.includes(brand)} />
          ))}
        </div>
      </div>

      {/* Infinite Marquee - Row 2 (reverse) */}
      <div className="relative">
        <div className="flex" style={{ animation: "marquee 25s linear infinite reverse" }}>
          {[...BRANDS.conventional, ...BRANDS.premium, ...BRANDS.conventional, ...BRANDS.premium].map((brand, i) => (
            <BrandCard key={`row2-${i}`} name={brand} isPremium={BRANDS.premium.includes(brand)} />
          ))}
        </div>
      </div>

    </section>
  );
}
