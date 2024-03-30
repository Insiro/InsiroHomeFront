import { SideBarClassName, handleSidebar } from "@/features/header/state";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const NsButton = styled.div`
    display: block;
    width: 40px;
    height: 31px;
    padding-top: 14px;
    position: relative;
    cursor: pointer;
    .ns-bar {
        width: 30px;
        height: 3px;
        background: #000;
        -webkit-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
    }
    .ns-bar:after,
    .ns-bar:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 3px;
        background: #000;
        left: 0;
        bottom: 0;
        -webkit-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
    }
    .ns-bar:before {
        bottom: auto;
        top: 0;
    }
    :hover .ns-bar {
        width: 100%;
    }
`;
const WrapperStyle = css`
    display: none;
    width: 50%;
    background: #fff;
    padding-top: 17px;
    padding-left: 15px;
    -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

    @media only screen and (min-width: 768px) and (max-width: 991px) {
        display: block;
        padding-top: 25px;
        padding-left: 30px;
    }

    @media only screen and (max-width: 767px) {
        display: block;
        ${SideBarClassName} & {
            display: none;
        }
    }
`;
export const NavCloseBtn = () => {
    return (
        <div css={WrapperStyle}>
            <NsButton onClick={() => handleSidebar(true)}>
                <div className="ns-bar"></div>
            </NsButton>
        </div>
    );
};
