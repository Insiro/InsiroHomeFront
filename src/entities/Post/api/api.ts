import { serverAPI } from "@/shared/utils/api";
import { NewPost, Post, UpdatePost } from "../type";

export const getAll = async () => (await serverAPI.get<Post[]>("/posts")).data;
export const create = async (post: NewPost) => (await serverAPI.post<Post>(`/posts/${post.id}`)).data;
export const get = async (id: string) => (await serverAPI.get<Post>(`/posts/${id}`)).data;
export const update = async (post: UpdatePost) => (await serverAPI.patch<Post>(`/posts/${post.id}`)).data;
export const delItem = async (id: string) => await serverAPI.delete(`/posts/${id}`);
