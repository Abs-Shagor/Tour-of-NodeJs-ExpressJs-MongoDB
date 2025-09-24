import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root';
import { ToastContainer } from 'react-toastify';
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import DeletUser from './Components/DeletUser';
import UpdateUser from './Components/UpdateUser';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/users',
        element: <AllUsers></AllUsers>
      },
      {
        path: '/adduser',
        element: <AddUser></AddUser>
      },
      {
        path: '/deleteuser',
        element: <DeletUser></DeletUser>
      },
      {
        path: '/updateuser',
        element: <UpdateUser></UpdateUser>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
    <ToastContainer />
  </StrictMode>,
)
