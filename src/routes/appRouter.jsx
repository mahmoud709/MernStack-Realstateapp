import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "../pages/HomePage/Home"
import ListPage from "../components/listPage/ListPage"
import MainLayout from "../layouts/MainLayout"
import SinglePage from "../components/singlepage/Singlepage"

export default function AppRouter() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <MainLayout />,
         children: [
            {
               path: '/',
               element: <Home />
            },
            {
               path: '/list',
               element: <ListPage />,
               children: [
                  {
                     path: ':id',
                     element: <SinglePage />
                  }
               ]
            }
         ]
      }
   ])
   return (
      <RouterProvider router={router} />
   )
}
