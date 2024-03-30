import { SideBarClassName } from "@/features/header/state";
import { SidebarItems } from "@/shared/SidebarItem";
import { Header } from "@/widgets/LayoutHeader";
import { SpacialControl } from "@/widgets/LayoutSpacialControl";
import { SearchModal } from "@/widgets/LayoutSpacialControl/ui/SearchModal/SearchModal";
import styled from "@emotion/styled";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    items: SidebarItems;
};
const PageSection = styled.div`
    background: #f7f9fb;
    width: 100%;
    height: 100%;
    flex-grow: 1;
    min-height: 100%;
    padding-left: 30px;
    overflow-y: scroll;
    @media only screen and (max-width: 991px) {
        ${SideBarClassName}& {
            display: none;
        }
    }
`;

export const Layout = (props: Props) => {
    return (
        <>
            <SpacialControl />

            <div style={{ display: "flex", flexFlow: "row", width: "100%", height: "100%" }}>
                <Header sidebarItems={props.items} />
                <PageSection>{props.children}</PageSection>
            </div>
            <SearchModal />
        </>
    );
};
