/// <reference types="vite/client" />
interface ImportMetaEnv {
    VITE_PROFILE_EMAIL: email;
    VITE_PROFILE_NAME: string;
    VITE_PROFILE_GITHUB: url;
    VITE_API_URL: url;
    //Test Env
    VITE_TEST_USERNAME?: string;
    VITE_TEST_PASSWORD?: string;
}

interface ImportMeta {
    readonly meta: ImportMetaEnv;
}
