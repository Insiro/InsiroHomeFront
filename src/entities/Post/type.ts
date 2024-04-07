import { CreatedAt, Status, WithDeleteFile, WithId, WithStatus } from "../utils/Global";
import { SimpleUser } from "../user/types";
import { CommentType } from "../Comment";

interface Base {
    title: string;
    category?: string;
    content: string;
}
export interface NewPost extends Base, Status, WithId {} // send object include Id
export interface Post extends Base, WithId, WithStatus, CreatedAt {
    author: SimpleUser;
}
export interface WithComment extends Post {
    comment?: CommentType.Comment[];
}
export interface UpdatePost extends Status, WithId, WithDeleteFile {
    title?: string;
    category?: string;
    content?: string;
}
