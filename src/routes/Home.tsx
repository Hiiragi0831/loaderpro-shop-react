import Advantages from "../components/Advantages";
import Articles from "../components/Articles";
import Categories from "../components/Categories";
import HomeSlider from "../components/HomeSlider";
import Products from "../components/Products";

export default function Home() {
  return (
    <main>
      <HomeSlider />
      <Categories />
      <Products limit={5} filter={"popular"} />
      <Products limit={5} filter={"inStock"} />
      <Advantages />
      <Articles limit={4} />
    </main>
  );
}
