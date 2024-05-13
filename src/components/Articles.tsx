import { useLayoutEffect, useMemo, useState } from "preact/hooks";
import { FC } from "react";

import { api } from "../services/api";
import Article from "./Article";

type Props = {
  limit: number;
};

const Articles: FC<Props> = ({ limit }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dataArticles = useMemo(() => data.slice(0, limit), [data, limit]);

  const loadArticles = async () => {
    try {
      const data = await api.getArticles();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  };

  useLayoutEffect(() => void loadArticles(), []);
  return (
    <section className="article__section">
      <div className="container">
        <div className="title">
          <p className="h1">Полезная информация</p>
        </div>
        <div className="row">
          {isLoading
            ? "Загрузка"
            : dataArticles.map((post) => (
                <Article
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  description={post.description}
                  image={post.image}
                  date={post.date}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
