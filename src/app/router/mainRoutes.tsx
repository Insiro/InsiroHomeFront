import { RouteObject } from "react-router-dom";

import { BlogPostLoader, BlogPostPage } from "@/pages/BlogPage";
import { ProjectDetail, loadProject } from "@/pages/ProjectPage";
import { LoginPage } from "@/pages/User";
export const MainRoutes: RouteObject[] = [
    {
        path: "projects/:id",
        element: <ProjectDetail />,
        loader: loadProject,
    },
    { path: "/blogs/:id", element: <BlogPostPage />, loader: BlogPostLoader },
    { path: "/auth", element: <LoginPage /> },
];
