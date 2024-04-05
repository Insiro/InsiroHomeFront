import { CreatedAt, Status, WithDeleteFile, WithId, WithStatus } from "../../utils/Global";
import { ProjectType } from "./ProjectType";
interface Base extends WithId {
    title: string;
    content: string;
    type?: ProjectType[];
    icon?: string; //TODO: Server must Impl Icon Path on DB
}

export interface Project extends Base, CreatedAt, WithStatus {}

export interface NewProject extends Base, Status {}

export interface UpdateProject extends WithDeleteFile, Status {
    title?: string;
    status?: string;
    content?: string;
    types?: string[];
}
export const defaultProject: Project = {
    title: "",
    createdAt: "",
    id: "",
    content: "",
    status: "",
};
