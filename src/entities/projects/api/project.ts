import { serverAPI } from "@/shared/utils/api";
import { NewProject, Project, UpdateProject } from "../types/Project";
import { toMultipart } from "@/shared/utils";

export const getAllProjects = async (): Promise<Project[]> => {
    return (await serverAPI.get<Project[]>("/projects")).data;
};

export const newProject = async (dto: NewProject, files: File[]): Promise<Project> => {
    const form = toMultipart(dto, files);
    return (await serverAPI.post<Project>(`/projects/${dto.id}`, form)).data;
};
export const getProject = async (id: string): Promise<Project> => {
    return (await serverAPI.get<Project>(`/projects/${id}`)).data;
};

export const updateProject = async (id: string, update: UpdateProject, files: File[]): Promise<Project> => {
    const form = toMultipart(update, files);
    files.forEach((item) => form.append("files", item));

    return (await serverAPI.patch<Project>(`/projects/${id}`, form)).data;
};
export const deleteProject = async (id: string) => {
    await serverAPI.delete(`/projects/${id}`);
};
