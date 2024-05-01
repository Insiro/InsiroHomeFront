import { BlogListLoader, BlogListPage } from "@/pages/BlogPage";
import { Contact } from "@/pages/ContactPage";
import { Home } from "@/pages/HomePage";
import { ProjectGallery, loadProjectList } from "@/pages/ProjectPage";
import { SidebarItems } from "@/shared/type/SidebarItem";

export const sidebarItems: SidebarItems = [
    { name: "home", path: "/", element: <Home /> },
    { name: "project", path: "/projects", element: <ProjectGallery />, loader: loadProjectList },
    { name: "blog", path: "/blogs", element: <BlogListPage />, loader: BlogListLoader },
    { name: "contact", path: "/contact", element: <Contact /> },
];
