import { useMemo } from "react";
import { Link } from "react-router-dom";

import { css } from "@emotion/react";

import { Color } from "@/shared/ui/constants";
import { PostHeaderWrapper, PostMeta } from "@/widgets/Post";
import { isActivated } from "@/widgets/TagFilter";
import { PostsWrapper } from "./PostsWrapper";

const WrapperStyle = css`
    border-radius: 1rem;
    background-color: ${Color.base2};
    margin-inline: 2rem;
    :hover {
        background-color: ${Color.base1};
    }
    flex-flow: row;
    opacity: 1;
    transition: all 0.3s ease 0.3s;
    height: 100px;
    margin-inline: 1rem;
    margin-top: 2rem;
`;
const Disabled = css`
    height: 0px;
    visibility: hidden;
    opacity: 0;
`;
const PostIcon = css`
    height: 5rem;
    margin-block: auto;
    padding-right: 2rem;
    margin-left: -15px;
`;

interface Props {
    id: string;
    title: string;
    icon?: string;
    createdAt: string;
    status: string;
    tags?: string[];
    selected?: Set<string>;
}

export const PostList = ({ id, title, icon, createdAt, status, tags, selected }: Props) => {
    const activate = useMemo(() => isActivated(tags, selected), [tags, selected]);
    return (
        <PostsWrapper css={[WrapperStyle, activate || Disabled]}>
            <Link style={{ textDecoration: "none" }} to={id}>
                {icon && <img css={PostIcon} src={icon} />}
                <PostHeaderWrapper>
                    <h3 style={{ marginBottom: "0.2rem" }}>{title}</h3>
                    <PostMeta>
                        <span>{createdAt}</span>
                        <span>{status}</span>
                        {tags && tags?.map((it) => <span key={it}>{it}</span>)}
                    </PostMeta>
                </PostHeaderWrapper>
            </Link>
        </PostsWrapper>
    );
};
