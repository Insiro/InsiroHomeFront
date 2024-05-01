import { RouteObject } from "react-router-dom";

type SidebarRouteObject = RouteObject & { name: string };

export type SidebarItems = SidebarRouteObject[];
