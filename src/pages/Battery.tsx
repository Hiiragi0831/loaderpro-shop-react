import Category from "../components/Category";

export const Battery = () => {
  return (
    <main>
      <section className="battery__hero">
        <div className="container">
          <picture className="for-desktop">
            <source srcSet={`/assets/images/slider/5.jpeg`} />
            <img src={`/assets/images/slider/5.jpeg`} alt="" decoding="async" />
          </picture>
          <picture className="for-devices">
            <source srcSet={`/assets/images/slider/5m.jpeg`} />
            <img src={`/assets/images/slider/5m.jpeg`} alt="" decoding="async" />
          </picture>
        </div>
      </section>
      <section className="battery__category">
        <div className="container">
          <div className="row">
            <Category
              title="Свинцово-кислотные аккумуляторы"
              image={`/assets/images/battery/lead-acid_batteries.png`}
            />
            <Category title="Литий-ионные аккумуляторы" image={`/assets/images/battery/lithium-ion_batteries.png`} />
            <Category
              title="Зарядное устройство тяговых аккумуляторов"
              image={`/assets/images/battery/traction_battery_charger.png`}
            />
            <Category
              title="Разъемы для тяговых аккумуляторов"
              image={`/assets/images/battery/connectors_for_traction_batteries.png`}
            />
          </div>
        </div>
      </section>
    </main>
  );
};
