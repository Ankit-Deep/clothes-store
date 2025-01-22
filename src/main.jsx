import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
// import { Provider } from 'react-redux'
import Explore from './components/Explore.jsx'
import Home from './pages/Home.jsx'
import Customize from './pages/Customize.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element: <Home/>,
        children:[
          {
            path:"/explore",
            element: <Explore/>
          },
          {
            path:"/customize",
            element: <Customize/>
          }
        ]
      },

      {
        path:"/login",
        // element:
      },
      {
        path: "signup",
        // element:
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider> */}
      <RouterProvider router={router} />
    {/* </Provider> */}
  </StrictMode>,
)
