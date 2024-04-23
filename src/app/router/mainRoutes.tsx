import { RouteObject } from "react-router-dom";

import { BlogPostLoader, BlogPostPage } from "@/pages/BlogPage";
import { ProjectDetail, loadProject } from "@/pages/ProjectPage";

export const MainRoutes: RouteObject[] = [
    {
        path: "projects/:id",
        element: <ProjectDetail />,
        loader: loadProject,
    },
    { path: "/blogs/:id", element: <BlogPostPage />, loader: BlogPostLoader },
];
