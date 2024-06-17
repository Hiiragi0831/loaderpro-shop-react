import Articles from "../../components/Articles";
import Category from "../../components/Category";
import { Cta } from "../../components/Cta";
import { Direction } from "../../components/Direction";
import { Hero } from "./components/Hero";
import { Slider } from "./components/Slider";
import { Types } from "./components/Types";

const Battery = () => {
  return (
    <main>
      <Hero />
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
      <Types />
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
      <Slider />
      <Articles limit={4} />
    </main>
  );
};

export default Battery;
