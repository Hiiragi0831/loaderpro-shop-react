import Articles from "../../components/Articles";
import { Cta } from "../../components/Cta";

export const VacancyManager = () => {
  return (
    <main>
      <section className="vacancy-inner">
        <div className="container">
          <div className="vacancy-inner__head">
            <div className="vacancy-inner__title">
              <h1>Менеджер по продажам</h1>
              <span>от 90 000 до 200 000 ₽ на руки</span>
            </div>
            <div className="vacancy__info">
              <p>Требуемый опыт работы: не требуется</p>
              <p>Полная занятость, удаленная работа</p>
            </div>
            <div className="vacancy__buttons">
              <button className="button button__outline">Показать контакты</button>
              <button className="button button__primary">Откликнуться</button>
            </div>
          </div>
          <div className="vacancy-inner__body">
            <div className="vacancy-inner__info">
              <div className="vacancy-inner__info-text">
                <p className="h1">СПЕЦМАШИНА</p>
                <p>
                  <b>
                    «СПЕЦМАШИНА» - поставщик складской техники, а также всех необходимых деталей для профессионального
                    ремонта и обслуживания. Мы работаем на рынке складской техники уже более 7-и лет. Нашей компании
                    доверяют многие клиенты из разных точек России и стран СНГ.
                  </b>
                </p>
                <p>
                  В связи с развитием и расширением отдела продаж, приглашаем в свою команду Менеджера по продажам и
                  работе с клиентами!
                </p>
              </div>
              <svg className="for-desktop">
                <use xlinkHref="/spritemap.svg#icon-logo" />
              </svg>
            </div>
            <div className="vacancy-inner__conditions">
              <div className="vacancy-inner__condition">
                <span className="h1">Условия:</span>
                <blockquote>
                  <p>Адрес офиса: БЦ Интертерминал ул. Кубинская д 75 к 1 (ст. метро Московская, Ленинский пр.)</p>
                  <p>График работы: 09:00 до 17:00, 5/2 сб и вс - выходные</p>
                  <p>Корпоративное обучение и повышение квалификации</p>
                  <p>Среднемесячный доход от 90 000 руб. (оклад + % + премия)</p>
                  <p>Система адаптации, сопровождение наставника</p>
                  <p>Вовлеченные в развитие Компании собственники</p>
                  <p>Возможность работать удаленно</p>
                  <p>Дружный коллектив</p>
                </blockquote>
              </div>
              <div className="vacancy-inner__condition">
                <span className="h1">Требования:</span>
                <blockquote>
                  <p>Желание развиваться и зарабатывать</p>
                  <p>Отличные коммуникативные навыки, активность, инициативность</p>
                  <p>Навыки ведения деловых переговоров, грамотная речь</p>
                  <p>Опыт продаж b2b желателен</p>
                </blockquote>
              </div>
              <div className="vacancy-inner__condition">
                <span className="h1">Дополнительные преимущества:</span>
                <blockquote>
                  <p>Мобильная связь</p>
                  <p>Подарки детям на праздники</p>
                </blockquote>
              </div>
              <div className="vacancy-inner__condition">
                <span className="h1">Обязанности:</span>
                <blockquote>
                  <p>Работа с входящим потоком звонков и заявок (нет холодных звонков!)</p>
                  <p>Контроль и сопровождение сделок</p>
                  <p>Работа в 1С</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
};
