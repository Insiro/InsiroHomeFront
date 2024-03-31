import { Gallery, GalleryFilter } from "@/widgets/Gallery";
import { useState } from "react";

export const Projects = () => {
    const [selectedTag, selectTag] = useState<Set<string>>(new Set());
    return (
        <div className="gallery-page">
            <GalleryFilter items={[]} selected={selectedTag} selector={selectTag} />
            <Gallery items={[]} selected={selectedTag} />
        </div>
    );
};
