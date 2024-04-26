import axios from "axios";
import { API } from "../config";

export class ServerNotResponseError extends Error {
    constructor() {
        super("server not response");
    }
}

export const serverAPI = axios.create({ baseURL: `${API.URL}/api`, withCredentials: true });
serverAPI.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) return error;
        else throw new Response("Server Unavailable", { status: 503 });
    }
);
