import { routes } from "./routes.js";
import { Router } from "./utils/router.js";
// Render the App component
const container = document.getElementById("app");
const router = new Router(routes, container);
router.route();
