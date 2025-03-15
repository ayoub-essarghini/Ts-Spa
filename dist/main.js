import { routes } from "./routes.js";
import { Router } from "./utils/router.js";
const container = document.getElementById("app");
const router = new Router(routes, container);
router.route();
