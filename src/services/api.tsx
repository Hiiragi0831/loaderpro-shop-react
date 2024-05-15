import { Article } from "../common/types/Article";
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
  public async getArticles(): Promise<Article[]> {
    try {
      const res = await fetch("https://76fbb2aa70af7ba2.mokky.dev/articles");
      return res.json();
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  }

  public async getArticle(id: string): Promise<Article> {
    try {
      const res = await fetch(
        `https://76fbb2aa70af7ba2.mokky.dev/articles/${id}`,
      );
      return res.json();
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  }
}

export const api: APIService = new APIService();
