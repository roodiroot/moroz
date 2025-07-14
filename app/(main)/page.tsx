import CTASection from "@/components/page/main-page/cta-section/cta-section";
import FAQSection from "@/components/page/main-page/faq-section/faq-section";
import HeroSection from "@/components/page/main-page/hero-section/hero-section";
import PriceSection from "@/components/page/main-page/price-section/price-section";
import FeaturesSection from "@/components/page/main-page/features-section/features-section";
import PortfolioSection from "@/components/page/main-page/portfolio-section/portfolio-section";
import NewProductsSection from "@/components/page/main-page/new-products-section/new-products-section";

import { getAllFAQ } from "@/data/faqs-api";
import { getAllProducts } from "@/data/products-api";
import { getAllServicePrice } from "@/data/service-price-api";

export default async function Home() {
  const params = new URLSearchParams({
    "populate[0]": "images",
    "populate[1]": "brand",
    sort: "createdAt:desc",
    pagination: JSON.stringify({ page: 1, pageSize: 100 }),
  });
  const paramsPrice = new URLSearchParams({
    sort: "createdAt:asc",
  });

  const prices = await getAllServicePrice(paramsPrice.toString());
  const products = await getAllProducts(params.toString());
  const faqs = await getAllFAQ();

  return (
    <div>
      <HeroSection />
      <PriceSection prices={prices.data} />
      <NewProductsSection products={products.data} />
      <FeaturesSection />
      <CTASection />
      <PortfolioSection />
      <FAQSection faqs={faqs.data} />
    </div>
  );
}
