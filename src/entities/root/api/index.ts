import { serverAPI } from "@/shared/utils/api";
import { SearchResult } from "../type";

export const search = async (keyword: string | null): Promise<SearchResult> => {
    if (keyword === null)
        return { projects: [], posts: [] }

    const result = await serverAPI.get<SearchResult>("/search", { params: { kq: keyword } })
    return result.data;
}