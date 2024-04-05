import { serverAPI } from "@/shared/utils/api";
import { beforeAll } from "bun:test";

beforeAll(async () => {
    try {
        const status = (await serverAPI.get("status")).data;
        if (status.env != "test") throw new Error();
    } catch (error) {
        console.log("Test Server status is Not Ready");
        process.exit(-1);
    }
});
