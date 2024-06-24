import Articles from "../components/Articles";
import { Cta } from "../components/Cta";
import { Preference } from "../components/Preference";
import { Team } from "../components/Team";
import {Clients} from "../components/Clients";

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
              <h2>Наша миссия</h2>
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
      <Cta />
      <Articles limit={4} />
    </main>
  );
};
