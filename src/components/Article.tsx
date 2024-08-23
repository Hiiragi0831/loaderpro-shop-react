import { FC } from "react";
import { Link } from "react-router-dom";

import { Article as ArticleType } from "../common/types/Article";

type Props = Pick<ArticleType, "id" | "title" | "description" | "image" | "date" | "link">;

const Article: FC<Props> = ({ id, title, description, image, date, link }) => {
  const currentDate = new Date(date).toISOString().slice(0, 10).split("-").reverse().join(".");

  return (
    <div className="article">
      <div className="article__img">
        <picture>
          <source srcSet={`/assets/${image}`} />
          <img src={`/assets/${image}`} alt={title} decoding="async" />
        </picture>
      </div>
      <div className="article__title">
        <p>{title}</p>
      </div>
      <div className="article__date">
        <p>{currentDate}</p>
      </div>
      <div className="article__description">
        <p>{description.slice(0, 100)}...</p>
      </div>
      <div className="article__link">
        <Link to={link ? link : `/articles/${id}`} target={"_blank"}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default Article;
