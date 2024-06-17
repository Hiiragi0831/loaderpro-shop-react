export const Cta = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="row">
          <div class="cta__info">
            <h1>Оставьте заявку и наш менеджер свяжется с вами в течении 15 минут!</h1>
            <p>Получите полную консультацию по всем видам аккумуляторов!</p>
          </div>
          <div class="cta__form">
            <input type="text" placeholder="Имя" name="name" />
            <input type="tel" placeholder="Телефон" name="telephone" />
            <button className="button button__outline">Оставить заявку</button>
          </div>
        </div>
      </div>
    </section>
  );
};
