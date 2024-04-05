import axios from "axios";
import { API } from "../config";

export const serverAPI = axios.create({ baseURL: API.URL });
