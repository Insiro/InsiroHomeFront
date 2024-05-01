export { TagFilter } from "./ui/TagFilter";
export const isActivated = (tags?: string[] | string, selected?: Set<string>) => {
    if (selected == undefined || selected.size == 0) return true;
    if (tags == undefined) return false;
    if (typeof tags == "string") return selected?.has(tags);
    return tags.some((tag) => selected?.has(tag));
};
