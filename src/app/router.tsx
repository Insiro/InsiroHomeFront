import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { Outlet,  RouterProvider, createBrowserRouter } from "react-router-dom";
import { SidebarItems } from "@/shared/SidebarItem";
import { Layout } from "./layout";

const sidebarItems: SidebarItems = {
    home: { path: "/", element: <Home /> },
};

const sidebarRoute = Object.keys(sidebarItems).map((key) => sidebarItems[key]);

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <NotFound />,
        children: sidebarRoute,
        element: (
            <Layout items={sidebarItems}>
                <Outlet />
            </Layout>
        ),
    },
]);
export const MainRouter = () => <RouterProvider router={router} />;
