import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Plan from './components/Plan'
import Addson from './components/Addson'
import Summary from './components/Summary'
import Thankyou from './components/Thankyou.jsx'
import { Provider } from "react-redux";
import store from "./redux/store";

import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Define routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/plan',
    element: <Plan />,
  },
  {
    path: '/Addson',
    element: <Addson />,
  },
  {
    path: '/Summary',
    element: <Summary />,
  },
  {
    path: '/Thankyou',
    element: <Thankyou/>,
  }
])

// Render the application with RouterProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
