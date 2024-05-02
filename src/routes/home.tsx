import HomeSlider from "../components/homeSlider";
import PopCategory from "../components/popCategory";
import Product from "../components/product";

export default function Home() {
    return (
        <main>
            <HomeSlider />
            <section class="popCategory__section">
                <div class="container">
                    <div class="title">
                        <h1>Популярные категории</h1>
                    </div>
                    <div class="row">
                        <PopCategory />
                        <PopCategory />
                        <PopCategory />
                        <PopCategory />
                        <PopCategory />
                    </div>
                </div>
            </section>
            <section class="product__section">
                <div class="container">
                    <div class="title">
                        <p class="h1">Часто ищут</p><a href="#">Все товары</a>
                    </div>
                    <div class="row">
                        <Product />
                        <form className="product"><input type="hidden" name="id" value="322610" />
                            <div class="product__like is-active">
                                <svg>
                                    <use xlinkHref="/spritemap.svg#icon-heart" />
                                </svg>
                            </div>
                            <div class="product__img">
                                <picture>
                                    <source srcSet="/assets/images/image_1.png" />
                                    <img src="/assets/images/image_1.png" alt="" decoding="async" />
                                </picture>
                            </div>
                            <div class="product__info">
                                <div class="product__price">
                                    <p>300 738 ₽</p>
                                </div>
                                <div class="product__article">
                                    <p>Артикул: 12345678910546</p>
                                </div>
                            </div>
                            <div class="product__main">
                                <div class="product__status product__status--green"><span />
                                    <p>В наличии</p>
                                </div>
                                <div class="product__title">
                                    <p>Масло ROLF 5W30 3-SYNTHETIC A3/B4 (5л) синт. АКЦИЯ "4+1"</p>
                                </div>
                            </div>
                            <div class="product__buttons">
                                <button className="button button__primary button__icon" type="submit" name="basket">
                                    <svg>
                                        <use xlinkHref="/spritemap.svg#icon-shopping-cart" />
                                    </svg>
                                    В корзину
                                </button>
                            </div>
                        </form>
                        <form className="product"><input type="hidden" name="id" value="322610" />
                            <div class="product__like">
                                <svg>
                                    <use xlinkHref="/spritemap.svg#icon-heart" />
                                </svg>
                            </div>
                            <div class="product__img">
                                <picture>
                                    <source srcSet="/assets/images/image_1.png" />
                                    <img src="/assets/images/image_1.png" alt="" decoding="async" />
                                </picture>
                            </div>
                            <div class="product__info">
                                <div class="product__price">
                                    <p>300 738 ₽</p>
                                </div>
                                <div class="product__article">
                                    <p>Артикул: 12345678910546</p>
                                </div>
                            </div>
                            <div class="product__main">
                                <div class="product__status product__status--green"><span />
                                    <p>В наличии</p>
                                </div>
                                <div class="product__title">
                                    <p>Масло ROLF 5W30 3-SYNTHETIC A3/B4 (5л) синт. АКЦИЯ "4+1"</p>
                                </div>
                            </div>
                            <div class="product__buttons">
                                <button className="button button__primary button__icon" type="submit" name="basket">
                                    <svg>
                                        <use xlinkHref="/spritemap.svg#icon-shopping-cart" />
                                    </svg>
                                    В корзину
                                </button>
                            </div>
                        </form>
                        <form className="product"><input type="hidden" name="id" value="322610" />
                            <div class="product__like">
                                <svg>
                                    <use xlinkHref="/spritemap.svg#icon-heart" />
                                </svg>
                            </div>
                            <div class="product__img">
                                <picture>
                                    <source srcSet="/assets/images/image_1.png" />
                                    <img src="/assets/images/image_1.png" alt="" decoding="async" />
                                </picture>
                            </div>
                            <div class="product__info">
                                <div class="product__price">
                                    <p>300 738 ₽</p>
                                </div>
                                <div class="product__article">
                                    <p>Артикул: 12345678910546</p>
                                </div>
                            </div>
                            <div class="product__main">
                                <div class="product__status product__status--orange"><span />
                                    <p>В наличии</p>
                                </div>
                                <div class="product__title">
                                    <p>Масло ROLF 5W30 3-SYNTHETIC A3/B4 (5л) синт. АКЦИЯ "4+1"</p>
                                </div>
                            </div>
                            <div class="product__buttons">
                                <button className="button button__primary button__icon" type="submit" name="basket">
                                    <svg>
                                        <use xlinkHref="/spritemap.svg#icon-shopping-cart" />
                                    </svg>
                                    В корзину
                                </button>
                            </div>
                        </form>
                        <form className="product"><input type="hidden" name="id" value="322610" />
                            <div class="product__like">
                                <svg>
                                    <use xlinkHref="/spritemap.svg#icon-heart" />
                                </svg>
                            </div>
                            <div class="product__img">
                                <picture>
                                    <source srcSet="/assets/images/image_1.png" />
                                    <img src="/assets/images/image_1.png" alt="" decoding="async" />
                                </picture>
                            </div>
                            <div class="product__info">
                                <div class="product__price">
                                    <p>300 738 ₽</p>
                                </div>
                                <div class="product__article">
                                    <p>Артикул: 12345678910546</p>
                                </div>
                            </div>
                            <div class="product__main">
                                <div class="product__status product__status--red"><span />
                                    <p>В наличии</p>
                                </div>
                                <div class="product__title">
                                    <p>Масло ROLF 5W30 3-SYNTHETIC A3/B4 (5л) синт. АКЦИЯ "4+1"</p>
                                </div>
                            </div>
                            <div class="product__buttons">
                                <button className="button button__primary button__icon" type="submit" name="basket">
                                    <svg>
                                        <use xlinkHref="/spritemap.svg#icon-shopping-cart" />
                                    </svg>
                                    В корзину
                                </button>
                            </div>
                        </form>
                        <form className="product"><input type="hidden" name="id" value="322610" />
                            <div class="product__cache">
                                <svg>
                                    <use xlinkHref="/spritemap.svg#icon-cache" />
                                </svg>
                                <p>+30 ₽</p>
                            </div>
                            <div class="product__like">
                                <svg>
                                    <use xlinkHref="/spritemap.svg#icon-heart" />
                                </svg>
                            </div>
                            <div class="product__img">
                                <picture>
                                    <source srcSet="/assets/images/image_1.png" />
                                    <img src="/assets/images/image_1.png" alt="" decoding="async" />
                                </picture>
                            </div>
                            <div class="product__info">
                                <div class="product__price">
                                    <p>300 738 ₽</p>
                                </div>
                                <div class="product__article">
                                    <p>Артикул: 12345678910546</p>
                                </div>
                            </div>
                            <div class="product__main">
                                <div class="product__status product__status--green"><span />
                                    <p>В наличии</p>
                                </div>
                                <div class="product__title">
                                    <p>Масло ROLF 5W30 3-SYNTHETIC A3/B4 (5л) синт. АКЦИЯ "4+1"</p>
                                </div>
                            </div>
                            <div class="product__buttons">
                                <button className="button button__primary button__icon" type="submit" name="basket">
                                    <svg>
                                        <use xlinkHref="/spritemap.svg#icon-shopping-cart" />
                                    </svg>
                                    В корзину
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section class="product__section">
                <div class="container">
                    <div class="title">
                        <p class="h1">В наличии</p><a href="#">Все товары</a>
                    </div>
                    <div class="row">
                        <form className="product"><input type="hidden" name="id" value="322610" />
                            <div class="product__like">
                                <svg>
                                    <use xlinkHref="/spritemap.svg#icon-heart" />
                                </svg>
                            </div>
                            <div class="product__img">
                                <picture>
                                    <source srcSet="/assets/images/image_1.png" />
                                    <img src="/assets/images/image_1.png" alt="" decoding="async" />
                                </picture>
                            </div>
                            <div class="product__info">
                                <div class="product__price">
                                    <p>300 738 ₽</p>
                                </div>
                                <div class="product__article">
                                    <p>Артикул: 12345678910546</p>
                                </div>
                            </div>
                            <div class="product__main">
                                <div class="product__status product__status--green"><span />
                                    <p>В наличии</p>
                                </div>
                                <div class="product__title">
                                    <p>Масло ROLF 5W30 3-SYNTHETIC A3/B4 (5л) синт. АКЦИЯ "4+1"</p>
                                </div>
                            </div>
                            <div class="product__buttons">
                                <button className="button button__primary button__icon" type="submit" name="basket">
                                    <svg>
                                        <use xlinkHref="/spritemap.svg#icon-shopping-cart" />
                                    </svg>
                                    В корзину
                                </button>
                            </div>
                        </form>
                        <form className="product"><input type="hidden" name="id" value="322610" />
                            <div class="product__like">
                                <svg>
                                    <use xlinkHref="/spritemap.svg#icon-heart" />
                                </svg>
                            </div>
                            <div class="product__img">
                                <picture>
                                    <source srcSet="/assets/images/image_1.png" />
                                    <img src="/assets/images/image_1.png" alt="" decoding="async" />
                                </picture>
                            </div>
                            <div class="product__info">
                                <div class="product__price">
                                    <p>300 738 ₽</p>
                                </div>
                                <div class="product__article">
                                    <p>Артикул: 12345678910546</p>
                                </div>
                            </div>
                            <div class="product__main">
                                <div class="product__status product__status--green"><span />
                                    <p>В наличии</p>
                                </div>
                                <div class="product__title">
                                    <p>Масло ROLF 5W30 3-SYNTHETIC A3/B4 (5л) синт. АКЦИЯ "4+1"</p>
                                </div>
                            </div>
                            <div class="product__buttons">
                                <button className="button button__primary button__icon" type="submit" name="basket">
                                    <svg>
                                        <use xlinkHref="/spritemap.svg#icon-shopping-cart" />
                                    </svg>
                                    В корзину
                                </button>
                            </div>
                        </form>
                        <form className="product"><input type="hidden" name="id" value="322610" />
                            <div class="product__like">
                                <svg>
                                    <use xlinkHref="/spritemap.svg#icon-heart" />
                                </svg>
                            </div>
                            <div class="product__img">
                                <picture>
                                    <source srcSet="/assets/images/image_1.png" />
                                    <img src="/assets/images/image_1.png" alt="" decoding="async" />
                                </picture>
                            </div>
                            <div class="product__info">
                                <div class="product__price">
                                    <p>300 738 ₽</p>
                                </div>
                                <div class="product__article">
                                    <p>Артикул: 12345678910546</p>
                                </div>
                            </div>
                            <div class="product__main">
                                <div class="product__status product__status--green"><span />
                                    <p>В наличии</p>
                                </div>
                                <div class="product__title">
                                    <p>Масло ROLF 5W30 3-SYNTHETIC A3/B4 (5л) синт. АКЦИЯ "4+1"</p>
                                </div>
                            </div>
                            <div class="product__buttons">
                                <button className="button button__primary button__icon" type="submit" name="basket">
                                    <svg>
                                        <use xlinkHref="/spritemap.svg#icon-shopping-cart" />
                                    </svg>
                                    В корзину
                                </button>
                            </div>
                        </form>
                        <form className="product"><input type="hidden" name="id" value="322610" />
                            <div class="product__like">
                                <svg>
                                    <use xlinkHref="/spritemap.svg#icon-heart" />
                                </svg>
                            </div>
                            <div class="product__img">
                                <picture>
                                    <source srcSet="/assets/images/image_1.png" />
                                    <img src="/assets/images/image_1.png" alt="" decoding="async" />
                                </picture>
                            </div>
                            <div class="product__info">
                                <div class="product__price">
                                    <p>300 738 ₽</p>
                                </div>
                                <div class="product__article">
                                    <p>Артикул: 12345678910546</p>
                                </div>
                            </div>
                            <div class="product__main">
                                <div class="product__status product__status--green"><span />
                                    <p>В наличии</p>
                                </div>
                                <div class="product__title">
                                    <p>Масло ROLF 5W30 3-SYNTHETIC A3/B4 (5л) синт. АКЦИЯ "4+1"</p>
                                </div>
                            </div>
                            <div class="product__buttons">
                                <button className="button button__primary button__icon" type="submit" name="basket">
                                    <svg>
                                        <use xlinkHref="/spritemap.svg#icon-shopping-cart" />
                                    </svg>
                                    В корзину
                                </button>
                            </div>
                        </form>
                        <form className="product"><input type="hidden" name="id" value="322610" />
                            <div class="product__like">
                                <svg>
                                    <use xlinkHref="/spritemap.svg#icon-heart" />
                                </svg>
                            </div>
                            <div class="product__img">
                                <picture>
                                    <source srcSet="/assets/images/image_1.png" />
                                    <img src="/assets/images/image_1.png" alt="" decoding="async" />
                                </picture>
                            </div>
                            <div class="product__info">
                                <div class="product__price">
                                    <p>300 738 ₽</p>
                                </div>
                                <div class="product__article">
                                    <p>Артикул: 12345678910546</p>
                                </div>
                            </div>
                            <div class="product__main">
                                <div class="product__status product__status--green"><span />
                                    <p>В наличии</p>
                                </div>
                                <div class="product__title">
                                    <p>Масло ROLF 5W30 3-SYNTHETIC A3/B4 (5л) синт. АКЦИЯ "4+1"</p>
                                </div>
                            </div>
                            <div class="product__buttons">
                                <button className="button button__primary button__icon" type="submit" name="basket">
                                    <svg>
                                        <use xlinkHref="/spritemap.svg#icon-shopping-cart" />
                                    </svg>
                                    В корзину
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section class="advantage__section">
                <div class="container">
                    <div class="row">
                        <div class="advantage advantage--1">
                            <div class="advantage__overlay" />
                            <div class="advantage__bg">
                                <picture>
                                    <source srcSet="/assets/images/advantage1.jpg" />
                                    <img src="/assets/images/advantage1.jpg" alt="" decoding="async" />
                                </picture>
                            </div>
                            <div class="advantage__img">
                                <picture>
                                    <source srcSet="/assets/images/advantage11.png" />
                                    <img src="/assets/images/advantage11.png" alt="" decoding="async" />
                                </picture>
                            </div>
                            <div class="advantage__info">
                                <p class="advantage__title">Регистрируйтесь в системе LOADERPRO и получите доступ к
                                    новым возможностям!</p>
                                <p class="advantage__description">Размещение заказов, прогрессивная система скидок, свой
                                    гараж, база каталогов!</p>
                                <div class="advantage__button"><a className="button button__primary"
                                                                  href="#">Зарегистрироваться</a></div>
                            </div>
                        </div>
                        <div class="advantage advantage--2">
                            <div class="advantage__overlay" />
                            <div class="advantage__bg">
                                <picture>
                                    <source srcSet="/assets/images/advantage2.jpg" />
                                    <img src="/assets/images/advantage2.jpg" alt="" decoding="async" />
                                </picture>
                            </div>
                            <div class="advantage__img">
                                <picture>
                                    <source srcSet="/assets/images/advantage22.png" />
                                    <img src="/assets/images/advantage22.png" alt="" decoding="async" />
                                </picture>
                            </div>
                            <div class="advantage__info">
                                <p class="advantage__title">Осуществляем подбор запчастей по каталогам с гарантией!</p>
                                <p class="advantage__description">Наши специалисты подберут запчасти по данным вашей
                                    техники. Вы получите вырезку из каталога для согласования позиций.</p>
                                <div class="advantage__button"><a className="button button__black" href="#">Отправить
                                    запрос</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="article__section">
                <div class="container">
                    <div class="title">
                        <p class="h1">Полезная информация</p>
                    </div>
                    <div class="row">
                        <div class="article">
                            <div class="article__img">
                                <picture>
                                    <source srcSet="/assets/images/news.png" />
                                    <img src="/assets/images/news.png" alt="" decoding="async" />
                                </picture>
                            </div>
                            <div class="article__title">
                                <p>Как выбрать тележку для склада?</p>
                            </div>
                            <div class="article__date">
                                <p>15.02.2022</p>
                            </div>
                            <div class="article__description">
                                <p>Если вам необходимо выбрать гидравлическую тележку для склада - ознакомьтесь с
                                    рекоме...</p>
                            </div>
                            <div class="article__link">
                                <p>Подробнее</p>
                            </div>
                        </div>
                        <div class="article">
                            <div class="article__img">
                                <picture>
                                    <source srcSet="/assets/images/news.png" />
                                    <img src="/assets/images/news.png" alt="" decoding="async" />
                                </picture>
                            </div>
                            <div class="article__title">
                                <p>Правила хранения запчастей</p>
                            </div>
                            <div class="article__date">
                                <p>15.02.2022</p>
                            </div>
                            <div class="article__description">
                                <p>Хранение и обслуживание запчастей играет критическую роль в обеспечении
                                    эффективной...</p>
                            </div>
                            <div class="article__link">
                                <p>Подробнее</p>
                            </div>
                        </div>
                        <div class="article">
                            <div class="article__img">
                                <picture>
                                    <source srcSet="/assets/images/news.png" />
                                    <img src="/assets/images/news.png" alt="" decoding="async" />
                                </picture>
                            </div>
                            <div class="article__title">
                                <p>5 ошибок при ремонте погрузчика</p>
                            </div>
                            <div class="article__date">
                                <p>15.02.2022</p>
                            </div>
                            <div class="article__description">
                                <p>Мы собрали 5 самых распространенных ошибок, которые допускают во время ремонта
                                    вилочных...</p>
                            </div>
                            <div class="article__link">
                                <p>Подробнее</p>
                            </div>
                        </div>
                        <div class="article">
                            <div class="article__img">
                                <picture>
                                    <source srcSet="/assets/images/news.png" />
                                    <img src="/assets/images/news.png" alt="" decoding="async" />
                                </picture>
                            </div>
                            <div class="article__title">
                                <p>10 фактов о погрузчиках</p>
                            </div>
                            <div class="article__date">
                                <p>15.02.2022</p>
                            </div>
                            <div class="article__description">
                                <p>Интересные факты о вилочных погрузчиках которые вы могли не знать...</p>
                            </div>
                            <div class="article__link">
                                <p>Подробнее</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
