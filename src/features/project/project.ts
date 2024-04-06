import { getProject } from "@/entities/projects/api/project";
import { Project, defaultProject } from "@/entities/projects/types/Project";
import { atom, useRecoilState } from "recoil";
export const projectState = atom<Project>({
    key: "project",
    default: defaultProject,
});
export const useProject = () => {
    const [project, setProject] = useRecoilState(projectState);
    const loadProject = async (id: string) => setProject(await getProject(id));

    return { project, loadProject };
};
