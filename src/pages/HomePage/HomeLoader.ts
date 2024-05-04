import axios from "axios";
import { LoaderFunction } from "react-router-dom";

export const HomeLoader: LoaderFunction = async () => {
    const profile: string = (await axios.get(`/static/profile/readme.md`)).data;
    return profile;
};
