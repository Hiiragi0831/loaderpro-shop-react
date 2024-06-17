export const Direction = () => {
  return (
    <section className="direction">
      <div className="container">
        <div className="row">
          <div className="direction__item">
            <picture>
              <source srcSet="/assets/images/battery/lead-acid_traction_batteries.png" />
              <img src="/assets/images/battery/lead-acid_traction_batteries.png" alt="" decoding="async" />
            </picture>
            <p>Свинцово-кислотные тяговые аккумуляторы </p>
            <a href="#" className="button button__primary">
              Перейти
            </a>
          </div>
          <div className="direction__item">
            <picture>
              <source srcSet="/assets/images/battery/lithium-ion_traction_batteries.png" />
              <img src="/assets/images/battery/lithium-ion_traction_batteries.png" alt="" decoding="async" />
            </picture>
            <p>Литий-ионные тяговые аккумуляторы</p>
            <a href="#" className="button button__primary">
              Перейти
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
