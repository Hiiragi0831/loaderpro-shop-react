import { FC } from "react";
import { Link } from "react-router-dom";

import { Product as ProductType } from "../common/types/Product";
import { getProductStatus, getProductStatusColor } from "../utils/getProductStatus";

type Props = Pick<ProductType, "price" | "status" | "id" | "image" | "title" | "article" | "like">;

const Product: FC<Props> = ({ price, status, id, image, title, article, like }) => {
  const priceFormat = (price || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (
    <form className="product">
      <input type="hidden" name="id" value={id} />
      <div className={`product__like ${like ? "is-active" : ""}`}>
        <svg>
          <use xlinkHref="/spritemap.svg#icon-heart" />
        </svg>
      </div>
      <div className="product__img">
        <picture>
          <source srcSet={image} />
          <img src={image} alt="" decoding="async" />
        </picture>
      </div>
      <div className="product__info">
        <div className="product__price">
          <p>{priceFormat} ₽</p>
        </div>
        <div className="product__article">
          <p>Артикул: {article}</p>
        </div>
      </div>
      <div className="product__main">
        <div className={`product__status product__status--${getProductStatusColor(status)}`}>
          <span />
          <p>{getProductStatus(status)}</p>
        </div>
        <div className="product__title">
          <Link to={`/catalog/${id}`}>{title}</Link>
        </div>
      </div>
      <div className="product__buttons">
        <button className="button button__primary button__icon" type="submit" name="basket">
          <svg>
            <use xlinkHref="/spritemap.svg#icon-shopping-cart" />
          </svg>
          В корзину
        </button>
      </div>
    </form>
  );
};

export default Product;
