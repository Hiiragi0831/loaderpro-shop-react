import { Cta } from "../../components/Cta";
import { Category } from "./components/Category";

export const PolyurethaneSurfacing = () => {
  return (
    <main>
      <Category />
      <section className="polyurethane__hero">
        <div className="container">
          <div className="row">
            <div className="polyurethane__hero-surfacing">
              <h1>Наплавка полиуретаном</h1>
              <p>Восстановление полиуретановых колес - наплавка полиуретаном, ремонт старых колёс под ключ!</p>
              <Cta
                title={"Заказать консультацию"}
                text={"Получите восстановленные колёса уже на этой неделе!"}
                class={"inner columns"}
              />
              <span className="h1">Восстановление полиуретановых колес</span>
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
            </div>
            <div className="polyurethane__hero-img">
              <picture className={"for-desktop"}>
                <source srcSet={`/assets/images/polyurethane/wheels-1.png`} />
                <img src={`/assets/images/polyurethane/wheels-1.png`} alt="" decoding="async" />
              </picture>
              <picture>
                <source srcSet={`/assets/images/polyurethane/naplavka.gif`} />
                <img src={`/assets/images/polyurethane/naplavka.gif`} alt="" decoding="async" />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
