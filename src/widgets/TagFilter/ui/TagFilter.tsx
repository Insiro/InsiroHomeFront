import { css } from "@emotion/react";

import { MediaQuery } from "@/shared/ui/constants";
import { FilterItem, FilterResetItem } from "./FilterItem";

const FilterStyle = css`
    list-style: none;
    padding: 28px 0;
    padding-left: 63px;
    padding-right: 130px;

    ${MediaQuery.Min768Max991} {
        padding-right: 215px;
    }
    ${MediaQuery.Max767} {
        padding-right: 160px;
    }
    ${MediaQuery.Max479} {
        padding: 80px 30px 20px;
    }
`;

type GalleryFilterProps = {
    items: string[];
    selected: Set<string>;
    selector: React.Dispatch<React.SetStateAction<Set<string>>>;
    multiselect?: boolean;
};

export const TagFilter = ({ items, selected, selector, multiselect }: GalleryFilterProps) => {
    const selection = (key: string) => {
        if (multiselect != true) {
            selector(new Set([key]));
            return;
        }
        if (selected.has(key)) selected.delete(key);
        else selected.add(key);
        selector(new Set(selected));
    };

    return (
        <ul css={FilterStyle}>
            <FilterResetItem selected={selected} onClick={() => selector(new Set())}>
                All
            </FilterResetItem>
            {items.map((it) => (
                <FilterItem name={it} key={it} selected={selected} onClick={() => selection(it)}>
                    {it}
                </FilterItem>
            ))}
        </ul>
    );
};
