import { hydrate, prerender as ssr } from "preact-iso";
import * as React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";

import ErrorPage from "./error-page";
import Home from "./routes/Home";
// register Swiper custom elements
register();

import "./assets/main.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Article from "./routes/Article";
import Catalog from "./routes/Catalog";
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

const router = createBrowserRouter([
  {
    element: <BaseTemplate />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
    ],
  },
  {
    element: <BaseTemplate />,
    loader: loaderTemplate,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "articles?/:id",
        element: <Article />,
      },
      {
        path: "products?/:id",
        element: <Product />,
      },
    ],
  },
]);

export function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
