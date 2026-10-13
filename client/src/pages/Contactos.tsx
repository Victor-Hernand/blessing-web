import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import QuoteSection from "@/components/QuoteSection";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Contactos() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main>
        <ContactSection />
        <QuoteSection />
        <CareersSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
