import { Link } from "react-router-dom";

import Articles from "../../components/Articles";
import { Cta } from "../../components/Cta";
import { Hero } from "./components/Hero";
import { Slider } from "./components/Slider";
import { Types } from "./components/Types";

export const LithiumIon = () => {
  return (
    <main>
      <Hero />
      <Types />
      <section className="battery__leadacid">
        <div className="container">
          <div className="battery__leadacid-title">
            <h1>Литий-ионные тяговые аккумуляторы</h1>
            <div>
              <a className="button button__primary"> Перейти в каталог</a>
            </div>
          </div>

        </div>
      </section>
      <section className="direction">
        <div className="container">
          <div className="row">
            <div className="direction__item">
              <picture>
                <source srcSet="/assets/images/battery/lead-acid_traction_batteries.png" />
                <img src="/assets/images/battery/lead-acid_traction_batteries.png" alt="" decoding="async" />
              </picture>
              <p>Тяговые аккумуляторы LOADERPRO</p>
              <Link to="/battery" className="button button__primary">
                Перейти
              </Link>
            </div>
            <div className="direction__item">
              <picture>
                <source srcSet="/assets/images/battery/lithium-ion_traction_batteries.png" />
                <img src="/assets/images/battery/lithium-ion_traction_batteries.png" alt="" decoding="async" />
              </picture>
              <p>Литий-ионные тяговые аккумуляторы</p>
              <Link to="/battery/lithium-ion" className="button button__primary">
                Перейти
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <Slider />
      <Articles limit={4} />
    </main>
  );
};
