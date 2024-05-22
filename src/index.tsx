import { hydrate, prerender as ssr } from "preact-iso";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { register } from "swiper/element/bundle";
register();

import "./assets/main.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ErrorPage from "./error-page";
import Catalog from "./pages/Catalog";
import Article from "./routes/Article";
import Home from "./routes/Home";
import Product from "./routes/Product";

const BaseTemplate = () => {
  return (
    <div className="site">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const loaderTemplate = async (loader) => {
  const url = new URL(loader.request.url);
  const res = await fetch(`https://76fbb2aa70af7ba2.mokky.dev/${url.pathname}`);

  if (res.status === 404) {
    throw new Response("", { status: 404 });
  }

  return res.json();
};

export function App() {
  return (
    <Routes>
      <Route element={<BaseTemplate />} errorElement={<ErrorPage />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/products?/:id" element={<Product />} loader={loaderTemplate} />
        <Route path="/articles?/:id" element={<Article />} loader={loaderTemplate} />
      </Route>
    </Routes>
  );
}

if (typeof window !== "undefined") {
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("app"),
  );
}

export async function prerender(data) {
  return await ssr(
    <StaticRouter location={data.url}>
      <App />
    </StaticRouter>,
  );
}
