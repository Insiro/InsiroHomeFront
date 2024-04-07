import { Outlet, RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";

import { BlogPostLoader, BlogPostPage } from "@/pages/BlogPage";
import { Contact } from "@/pages/ContactPage";
import { ErrorPage } from "@/pages/ErrorPage";
import { Home } from "@/pages/HomePage";
import { ProjectDetail, ProjectGallery, loadProject, loadProjectList } from "@/pages/ProjectPage";
import { SidebarItems } from "@/shared/type/SidebarItem";
import { Layout } from "./layout";
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
    { path: "/blogs/:id", element: <BlogPostPage />, loader: BlogPostLoader },
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
