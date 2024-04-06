import { Home } from "@/pages/HomePage";
import { ProjectGallery } from "@/pages/ProjectPage/ProjectGalleryPage";
import { Contact } from "@/pages/ContactPage";
import { SidebarItems } from "@/shared/type/SidebarItem";
import { Outlet, RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProjectDetail } from "@/pages/ProjectPage/ProjectDetailPage";
import { Layout } from "./layout";
import { ErrorPage } from "@/pages/ErrorPage";
import { loadProject, loadProjectList } from "@/pages/ProjectPage/projectLoader";
const sidebarItems: SidebarItems = {
    home: { path: "/", element: <Home /> },
    project: { path: "/projects", element: <ProjectGallery />, loader: loadProjectList },
    contact: { path: "/contact", element: <Contact /> },
};

const sidebarRoute = Object.keys(sidebarItems).map((key) => sidebarItems[key]);

const routes: RouteObject[] = [
    {
        path: "projects/:id",
        element: <ProjectDetail />,
        loader: loadProject,
    },
];

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: (
            <Layout items={sidebarItems}>
                <ErrorPage />
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
