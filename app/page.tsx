import FeaturedProductsPage from "./components/featured";
import HeroPage from "./components/hero";
import OurProduct from "./components/ourProducts";
import ExploreProduct from "./components/exploreProducts";

export default function Home() {
  return (
  <div>
    <HeroPage/>
    <FeaturedProductsPage/>
     <ExploreProduct/>
    <OurProduct/>
  </div>
  );
}
