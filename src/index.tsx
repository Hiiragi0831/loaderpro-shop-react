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

const BaseTemplate = () => {
  return (
    <div className="site">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
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
    ],
  },
  {
    element: <BaseTemplate />,
    loader: async ({ params }) => {
      const res = await fetch(
        `https://76fbb2aa70af7ba2.mokky.dev/news/${params.articleId}`,
      );

      if (res.status === 404) {
        throw new Response("", { status: 404 });
      }

      return res.json();
    },
    errorElement: <ErrorPage />,
    children: [
      {
        path: "articles?/:articleId",
        element: <Article />,
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
