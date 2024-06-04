import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__logo">
            <svg>
              <use xlinkHref="/spritemap.svg#icon-logo" />
            </svg>
          </div>
          <div className="footer__ya">
            <iframe
              src="https://yandex.ru/sprav/widget/rating-badge/144706740321?type=rating&theme=dark"
              width="100%"
              height="100%"
            />
          </div>
          <div className="footer__phone">
            <svg>
              <use xlinkHref="/spritemap.svg#icon-phone" />
            </svg>
            <p>
              <a href="tel:8 (800) 551-19-96">8 (800) 551-19-96</a> |{" "}
              <a href="tel:+7 (812) 642-12-56">+7 (812) 642-12-56</a>
            </p>
          </div>
          <div className="footer__mail">
            <svg>
              <use xlinkHref="/spritemap.svg#icon-mail" />
            </svg>
            <p>
              <a href="mailto:zakaz@loaderpro.ru">zakaz@loaderpro.ru</a>
            </p>
          </div>
          <div className="footer__socials">
            <a className="footer__social" href="#">
              <svg>
                <use xlinkHref="/spritemap.svg#icon-vk" />
              </svg>
            </a>
            <a className="footer__social" href="#">
              <svg>
                <use xlinkHref="/spritemap.svg#icon-tg" />
              </svg>
            </a>
            <a className="footer__social" href="#">
              <svg>
                <use xlinkHref="/spritemap.svg#icon-wt" />
              </svg>
            </a>
            <a className="footer__social" href="#">
              <svg>
                <use xlinkHref="/spritemap.svg#icon-youtube" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer__main">
          <div className="footer__links footer__links--navigation">
            <p className="footer__links-head">Навигация</p>
            <div className="footer__links-row footer__links-row--2">
              <Link className="footer__link" to="/">
                Главная
              </Link>
              <Link className="footer__link" to="/catalog">
                Каталог
              </Link>
              <Link className="footer__link" to="/basket">
                Корзина
              </Link>
              <Link className="footer__link" to="/selectionparts">
                Подбор ЗП
              </Link>
              <Link className="footer__link" to="/requestparts">
                Запрос ЗП
              </Link>
            </div>
          </div>
          <div className="footer__links footer__links--catalog">
            <p className="footer__links-head">Каталог</p>
            <div className="footer__links-row">
              <a className="footer__link" href="#">
                Запчасти JUNGHEINRICH
              </a>
              <a className="footer__link" href="#">
                Запчасти CLARK
              </a>
              <a className="footer__link" href="#">
                Запчасти OM PIMESPO
              </a>
              <a className="footer__link" href="#">
                Запчасти STILL
              </a>
              <a className="footer__link" href="#">
                Запчасти MERLO
              </a>
              <a className="footer__link" href="#">
                Запчасти NOBLELIFT
              </a>
              <a className="footer__link" href="#">
                Запчасти LINDE
              </a>
              <a className="footer__link" href="#">
                Запчасти HYSTER
              </a>
              <a className="footer__link" href="#">
                Запчасти BOBCAT
              </a>
              <a className="footer__link" href="#">
                Запчасти COMBILIFT
              </a>
              <a className="footer__link" href="#">
                Запчасти CROWN
              </a>
              <a className="footer__link" href="#">
                Запчасти TERBERG
              </a>
              <a className="footer__link" href="#">
                Запчасти KALMAR
              </a>
              <a className="footer__link" href="#">
                Запчасти BT
              </a>
              <a className="footer__link" href="#">
                Запчасти YALE
              </a>
              <a className="footer__link" href="#">
                Весь каталог
              </a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>Все права защищены. 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
