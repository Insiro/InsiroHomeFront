import { useMemo, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { Post } from "@/entities/Post/type";
import { PostCategory } from "@/entities/PostCategory/types";
import { PostList } from "@/widgets/Post";
import { TagFilter } from "@/widgets/TagFilter";

//Max Items : 5
//TODO: Add Pagination
export const BlogListPage = () => {
    const { posts, category } = useLoaderData() as { posts: Post[]; category: PostCategory[] };
    const [selectedTag, selectTag] = useState<Set<string>>(new Set());
    const tags = useMemo(() => category.map((it) => it.name), [category]);

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <TagFilter items={tags} selected={selectedTag} selector={selectTag} multiselect={false} />

            {posts.map((it) => (
                <PostList key={it.id} id={it.id} title={it.title} createdAt={it.createdAt} status={it.status} tags={it.category != undefined ? [it.category] : []} selected={selectedTag} />
            ))}
        </div>
    );
};
