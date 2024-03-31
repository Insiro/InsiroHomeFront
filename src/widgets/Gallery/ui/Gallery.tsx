import { ReactNode, useMemo } from "react";
import { GalleryItem, GalleryItemProps } from "./GalleryItem";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const Gallery = (props: { items: GalleryItemProps[]; selected?: Set<string> }) => {
    const GalleryItems = props.items.map((item) => {
        return { props: item, item: <GalleryItem title={item.title} key={item.to} to={item.to} image={item.image} tags={item.tags} selected={props.selected} /> };
    });
    const activatedItems = useMemo(() => {
        if (props.selected == undefined || props.selected.size == 0) return GalleryItems.map((it) => it.item);
        const items: ReactNode[] = [];
        GalleryItems.forEach((it) => {
            const tags = it.props.tags || [];
            if (tags.some((tag) => props.selected?.has(tag))) items.push(it.item);
        });
        return items;
    }, [props.selected, GalleryItems]);

    return (
        <ResponsiveMasonry>
            <Masonry>{activatedItems}</Masonry>
        </ResponsiveMasonry>
    );
};
