import { LoaderFunction } from "react-router-dom";

import { getAllProjects, getProject } from "@/entities/projects/api/project";
import { getAllTypes } from "@/entities/projects/api/projectTypes";

export const loadProject: LoaderFunction = async ({ params }) => {
    if (params.id == undefined) throw new Response("NotFound", { status: 404 });
    return await getProject(params.id).catch((error) => {
        if (error instanceof Response) throw error;
        throw new Response("NotFound", { status: 404 });
    });
};
export const loadProjectList: LoaderFunction = async () => {
    const types = await getAllTypes();
    const projects = await getAllProjects();
    return { types: types.map((it) => it.name), projects: projects };
};
