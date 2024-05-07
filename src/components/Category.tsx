const Category = () => {
  return (
    <a className="category">
      <div className="category__bg">
        <picture>
          <source srcSet="/assets/images/popCategory.png" />
          <img src="/assets/images/popCategory.png" alt="" decoding="async" />
        </picture>
      </div>
      <div className="category__info">
        <div className="category__title">Запчасти ведущего моста</div>
        <div className="category__button">
          <span>В каталог</span>
          <svg>
            <use xlinkHref="/spritemap.svg#icon-right-arrow" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default Category;
