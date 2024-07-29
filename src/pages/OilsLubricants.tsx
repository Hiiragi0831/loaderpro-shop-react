import { Achievement } from "../components/Achievement";
import Articles from "../components/Articles";
import { Cta } from "../components/Cta";
import Products from "../components/Products";

export const OilsLubricants = () => {
  return (
    <main>
      <section className="oilslubricants__premium">
        <div className="container">
          <div className="row col-2">
            <div className="text">
              <h1 className="h1">Премиальное масло по доступной цене</h1>
              <p>
                Наше масло, произведенное по инновационной технологии NSA, гарантирует максимальное смешивание
                компонентов в рекордные сроки. Эта уникальная технология обеспечивает исключительное качество продукта,
                создавая смазочные материалы, превосходящие текущие стандарты. Наши масла обладают улучшенными
                низкотемпературными свойствами и высокой термоокислительной стабильностью. Кроме того, благодаря
                эксклюзивной технологии TCN, они обеспечивают надежную защиту от износа.
              </p>
              <p>
                Выбирая наше премиальное масло, вы инвестируете в долговечность и надежность вашей техники. Оставьте
                заявку прямо сейчас и почувствуйте разницу!
              </p>
              <Cta
                title={"Заказать масло"}
                text={"Получите новое масло уже на сегодня с доставкой на дом!"}
                class={"inner columns"}
              />
            </div>
            <div className="image">
              <picture>
                <source srcSet={`/assets/images/oilslubricants/serv3.png`} />
                <img src={`/assets/images/oilslubricants/serv3.png`} alt="" decoding="async" />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <section className="oilslubricants__who">
        <div className="container">
          <div className="row col-2">
            <div className="text">
              <span className="h1">Почему стоит довериться нашему маслу?</span>
              <p>
                Наше масло "NEO" – это результат инновационных технологий и строгого контроля качества. Мы предлагаем
                продукцию, созданную с учетом ваших потребностей и адаптированную для российских условий эксплуатации.
              </p>
              <p>
                Выбирая масло "NEO", вы получаете надежный и долговечный продукт, который обеспечивает стабильную работу
                техники при любых условиях. Доверьтесь "NEO" и почувствуйте разницу!
              </p>
            </div>
            <div className="image">
              <picture>
                <source srcSet={`/assets/images/oilslubricants/remont.png`} />
                <img src={`/assets/images/oilslubricants/remont.png`} alt="" decoding="async" />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <section className="achievements">
        <div className="container">
          <div className="title">
            <span className="h1">Наши преимущества:</span>
          </div>
          <div className="row">
            <Achievement
              icon="/assets/images/icons/wather.png"
              title="Высокая текучесть"
              text="Моментально обволакивает все детали узлов и механизмов при запуске"
            />
            <Achievement
              icon="/assets/images/icons/shield.png"
              title="Отличные моющие свойства"
              text="Предотвращает появление осадков и отложений"
            />
            <Achievement
              icon="/assets/images/icons/rub.png"
              title="Адаптация к России"
              text="100% адаптация к российским условиям использования"
            />
            <Achievement
              icon="/assets/images/icons/solid-plan.png"
              title="Идеальная адгезия"
              text="Позволяет технике выдерживать сверх нагрузки"
            />
            <Achievement
              icon="/assets/images/icons/lic.png"
              title="Лицензированная продукция"
              text="Официальная лицензированная продукция, нет подделок"
            />
            <Cta
              title={"Оставляйте заявку на новое масло"}
              text={"И получите его уже сегодня!"}
              class={"inner small"}
            />
          </div>
        </div>
      </section>
      <Products limit={5} filter={"popular"} />
      <section className="leadcta">
        <div className="container">
          <div className="row">
            <div className="leadcta__half">
              <picture>
                <source srcSet={`/assets/images/oilslubricants/v-01.jpg`} />
                <img src={`/assets/images/oilslubricants/v-01.jpg`} alt="" decoding="async" />
              </picture>
              <span className="h1">Какое моторное масло выбрать?</span>
            </div>
            <div className="leadcta__half">
              <picture>
                <source srcSet={`/assets/images/oilslubricants/v-02.png`} />
                <img src={`/assets/images/oilslubricants/v-02.png`} alt="" decoding="async" />
              </picture>
              <span className="h1">Обзор завода производства масла NEO OIL.</span>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
};
