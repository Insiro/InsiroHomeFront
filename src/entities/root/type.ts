import { Post } from "../Post/type";
import { Project } from "../projects/types/Project";

export interface SearchResult {
    projects: Project[],
    posts: Post[]
}