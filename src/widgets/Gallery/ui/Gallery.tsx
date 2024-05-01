import { ReactNode, useMemo } from "react";
import { GalleryItem, GalleryItemProps } from "./GalleryItem";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { isActivated } from "@/widgets/TagFilter";

type GalleryProps = {
    items: GalleryItemProps[];
    selected?: Set<string>;
};

export const Gallery = ({ items, selected }: GalleryProps) => {
    const galleryItems = items.map((item) => {
        return { props: item, item: <GalleryItem title={item.title} key={item.to} to={item.to} image={item.image} tags={item.tags} selected={selected} /> };
    });
    const activatedItems = useMemo(() => {
        if (selected == undefined || selected.size == 0) return galleryItems.map((it) => it.item);
        const items: ReactNode[] = [];
        galleryItems.forEach((it) => isActivated(it.props.tags, selected) && items.push(it.item));
        return items;
    }, [selected, galleryItems]);

    return (
        <ResponsiveMasonry>
            <Masonry>{activatedItems}</Masonry>
        </ResponsiveMasonry>
    );
};
