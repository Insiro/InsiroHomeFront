import { useSearchModal } from "@/features/header/state";
import { css } from "@emotion/react";
import { ModelClose } from "./ModalClose";
import { SearchForm } from "./SearchForm";
const WrapperStyle = css`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #000;
    z-index: 99999;
    transition: opacity 1s ease-out, visibility 1s ease-out;
`;
const WrapperClosedStyle = css`
    ${WrapperStyle}
    visibility: hidden;
    opacity: 0;
`;

export const SearchModal = () => {
    const ModalState = useSearchModal();

    return (
        <div css={ModalState.isOpened ? WrapperStyle : WrapperClosedStyle}>
            <div style={{ alignItems: "center", justifyContent: "center", display: "flex", height: "100%" }}>
                <ModelClose onClick={() => ModalState.setOpen(false)} />
                <SearchForm />
            </div>
        </div>
    );
};
