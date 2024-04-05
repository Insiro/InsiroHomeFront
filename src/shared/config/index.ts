const { VITE_PROFILE_EMAIL, VITE_PROFILE_NAME, VITE_PROFILE_GITHUB, VITE_API_URL } = import.meta.env;
export * as Test from "./test";

export const Profile = {
    email: VITE_PROFILE_EMAIL,
    name: VITE_PROFILE_NAME,
    github: VITE_PROFILE_GITHUB,
};
export const API = {
    URL: VITE_API_URL,
};
