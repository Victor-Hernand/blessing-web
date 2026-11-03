/* ============================================================
 * DESIGN: Industrial Automotriz Moderno — tema oscuro de taller
 * Rojo #b7212c + Carbón #0d0f12 / #171a1e + Gris claro #f4f5f7
 * Oswald (headings) + Roboto (body) + Playfair Display (slogan)
 * ============================================================ */
import Header from "@/components/Header";
import TickerBar from "@/components/TickerBar";
import HeroBanner from "@/components/HeroBanner";
import StatsBar from "@/components/StatsBar";
import CategoriesSection from "@/components/CategoriesSection";
import ShopBySection from "@/components/ShopBySection";
import PromoBanner from "@/components/PromoBanner";
import ServicesSection from "@/components/ServicesSection";
import OffersSection from "@/components/OffersSection";
import HelpSection from "@/components/HelpSection";
import ClosingSection from "@/components/ClosingSection";
import JourneySection from "@/components/JourneySection";
import BrandsSection from "@/components/BrandsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d0f12] text-[#f4f5f7]">
      <Header />
      <TickerBar />
      <main>
        <HeroBanner />
        <StatsBar />
        <CategoriesSection />
        <ShopBySection />
        <BrandsSection />
        <OffersSection />
        <PromoBanner />
        <ServicesSection />
        <JourneySection />
        <TestimonialsSection />
        <LocationSection />
        <HelpSection />
        <ClosingSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
