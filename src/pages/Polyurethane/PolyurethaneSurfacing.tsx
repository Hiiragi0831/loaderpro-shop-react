import { Achievement } from "../../components/Achievement";
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
      <section className="polyurethane__achievement">
        <div className="container">
          <div className="title">
            <span className="h1">
              Как происходит <br className="for-desktop" /> наплавка полиуретаном?
            </span>
            <p>
              Восстановление полиуретановых роликов подразумевает механическую обработку изделий, которая
              предусматривает очистку детали от непригодного покрытия и нанесение нового слоя полиуретана. Зачастую эта
              процедура проводится в 4 этапа:
            </p>
          </div>
          <div className="row">
            <Achievement
              icon="/assets/images/polyurethane/icon-01.png"
              title="Очистка колес"
              text="От старого полиуретанового или же резинового покрытия"
            />
            <Achievement
              icon="/assets/images/polyurethane/icon-02.png"
              title="Предварительная подготовка"
              text="Наносится специальный клей, просушивается деталь в камере и прочее"
            />
            <Achievement
              icon="/assets/images/polyurethane/icon-03.png"
              title="Полиуретановый слой"
              text="На поверхность изделия наносится полиуретановый слой"
            />
            <Achievement
              icon="/assets/images/polyurethane/icon-04.png"
              title="Полимеризация"
              text="Данный этап нужен, чтобы новый слой на детали застыл"
            />
            <Cta title={"Оставьте заявку на восстановление!"} text={null} class={"inner columns"} />
          </div>
        </div>
      </section>
      <section className="polyurethane__text">
        <div className="container">
          <div class="row">
            <p>
              Изначально кажется, что наплавка полиуретаном это очень простой процесс, но на практике все не так легко,
              поскольку существуют различные марки полиуретана и для каждой необходимо использование определенной
              технологии, отдельная температура выдержки детали в печи. Также требуется своя температура застывания
              полиуретанового слоя. Если нарушить технологию, то полиуретан на молекулярном уровне потеряет свою
              эластичность и износоустойчивость.
            </p>
            <p>
              Следует знать, что молекулярная структура материала образуется на первых минутах смешивания из
              определенного количества полиуретановых составляющих. В целом, существует множество технологичных нюансов,
              поэтому стоит заказать восстановление полиуретановых колес у профессионалов, которые имеют многолетний
              опыт работы в данной сфере.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
