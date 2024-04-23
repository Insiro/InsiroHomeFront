import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import { ErrorPage } from "@/pages/ErrorPage";
import { Layout } from "../layout";
import { MainRoutes } from "./mainRoutes";
import { sidebarItems } from "./sidebarRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        children: MainRoutes.concat(sidebarItems),
        errorElement: (
            <Layout items={sidebarItems}>
                <ErrorPage />
            </Layout>
        ),
        element: (
            <Layout items={sidebarItems}>
                <Outlet />
            </Layout>
        ),
    },
]);
export const MainRouter = () => <RouterProvider router={router} />;
