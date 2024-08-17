import { atom, useRecoilState } from "recoil";

const searchKeywordState = atom({
    key: "searchKeyword",
    default: "",
});
export const useSearchState = () => {
    const [searchKey, setSearchKey] = useRecoilState(searchKeywordState);

    return { searchKey, setSearchKey };
};

