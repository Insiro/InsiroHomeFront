import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { Projects } from "@/pages/project/Projects";
import { SidebarItems } from "@/shared/type/SidebarItem";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";

const sidebarItems: SidebarItems = {
    home: { path: "/", element: <Home /> },
    project: { path: "/projects", element: <Projects /> },
};

const sidebarRoute = Object.keys(sidebarItems).map((key) => sidebarItems[key]);

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: (
            <Layout items={sidebarItems}>
                <NotFound />
            </Layout>
        ),
        children: sidebarRoute,
        element: (
            <Layout items={sidebarItems}>
                <Outlet />
            </Layout>
        ),
    },
]);
export const MainRouter = () => <RouterProvider router={router} />;
