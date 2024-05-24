import CloneDeep from "lodash-es/cloneDeep";
import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Product } from "../common/types/Product";

type Store = {
  basket: Product[];
  loading: boolean;
  error: null;
  addToBasket: (product: Product) => void;
};

export const useBasket = create<Store>()(
  persist(
    (set, get) => ({
      basket: [],
      loading: false,
      error: null,
      addToBasket: (product) => {
        const products = CloneDeep(get().basket);
        const index = products.findIndex(({ id }) => id === product.id);
        if (index !== -1) {
          products[index].count = products[index].count + product.count;
          set({ basket: products });
          return;
        }
        set({ basket: [...products, product] });
      },
    }),
    { name: "basket" },
  ),
);
