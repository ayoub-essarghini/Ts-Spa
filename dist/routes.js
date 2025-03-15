import { Home } from "./components/Home.js";
import { NotFound } from "./components/NotFound.js";
export const routes = [
    { path: "/", component: Home },
    { path: "/*", component: NotFound },
];
