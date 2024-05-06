import { Product } from "../common/types/Product";

class APIService {
  public async getAllProducts(): Promise<Product[]> {
    try {
      const res = await fetch("https://76fbb2aa70af7ba2.mokky.dev/products");
      return res.json();
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  }
}

export const api: APIService = new APIService();
