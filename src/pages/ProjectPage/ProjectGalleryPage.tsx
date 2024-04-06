import { useMemo, useState } from "react";

import { Project } from "@/entities/projects";
import { ContentWrapper } from "@/shared/style";
import { Gallery, GalleryFilter } from "@/widgets/Gallery";
import { GalleryItemProps } from "@/widgets/Gallery/ui/GalleryItem";
import { SpacialSpacer } from "@/widgets/SpacialSpacer";
import { useLoaderData } from "react-router-dom";

export const ProjectGallery = () => {
    const { types, projects } = useLoaderData() as { types: string[]; projects: Project.Project[] };
    const projectItems: GalleryItemProps[] = useMemo(
        () =>
            projects.map((it): GalleryItemProps => {
                return {
                    title: it.title,
                    to: it.id,
                    image: it.icon,
                    tags: it.type?.map((it) => it.name),
                };
            }),
        [projects]
    );

    const [selectedTag, selectTag] = useState<Set<string>>(new Set());
    return (
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <GalleryFilter items={types} selected={selectedTag} selector={selectTag} />
            <SpacialSpacer />
            <ContentWrapper>
                <Gallery items={projectItems} selected={selectedTag} />
            </ContentWrapper>
        </div>
    );
};
