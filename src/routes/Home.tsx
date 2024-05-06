import { useEffect, useState } from "preact/hooks";

import HomeSlider from "../components/HomeSlider";
import PopCategory from "../components/PopCategory";
import Product from "../components/Product";

export default function Home() {
  const [data, setData] = useState([]);
  const popular = [];
  const inStock = [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        return await fetch("https://76fbb2aa70af7ba2.mokky.dev/products");
      } catch (error) {
        console.error("Error fetching:", error.message);
      }
    };

    fetchData()
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  data.forEach((item) => {
    if (popular.length < 5) {
      popular.push(item);
    }

    if (inStock.length < 5) {
      if (item.status === 1) {
        inStock.push(item);
      }
    }
  });

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
            <p class="h1">Часто ищут</p>
            <a href="#">Все товары</a>
          </div>
          <div class="row">
            {popular.map((post) => (
              <Product
                key={post.id}
                id={post.id}
                article={post.article}
                description={post.description}
                image={post.image}
                price={post.price}
                title={post.title}
                weight={post.weight}
                like={post.like}
                status={post.status}
              />
            ))}
          </div>
        </div>
      </section>
      <section class="product__section">
        <div class="container">
          <div class="title">
            <p class="h1">В наличии</p>
            <a href="#">Все товары</a>
          </div>
          <div class="row">
            {inStock.map((post) => (
              <Product
                key={post.id}
                id={post.id}
                article={post.article}
                description={post.description}
                image={post.image}
                price={post.price}
                title={post.title}
                weight={post.weight}
                like={post.like}
                status={post.status}
              />
            ))}
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
