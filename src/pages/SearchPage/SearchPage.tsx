import { SearchResult } from "@/entities/root";
import { useSearchState } from "@/features/header/search";
import { ContentWrapper } from "@/shared/style";
import { SpacialSpacer } from "@/widgets/LayoutComponent";
import { PostItem } from "@/widgets/Post/ui/PostItem";
import { BlockTitle, TextInput } from "@/widgets/Text";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export const SearchPage = () => {
    const { keyword, projects, posts } = useLoaderData() as { keyword: string } & SearchResult;
    const { setSearchKey, searchKey } = useSearchState();
    useEffect(() => setSearchKey(keyword), [keyword]);

    return (
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <TextInput id="searchInput" title="search" value={searchKey} style={{ margin: "28px 1rem" }} onChange={(e) => setSearchKey(e.target.value)} />
            <SpacialSpacer />
            <ContentWrapper>
                <BlockTitle>Blog</BlockTitle>
                <div style={{ margin: "3rem" }}></div>
                {posts.map((it) => (
                    <PostItem key={it.id} id={it.id} title={it.title} createdAt={it.createdAt} status={it.status} domain="/blogs" tags={it.category ? [it.category] : undefined} />
                ))}
                <BlockTitle>Projects </BlockTitle>
                {projects.map((it) => (
                    <PostItem key={it.id} id={it.title} title={it.title} createdAt={it.createdAt} status={it.status} domain="/projects" tags={it.type?.map((it) => it.name)} />
                ))}
            </ContentWrapper>
        </div>
    );
};
