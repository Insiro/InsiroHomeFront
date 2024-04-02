import { useSearchModal } from "@/features/header/state";
import SearchIcon from "@/shared/assets/search-icon.png";
import { MediaQuery } from "@/shared/constants";
import styled from "@emotion/styled";
import { Image } from "react-bootstrap";

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

    return (
        <Wrapper onClick={() => openSearchModal.setOpen(true)}>
            <Image src={SearchIcon} />
        </Wrapper>
    );
};
