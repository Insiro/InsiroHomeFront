const testEnv = import.meta.env;

export const User = {
    name: testEnv.VITE_TEST_USERNAME!,
    password: testEnv.VITE_TEST_PASSWORD!,
};
