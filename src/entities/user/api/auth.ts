import { serverAPI } from "@/shared/utils/api";
import { AuthInfo, DetailedUser } from "../types";

export const SignIn = async (cert: AuthInfo): Promise<DetailedUser> => {
    return (await serverAPI.post<DetailedUser>("/auth", cert)).data;
};

export const getSignedUser = async (): Promise<DetailedUser> => {
    return (await serverAPI.get<DetailedUser>("/auth")).data;
};
export const signOut = async (): Promise<void> => {
    await serverAPI.delete("/auth");
};
