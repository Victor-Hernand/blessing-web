/* ============================================================
 * DESIGN: Industrial Automotriz Moderno
 * Rojo carmesí + Negro carbón + Blanco humo + Amarillo dorado
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
    <div className="min-h-screen flex flex-col bg-white">
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
