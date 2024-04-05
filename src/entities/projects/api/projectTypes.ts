import { serverAPI } from "@/shared/utils/api";
import { ModifyProjectType, ProjectType } from "../types/ProjectType";

export const getAllTypes = async () => {
    return (await serverAPI.get<ProjectType[]>("/projects/types")).data;
};
export const newType = async (dto: ModifyProjectType) => {
    return (await serverAPI.post<ProjectType>("/projects/types", dto)).data;
};
export const getType = async (id: string) => {
    return (await serverAPI.get<ProjectType>(`/projects/types/${id}`)).data;
};
export const updateType = async (dto: ProjectType) => {
    return (await serverAPI.patch<ProjectType>(`/projects/types/${dto.id}`, dto)).data;
};
export const deleteType = async (id: string) => {
    await serverAPI.delete(`/projects/types/${id}`);
};
