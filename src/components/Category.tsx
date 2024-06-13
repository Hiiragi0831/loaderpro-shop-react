import { FC } from "react";

import { Category as CategoryType } from "../common/types/Category";

type Props = Pick<CategoryType, "title" | "image">;

const Category: FC<Props> = (data) => {
  return (
    <a className="category" href="#">
      <div className="category__bg">
        <picture>
          <source srcSet={data.image} />
          <img src={data.image} alt={data.title} decoding="async" />
        </picture>
      </div>
      <div className="category__info">
        <div className="category__title">{data.title}</div>
        <div className="category__button">
          <span>Перейти</span>
          <svg>
            <use xlinkHref="/spritemap.svg#icon-right-arrow" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default Category;
