import { ContentWrapper } from "@/shared/style";
import { Gallery, GalleryFilter } from "@/widgets/Gallery";
import {  SpacialSpacer } from "@/widgets/SpacialSpacer";
import { useState } from "react";

export const Projects = () => {
    const [selectedTag, selectTag] = useState<Set<string>>(new Set());
    return (
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <GalleryFilter items={[]} selected={selectedTag} selector={selectTag} />
            <SpacialSpacer />
            <ContentWrapper>
                <Gallery items={[]} selected={selectedTag} />
            </ContentWrapper>
        </div>
    );
};
