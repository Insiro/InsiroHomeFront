import { AuthApi, User } from "@/entities/user";
import { atom, useRecoilState } from "recoil";
export const authState = atom<User.DetailedUser | null>({
    key: "authState",
    default: null,
});
export const useAuth = () => {
    const [user, setUser] = useRecoilState(authState);
    const login = async (id: string, passwd: string): Promise<User.DetailedUser | null> => {
        try {
            setUser(await AuthApi.SignIn({ name: id, password: passwd }));
            return user;
        } catch (error) {
            return null;
        }
    };
    const updateSigned = async () => {
        try {
            setUser(await AuthApi.getSignedUser());
        } catch (error) {
            setUser(null);
        }
    };
    const signOut = () => {
        AuthApi.signOut();
        setUser(null);
    };

    const logOut = () => {
        AuthApi.signOut();
        setUser(null);
    };

    return { user, login, updateSigned, signOut, logOut };
};
