import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
// import { Provider } from 'react-redux'
import Explore from "./components/Explore.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import conf from "../src/conf/conf.js";
import Customize from "./pages/Customize.jsx";
import Cart from "./pages/Cart.jsx";
import Admin from "./pages/Admin.jsx";
import {
  AddAdmin,
  AddProduct,
  DeleteProduct,
  UpdateProduct,
} from "./components/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/explore",
            element: <Explore />,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/customize",
        element: <Customize />,
      },
      {
        path: "/admin/*",
        element: <Admin />,
        children: [
          {
            path: "/admin/*add-product",
            element: <AddProduct />,
          },
          {
            path: "/admin/*update-product",
            element: <UpdateProduct />,
          },
          {
            path: "/admin/*delete-product",
            element: <DeleteProduct />,
          },
          {
            path: "/admin/*add-more-admins",
            element: <AddAdmin />,
          },
        ],
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain={conf.auth0ProviderDomain}
      clientId={conf.auth0ProviderClientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {/* <Provider> */}
      <RouterProvider router={router} />
      {/* </Provider> */}
    </Auth0Provider>
  </StrictMode>
);
