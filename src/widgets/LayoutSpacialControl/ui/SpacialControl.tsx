import styled from "@emotion/styled";
import { SearchBtn } from "./SearchBtn";
import { NavCloseBtn } from "./NavCloseBtn";

const ControlWrapper = styled.div`
    position: fixed;
    width: 111px;
    height: 91px;
    top: 0;
    right: 0;
    z-index: 999;
    @media screen and (min-width: 768px) and (max-width: 991px) {
        width: 200px;
        height: 85px;
        display: -ms-flex;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }
    @media only screen and (max-width: 767px) {
        width: 150px;
        height: 65px;
        display: -ms-flex;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }
`;

export const SpacialControl = () => {
    return (
        <ControlWrapper>
            <SearchBtn />

            <NavCloseBtn />
        </ControlWrapper>
    );
};
