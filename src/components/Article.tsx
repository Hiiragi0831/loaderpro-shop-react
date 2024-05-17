import { FC } from "react";
import { Link } from "react-router-dom";

import { Article as ArticleType } from "../common/types/Article";

type Props = Pick<
  ArticleType,
  "id" | "title" | "description" | "image" | "date"
>;

const Article: FC<Props> = ({ id, title, description, image, date }) => {
  const currentDate = new Date(date);

  return (
    <div className="article">
      <div className="article__img">
        <picture>
          <source srcSet={image} />
          <img src={image} alt={title} decoding="async" />
        </picture>
      </div>
      <div className="article__title">
        <p>{title}</p>
      </div>
      <div className="article__date">
        <p>
          {currentDate.getDate()}.{currentDate.getMonth() + 1}.
          {currentDate.getFullYear()}
        </p>
      </div>
      <div className="article__description">
        <p>{description.slice(0, 100)}...</p>
      </div>
      <div className="article__link">
        <Link to={`/articles/${id}`}>Подробнее</Link>
      </div>
    </div>
  );
};

export default Article;
