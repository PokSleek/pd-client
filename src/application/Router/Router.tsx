import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { About } from "@/pages/About";
import { Layout } from "../Layout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
            path: '',
            element: <HomePage />
        },
        {
            path: "about",
            element: <About />,
        },
      ]
    },
]);

export const Router = () => (
    <RouterProvider router={router} />
)
