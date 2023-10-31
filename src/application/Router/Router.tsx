import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { About } from "@/pages/About";
import { Layout } from "../Layout";
import { Dictionary } from "@/pages/Dictionary";
import { Paths } from './paths'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
            index: true,
            element: <HomePage />
        },
        {
            path: Paths.about,
            element: <About />,
        },
        {
            path: Paths.dictionary,
            element: <Dictionary />
        }
      ]
    },
]);

export const Router = () => (
    <RouterProvider router={router} />
)
