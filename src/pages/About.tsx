import Articles from "../components/Articles";
import { Clients } from "../components/Clients";
import { Cta } from "../components/Cta";
import { Preference } from "../components/Preference";
import { Team } from "../components/Team";

export const About = () => {
  return (
    <main>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="about__hero">
              <h1>О нас</h1>
              <p>
                Добро пожаловать в "Спецмашина" – компанию, где профессионалы своего дела создают уникальную экосистему
                для эффективного и прозрачного взаимодействия с партнёрами.
              </p>
              <h2 className="h1">Наша миссия</h2>
              <p>
                Наша миссия – создать экосистему, в которой всем нашим партнёрам легко и удобно работать, достигать
                своих целей и расти вместе с нами. Мы стремимся сделать взаимодействие максимально простым, понятным и
                выгодным для всех участников, ведь наш слоган:
              </p>
              <mark>
                <p>Ваша техника под надежной защитой!</p>
              </mark>
            </div>
            <picture className="about__pic">
              <source srcSet="/assets/images/about/8e4ee82a7855efb652e62fd089db1fd6.jpg" />
              <img src="/assets/images/about/8e4ee82a7855efb652e62fd089db1fd6.jpg" alt="О нас" decoding="async" />
            </picture>
          </div>
        </div>
      </section>
      <section className="about-preference">
        <div className="container">
          <div className="row">
            <Preference title="7 лет" text="опыт работы" bg="white" />
            <Preference title="25 000" text="товарных позиций в наличии" bg="1" />
            <Preference title="1 616" text="брендов в портфеле" bg="2" />
            <Preference title="4 000" text="довольных клиентов" bg="primary" />
            <Preference title="12 месяцев" text="средний срок гарантии" bg="white" />
            <Preference title="3" text="страны ввоза" bg="3" />
          </div>
        </div>
      </section>
      <Team />
      <Clients />
      <section className="about-requisite">
        <div className="container">
          <div className="title">
            <span className="h1">Реквизиты ООО «СПЕЦМАШИНА»</span>
          </div>
          <div className="table">
            <div className="table__item">
              <p>Наименование контрагента</p>
              <p>ООО «СПЕЦМАШИНА»</p>
            </div>
            <div className="table__item">
              <p>Юридический, фактический и почтовый адрес</p>
              <p>196240, г. Санкт-Петербург, ул. Кубинская, д. 75 к. 1 литера А, помещ. 3-Н, ком. 25 (Офис 216)</p>
            </div>
            <div className="table__item">
              <p>Телефон</p>
              <p>8 (800) 55-11-996</p>
            </div>
            <div className="table__item">
              <p>e-mail</p>
              <p>buh@loaderpro.ru</p>
            </div>
            <div className="table__item">
              <p>ИНН/КПП</p>
              <p>7810959038 / 781001001</p>
            </div>
            <div className="table__item">
              <p>ОГРН</p>
              <p>1227800152590</p>
            </div>
            <div className="table__item">
              <p>ОКВЭД</p>
              <p>45.32</p>
            </div>
            <div className="table__item">
              <p>ОКПО</p>
              <p>54144451</p>
            </div>
            <div className="table__item">
              <p>ОКАТО</p>
              <p>40284000</p>
            </div>
            <div className="table__item">
              <p>БАНК</p>
              <p>в АО «Тинькофф Банк»</p>
            </div>
            <div className="table__item">
              <p>Р/С</p>
              <p>40702810710001237184</p>
            </div>
            <div className="table__item">
              <p>БИК</p>
              <p>044525974</p>
            </div>
            <div className="table__item">
              <p>К/С</p>
              <p>30101810145250000974</p>
            </div>
            <div className="table__item">
              <p>Генеральный директор</p>
              <p>Сокирка Юлия Виталиевна - действующий на основании Устава</p>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
};
