import Category from "./Category";

const Categorys = () => {
  return (
    <section className="category__section">
      <div className="container">
        <div className="title">
          <h1>Популярные категории</h1>
        </div>
        <div className="row">
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </div>
    </section>
  );
};

export default Categorys;
