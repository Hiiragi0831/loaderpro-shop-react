import Article from "./Article";

const Articles = () => {
  return (
    <section className="article__section">
      <div className="container">
        <div className="title">
          <p className="h1">Полезная информация</p>
        </div>
        <div className="row">
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </section>
  );
};

export default Articles;
