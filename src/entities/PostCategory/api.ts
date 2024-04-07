import { serverAPI } from "@/shared/utils/api";
import { ModifyCategory, PostCategory } from "./types";

export const getAll = async () => (await serverAPI.get<PostCategory[]>(`categories`)).data;
export const create = async (category: ModifyCategory) => await serverAPI.post<PostCategory>(`/categories/${category.name}`);
export const get = async (name: string) => await serverAPI.get<PostCategory>(`/categories/${name}`);
export const update = async (category: ModifyCategory) => await serverAPI.patch<PostCategory>(`/categories/${category.name}`);
export const delItem = async (name: string) => await serverAPI.delete(`/categories/${name}`);
