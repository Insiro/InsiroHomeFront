import { PostHeaderWrapper, PostMeta } from "@/widgets/Post";
import { Link } from "react-router-dom";
import { PostsWrapper } from "./PostsWrapper";
import { Color } from "@/shared/ui/constants";
import { css } from "@emotion/react";

const WrapperStyle = css`
    border-radius: 1rem;
    background-color: ${Color.base2};
    margin-inline: 2rem;
    :hover {
        background-color: ${Color.base1};
    }
    flex-flow: row;
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
}

export const PostList = ({ id, title, icon, createdAt, status, tags }: Props) => {
    return (
        <PostsWrapper css={WrapperStyle}>
            {icon && <img css={PostIcon} src={icon} />}
            <Link style={{ textDecoration: "none" }} to={id}>
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
