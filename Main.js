import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Body from "./components/Body";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

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
    ],
  },
]);

const main = document.getElementById("root");
const root = ReactDOM.createRoot(main);
// root.render(<App />);
root.render(<RouterProvider router={appRouter} />);
