import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Body from "./components/Body";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";

// lazy loading
// chunking
// dynamic importing
const Instamart = lazy(() => import("./components/Instamart"));
const Cart = lazy(() => import("./components/Cart"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

const main = document.getElementById("root");
const root = ReactDOM.createRoot(main);
// root.render(<App />);
root.render(<RouterProvider router={appRouter} />);
