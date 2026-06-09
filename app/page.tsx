import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuienesSomos from "@/components/QuienesSomos";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import AmbienteSection from "@/components/AestheticSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <QuienesSomos />
      <Products />
      <Gallery />
      <AmbienteSection />
      <CallToAction />
      <Footer />
      <WhatsAppBubble />
    </main>
  );
}
