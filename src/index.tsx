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

const router = createBrowserRouter([
  {
    element: (
      <div className="site">
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
