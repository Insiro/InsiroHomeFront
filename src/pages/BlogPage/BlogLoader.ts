import { PostApi } from "@/entities/Post";
import { CategoryApi } from "@/entities/PostCategory";
import { LoaderFunction } from "react-router-dom";

export const BlogPostLoader: LoaderFunction = async ({ params }) => {
    if (params.id == undefined) throw new Response("NotFound", { status: 404 });
    return await PostApi.get(params.id).catch((error) => {
        if (error instanceof Response) throw error;
        throw new Response("NotFound", { status: 404 });
    });
};
export const BlogListLoader: LoaderFunction = async () => {
    const posts = await PostApi.getAll();
    const category = await CategoryApi.getAll();
    return { posts: posts, category: category };
};
