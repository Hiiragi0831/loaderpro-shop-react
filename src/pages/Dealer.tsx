import { Swiper, SwiperSlide } from "swiper/react";

import Articles from "../components/Articles";
import { Cta } from "../components/Cta";
import { Preference } from "../components/Preference";
import { Step } from "../components/Step";

export const Dealer = () => {
  const steps = [
    "Вбиваете запрос в\u00A0систему",
    "Получаете лучшее предложение в России",
    "Выгружаете КП",
    "Согласовываете с\u00A0клиентом покупку",
    "Оформляете заказ и присылаете реквизиты клиента!",
  ];
  const whats = [
    "Бухгалтерия сформирует договор и\u00A0счет",
    "Отправит его вашему клиенту",
    "Проконтролирует получение денег",
    "Отдел закупок запустит заказ в\u00A0работу",
    "Отдел логистики осуществит отгрузку товара",
  ];
  return (
    <main>
      <section>
        <div className="container">
          <div className="dealer__hero">
            <picture className="for-desktop">
              <source srcSet={`/assets/images/slider/3.jpeg`} />
              <img src={`/assets/images/slider/3.jpeg`} alt="" decoding="async" />
            </picture>
            <picture className="for-devices">
              <source srcSet={`/assets/images/slider/3m.jpeg`} />
              <img src={`/assets/images/slider/3m.jpeg`} alt="" decoding="async" />
            </picture>
          </div>
        </div>
      </section>
      <section className="dealer__head">
        <div className="container">
          <div className="row">
            <div className="dealer__head-text">
              <h1>Дилерская платформа</h1>
              <p>
                На фоне ухода иностранных компаний с рынка, мы создали сервис с привычным и понятным функционалом. Наша
                команда разработала решение, которое сочетает в себе все лучшие практики и удобство использования, к
                которым вы привыкли. Мы стремимся обеспечить непрерывность и высокое качество обслуживания, предоставляя
                вам всё необходимое для эффективной работы.
              </p>
              <p>
                Наш сервис ориентирован на простоту и удобство взаимодействия, позволяя нашим клиентам легко находить и
                заказывать нужные комплектующие. Мы понимаем, насколько важно для вас стабильное и надежное
                функционирование спецтехники, поэтому предлагаем только проверенные и качественные товары.
              </p>
              <p>
                Мы также обеспечиваем полный спектр услуг поддержки и консультирования, чтобы вы могли быть уверены в
                правильности своего выбора и надежности поставляемых комплектующих. С "Спецмашина" вы получаете не
                просто сервис, а надежного партнера, который всегда рядом, готовый помочь в любой ситуации и предложить
                оптимальные решения для вашего бизнеса.
              </p>
            </div>
            <iframe
              src="https://vk.com/video_ext.php?oid=-30158839&id=456239332"
              allow="encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      <section className="dealer__preference">
        <div className="container">
          <span className="h1">Возможности данной платформы:</span>
          <div className="row">
            <div className="dealer__preference-list">
              <Preference title="25 000" text="товарных позиций в наличии" bg="1" />
              <Preference title="1 616" text="брендов в портфеле" bg="2" />
              <Preference title="3" text="надежных канала поставок" bg="3" />
            </div>
            <div className="dealer__preference-lead">
              <ul>
                <li>Запросы на подбор по каталогу или номеру детали</li>
                <li>Собственный гараж</li>
                <li>Мобильная версия и полноценное мобильное приложение</li>
                <li>Оригиналы, OEM и аналоги</li>
                <li>Создание КП с указанием вашей наценки</li>
                <li>Доставка до вас или ваших клиентов</li>
              </ul>
              <button class="button button__outline"> Оставить заявку</button>
            </div>
          </div>
        </div>
      </section>
      <section className="dealer__who">
        <div className="container">
          <div className="dealer__who-title">
            <span className="h1">Кто может стать дилером нашей платформы?</span>
            <picture className="for-desktop">
              <source srcSet={`/assets/images/who-arrows.png`} />
              <img src={`/assets/images/who-arrows.png`} alt="" decoding="async" />
            </picture>
          </div>
          <div className="row">
            <div className="dealer__who-item">
              <svg>
                <use xlinkHref="/spritemap.svg#icon-person-dolly" />
              </svg>
              <span className="h1">
                Торгующие <br />
                организации
              </span>
            </div>
            <div className="dealer__who-item">
              <svg>
                <use xlinkHref="/spritemap.svg#icon-revenue" />
              </svg>
              <span className="h1">
                Сервисные <br />
                компании
              </span>
            </div>
            <div className="dealer__who-item">
              <svg>
                <use xlinkHref="/spritemap.svg#icon-tools" />
              </svg>
              <span className="h1">Сотрудники крупных компаний</span>
            </div>
          </div>
        </div>
      </section>
      <section className="dealer__agent">
        <div className="container">
          <div className="row">
            <article>
              <span className="h1">Также мы ищем частных агентов во всех регионах России:</span>
              <p>
                Вам больше не нужно содержать своё юр лицо или работать на «дядю» в этой сфере, достаточно просто иметь
                базу лояльных клиентов. Вы можете подключиться к нашей платформе и зарабатывать на ней из любой точки
                мира продавая запчасти своим клиентам за комиссионное вознаграждение.
              </p>
            </article>
            <picture>
              <source srcSet={`/assets/images/39cb5a85e98971fa10132bc4929b5b14.jpg`} />
              <img src={`/assets/images/39cb5a85e98971fa10132bc4929b5b14.jpg`} alt="" decoding="async" />
            </picture>
          </div>
        </div>
      </section>
      <section className="dealer__steps">
        <div className="container">
          <span className="h1">Все это происходит по схеме, где вы делаете 5 простых шагов:</span>
          <div className="row">
            <Swiper slidesPerView={"auto"}>
              {steps.map((item, id) => {
                return (
                  <SwiperSlide key={id}>
                    <Step count={id + 1} text={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
      <section className="dealer__what">
        <div className="container">
          <span className="h1">Что делаем мы:</span>
          <div className="row">
            <Swiper slidesPerView={"auto"}>
              {whats.map((item, id) => {
                return (
                  <SwiperSlide key={id}>
                    <Step count={id + 1} text={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
      <section className="dealer__qa">
        <div className="container">
          <article>
            <span className="h1">
              Под торговой маркой LOADERPRO реализуется только проверенная пользователями продукция, мы верифицируем
              каждого производителя и поставщика! Присоединяйтесь к нашей дилерской системе и зарабатывайте легче -
              вместе с нами!
            </span>
          </article>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
};
