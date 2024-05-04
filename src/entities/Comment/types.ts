import { CreatedAt, WithId, WithLongId } from "../utils/Global";

export enum CommentType {
    Signed = "signed",
    Anonymous = "anonymous",
}

type CommentUser = { name: string; type: CommentType };
export interface CommentSignedUser extends CommentUser, WithLongId {}
export interface CommentAnonymousUser extends CommentUser {}

export type CommentUserInfo = CommentSignedUser | CommentAnonymousUser;

export interface ModifierSigned extends WithLongId, CommentUser {}
export interface ModifierAnonymous extends CommentUser {
    password: string;
}
export type Modifier = ModifierSigned | ModifierAnonymous;

export interface Comment extends WithId, CreatedAt {
    content: string;
    parentId?: string;
    user: CommentUserInfo;
}

export interface CommentWithChildren extends Comment {
    children?: Comment[];
}

export type CommentModify = Modifier & {
    content: string;
};
