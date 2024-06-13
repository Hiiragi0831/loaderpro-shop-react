import { useLayoutEffect, useState } from "preact/hooks";

import Product from "../components/Product";
import { api } from "../services/api";

export const Favorites = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let filteredProducts = [];

  const loadProducts = async () => {
    try {
      const data = await api.getAllProducts();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  };

  filteredProducts = data.filter((item) => item.like === true).slice(0);

  useLayoutEffect(() => void loadProducts(), []);
  return (
    <main>
      <section className="product__section">
        <div className="container">
          <h1>Избранное</h1>
          <div className="row">
            {isLoading ? "Загрузка" : filteredProducts.map((post) => <Product key={post.id} {...post} />)}
          </div>
        </div>
      </section>
    </main>
  );
};
