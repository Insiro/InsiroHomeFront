import { UserApi } from "@/entities/user";
import { LoaderFunction } from "react-router-dom";

export const ProfileLoader :LoaderFunction = async({params})=>{
    if (params.id == undefined) return null
    return await UserApi.get(parseInt (params.id)).catch((error) => {
        if (error instanceof Response) throw error;
        throw new Response("NotFound", { status: 404 });
    });
};
