import styled from "@emotion/styled";
import { useLoaderData } from "react-router-dom";

import { Project } from "@/entities/projects";
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

export const ProjectDetail = () => {
    const project = useLoaderData() as Project.Project;

    return (
        <Wrapper>
            <PostHeaderWrapper>
                <h1>{project.title}</h1>
                <PostMeta>
                    <span>{project.createdAt}</span>
                    <span>{project.status}</span>
                    {project.type?.map((it) => (
                        <span key={it.id}>{it.name}</span>
                    ))}
                </PostMeta>
            </PostHeaderWrapper>

            <SpacialSpacer />
            <ContentWrapper>
                <Marked value={project.content} />
            </ContentWrapper>
        </Wrapper>
    );
};
