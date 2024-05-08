import { useLayoutEffect, useMemo, useState } from "preact/hooks";

import Advantages from "../components/Advantages";
import Articles from "../components/Articles";
import Categorys from "../components/Categorys";
import HomeSlider from "../components/HomeSlider";
import Products from "../components/Products";
import { api } from "../services/api";

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const popular = useMemo(() => data.slice(0, 5), [data]);
  const inStock = useMemo(
    () => data.filter((item) => item.status === 1).slice(0, 5),
    [data],
  );

  const loadProducts = async () => {
    try {
      const data = await api.getAllProducts();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  };

  useLayoutEffect(() => void loadProducts(), []);

  return (
    <main>
      <HomeSlider />
      <Categorys />
      <Products data={popular} isLoading={isLoading} />
      <Products data={inStock} isLoading={isLoading} />
      <Advantages />
      <Articles />
    </main>
  );
}
