import Articles from "../components/Articles";
import { Cta } from "../components/Cta";
import { VideoGallery } from "../components/VideoGallery";

export const Contact = () => {
  return (
    <main>
      <section className="contact">
        <div className="container">
          <div class="contact__title">
            <h1>Контакты</h1>
          </div>
          <div class="row">
            <div className="contact__info">
              <div className="contact__item">
                <small>Телефон:</small>
                <a href="tel:+78005511996">8 (800) 551-19-96</a>
              </div>
              <div className="contact__item">
                <small>Для заявок:</small>
                <a href="mailto:zakaz@loaderpro.ru">zakaz@loaderpro.ru</a>
              </div>
              <div className="contact__item">
                <small>Сотрудничество:</small>
                <a href="mailto:zakup@loaderpro.ru">zakup@loaderpro.ru</a>
              </div>
              <div class="contact__info-social">
                <a href="https://wa.me/79643421256" target="_blank" rel="noreferrer">
                  <picture>
                    <source srcSet="/assets/images/contact/wh.png" />
                    <img src="/assets/images/contact/wh.png" alt="" decoding="async" />
                  </picture>
                </a>
                <a href="https://t.me/loaderpro" target="_blank" rel="noreferrer">
                  <picture>
                    <source srcSet="/assets/images/contact/tg.png" />
                    <img src="/assets/images/contact/tg.png" alt="" decoding="async" />
                  </picture>
                </a>
                <a href="https://vk.com/loaderproru" target="_blank" rel="noreferrer">
                  <picture>
                    <source srcSet="/assets/images/contact/vk.png" />
                    <img src="/assets/images/contact/vk.png" alt="" decoding="async" />
                  </picture>
                </a>
                <a href="https://www.youtube.com/@loaderpro" target="_blank" rel="noreferrer">
                  <picture>
                    <source srcSet="/assets/images/contact/youtube.png" />
                    <img src="/assets/images/contact/youtube.png" alt="" decoding="async" />
                  </picture>
                </a>
              </div>
            </div>
            <div className="contact__social">
              <a className="contact__qr" href="https://wa.me/79643421256" target="_blank" rel="noreferrer">
                <picture>
                  <source srcSet="/assets/images/contact/qr-w.png" />
                  <img src="/assets/images/contact/qr-w.png" alt="" decoding="async" />
                </picture>
                <p>
                  Ответы на
                  <br /> любые вопросы
                </p>
              </a>
              <a className="contact__qr" href="https://t.me/loaderpro" target="_blank" rel="noreferrer">
                <picture>
                  <source srcSet="/assets/images/contact/qr-t.png" />
                  <img src="/assets/images/contact/qr-t.png" alt="" decoding="async" />
                </picture>
                <p>Акции, скидки, чат профессионалов</p>
              </a>
              <a className="contact__qr" href="https://vk.com/loaderproru" target="_blank" rel="noreferrer">
                <picture>
                  <source srcSet="/assets/images/contact/qr-v.png" />
                  <img src="/assets/images/contact/qr-v.png" alt="" decoding="async" />
                </picture>
                <p>Полезная информация, жизнь компании и новости</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <VideoGallery />
      <Articles limit={4} />
    </main>
  );
};
