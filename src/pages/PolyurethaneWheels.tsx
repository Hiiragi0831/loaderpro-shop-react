import { Link } from "react-router-dom";

import Articles from "../components/Articles";
import { Cta } from "../components/Cta";
import { InfoBox } from "../components/InfoBox";

export const PolyurethaneWheels = () => {
  const cat = [
    "Колеса для ричтраков",
    "Колеса и\u00A0ролики для штабелеров",
    "Колеса и ролики\u00A0для электротележек",
    "Колеса и\u00A0ролики для штабелеров",
  ];
  const assortment = ["Ведущие колеса", "Грузовые колеса", "Грузовые ролики", "Опорные колеса"];
  return (
    <main>
      <section className="polyurethane-wheels__hero">
        <div className="container">
          <div className="row">
            <div className="polyurethane-wheels__hero-info">
              <h1>Полиуретановые колеса и ролики для складской техники</h1>
              <p>
                Чтобы купить полиуретановые колеса для складской техники вы можете обратиться в наш специализированный
                магазин комплектующих для складского оборудования. Мы предлагаем широкий ассортимент колес различных
                размеров и конфигураций.
              </p>
              <picture className="for-desktop">
                <source srcSet={`/assets/images/polyurethanewheels/logos.png`} />
                <img src={`/assets/images/polyurethanewheels/logos.png`} alt="" decoding="async" />
              </picture>
              <picture className="for-devices">
                <source srcSet={`/assets/images/polyurethanewheels/logos-m.png`} />
                <img src={`/assets/images/polyurethanewheels/logos-m.png`} alt="" decoding="async" />
              </picture>
            </div>
            <picture>
              <source srcSet={`/assets/images/polyurethanewheels/wheels-1.png`} />
              <img src={`/assets/images/polyurethanewheels/wheels-1.png`} alt="" decoding="async" />
            </picture>
          </div>
        </div>
      </section>
      <section className="polyurethane-wheels__category">
        <div className="container">
          <div className="row">
            {cat.map((cat, key) => (
              <div className="polyurethane-wheels__cat" key={key}>
                <picture>
                  <source srcSet={`/assets/images/polyurethanewheels/c-0${key + 1}.png`} />
                  <img src={`/assets/images/polyurethanewheels/c-0${key + 1}.png`} alt="" decoding="async" />
                </picture>
                <p>{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="polyurethane-wheels__advantages">
        <div className="container">
          <picture>
            <source srcSet={`/assets/images/polyurethanewheels/01.png`} />
            <img src={`/assets/images/polyurethanewheels/01.png`} alt="" decoding="async" />
          </picture>
        </div>
      </section>
      <section className="polyurethane-wheels__assortment">
        <div className="container">
          <span className="h1">В нашем ассортименте вы найдёте:</span>
          <div class="row">
            {assortment.map((cat, key) => (
              <div className="polyurethane-wheels__cat" key={key}>
                <picture>
                  <source srcSet={`/assets/images/polyurethanewheels/assortment-0${key + 1}.png`} />
                  <img src={`/assets/images/polyurethanewheels/assortment-0${key + 1}.png`} alt="" decoding="async" />
                </picture>
                <p>{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <InfoBox
        title="Совместимость"
        text="Наши колеса и ролики подходят для брендов"
        img="/assets/images/polyurethanewheels/still.png"
        class="reverse"
      />
      <section className="polyurethane-wheels__about">
        <div className="container">
          <div class="row">
            <div className="polyurethane-wheels__about-text">
              <span class="h1">Наш интернет-магазин</span>
              <p>
                Вы можете использовать наш интернет-магазин, чтобы осуществить выбор полиуретановых колес
                самостоятельно.
              </p>
              <p>
                При выборе полиуретановых колес убедитесь, что их параметры соответствуют требованиям вашего конкретного
                вида складской техники (например, ричтрака или штабелера).
              </p>
              <p>
                Необходимо знать номер или размеры и характеристики колес, чтобы подобрать оптимальные варианты для
                вашей складской техники.
              </p>
              <Link to="#" className="button button__primary">
                Перейти в каталог
              </Link>
            </div>
            <div class="polyurethane-wheels__about-logo">
              <svg>
                <use xlinkHref="/spritemap.svg#icon-logo" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="polyurethane-wheels__cta">
        <div className="container">
          <div class="row">
            <div className="polyurethane-wheels__cta-text">
              <span className="h1">
                <p>Зачем покупать новые?</p>
                <p>Восстановите старые!</p>
                <mark>Экономия до 70%!</mark>
              </span>
              <p>
                Зачастую колеса, у которых есть повреждения контактного слоя, выбрасываются. Большинство не знают, что
                существует восстановление полиуретановых колес и роликов, за счет чего мощно существенно сэкономить
                деньги на замену деталей и время на подбор подходящего комплектующего.
              </p>
              <p>
                Компания «СПЕЦМАШИНА» оказывает услуги по восстановлению полиуретанового покрытия на колесах для
                разнообразной складской техники – ричтраки, самоходные тележки, штабелёры, палетоперевозчики, роклы,
                комплектовщики заказов, узкопроходные штабелёры с высокой грузоподъемностью.
              </p>
              <Link to="#" className="button button__outline for-devices">
                Перейти
              </Link>
            </div>
            <div class="polyurethane-wheels__cta-img">
              <picture>
                <source srcSet={`/assets/images/polyurethanewheels/cta.png`} />
                <img src={`/assets/images/polyurethanewheels/cta.png`} alt="" decoding="async" />
              </picture>
              <Link to="#" className="button button__outline for-desktop">
                Перейти
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
};
