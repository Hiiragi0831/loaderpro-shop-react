import { useLayoutEffect, useState } from "preact/hooks";
import { FC } from "react";

import Product from "../components/Product";
import { api } from "../services/api";

type Props = {
  filter: string;
  limit: number;
};

const Products: FC<Props> = ({ filter, limit }) => {
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

  switch (filter) {
    case "popular":
      filteredProducts = data.slice(0, limit);
      break;
    case "inStock":
      filteredProducts = data.filter((item) => item.status === 1).slice(0, limit);
      break;
    default:
      filteredProducts = data;
      break;
  }

  useLayoutEffect(() => void loadProducts(), []);

  return (
    <section className="product__section">
      <div className="container">
        <div className="title">
          <p className="h1">Часто ищут</p>
          <a href="#">Все товары</a>
        </div>
        <div className="row">
          {isLoading ? "Загрузка" : filteredProducts.map((post) => <Product key={post.id} {...post} />)}
        </div>
      </div>
    </section>
  );
};

export default Products;
