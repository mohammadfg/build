import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { lazy } from 'react'
//--------- my Components
const Home = lazy(() => import('./pages/home'));
const Contents = lazy(() => import('./pages/contents'));
const Login = lazy(() => import('./pages/login'));
const Founder = lazy(() => import("./pages/Founder"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contents/:id",
    element: <Contents />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/*",
    element: <Founder />,
  },
]);

export default function Router() {
  return (
    <RouterProvider router={router} />
  )
}
