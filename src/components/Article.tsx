import { Article as Props } from "../common/types/Article";

const Article = (props: Props) => {
  const current = new Date(props.date);
  const date = `${current.getDate()}.${current.getMonth() + 1}.${current.getFullYear()}`;
  const description = `${props.description.slice(0, 100)}...`;

  return (
    <div className="article">
      <div className="article__img">
        <picture>
          <source srcSet={props.image} />
          <img src={props.image} alt={props.title} decoding="async" />
        </picture>
      </div>
      <div className="article__title">
        <p>{props.title}</p>
      </div>
      <div className="article__date">
        <p>{date}</p>
      </div>
      <div className="article__description">
        <p>{description}</p>
      </div>
      <div className="article__link">
        <a href="#">Подробнее</a>
      </div>
    </div>
  );
};

export default Article;
