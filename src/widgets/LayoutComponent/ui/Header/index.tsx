import { handleSidebar } from "@/features/header/state";
import { SidebarItems } from "@/shared/type/SidebarItem";
import { MediaQuery, SideBarSelector } from "@/shared/ui/constants";
import { css } from "@emotion/react";
import { SideBar } from "./Sidebar";

const HeaderSectionStyle = css`
    width: 305px;
    height: 100%;
    background: #fff;
    left: 0;
    z-index: 9999;
    flex-shrink: 0;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
    ${MediaQuery.Min992Max1199} {
        width: 300px;
    }
    ${MediaQuery.Max991} {
        width: 0px;
        overflow-y: auto;
        ${SideBarSelector} & {
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
                font-size: 21px;
                ${MediaQuery.Max991} {
                    display: none;
                    position: fixed;
                    ${SideBarSelector} & {
                        display: block;
                    }
                }
            `}
        >
            x
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
