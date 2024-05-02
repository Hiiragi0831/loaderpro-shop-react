type Props = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  article: number;
  weight: number;
  count: number;
  like: boolean;
  status: string;
  statusColor: string;
};

// article
// brand
// comment
// count
// deliverytime
// id
// img-drop
// measurement
// price
// productname
// quality
// searchname
// weight

const Product = (props: Props) => {
  const price = props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (
    <form className="product" key={props.id}>
      <input type="hidden" name="id" value={props.id} />
      <div className={`product__like ${props.like ? "is-active" : ""}`}>
        <svg>
          <use xlinkHref="/spritemap.svg#icon-heart" />
        </svg>
      </div>
      <div className="product__img">
        <picture>
          <source srcSet={props.image} />
          <img src={props.image} alt="" decoding="async" />
        </picture>
      </div>
      <div className="product__info">
        <div className="product__price">
          <p>{price} ₽</p>
        </div>
        <div className="product__article">
          <p>Артикул: {props.article}</p>
        </div>
      </div>
      <div className="product__main">
        <div
          className={`product__status product__status--${props.statusColor}`}
        >
          <span />
          <p>{props.status}</p>
        </div>
        <div className="product__title">
          <p>{props.title}</p>
        </div>
      </div>
      <div className="product__buttons">
        <button
          className="button button__primary button__icon"
          type="submit"
          name="basket"
        >
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
