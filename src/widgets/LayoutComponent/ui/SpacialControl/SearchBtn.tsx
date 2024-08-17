import styled from "@emotion/styled";

import { useSearchModal } from "@/features/header/state";
import SearchIcon from "@/shared/assets/search-icon.png";
import { MediaQuery } from "@/shared/ui/constants";
import { redirect, useLocation } from "react-router-dom";
import { useSearchState } from "@/features/header/search";

const Wrapper = styled.div`
    display: block;
    height: 100%;
    padding-top: 0px;
    align-content: center;
    background: #323232;
    text-align: center;
    cursor: pointer;
    ${MediaQuery.Max991} {
        width: 50%;
    }
`;

export const SearchBtn = () => {
    const openSearchModal = useSearchModal();
    const location = useLocation();
    const { searchKey } = useSearchState();

    const onclick = () => {
        if (location.pathname === "/search") return redirect(`/search?kq=${searchKey}`);

        openSearchModal.setOpen(true);
    };

    return (
        <Wrapper onClick={onclick}>
            <img src={SearchIcon} />
        </Wrapper>
    );
};
