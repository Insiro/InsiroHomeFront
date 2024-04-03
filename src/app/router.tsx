import { Home } from "@/pages/HomePage";
import { NotFound } from "@/pages/NotFoundPage";
import { ProjectGallery } from "@/pages/ProjectPage/ProjectGalleryPage";
import { Contact } from "@/pages/ContactPage";
import { SidebarItems } from "@/shared/type/SidebarItem";
import { Outlet, RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { ProjectDetail } from "@/pages/ProjectPage/ProjectDetailPage";

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
