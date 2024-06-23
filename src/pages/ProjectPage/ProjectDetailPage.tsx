import { useLoaderData, useLocation } from "react-router-dom";

import { Project } from "@/entities/projects";
import { PostLayout } from "@/widgets/Post";
import { useMemo } from "react";

export const ProjectDetail = () => {
    const project = useLoaderData() as Project.Project;
    const { pathname } = useLocation();
    const tags = useMemo(() => {
        return project.type?.map((it) => it.name) || [];
    }, [project]);
    const content = useMemo(() => project.content?.replaceAll("~/", `/static${pathname}/`) || "", [pathname, project.content]);

    return <PostLayout title={project.title} createdAt={project.createdAt} status={project.status} tags={tags} content={content} />;
};
