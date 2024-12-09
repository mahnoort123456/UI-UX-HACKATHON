import FeaturedProductsPage from "./components/featured";
import HeroPage from "./components/hero";
import OurProduct from "./components/ourProducts";


export default function Home() {
  return (
  <div>
    <HeroPage/>
    <FeaturedProductsPage/>
    <OurProduct/>
  </div>
  );
}
