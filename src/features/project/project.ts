import { getProject } from "@/entities/projects/api/project";
import { Project, defaultProject } from "@/entities/projects/types/Project";
import { redirect } from "react-router-dom";
import { atom, useRecoilState } from "recoil";
export const projectState = atom<Project>({
    key: "project",
    default: defaultProject,
});
export const useProject = () => {
    const [project, setProject] = useRecoilState(projectState);
    const loadProject = async (id?: string) => {
        if (id == undefined) redirect("/404");
        else setProject({ ...(await getProject(id)) });
        return project;
    };

    return { project, loadProject };
};
