import styled from "@emotion/styled";
import { ReactNode } from "react";
const Wrapper = styled.div`
    max-width: 1260px;
    padding: 0 47px 105px 135px;
    @media (max-width: 1350px) {
        padding-left: 30px;
        padding-right: 60px;
    }
`;
const Content = styled.div`
    padding-right: 60px;
    p {
        margin-bottom: 110px;
    }
    @media (max-width: 1350px) {
        padding-right: 0;
    }
`;

export const SimpleLayout = ({ children }: { children: ReactNode }) => (
    <div style={{ paddingTop: "190px" }}>
        <Wrapper>
            <Content>{children}</Content>
        </Wrapper>
    </div>
);
