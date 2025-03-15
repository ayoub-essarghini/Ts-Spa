import { Home } from "./components/Home.js";
import { Route } from "./utils/router.js";
import { NotFound } from "./components/NotFound.js";

export const routes: Route[] = [
  { path: "/", component: Home },
  { path: "/*", component: NotFound }, 
];