import { SideBarOpen } from "@/shared/ui/constants";
import { atom, useRecoilState } from "recoil";

const searchModalOpenedState = atom({
    key: "searchModalOpenedState",
    default: false,
});
export const useSearchModal = () => {
    const [isOpened, setOpen] = useRecoilState(searchModalOpenedState);

    return { isOpened, setOpen };
};

export const handleSidebar = (open: boolean) => {
    if (open) document.body.classList.add(SideBarOpen);
    else document.body.classList.remove(SideBarOpen);
};
