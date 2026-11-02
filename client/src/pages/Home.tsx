/* ============================================================
 * DESIGN: Industrial Automotriz Moderno — tema oscuro de taller
 * Rojo #b7212c + Carbón #0d0f12 / #171a1e + Gris claro #f4f5f7
 * Oswald (headings) + Roboto (body) + Playfair Display (slogan)
 * ============================================================ */
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CategoriesSection from "@/components/CategoriesSection";
import PromoBanner from "@/components/PromoBanner";
import ServicesSection from "@/components/ServicesSection";
import BrandsSection from "@/components/BrandsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d0f12] text-[#f4f5f7]">
      <Header />
      <main>
        <HeroBanner />
        <CategoriesSection />
        <BrandsSection />
        <PromoBanner />
        <ServicesSection />
        <TestimonialsSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
