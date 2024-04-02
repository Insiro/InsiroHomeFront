import { ContentWrapper } from "@/shared/style";
import { Gallery, GalleryFilter } from "@/widgets/Gallery";
import { SpacialSpacer } from "@/widgets/SpacialSpacer";
import { useState } from "react";

const tags = [
    { value: "Tag1", title: "Tag1" },
    { value: "Tag2", title: "Tag2" },
];

const items = [
    { title: "title", to: "1", tags: ["Tag1"] },
    { title: "title1", to: "2", image: "https://velog.velcdn.com/images/hoho_0815/post/0d960c25-804b-4ad1-8d24-7485211e4bdf/image.png" },
    { title: "title2", to: "2", image: "https://velog.velcdn.com/images/hoho_0815/post/0d960c25-804b-4ad1-8d24-7485211e4bdf/image.png", tags: ["Tag1"] },
    { title: "title3", to: "2", image: "https://velog.velcdn.com/images/hoho_0815/post/0d960c25-804b-4ad1-8d24-7485211e4bdf/image.png" },
    { title: "title4", to: "3", image: "https://insiro.me/media/icon/llhomeIcon.png", tags: ["Tag1", "Tag2"] },
];

export const ProjectGallery = () => {
    const [selectedTag, selectTag] = useState<Set<string>>(new Set());
    return (
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <GalleryFilter items={tags} selected={selectedTag} selector={selectTag} />
            <SpacialSpacer />
            <ContentWrapper>
                <Gallery items={items} selected={selectedTag} />
            </ContentWrapper>
        </div>
    );
};
