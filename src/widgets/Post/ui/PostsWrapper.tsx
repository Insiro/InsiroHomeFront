import styled from "@emotion/styled";
import { Color, MediaQuery } from "@/shared/ui/constants";

export const PostsWrapper = styled.div`
    background: ${Color.base};
    padding-left: 86px;
    height: 100%;
    display: flex;
    flex-flow: column;
    ${MediaQuery.Min768Max991} {
        padding-right: 50px;
    }
    ${MediaQuery.Max767} {
        padding-left: 50px;
    }
    ${MediaQuery.Max479} {
        padding-left: 15px;
    }
`;
