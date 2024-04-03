import { MediaQuery } from "@/shared/ui/constants";
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

const testContent = `
# Title
## Title2
### title3
#### title4
##### title5
###### title6
- item
1. item
\`\`\`js
CodeArea(){
const a = 10;
}
\`\`\`
\`notation\`
|table|a|
|---|-|
|ccc|c|
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
                <Marked value={testContent} />
            </ContentWrapper>
        </Wrapper>
    );
};
