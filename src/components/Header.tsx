import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header class="header">
      <div class="header__top">
        <div class="container">
          <div class="row">
            <div class="header__top-links">
              <a href="#">Дилерам</a>
              <a href="#">Поставщикам</a>
            </div>
            <div class="header__top-contacts">
              <a href="mailto:zakaz@loaderpro.ru">
                <div class="svg">
                  <svg>
                    <use xlinkHref="/spritemap.svg#icon-mail" />
                  </svg>
                </div>
                zakaz@loaderpro.ru
              </a>
              <a href="tel:+78005511996">
                <div class="svg">
                  <svg>
                    <use xlinkHref="/spritemap.svg#icon-phone" />
                  </svg>
                </div>
                8 (800) 551-19-96
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="header__main">
        <div class="container">
          <div class="row">
            <Link class="header__logo" to="/">
              <svg>
                <use xlinkHref="/spritemap.svg#icon-logo" />
              </svg>
            </Link>
            <form class="header__search">
              <label>
                <input type="text" name="search" placeholder="Поиск товара" />
                <button type="submit">
                  <svg>
                    <use xlinkHref="/spritemap.svg#icon-magnifying-glass" />
                  </svg>
                </button>
              </label>
            </form>
            <div class="header__action">
              <a href="#">
                <svg>
                  <use xlinkHref="/spritemap.svg#icon-user" />
                </svg>
                <span>Войти</span>
              </a>
              <a href="#">
                <svg>
                  <use xlinkHref="/spritemap.svg#icon-heart" />
                </svg>
                <span>Избранное</span>
              </a>
              <Link to="/basket">
                <svg>
                  <use xlinkHref="/spritemap.svg#icon-cart-shopping" />
                </svg>
                <span>Корзина</span>
              </Link>
            </div>
            <div class="header__burger">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
      <div class="header__nav">
        <div class="container">
          <div class="row">
            <nav>
              <Link to="/catalog" title="Спецтехника">
                Спецтехника
              </Link>
              <a href="#" title="Запасные части">
                Запасные части
              </a>
              <a href="#" title="Шины и диски">
                Шины и диски
              </a>
              <a href="#" title="Навесное оборудование">
                Навесное оборудование
              </a>
              <a href="#" title="Тяговые аккумуляторы">
                Тяговые аккумуляторы
              </a>
              <a href="#" title="Полиуретановые колеса">
                Полиуретановые колеса
              </a>
              <a href="#" title="Ремонт и обслуживание">
                Ремонт и обслуживание
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
