import { FC } from "react";

import { Product as ProductItem } from "../common/types/Product";
import Product from "../components/Product";

type Props = {
  data: ProductItem[];
  isLoading: boolean;
};

const Products: FC<Props> = ({ data, isLoading = true }) => {
  return (
    <section className="product__section">
      <div className="container">
        <div className="title">
          <p className="h1">Часто ищут</p>
          <a href="#">Все товары</a>
        </div>
        <div className="row">
          {isLoading
            ? "Загрузка"
            : data.map((post) => (
                <Product
                  key={post.id}
                  id={post.id}
                  article={post.article}
                  description={post.description}
                  image={post.image}
                  price={post.price}
                  title={post.title}
                  weight={post.weight}
                  like={post.like}
                  status={post.status}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
