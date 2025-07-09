import { createBrowserRouter, RouterProvider } from 'react-router'
import DefaultLayout from '@/routes/layouts/Default'
import Home from '@/routes/pages/Home'
import About from '@/routes/pages/About'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
