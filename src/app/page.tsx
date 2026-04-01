import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesTabSection from "@/components/ServicesTabSection";
import WhoWeServiceSection from "@/components/WhoWeServiceSection";
import CitiesSection from "@/components/CitiesSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesTabSection />
        <WhoWeServiceSection />
        <CitiesSection />
        <AboutSection />
        <ReviewsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
