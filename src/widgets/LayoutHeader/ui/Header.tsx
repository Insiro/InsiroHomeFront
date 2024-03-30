import { SidebarItems } from "@/shared/SidebarItem";
import { SideBar } from "./Sidebar";
import { SideBarClassName, handleSidebar } from "@/features/header/state";
import { css } from "@emotion/react";

const HeaderSectionStyle = css`
    width: 455px;
    height: 100%;
    background: #fff;
    left: 0;
    z-index: 9999;
    flex-shrink: 0;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
        width: 300px;
    }
    @media only screen and (max-width: 991px) {
        width: 0px;
        overflow-y: auto;
        ${SideBarClassName} & {
            width: 100%;
        }
    }
`;

const CloseBtn = () => {
    return (
        <div
            className="closeBtn"
            onClick={() => handleSidebar(false)}
            css={css`
                display: none;
                position: absolute;
                width: 35px;
                height: 35px;
                border: 1px solid #a9a9a9;
                border-radius: 50%;
                text-align: center;
                padding-top: 4px;
                right: 25px;
                top: 10px;
                color: #999;
                @media only screen and (max-width: 991px) {
                    display: none;
                    position: fixed;
                    ${SideBarClassName} & {
                        display: block;
                    }
                }
            `}
        >
            <i className="fa fa-times"></i>
        </div>
    );
};

export const Header = (props: { sidebarItems: SidebarItems }) => {
    return (
        <header css={HeaderSectionStyle}>
            <CloseBtn />

            <SideBar sidebarItems={props.sidebarItems} />
        </header>
    );
};
