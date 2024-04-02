import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { ProjectGallery } from "@/pages/project/ProjectGallery";
import { Contact } from "@/pages/Contact";
import { SidebarItems } from "@/shared/type/SidebarItem";
import { Outlet, RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { ProjectDetail } from "@/pages/project/ProjectDetail";

const sidebarItems: SidebarItems = {
    home: { path: "/", element: <Home /> },
    project: { path: "/projects", element: <ProjectGallery /> },
    contact: { path: "/contact", element: <Contact /> },
};

const sidebarRoute = Object.keys(sidebarItems).map((key) => sidebarItems[key]);

const routes: RouteObject[] = [
    { path: "/404", element: <NotFound /> },
    { path: "projects/:projectId", element: <ProjectDetail /> },
];

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: (
            <Layout items={sidebarItems}>
                <NotFound />
            </Layout>
        ),
        children: routes.concat(sidebarRoute),
        element: (
            <Layout items={sidebarItems}>
                <Outlet />
            </Layout>
        ),
    },
]);
export const MainRouter = () => <RouterProvider router={router} />;
