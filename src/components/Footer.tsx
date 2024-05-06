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
          <div className="footer__city">
            <svg>
              <use xlinkHref="/spritemap.svg#icon-pin" />
            </svg>
            <p>Российская Федерация</p>
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
              <a className="footer__link" href="#">
                Главная
              </a>
              <a className="footer__link" href="#">
                Поставщикам
              </a>
              <a className="footer__link" href="#">
                О компании
              </a>
              <a className="footer__link" href="#">
                Дилерам
              </a>
              <a className="footer__link" href="#">
                Условия доставки
              </a>
              <a className="footer__link" href="#">
                Конфиденциальность
              </a>
              <a className="footer__link" href="#">
                Способы оплаты
              </a>
              <a className="footer__link" href="#">
                Контакты
              </a>
            </div>
            <div className="footer__ya">
              <picture>
                <source srcset="/assets/images/ya.png" />
                <img src="/assets/images/ya.png" alt="" decoding="async" />
              </picture>
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
