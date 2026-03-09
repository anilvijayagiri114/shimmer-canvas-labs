import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OurStorySection from "@/components/OurStorySection";
import GallerySection from "@/components/GallerySection";
import TimelineSection from "@/components/TimelineSection";
import QuoteSection from "@/components/QuoteSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <OurStorySection />
      <GallerySection />
      <TimelineSection />
      <QuoteSection />
      <FooterSection />
    </div>
  );
};

export default Index;
