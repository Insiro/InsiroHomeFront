import { RouteObject } from "react-router-dom";

import { BlogPostLoader, BlogPostPage } from "@/pages/BlogPage";
import { ProjectDetail, loadProject } from "@/pages/ProjectPage";
import { LoginPage, ProfilePage } from "@/pages/User";
import { ProfileLoader } from "@/pages/User/ProfileLoader";
import { SearchPage, SearchLoader } from "@/pages/SearchPage";

export const MainRoutes: RouteObject[] = [
    {
        path: "projects/:id",
        element: <ProjectDetail />,
        loader: loadProject,
    },
    { path: "/blogs/:id", element: <BlogPostPage />, loader: BlogPostLoader },
    { path: "/auth", element: <LoginPage /> },
    { path: "/user/:id", element: <ProfilePage />, loader: ProfileLoader },
    { path: "/search", element: <SearchPage />, loader: SearchLoader },
];
