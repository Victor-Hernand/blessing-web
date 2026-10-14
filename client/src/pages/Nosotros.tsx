import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import ValuePropsSection from "@/components/ValuePropsSection";
import CommunicationToneSection from "@/components/CommunicationToneSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Nosotros() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main>
        <AboutSection />
        <ValuePropsSection />
        <CommunicationToneSection />
        <GallerySection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
