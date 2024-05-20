import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

import { handleSidebar } from "@/features/header/state";
import MenuIcon from "@/shared/assets/menu-icon.png";
import { SidebarItems } from "@/shared/type/SidebarItem";

const ItemStyle = css`
    display: inline-block;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    color: #323232;
    padding-left: 63px;
    margin-bottom: 24px;
    position: relative;
`;

const LogoStyle = css`
    display: block;
    padding-left: 54px;
    padding-top: 38px;
    margin-bottom: 84px;
    text-decoration: none;
`;

const Item = (props: { children: ReactNode; href: string }) => {
    const location = useLocation();
    const isActive = props.href == location.pathname;

    return (
        <>
            <li css={[ItemStyle, isActive && { borderBottom: "2px solid #000000" }]}>
                <Link to={props.href}  onClick={()=>handleSidebar(false)}  style={{ textDecoration: "none", color: "#323232" }}>
                    {props.children}
                </Link>
            </li>
            <br />
        </>
    );
};

const HeaderWarp = styled.div`
    margin-bottom: 250px;
    @media only screen and (max-width: 991px) {
        margin-bottom: 50px;
    }
`;

export const SideBar = (props: { sidebarItems: SidebarItems }) => {
    return (
        <HeaderWarp>
            <Link css={LogoStyle} to="/">
                <h1>Insiro</h1>
            </Link>

            <img src={MenuIcon} style={{ paddingLeft: "63px", marginBottom: "29px" }} />
            <nav>
                <ul style={{ listStyle: "none", margin: "0px", marginBottom: "65px", padding: "0px" }}>
                    {props.sidebarItems.map((item) => (
                        <Item key={item.name} href={item.path!}>
                            {item.name}
                        </Item>
                    ))}
                </ul>
            </nav>
        </HeaderWarp>
    );
};
