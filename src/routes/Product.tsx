import { useLayoutEffect, useState } from "preact/hooks";
import { useParams } from "react-router";

import { Product as Props } from "../common/types/Product";
import { api } from "../services/api";

export default function Product() {
  const { id } = useParams();
  const [data, setData] = useState<Props>({
    id: 0,
    title: "",
    price: 0,
    description: "string",
    image: "string",
    article: 0,
    weight: 0,
    like: false,
    status: 0,
    brand: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const price = data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  let status: string;
  let statusColor: string;

  const loadArticle = async () => {
    try {
      const data = await api.getProduct(id);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  };

  switch (data.status) {
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

  useLayoutEffect(() => void loadArticle(), []);

  return (
    <main>
      <section className="commodity__section">
        <div className="container">
          {isLoading ? (
            "Загрузка"
          ) : (
            <div className="row">
              <div className="commodity__head">
                <div className="commodity__title">
                  <h1>{data.title}</h1>
                </div>
              </div>
              <div className="commodity__main">
                <div className="commodity__gallery">
                  <div className="commodity__gallery-main">
                    <div className="swiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <picture>
                            <source srcSet="/assets/images/image_1.png" />
                            <img
                              src="/assets/images/image_1.png"
                              alt=""
                              decoding="async"
                            />
                          </picture>
                        </div>
                        <div className="swiper-slide">
                          <picture>
                            <source srcSet="/assets/images/image_1.png" />
                            <img
                              src="/assets/images/image_1.png"
                              alt=""
                              decoding="async"
                            />
                          </picture>
                        </div>
                        <div className="swiper-slide">
                          <picture>
                            <source srcSet="/assets/images/image_1.png" />
                            <img
                              src="/assets/images/image_1.png"
                              alt=""
                              decoding="async"
                            />
                          </picture>
                        </div>
                        <div className="swiper-slide">
                          <picture>
                            <source srcSet="/assets/images/image_1.png" />
                            <img
                              src="/assets/images/image_1.png"
                              alt=""
                              decoding="async"
                            />
                          </picture>
                        </div>
                        <div className="swiper-slide">
                          <picture>
                            <source srcSet="/assets/images/image_1.png" />
                            <img
                              src="/assets/images/image_1.png"
                              alt=""
                              decoding="async"
                            />
                          </picture>
                        </div>
                        <div className="swiper-slide">
                          <picture>
                            <source srcSet="/assets/images/image_1.png" />
                            <img
                              src="/assets/images/image_1.png"
                              alt=""
                              decoding="async"
                            />
                          </picture>
                        </div>
                        <div className="swiper-slide">
                          <picture>
                            <source srcSet="/assets/images/image_1.png" />
                            <img
                              src="/assets/images/image_1.png"
                              alt=""
                              decoding="async"
                            />
                          </picture>
                        </div>
                        <div className="swiper-slide">
                          <picture>
                            <source srcSet="/assets/images/image_1.png" />
                            <img
                              src="/assets/images/image_1.png"
                              alt=""
                              decoding="async"
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="commodity__gallery-thumb">
                    <div className="swiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <picture>
                            <source srcSet="/assets/images/image_1.png" />
                            <img
                              src="/assets/images/image_1.png"
                              alt=""
                              decoding="async"
                            />
                          </picture>
                        </div>
                        <div className="swiper-slide">
                          <picture>
                            <source srcSet="/assets/images/image_1.png" />
                            <img
                              src="/assets/images/image_1.png"
                              alt=""
                              decoding="async"
                            />
                          </picture>
                        </div>
                        <div className="swiper-slide">
                          <picture>
                            <source srcSet="/assets/images/image_1.png" />
                            <img
                              src="/assets/images/image_1.png"
                              alt=""
                              decoding="async"
                            />
                          </picture>
                        </div>
                        <div className="swiper-slide">
                          <picture>
                            <source srcSet="/assets/images/image_1.png" />
                            <img
                              src="/assets/images/image_1.png"
                              alt=""
                              decoding="async"
                            />
                          </picture>
                        </div>
                        <div className="swiper-slide">
                          <picture>
                            <source srcSet="/assets/images/image_1.png" />
                            <img
                              src="/assets/images/image_1.png"
                              alt=""
                              decoding="async"
                            />
                          </picture>
                        </div>
                        <div className="swiper-slide">
                          <picture>
                            <source srcSet="/assets/images/image_1.png" />
                            <img
                              src="/assets/images/image_1.png"
                              alt=""
                              decoding="async"
                            />
                          </picture>
                        </div>
                        <div className="swiper-slide">
                          <picture>
                            <source srcSet="/assets/images/image_1.png" />
                            <img
                              src="/assets/images/image_1.png"
                              alt=""
                              decoding="async"
                            />
                          </picture>
                        </div>
                        <div className="swiper-slide">
                          <picture>
                            <source srcSet="/assets/images/image_1.png" />
                            <img
                              src="/assets/images/image_1.png"
                              alt=""
                              decoding="async"
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="commodity__info">
                  <div className="commodity__info-box">
                    <div
                      className={`commodity__availability commodity__availability--${statusColor}`}
                    >
                      <span />
                      <p>{status}</p>
                    </div>
                    <div className="commodity__specifications">
                      <div className="commodity__specification">
                        <p>Артикул</p>
                        <span>{data.article}</span>
                      </div>
                      <div className="commodity__specification">
                        <p>Бренд</p>
                        <span>{data.brand}</span>
                      </div>
                      <div className="commodity__specification">
                        <p>Бренд</p>
                        <span>JUNGHEINRICH</span>
                      </div>
                      <div className="commodity__specification">
                        <p>Бренд</p>
                        <span>JUNGHEINRICH</span>
                      </div>
                    </div>
                  </div>
                  <div className="commodity__description">
                    <h5>Описание</h5>
                    <p>{data.description}</p>
                  </div>
                  <div className="commodity__basket">
                    <div className="commodity__price">
                      <span>Цена:</span>
                      <p>{price} ₽</p>
                    </div>
                    <div className="commodity__count">
                      <button className="commodity__count-minus">-</button>
                      <input type="number" name="count" value="1" max="100" />
                      <button className="commodity__count-plus">+</button>
                    </div>
                    <button className="button button__primary">
                      В корзину
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
