import { Article } from "../common/types/Article";
import { Brand } from "../common/types/Brand";
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

  public async getProduct(id: string): Promise<Product> {
    try {
      const res = await fetch(
        `https://76fbb2aa70af7ba2.mokky.dev/products/${id}`,
      );
      return res.json();
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  }

  public async getAllBrand(): Promise<Brand[]> {
    try {
      const res = await fetch(`https://76fbb2aa70af7ba2.mokky.dev/brands/`);
      return res.json();
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  }

  public async getBrand(id: number): Promise<Brand> {
    try {
      const res = await fetch(
        `https://76fbb2aa70af7ba2.mokky.dev/brands/${id}`,
      );
      return res.json();
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  }
}

export const api: APIService = new APIService();
