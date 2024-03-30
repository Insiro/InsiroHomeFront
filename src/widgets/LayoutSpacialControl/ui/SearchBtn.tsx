import { useSearchModal } from "@/features/header/state";
import SearchIcon from "@/shared/assets/search-icon.png";
import styled from "@emotion/styled";
import { Image } from "react-bootstrap";

const Wrapper = styled.div`
    display: block;
    height: 100%;
    padding-top: 30px;
    background: #323232;
    text-align: center;
    cursor: pointer;
    @media only screen and (max-width: 991px) {
        width: 50%;
    }
    @media only screen and (max-width: 767px) {
        padding-top: 18px;
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
