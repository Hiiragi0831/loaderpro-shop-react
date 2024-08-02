import Advantages from "../components/Advantages";
import Articles from "../components/Articles";
import { Brands } from "../components/Brands";
import HomeSlider from "../components/HomeSlider";
import { MapSending } from "../components/MapSending";
import Products from "../components/Products";
import { Reviews } from "../components/Reviews";
import { Team } from "../components/Team";
import { VideoGallery } from "../components/VideoGallery";

export default function Home() {
  return (
    <main>
      <HomeSlider />
      <section>
        <div className="container">
          <picture>
            <source srcSet="/assets/images/home/kat.png" />
            <img src="/assets/images/home/kat.png" alt="" decoding="async" />
          </picture>
        </div>
      </section>
      <Brands />
      <Products limit={5} filter={"popular"} />
      <Products limit={5} filter={"inStock"} />
      <Advantages />
      <Reviews />
      <MapSending />
      <Team />
      <VideoGallery />
      <Articles limit={4} />
    </main>
  );
}
