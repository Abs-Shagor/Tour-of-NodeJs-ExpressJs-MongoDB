import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root';
import { ToastContainer } from 'react-toastify';
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import UpdateUser from './Components/UpdateUser';
import UserDetails from './Components/UserDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <AllUsers></AllUsers>
      },
      {
        path: '/users',
        element: <AllUsers></AllUsers>
      },
      {
        path: '/adduser',
        element: <AddUser></AddUser>
      },
      {
        path: '/users/:id',
        element: <UserDetails></UserDetails>,
        loader: ({params}) => fetch(`http://localhost:3000/users/${params.id}`)
      },
      {
        path: '/updateUser/:id',
        element: <UpdateUser></UpdateUser>,
        loader: ({params}) => fetch(`http://localhost:3000/users/${params.id}`)
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
