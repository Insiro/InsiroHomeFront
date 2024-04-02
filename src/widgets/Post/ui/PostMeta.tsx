import styled from "@emotion/styled";
import React from "react";
import { ReactNode } from "react";

const Wrapper = styled.div`
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #898d90;
    margin-bottom: 35px;
    padding-top: 1rem;
`;
const ItemWrapper = styled.div`
    display: inline-block;
    padding-right: 29px;
    padding-left: 25px;
`;
export const PostMeta = ({ children }: { children?: ReactNode }) => {
    const childList = React.Children.toArray(children);

    return (
        <Wrapper>
            {childList.length != 0 && <ItemWrapper style={{ paddingLeft: "0px" }}>{childList[0]}</ItemWrapper>}

            {childList.slice(1).map((item) => (
                <>
                    | <ItemWrapper>{item}</ItemWrapper>
                </>
            ))}
        </Wrapper>
    );
};
