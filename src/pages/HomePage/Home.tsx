import { ContentWrapper } from "@/shared/style";
import { Marked } from "@/widgets/Marked";
import { PostHeaderWrapper } from "@/widgets/Post";
import { PostsWrapper } from "@/widgets/Post/ui/PostsWrapper";
import { TextBlock } from "@/widgets/Text";
import { useLoaderData } from "react-router-dom";

export const Home = () => {
    const data = useLoaderData() as string;
    return (
        <PostsWrapper>
            <PostHeaderWrapper></PostHeaderWrapper>

            <ContentWrapper style={{ maxWidth: "100%", height: "100%" }}>
                <TextBlock css={{ paddingLeft: "0px" }}>
                    <span>about me</span>
                    <h1>Profile</h1>
                </TextBlock>
                <Marked>{data}</Marked>
            </ContentWrapper>
        </PostsWrapper>
    );
};
