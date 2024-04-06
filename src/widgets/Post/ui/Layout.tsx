import styled from "@emotion/styled";
import { ReactNode } from "react";

import { ContentWrapper } from "@/shared/style";
import { MediaQuery } from "@/shared/ui/constants";
import { Marked } from "@/widgets/Marked";
import { PostHeaderWrapper, PostMeta } from "@/widgets/Post";
import { SpacialSpacer } from "@/widgets/SpacialSpacer";

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

interface Props {
    title: string;
    content: string;
    icon?: string;
    createdAt: string;
    status: string;
    tags: string[];
    children: ReactNode;
}

export const PostLayout = ({ title, content, icon, createdAt, status, tags, children }: Props) => {
    return (
        <Wrapper>
            <PostHeaderWrapper>
                {icon && <img style={{ height: "100px" }} src={icon} />}
                <h1>{title}</h1>
                <PostMeta>
                    <span>{createdAt}</span>
                    <span>{status}</span>
                    {tags?.map((it) => (
                        <span key={it}>{it}</span>
                    ))}
                </PostMeta>
            </PostHeaderWrapper>

            <SpacialSpacer />
            <ContentWrapper>
                <Marked value={content} />
                {children}
            </ContentWrapper>
        </Wrapper>
    );
};
