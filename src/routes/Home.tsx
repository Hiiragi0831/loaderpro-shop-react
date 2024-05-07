import { useLayoutEffect, useMemo, useState } from "preact/hooks";

import Categorys from "../components/Categorys";
import HomeSlider from "../components/HomeSlider";
import Products from "../components/Products";
import { api } from "../services/api";

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const popular = useMemo(() => data.slice(0, 5), [data]);
  const inStock = useMemo(
    () => data.filter((item) => item.status === 1).slice(0, 5),
    [data],
  );

  const loadProducts = async () => {
    try {
      const data = await api.getAllProducts();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  };

  useLayoutEffect(() => void loadProducts(), []);

  return (
    <main>
      <HomeSlider />
      <Categorys />
      <Products data={popular} isLoading={isLoading} />
      <Products data={inStock} isLoading={isLoading} />
      <section className="advantage__section">
        <div className="container">
          <div className="row">
            <div className="advantage advantage--1">
              <div className="advantage__overlay" />
              <div className="advantage__bg">
                <picture>
                  <source srcSet="/assets/images/advantage1.jpg" />
                  <img
                    src="/assets/images/advantage1.jpg"
                    alt=""
                    decoding="async"
                  />
                </picture>
              </div>
              <div className="advantage__img">
                <picture>
                  <source srcSet="/assets/images/advantage11.png" />
                  <img
                    src="/assets/images/advantage11.png"
                    alt=""
                    decoding="async"
                  />
                </picture>
              </div>
              <div className="advantage__info">
                <p className="advantage__title">
                  Регистрируйтесь в системе LOADERPRO и получите доступ к новым
                  возможностям!
                </p>
                <p className="advantage__description">
                  Размещение заказов, прогрессивная система скидок, свой гараж,
                  база каталогов!
                </p>
                <div className="advantage__button">
                  <a className="button button__primary" href="#">
                    Зарегистрироваться
                  </a>
                </div>
              </div>
            </div>
            <div className="advantage advantage--2">
              <div className="advantage__overlay" />
              <div className="advantage__bg">
                <picture>
                  <source srcSet="/assets/images/advantage2.jpg" />
                  <img
                    src="/assets/images/advantage2.jpg"
                    alt=""
                    decoding="async"
                  />
                </picture>
              </div>
              <div className="advantage__img">
                <picture>
                  <source srcSet="/assets/images/advantage22.png" />
                  <img
                    src="/assets/images/advantage22.png"
                    alt=""
                    decoding="async"
                  />
                </picture>
              </div>
              <div className="advantage__info">
                <p className="advantage__title">
                  Осуществляем подбор запчастей по каталогам с гарантией!
                </p>
                <p className="advantage__description">
                  Наши специалисты подберут запчасти по данным вашей техники. Вы
                  получите вырезку из каталога для согласования позиций.
                </p>
                <div className="advantage__button">
                  <a className="button button__black" href="#">
                    Отправить запрос
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="article__section">
        <div className="container">
          <div className="title">
            <p className="h1">Полезная информация</p>
          </div>
          <div className="row">
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
                  Если вам необходимо выбрать гидравлическую тележку для склада
                  - ознакомьтесь с рекоме...
                </p>
              </div>
              <div className="article__link">
                <p>Подробнее</p>
              </div>
            </div>
            <div className="article">
              <div className="article__img">
                <picture>
                  <source srcSet="/assets/images/news.png" />
                  <img src="/assets/images/news.png" alt="" decoding="async" />
                </picture>
              </div>
              <div className="article__title">
                <p>Правила хранения запчастей</p>
              </div>
              <div className="article__date">
                <p>15.02.2022</p>
              </div>
              <div className="article__description">
                <p>
                  Хранение и обслуживание запчастей играет критическую роль в
                  обеспечении эффективной...
                </p>
              </div>
              <div className="article__link">
                <p>Подробнее</p>
              </div>
            </div>
            <div className="article">
              <div className="article__img">
                <picture>
                  <source srcSet="/assets/images/news.png" />
                  <img src="/assets/images/news.png" alt="" decoding="async" />
                </picture>
              </div>
              <div className="article__title">
                <p>5 ошибок при ремонте погрузчика</p>
              </div>
              <div className="article__date">
                <p>15.02.2022</p>
              </div>
              <div className="article__description">
                <p>
                  Мы собрали 5 самых распространенных ошибок, которые допускают
                  во время ремонта вилочных...
                </p>
              </div>
              <div className="article__link">
                <p>Подробнее</p>
              </div>
            </div>
            <div className="article">
              <div className="article__img">
                <picture>
                  <source srcSet="/assets/images/news.png" />
                  <img src="/assets/images/news.png" alt="" decoding="async" />
                </picture>
              </div>
              <div className="article__title">
                <p>10 фактов о погрузчиках</p>
              </div>
              <div className="article__date">
                <p>15.02.2022</p>
              </div>
              <div className="article__description">
                <p>
                  Интересные факты о вилочных погрузчиках которые вы могли не
                  знать...
                </p>
              </div>
              <div className="article__link">
                <p>Подробнее</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
