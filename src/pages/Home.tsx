import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LifelineSection from "@/components/LifelineSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a2e] overflow-x-hidden">
      <SEOHead
        title="JNB LLC | Bookkeeping, Tax Preparation & Fractional CFO | Littleton CO"
        description="JNB LLC provides professional bookkeeping, accounting, business tax preparation, fractional CFO services, and custom financial systems for small businesses. Virtual services based in Littleton, Colorado — serving clients nationwide."
        keywords="JNB LLC, bookkeeping services, small business accounting, tax preparation, fractional CFO, financial systems, virtual bookkeeper, QuickBooks cleanup, business tax filing, cash flow forecasting, financial strategy, Littleton CO, Denver metro, Colorado bookkeeper"
        canonical="https://jnbllc.com"
      />
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <ServicesSection />
      <ResultsSection />
      <TestimonialsSection />
      <LifelineSection />
      <AboutSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
}
