import { MediaQuery } from "@/shared/constants";
import { ContentWrapper } from "@/shared/style";
import { Marked } from "@/widgets/Marked";
import { PostHeaderWrapper, PostMeta } from "@/widgets/Post";
import { SpacialSpacer } from "@/widgets/SpacialSpacer";
import styled from "@emotion/styled";
const Wrapper = styled.div`
    background: #f7f9fb;
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

export const ProjectDetail = () => {
    return (
        <Wrapper>
            <PostHeaderWrapper>
                <h1>Title</h1>
                <PostMeta>
                    <span>MetaData</span>
                    <span>MetaData2</span>
                </PostMeta>
            </PostHeaderWrapper>

            <SpacialSpacer />
            <ContentWrapper>
                <Marked value={""} />
            </ContentWrapper>
        </Wrapper>
    );
};
