import { PostLayout } from "@/widgets/Post";

export const BlogPostPage = () => {
    return (
        <PostLayout title="title" createdAt="createdAt" status="status" tags={[]} content="content">
            {/* TODO: Add Comment Blocks */}
        </PostLayout>
    );
};
