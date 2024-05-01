import { CreatedAt, WithLongId } from "../utils/Global";

export interface ModifyCategory {
    name: string;
}
export interface PostCategory extends WithLongId, CreatedAt {
    name: string;
}
