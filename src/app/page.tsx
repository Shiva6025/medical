import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import FeaturedInnovations from "@/components/FeaturedInnovations";
import ProductsPreview from "@/components/ProductsPreview";
import NewsEvents from "@/components/NewsEvents";
import AboutSummary from "@/components/AboutSummary";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Intro />
      <ProductsPreview />
      <FeaturedInnovations />
      <NewsEvents />
      <AboutSummary />
    </div>
  );
}
