import { useEffect, useMemo, useState } from "react";

import { useProjectList, useProjectTypes } from "@/features/project";
import { ContentWrapper } from "@/shared/style";
import { Gallery, GalleryFilter } from "@/widgets/Gallery";
import { GalleryItemProps } from "@/widgets/Gallery/ui/GalleryItem";
import { SpacialSpacer } from "@/widgets/SpacialSpacer";

export const ProjectGallery = () => {
    const { projectList, loadProjects } = useProjectList();
    const { typeList, loadTypes } = useProjectTypes();
    useEffect(() => {
        loadProjects();
        loadTypes();
    }, []);
    const types = useMemo(() => typeList.map((it) => it.name), [typeList]);
    const projectItems: GalleryItemProps[] = useMemo(
        () =>
            projectList.map((it): GalleryItemProps => {
                return {
                    title: it.title,
                    to: it.id,
                    image: it.icon,
                    tags: it.type?.map((it) => it.name),
                };
            }),
        [projectList]
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
