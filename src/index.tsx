import { render } from "preact";
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import { register } from "swiper/element/bundle";
register();

import "./scss/main.scss";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { MobileBar } from "./components/MobileBar";
import ErrorPage from "./error-page";
import { About } from "./pages/About";
import Article from "./pages/Article";
import Basket from "./pages/Basket";
import Battery from "./pages/Battery";
import { LeadAcid } from "./pages/Battery/LeadAcid";
import { LithiumIon } from "./pages/Battery/LithiumIon";
import Catalog from "./pages/Catalog";
import { Contact } from "./pages/Contact";
import { Dealer } from "./pages/Dealer";
import { DeliveryPayment } from "./pages/DeliveryPayment";
import { Favorites } from "./pages/Favorites";
import Home from "./pages/Home";
import { OilsLubricants } from "./pages/OilsLubricants";
import { PolyurethaneSurfacing } from "./pages/Polyurethane/PolyurethaneSurfacing";
import { PolyurethaneWheels } from "./pages/Polyurethane/PolyurethaneWheels";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import Product from "./pages/Product";
import { RepairMaintenance } from "./pages/RepairMaintenance";
import RequestParts from "./pages/RequestParts";
import SelectionParts from "./pages/SelectionParts";
import { Suppliers } from "./pages/Suppliers";
import { TireService } from "./pages/TireService";
import { Vacancy } from "./pages/Vacancy";
import { VacancyManager } from "./pages/Vacancy/VacancyManager";

const BaseTemplate = () => {
  return (
    <div className="site">
      <ScrollRestoration />
      <Header />
      <Outlet />
      <MobileBar />
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
      {
        path: "/vacancy",
        element: <Vacancy />,
      },
      {
        path: "/vacancy/manager",
        element: <VacancyManager />,
      },
      {
        path: "/delivery-payment",
        element: <DeliveryPayment />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/dealer",
        element: <Dealer />,
      },
      {
        path: "/suppliers",
        element: <Suppliers />,
      },
      {
        path: "/polyurethane-wheels",
        element: <PolyurethaneWheels />,
      },
      {
        path: "/polyurethane-surfacing",
        element: <PolyurethaneSurfacing />,
      },
      {
        path: "/repair-maintenance",
        element: <RepairMaintenance />,
      },
      {
        path: "/tire-service",
        element: <TireService />,
      },
      {
        path: "/oils-lubricants",
        element: <OilsLubricants />,
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
