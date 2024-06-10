export const MapSending = () => {
  return (
    <section className="map">
      <div className="container">
        <div className="title">
          <h1>Ежедневные отправки</h1>
        </div>
        <picture>
          <source srcSet="/assets/images/map.gif" />
          <img src="/assets/images/map.gif" alt="" decoding="async" />
        </picture>
      </div>
    </section>
  );
};
