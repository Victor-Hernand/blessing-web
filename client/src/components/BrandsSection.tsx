/* DESIGN: Industrial Automotriz Premium — Marcas con marquee infinito */
import { motion } from "framer-motion";
import { BRANDS } from "@/lib/constants";

const allBrands = [...BRANDS.premium, ...BRANDS.conventional];

function BrandCard({ name, isPremium }: { name: string; isPremium: boolean }) {
  return (
    <div className="group flex-shrink-0 w-44 sm:w-52 h-28 bg-[#0d0f12] border border-white/10 hover:border-[#b7212c] flex flex-col items-center justify-center px-4 transition-[color,background-color,border-color,box-shadow,transform,opacity,width,height] duration-300 mx-2.5 hover:-translate-y-1">
      {/* Logos en escala de grises: a color solo al pasar el cursor */}
      <span className="text-lg font-bold text-neutral-400 group-hover:text-white uppercase tracking-wider transition-colors duration-300" style={{ fontFamily: "var(--font-heading)" }}>
        {name}
      </span>
      {isPremium && (
        <span className="text-[9px] text-white font-bold uppercase tracking-widest mt-1.5 bg-[#b7212c] px-2 py-0.5">Premium</span>
      )}
    </div>
  );
}

export default function BrandsSection() {
  return (
    <section id="marcas" className="pt-10 lg:pt-12 pb-12 lg:pb-16 bg-[#171a1e] overflow-hidden">
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
          <h2 className="section-title text-white text-[42px]">
            Marcas <span className="text-gradient-red">Destacadas</span>
          </h2>
          <p className="text-neutral-400 mt-4 max-w-xl mx-auto text-base leading-relaxed font-bold">
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
