/* ============================================================
 * DESIGN: Industrial Automotriz Moderno
 * Rojo carmesí + Negro carbón + Blanco humo + Amarillo dorado
 * Oswald (headings) + Roboto (body) + Playfair Display (slogan)
 * ============================================================ */
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import StatsBar from "@/components/StatsBar";
import CategoriesSection from "@/components/CategoriesSection";
import PromoBanner from "@/components/PromoBanner";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ValuePropsSection from "@/components/ValuePropsSection";
import ValuesSection from "@/components/ValuesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import QuoteSection from "@/components/QuoteSection";
import LocationSection from "@/components/LocationSection";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950">
      <Header />
      <main>
        <HeroBanner />
        <StatsBar />
        <AboutSection />
        <ValuePropsSection />
        <CategoriesSection />
        <PromoBanner />
        <ServicesSection />
        <BrandsSection />
        <ValuesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
        <QuoteSection />
        <LocationSection />
        <CareersSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
