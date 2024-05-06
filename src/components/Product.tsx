type Props = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  article: number;
  weight: number;
  like: boolean;
  status: number;
};

const Product = (props: Props) => {
  const price = props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  let status: string;
  let statusColor: string;

  switch (props.status) {
    case 1:
      status = "В наличии";
      statusColor = "green";
      break;
    case 2:
      status = "2-3 недели";
      statusColor = "orange";
      break;
    default:
      status = "Нет в наличии";
      statusColor = "red";
  }

  return (
    <form className="product">
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
        <div className={`product__status product__status--${statusColor}`}>
          <span />
          <p>{status}</p>
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
