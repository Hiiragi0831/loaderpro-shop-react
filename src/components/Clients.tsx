export const Clients = () => {
  return (
    <section className="clients">
      <div className="container">
        <div class="title">
          <span className="h1"> Среди наших клиентов:</span>
          <p>
            Мы с огромной благодарностью относимся к клиентам и партнерам за то, что они доверяют нам и выбирают нашу
            команду.
          </p>
        </div>
        <div className="row">
          <div className="clients__item">
            <picture>
              <source srcSet={`/assets/images/clients/wb.png`} />
              <img src={`/assets/images/clients/wb.png`} alt="wb" decoding="async" />
            </picture>
          </div>
          <div className="clients__item">
            <picture>
              <source srcSet={`/assets/images/clients/egger.png`} />
              <img src={`/assets/images/clients/egger.png`} alt="wb" decoding="async" />
            </picture>
          </div>
          <div className="clients__item">
            <picture>
              <source srcSet={`/assets/images/clients/ozon.png`} />
              <img src={`/assets/images/clients/ozon.png`} alt="wb" decoding="async" />
            </picture>
          </div>
          <div className="clients__item">
            <picture>
              <source srcSet={`/assets/images/clients/marazzi.png`} />
              <img src={`/assets/images/clients/marazzi.png`} alt="wb" decoding="async" />
            </picture>
          </div>
          <div className="clients__item">
            <picture>
              <source srcSet={`/assets/images/clients/efko.png`} />
              <img src={`/assets/images/clients/efko.png`} alt="wb" decoding="async" />
            </picture>
          </div>
          <div className="clients__item">
            <picture>
              <source srcSet={`/assets/images/clients/maksidom.png`} />
              <img src={`/assets/images/clients/maksidom.png`} alt="wb" decoding="async" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};
