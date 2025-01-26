import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
// import { Provider } from 'react-redux'
import Home from "./Pages/Home.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Contact from "./Pages/Contact.jsx";
import Admin from "./Pages/Admin.jsx";
import Customize from "./Pages/Customize.jsx";
import ShoppingCart from "./Pages/ShoppingCart.jsx";
import conf from "./Conf/conf.js";
import {
  AddAdmin,
  AddProduct,
  DeleteProduct,
  ExpandCategory,
  ProductDetail,
  UpdateProduct,
  Explore,
} from "./Components/index.js";

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
            path: "/explore/",
            element: <Explore />,
          },
        ],
      },
      {
        path: "/full-category/Mens",
        element: <ExpandCategory category={"Mens"} />,
      },
      {
        path: "/full-category/Womens",
        element: <ExpandCategory category={"Womens"} />,
      },
      {
        path: "/full-category/Kids",
        element: <ExpandCategory category={"Kids"} />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
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
      {
        path: "/product/:productId",
        element: <ProductDetail />,
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
