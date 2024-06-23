import { serverAPI } from "@/shared/utils/api";
import { DetailedUser, NewUser, UpdateUser } from "../types";

export const getAll = async () => (await serverAPI.get<DetailedUser[]>("/users")).data;
export const create = async (user: NewUser) => (await serverAPI.post<DetailedUser>("/users", user)).data;
export const get = async (id: number) => (await serverAPI.get<DetailedUser>(`/users/${id}`)).data;
export const update = async (info: UpdateUser) => (await serverAPI.patch<DetailedUser>(`/users/${info.id}`, info)).data;
export const delUser = async (id: number) => (await serverAPI.delete(`/users/${id}`)).data;
