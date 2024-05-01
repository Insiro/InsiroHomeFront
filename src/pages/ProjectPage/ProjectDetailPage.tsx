import { useLoaderData } from "react-router-dom";

import { Project } from "@/entities/projects";
import { PostLayout } from "@/widgets/Post";
import { useMemo } from "react";

export const ProjectDetail = () => {
    const project = useLoaderData() as Project.Project;

    const tags = useMemo(() => {
        return project.type?.map((it) => it.name) || [];
    }, [project]);

    return <PostLayout title={project.title} createdAt={project.createdAt} status={project.status} tags={tags} content={project.content} />;
};
