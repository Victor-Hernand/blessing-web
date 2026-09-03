/* ============================================================
 * DESIGN: Industrial Automotriz Moderno
 * Rojo carmesí + Negro carbón + Blanco humo + Amarillo dorado
 * Oswald (headings) + Roboto (body) + Playfair Display (slogan)
 * ============================================================ */
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TopBar from "@/components/TopBar";
import StatsBar from "@/components/StatsBar";
import CategoriesSection from "@/components/CategoriesSection";
import PromoBanner from "@/components/PromoBanner";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BrandsSection from "@/components/BrandsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />
      <main>
        <AboutSection />
        <HeroSection />
        <StatsBar />
        <CategoriesSection />
        <PromoBanner />
        <ServicesSection />
        <BrandsSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
