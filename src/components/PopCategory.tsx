const PopCategory = () => {
  return (
    <a className="popCategory">
      <div className="popCategory__bg">
        <picture>
          <source srcSet="/assets/images/popCategory.png" />
          <img src="/assets/images/popCategory.png" alt="" decoding="async" />
        </picture>
      </div>
      <div className="popCategory__info">
        <div className="popCategory__title">Запчасти ведущего моста</div>
        <div className="popCategory__button">
          <span>В каталог</span>
          <svg>
            <use xlinkHref="/spritemap.svg#icon-right-arrow" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default PopCategory;
