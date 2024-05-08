const Article = () => {
  return (
    <div className="article">
      <div className="article__img">
        <picture>
          <source srcSet="/assets/images/news.png" />
          <img src="/assets/images/news.png" alt="" decoding="async" />
        </picture>
      </div>
      <div className="article__title">
        <p>Как выбрать тележку для склада?</p>
      </div>
      <div className="article__date">
        <p>15.02.2022</p>
      </div>
      <div className="article__description">
        <p>
          Если вам необходимо выбрать гидравлическую тележку для склада -
          ознакомьтесь с рекоме...
        </p>
      </div>
      <div className="article__link">
        <p>Подробнее</p>
      </div>
    </div>
  );
};

export default Article;
