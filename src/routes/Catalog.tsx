import { useEffect, useLayoutEffect, useRef, useState } from "preact/hooks";

import { Brand as BrandType } from "../common/types/Brand";
import { Product as ProductType } from "../common/types/Product";
import Product from "../components/Product";
import { api } from "../services/api";

export default function Catalog() {
  const [data, setData] = useState<ProductType[]>([]);
  const [brands, setBrands] = useState<BrandType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState(data);
  const filterChange = useRef(null);
  const sortWrapperRef = useRef(null);
  const [sortKey, setSortKey] = useState("По умолчанию");

  const loadProducts = async () => {
    try {
      const data = await api.getAllProducts();
      setData(data);
      setIsLoading(false);
      setFilteredProducts(data);
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  };

  const loadBrands = async () => {
    try {
      const props = await api.getAllBrand();
      setBrands(props);
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  };
  const filterBrandChange = (event: { target: { value: any } }) => {
    const filtered =
      Number(event.target.value) !== -1 ? data.filter((item) => item.brand === Number(event.target.value)) : data;
    setFilteredProducts(filtered);
  };

  const sortItemClick = (event) => {
    if (!event.target.title) {
      return;
    }
    sortWrapperRef.current.querySelectorAll(".catalog__sort-item").forEach((item) => {
      if (item.classList.contains("is-active")) {
        item.classList.remove("is-active");
      }
    });
    event.target.classList.add("is-active");
    setSortKey(event.target.title);
  };

  useEffect(() => {
    if (!sortWrapperRef.current) {
      return;
    }
    sortWrapperRef.current.addEventListener("click", sortItemClick);
    return () => {
      sortWrapperRef.current.removeEventListener("click", sortItemClick);
    };
  }, []);

  useEffect(() => {
    console.log(sortKey);
    switch (sortKey) {
      case "По умолчанию": {
        filteredProducts.sort((item1, item2) => (item1["id"] > item2["id"] ? 1 : -1));
        break;
      }
      case "Сначала дешевые": {
        filteredProducts.sort((item1, item2) => (item1["price"] < item2["price"] ? 1 : -1));
        break;
      }
      case "Сначала дорогие": {
        filteredProducts.sort((item1, item2) => (item1["price"] > item2["price"] ? 1 : -1));
        break;
      }
    }
  }, [sortKey]);

  useLayoutEffect(() => void loadProducts(), []);
  useEffect(() => void loadBrands(), []);
  useEffect(() => {
    filterChange.current.addEventListener("change", filterBrandChange);
    return () => filterChange.current.removeEventListener("change", filterBrandChange);
  }, [filteredProducts]);

  return (
    <main>
      <section className="catalog__section">
        <div className="container">
          <div className="row">
            <div className="catalog__filters">
              <form className="form">
                <fieldset>
                  <legend>Фильтры</legend>
                </fieldset>
                <label className="form__select">
                  <select name="brand" ref={filterChange}>
                    <option value="-1" label="Все бренды" />
                    {brands.map((option) => (
                      <option value={option.id} label={option.name} key={option.id} />
                    ))}
                  </select>
                  <span>Бренд</span>
                </label>
                <label className="form__select">
                  <select name="category">
                    <option value="0" selected label="0" />
                    <option value="1" label="1" />
                    <option value="2" label="2" />
                  </select>
                  <span>Срок поставки</span>
                </label>
                <label className="form__select">
                  <select name="category">
                    <option value="-1" selected label="По умолчанию" />
                    <option value="0" label="Оригинал" />
                    <option value="1" label="Аналог" />
                  </select>
                  <span>Качество</span>
                </label>
                <button className="button button__primary" type="submit">
                  Применить
                </button>
              </form>
            </div>
            <div className="catalog__products">
              <div className="catalog__sort">
                <div className="catalog__sort-wrapper" ref={sortWrapperRef}>
                  <p className="catalog__sort-title">Сортировка:</p>
                  <button className="catalog__sort-item is-active" title="По умолчанию">
                    По умолчанию
                  </button>
                  <button className="catalog__sort-item" title="Сначала дешевые">
                    Сначала дешевые
                  </button>
                  <button className="catalog__sort-item" title="Сначала дорогие">
                    Сначала дорогие
                  </button>
                </div>
              </div>
              <div className="catalog__products-row">
                {isLoading ? "Загрузка" : filteredProducts.map((post) => <Product key={post.id} {...post} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
