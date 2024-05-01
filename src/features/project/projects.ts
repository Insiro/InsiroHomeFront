import { getAllProjects } from "@/entities/projects/api/project";
import { Project } from "@/entities/projects/types/Project";
import { atom, useRecoilState } from "recoil";

const projectListState = atom<Project[]>({
    key: "projectList",
    default: [],
});
export const useProjectList = () => {
    const [projectList, setProjects] = useRecoilState(projectListState);

    const loadProjects = async () => {
        setProjects(await getAllProjects());
    };

    return { projectList, setProjects, loadProjects };
};
