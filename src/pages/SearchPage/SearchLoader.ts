import { LoaderFunction } from "react-router-dom";

import { RootApi } from "@/entities/root";


export const SearchLoader: LoaderFunction = async ({ request }) => {
    const url = new URL(request.url)
    const keyword = url.searchParams.get("kq")
    const result = await RootApi.search(keyword);
    console.log(result)
    console.log({ keyword, ...result })
    return { keyword, ...result };
};
