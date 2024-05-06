import { useLayoutEffect, useMemo, useState } from "preact/hooks";

import HomeSlider from "../components/HomeSlider";
import PopCategory from "../components/PopCategory";
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
      <Products data={popular} isLoading={isLoading} />
      <Products data={inStock} isLoading={isLoading} />
      <section class="advantage__section">
        <div class="container">
          <div class="row">
            <div class="advantage advantage--1">
              <div class="advantage__overlay" />
              <div class="advantage__bg">
                <picture>
                  <source srcSet="/assets/images/advantage1.jpg" />
                  <img
                    src="/assets/images/advantage1.jpg"
                    alt=""
                    decoding="async"
                  />
                </picture>
              </div>
              <div class="advantage__img">
                <picture>
                  <source srcSet="/assets/images/advantage11.png" />
                  <img
                    src="/assets/images/advantage11.png"
                    alt=""
                    decoding="async"
                  />
                </picture>
              </div>
              <div class="advantage__info">
                <p class="advantage__title">
                  Регистрируйтесь в системе LOADERPRO и получите доступ к новым
                  возможностям!
                </p>
                <p class="advantage__description">
                  Размещение заказов, прогрессивная система скидок, свой гараж,
                  база каталогов!
                </p>
                <div class="advantage__button">
                  <a className="button button__primary" href="#">
                    Зарегистрироваться
                  </a>
                </div>
              </div>
            </div>
            <div class="advantage advantage--2">
              <div class="advantage__overlay" />
              <div class="advantage__bg">
                <picture>
                  <source srcSet="/assets/images/advantage2.jpg" />
                  <img
                    src="/assets/images/advantage2.jpg"
                    alt=""
                    decoding="async"
                  />
                </picture>
              </div>
              <div class="advantage__img">
                <picture>
                  <source srcSet="/assets/images/advantage22.png" />
                  <img
                    src="/assets/images/advantage22.png"
                    alt=""
                    decoding="async"
                  />
                </picture>
              </div>
              <div class="advantage__info">
                <p class="advantage__title">
                  Осуществляем подбор запчастей по каталогам с гарантией!
                </p>
                <p class="advantage__description">
                  Наши специалисты подберут запчасти по данным вашей техники. Вы
                  получите вырезку из каталога для согласования позиций.
                </p>
                <div class="advantage__button">
                  <a className="button button__black" href="#">
                    Отправить запрос
                  </a>
                </div>
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
                <p>
                  Если вам необходимо выбрать гидравлическую тележку для склада
                  - ознакомьтесь с рекоме...
                </p>
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
                <p>
                  Хранение и обслуживание запчастей играет критическую роль в
                  обеспечении эффективной...
                </p>
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
                <p>
                  Мы собрали 5 самых распространенных ошибок, которые допускают
                  во время ремонта вилочных...
                </p>
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
                <p>
                  Интересные факты о вилочных погрузчиках которые вы могли не
                  знать...
                </p>
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
