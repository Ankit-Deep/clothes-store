import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
// import { Provider } from 'react-redux'
import Explore from "./components/Explore.jsx";
import Home from "./pages/Home.jsx";
import Customize from "./pages/Customize.jsx";

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
          {
            path: "/customize",
            element: <Customize />,
          },
        ],
      },

      {
        path: "/login",
        element: <main/>
      },
      {
        path: "signup",
        // element:
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-38ju8yp4j4uzytkd.us.auth0.com"
      clientId="iaMJMyKipYwfbOiRUZtjWOuPhp8RUJxJ"
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