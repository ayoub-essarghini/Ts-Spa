import { App } from "./components/App.js";
import { createElement, render } from "./core/roboto.js";
import { routes } from "./routes.js";
import { Router } from "./utils/router.js";

// Render the App component
const container = document.getElementById("app") as HTMLElement;
const router = new Router(routes,container);
router.route();
