import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "react";
const Wrapper = styled.div`
    max-width: 1260px;
    padding: 160px 47px 105px 135px;
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
interface Props {
    children: ReactNode;
    css?: CSSProperties;
}

export const SimpleLayout = ({ children, css }: Props) => (
    <Wrapper css={{ ...css }}>
        <Content>{children}</Content>
    </Wrapper>
);
