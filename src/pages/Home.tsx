import Advantages from "../components/Advantages";
import Articles from "../components/Articles";
import Categories from "../components/Categories";
import HomeSlider from "../components/HomeSlider";
import { MapSending } from "../components/MapSending";
import Products from "../components/Products";
import { Reviews } from "../components/Reviews";
import { Team } from "../components/Team";

export default function Home() {
  return (
    <main>
      <HomeSlider />
      <Categories />
      <Products limit={5} filter={"popular"} />
      <Products limit={5} filter={"inStock"} />
      <Advantages />
      <Reviews />
      <MapSending />
      <Team />
      <Articles limit={4} />
    </main>
  );
}
