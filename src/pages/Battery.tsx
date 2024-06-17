import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Articles from "../components/Articles";
import Category from "../components/Category";
import { Cta } from "../components/Cta";
import { Direction } from "../components/Direction";

export const Battery = () => {
  const sliders = [];

  for (let i = 1; i < 10; i++) {
    sliders.push(
      <SwiperSlide>
        <picture>
          <source srcSet={`/assets/images/battery/slider/${i}.jpg`} />
          <img src={`/assets/images/battery/slider/${i}.jpg`} alt="" decoding="async" />
        </picture>
      </SwiperSlide>,
    );
  }

  return (
    <main>
      <section className="battery__hero">
        <div className="container">
          <picture className="for-desktop">
            <source srcSet="/assets/images/slider/5.jpeg" />
            <img src="/assets/images/slider/5.jpeg" alt="" decoding="async" />
          </picture>
          <picture className="for-devices">
            <source srcSet="/assets/images/slider/5m.jpeg" />
            <img src="/assets/images/slider/5m.jpeg" alt="" decoding="async" />
          </picture>
        </div>
      </section>
      <section className="battery__category">
        <div className="container">
          <div className="row">
            <Category
              title="Свинцово-кислотные аккумуляторы"
              image={`/assets/images/battery/lead-acid_batteries.png`}
            />
            <Category title="Литий-ионные аккумуляторы" image={`/assets/images/battery/lithium-ion_batteries.png`} />
            <Category
              title="Зарядное устройство тяговых аккумуляторов"
              image={`/assets/images/battery/traction_battery_charger.png`}
            />
            <Category
              title="Разъемы для тяговых аккумуляторов"
              image={`/assets/images/battery/connectors_for_traction_batteries.png`}
            />
          </div>
        </div>
      </section>
      <section className="battery__type">
        <div className="container">
          <h1>Тяговые аккумуляторы LOADERPRO</h1>
          <div class="battery__type-intro">
            <p>
              Тяговые аккумуляторы <b>LOADERPRO</b> используются в транспортных средствах с электрическим приводом,
              таких как электрические погрузчики, ричтраки, штабелей, электрические тележки, подъемные платформы и
              другой промышленной технике.
            </p>
            <p>
              Тяговые аккумуляторные батареи <b>LOADERPRO</b> соответствуют стандартам BS и DIN.
            </p>
          </div>
          <div className="row">
            <div className="battery__type-item">
              <picture>
                <source srcSet="/assets/images/battery/elektropogruzchiki.png" />
                <img src="/assets/images/battery/elektropogruzchiki.png" alt="" decoding="async" />
              </picture>
              <p>Электропогрузчик</p>
            </div>
            <div className="battery__type-item">
              <picture>
                <source srcSet="/assets/images/battery/shtabeler.png" />
                <img src="/assets/images/battery/shtabeler.png" alt="" decoding="async" />
              </picture>
              <p>Штабелер</p>
            </div>
            <div className="battery__type-item">
              <picture>
                <source srcSet="/assets/images/battery/richtrak.png" />
                <img src="/assets/images/battery/richtrak.png" alt="" decoding="async" />
              </picture>
              <p>Ричтрак</p>
            </div>
            <div className="battery__type-item">
              <picture>
                <source srcSet="/assets/images/battery/telezhka.png" />
                <img src="/assets/images/battery/telezhka.png" alt="" decoding="async" />
              </picture>
              <p>Электротележка</p>
            </div>
            <div className="battery__type-item">
              <picture>
                <source srcSet="/assets/images/battery/golfcart.png" />
                <img src="/assets/images/battery/golfcart.png" alt="" decoding="async" />
              </picture>
              <p>Гольф кары</p>
            </div>
          </div>
        </div>
      </section>
      <section className="battery__which">
        <div className="container">
          <h1>Какой аккумулятор используется в вилочном погрузчике?</h1>
          <div className="battery__type-intro">
            <div>
              <p>
                В сфере складирования преобладающий выбор аккумуляторов для вилочных погрузчиков часто сводится к двум
                вариантам: литий-ионные (Li-Ion) аккумуляторы и свинцово-кислотные аккумуляторы.
              </p>
              <p>
                Эти два типа аккумуляторов являются краеугольным камнем для питания огромного количества вилочных
                погрузчиков, используемых на складах по всему миру.
              </p>
            </div>
            <div>
              <p>
                Их отличительные характеристики и характеристики производительности делают их идеальным выбором для
                удовлетворения жестких требований задач по погрузочно-разгрузочным работам на складах.
              </p>
              <button className="button button__primary w-100 mt-34">Перейти в каталог</button>
            </div>
          </div>
          <picture>
            <source srcSet="/assets/images/battery/akb-type.png" />
            <img src="/assets/images/battery/akb-type.png" alt="" decoding="async" />
          </picture>
        </div>
      </section>
      <Direction />
      <Cta />
      <section className="battery__slider">
        <div className="container">
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {sliders}
          </Swiper>
        </div>
      </section>
      <Articles limit={4} />
    </main>
  );
};
