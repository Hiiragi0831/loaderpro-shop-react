type Props = {
    id: number,
    title: string,
    price: string,
    description: string,
    image: string,
    article: number,
    weight: number,
    count: number,
};

// "id": 231,
// "title": "Эргономичный Меховой Майка",
// "price": "$522",
// "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
// "image": "https://loremflickr.com/640/480/technics",
// "article": 0.5033665196970105,
// "weight": 6592,
// "count": 8721

const Product = (props: Props) => {
    return (
        <form className="product" key={props.id}>
            <input type="hidden" name="id" value="322610" />
            <div className="product__like is-active">
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
                    <p>{props.title}</p>
                </div>
                <div className="product__article">
                    <p>Артикул: 12345678910546</p>
                </div>
            </div>
            <div className="product__main">
                <div className="product__status product__status--green"><span />
                    <p>В наличии</p>
                </div>
                <div className="product__title">
                    <p>Масло ROLF 5W30 3-SYNTHETIC A3/B4 (5л) синт. АКЦИЯ "4+1"</p>
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
    )
}

export default Product;
