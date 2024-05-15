import { useLayoutEffect, useMemo, useState } from "preact/hooks";
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

  const popularProducts = useMemo(() => data.slice(0, limit), [data, limit]);
  const inStockProducts = useMemo(
    () => data.filter((item) => item.status === 1).slice(0, limit),
    [data, limit],
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

  switch (filter) {
    case "popular":
      filteredProducts = popularProducts;
      break;
    case "inStock":
      filteredProducts = inStockProducts;
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
          {isLoading
            ? "Загрузка"
            : filteredProducts.map((post) => (
                <Product key={post.id} {...post} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
