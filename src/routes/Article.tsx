import { useLayoutEffect, useState } from "preact/hooks";
import { useParams } from "react-router";

import { Article as Props } from "../common/types/Article";
import { api } from "../services/api";

export default function Article() {
  const { id } = useParams();
  const [data, setData] = useState<Props>({
    content: "",
    date: new Date(),
    description: "",
    id: 0,
    image: "",
    title: "Загрузка новости",
  });
  const [isLoading, setIsLoading] = useState(true);
  const current = new Date(data.date);
  const date = `${current.getDate()}.${current.getMonth() + 1}.${current.getFullYear()}`;

  const loadArticle = async () => {
    try {
      const data = await api.getArticle(id);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  };

  useLayoutEffect(() => void loadArticle(), []);

  return (
    <main>
      <section className="news">
        <div className="container">
          {isLoading ? (
            "Загрузка"
          ) : (
            <div className="row">
              <h1>{data.title}</h1>
              <time dateTime={date}>{date}</time>
              <picture>
                <source srcSet={data.image} />
                <img src={data.image} alt={data.title} decoding="async" />
              </picture>
              <div
                className="row"
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
