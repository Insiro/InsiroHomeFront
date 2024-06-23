import { ReactNode } from "react";

import { ContentWrapper } from "@/shared/style";
import { Marked } from "@/widgets/Marked";
import { PostHeaderWrapper, PostMeta } from "@/widgets/Post";
import { SpacialSpacer } from "@/widgets/LayoutComponent";
import { PostsWrapper } from "./PostsWrapper";

interface Props {
    title: string;
    content: string;
    icon?: string;
    createdAt: string;
    status: string;
    tags: string[];
    children?: ReactNode;
}

export const PostLayout = ({ title, content, icon, createdAt, status, tags, children }: Props) => {
    return (
        <PostsWrapper>
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
        </PostsWrapper>
    );
};
