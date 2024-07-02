export const PolyurethaneWheels = () => {
  return (
    <main>
      <section className="polyurethane-wheels__hero">
        <div className="container">
          <div className="row">
            <div className="polyurethane-wheels__hero-info">
              <h1>Полиуретановые колеса и ролики для складской техники</h1>
              <p>
                Чтобы купить полиуретановые колеса для складской техники вы можете обратиться в наш специализированный
                магазин комплектующих для складского оборудования. Мы предлагаем широкий ассортимент колес различных
                размеров и конфигураций.
              </p>
              <picture className="for-desktop">
                <source srcSet={`/assets/images/polyurethanewheels/logos.png`} />
                <img src={`/assets/images/polyurethanewheels/logos.png`} alt="" decoding="async" />
              </picture>
              <picture className="for-devices">
                <source srcSet={`/assets/images/polyurethanewheels/logos-m.png`} />
                <img src={`/assets/images/polyurethanewheels/logos-m.png`} alt="" decoding="async" />
              </picture>
            </div>
            <picture>
              <source srcSet={`/assets/images/polyurethanewheels/wheels-1.png`} />
              <img src={`/assets/images/polyurethanewheels/wheels-1.png`} alt="" decoding="async" />
            </picture>
          </div>
        </div>
      </section>
    </main>
  );
};
