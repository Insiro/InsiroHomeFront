import { ProjectType } from "@/entities/projects";
import { getAllTypes } from "@/entities/projects/api/projectTypes";
import { atom, useRecoilState } from "recoil";

const typeListState = atom<ProjectType[]>({
    key: "projectTypeList",
    default: [],
});
export const useProjectTypes = () => {
    const [typeList, setTypes] = useRecoilState(typeListState);

    const loadTypes = async () => {
        setTypes(await getAllTypes());
    };

    return { typeList, loadTypes };
};
