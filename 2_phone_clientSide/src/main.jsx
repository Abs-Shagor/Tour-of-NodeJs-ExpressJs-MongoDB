import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import Root from './Components/Root';
import Home from './Components/Home';
import Phones from './Components/Phones';
import PhoneDetails from './Components/PhoneDetails';
import AddNewPhone from './Components/AddNewPhone';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/phones',
        element: <Phones></Phones>
      },
      {
        path: '/phonedetails/:phoneId',
        element: <PhoneDetails></PhoneDetails>,
        loader: ({params}) => fetch(`http://localhost:3000/phonesInfo/${params.phoneId}`)
      },
      {
        path: '/addNewPhone',
        element: <AddNewPhone></AddNewPhone>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} >

    </RouterProvider>
  </StrictMode>,
)
