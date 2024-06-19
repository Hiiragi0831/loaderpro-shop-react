import { render } from "preact";
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import { register } from "swiper/element/bundle";
register();

import "./scss/main.scss";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ErrorPage from "./error-page";
import Article from "./pages/Article";
import Basket from "./pages/Basket";
import Battery from "./pages/Battery";
import { LeadAcid } from "./pages/Battery/LeadAcid";
import { LithiumIon } from "./pages/Battery/LithiumIon";
import Catalog from "./pages/Catalog";
import { Contact } from "./pages/Contact";
import { Favorites } from "./pages/Favorites";
import Home from "./pages/Home";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import Product from "./pages/Product";
import RequestParts from "./pages/RequestParts";
import SelectionParts from "./pages/SelectionParts";

const BaseTemplate = () => {
  return (
    <div className="site">
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const loaderTemplate = async (loader) => {
  const url = new URL(loader.request.url);
  const response = await fetch(`https://76fbb2aa70af7ba2.mokky.dev/${url.pathname}`);

  if (response.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }

  if (!response.ok) {
    throw new Error("Could not fetch project");
  }

  return response.json();
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
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/requestparts",
        element: <RequestParts />,
      },
      {
        path: "/selectionparts",
        element: <SelectionParts />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    element: <BaseTemplate />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/battery",
        element: <Battery />,
      },
      {
        path: "/battery/lead-acid",
        element: <LeadAcid />,
      },
      {
        path: "/battery/lithium-ion",
        element: <LithiumIon />,
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
        path: "catalog?/:id",
        element: <Product />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

render(<App />, document.getElementById("app"));
