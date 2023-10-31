import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { DictionaryPage } from "@/pages/DictionaryPage";
import { Layout } from "../Layout";
import { Paths } from '../paths'

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
            element: <AboutPage />,
        },
        {
            path: Paths.dictionary,
            element: <DictionaryPage />
        },
      ]
    },
]);

export const Router = () => (
    <RouterProvider router={router} />
)
