import { AuthApi, User } from "@/entities/user";
import { atom, useRecoilState } from "recoil";
export const userState = atom<User.SimpleUser | null>({
    key: "user",
    default: null,
});
export const useAuth = () => {
    const [user, setUser] = useRecoilState(userState);
    const login = async (id: string, passwd: string): Promise<User.SimpleUser | null> => {
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

    return { user, login, updateSigned, signOut };
};
