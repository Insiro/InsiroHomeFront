import styled from "@emotion/styled";
import { ReactNode } from "react";

const Wrapper = styled.div`
    display: flex;
`;
const Box = styled.div`
    flex-grow: 1;
`;

export const Centralizer = (props: { children: ReactNode }) => {
    return (
        <Wrapper>
            <Box />
            {props.children}
            <Box />
        </Wrapper>
    );
};
