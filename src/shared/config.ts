const { VITE_PROFILE_EMAIL, VITE_PROFILE_NAME, VITE_PROFILE_GITHUB } = import.meta.env;

export const Profile = {
    email: VITE_PROFILE_EMAIL,
    name: VITE_PROFILE_NAME,
    github: VITE_PROFILE_GITHUB,
};
