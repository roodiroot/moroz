import CTASection from "@/components/page/main-page/cta-section/cta-section";
import FAQSection from "@/components/page/main-page/faq-section/faq-section";
import FeaturesSection from "@/components/page/main-page/features-section/features-section";
import HeroSection from "@/components/page/main-page/hero-section/hero-section";
import NewProductsSection from "@/components/page/main-page/new-products-section/new-products-section";
import PortfolioSection from "@/components/page/main-page/portfolio-section/portfolio-section";
import PriceSection from "@/components/page/main-page/price-section/price-section";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <PriceSection />
      <FeaturesSection />
      <CTASection />
      <NewProductsSection />
      <PortfolioSection />
      <FAQSection />
    </div>
  );
}
