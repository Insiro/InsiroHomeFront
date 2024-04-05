import { WithLongId } from "../../utils/Global";
export interface ModifyProjectType {
    name: string;
}
export interface ProjectType extends WithLongId {
    name: string;
}
