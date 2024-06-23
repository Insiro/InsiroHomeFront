import styled from "@emotion/styled";

import { MediaQuery } from "@/shared/ui/constants";
import { NavCloseBtn } from "./NavCloseBtn";
import { SearchBtn } from "./SearchBtn";

const ControlWrapper = styled.div`
    position: fixed;
    width: 111px;
    height: 91px;
    top: 0;
    right: 0;
    z-index: 999;
    ${MediaQuery.Min768Max991} {
        width: 200px;
        height: 85px;
        display: -ms-flex;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }
    ${MediaQuery.Max767} {
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
