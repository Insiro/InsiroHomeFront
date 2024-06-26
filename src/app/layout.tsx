import { SidebarItems } from "@/shared/type/SidebarItem";
import { Color, MediaQuery, SideBarSelector } from "@/shared/ui/constants";
import { Header, SearchModal, SpacialControl } from "@/widgets/LayoutComponent";
import styled from "@emotion/styled";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    items: SidebarItems;
};
const PageSection = styled.div`
    background: ${Color.base};
    width: 100%;
    height: 100%;
    flex-grow: 1;
    min-height: 100%;
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
    ${MediaQuery.Max991} {
        ${SideBarSelector} & {
            display: none;
        }
    }
`;

export const Layout = (props: Props) => {
    return (
        <>
            <SpacialControl />

            <div style={{ display: "flex", flexFlow: "row", width: "100%", height: "100%", alignItems: "stretch" }}>
                <Header sidebarItems={props.items} />
                <PageSection>{props.children}</PageSection>
            </div>
            <SearchModal />
        </>
    );
};
