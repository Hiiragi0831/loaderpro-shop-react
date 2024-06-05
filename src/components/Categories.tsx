import { useLayoutEffect, useState } from "preact/hooks";

import { api } from "../services/api";
import Category from "./Category";

const Categories = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadProducts = async () => {
    try {
      const data = await api.getAllCategory();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  };

  useLayoutEffect(() => void loadProducts(), []);

  return (
    <section className="category__section">
      <div className="container">
        <div className="title">
          <h1>Популярные категории</h1>
        </div>
        <div className="row">{isLoading ? "Загрузка" : data.map((item) => <Category key={item.id} {...item} />)}</div>
      </div>
    </section>
  );
};

export default Categories;
