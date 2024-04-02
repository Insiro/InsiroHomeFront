/// <reference types="vite/client" />
interface ImportMetaEnv {
    VITE_PROFILE_EMAIL: email;
    VITE_PROFILE_NAME: string;
    VITE_PROFILE_GITHUB: url;
}

interface ImportMeta {
    readonly meta: ImportMetaEnv;
}
