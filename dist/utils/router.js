import { createElement, render } from "../core/roboto.js";
export class Router {
    get currentPath() {
        return window.location.pathname;
    }
    constructor(routes, appContainer) {
        this.isNavigating = false;
        this.routes = routes;
        this.appContainer = appContainer;
        this.init();
    }
    init() {
        window.addEventListener("popstate", () => this.route());
        // Use setTimeout to ensure DOM is fully loaded
        // setTimeout(() => this.route(), 0);
    }
    route() {
        // Prevent multiple simultaneous navigations
        if (this.isNavigating) {
            return;
        }
        this.isNavigating = true;
        const path = window.location.pathname;
        let route = this.routes.find((r) => r.path === path);
        if (!route) {
            const wildcardRoute = this.routes.find((r) => r.path === "/*");
            if (wildcardRoute) {
                route = wildcardRoute;
            }
        }
        this.updateNavigationVisibility();
        if (route) {
            // Clear the container completely before mounting a new component
            this.appContainer.innerHTML = '';
            // Get the component function
            const ComponentFunction = route.component;
            // Render the component using JSX
            render(createElement(ComponentFunction, null), this.appContainer);
        }
        else {
            this.appContainer.innerHTML = '';
            render(createElement("div", null, "404 - Page Not Found"), this.appContainer);
        }
        this.isNavigating = false;
    }
    updateNavigationVisibility() {
        const navElement = document.querySelector('ul');
        if (navElement) {
            if (this.currentPath === '/login' ||
                (!this.routes.some(r => r.path === this.currentPath) && this.currentPath !== '/')) {
                navElement.style.display = 'none';
            }
            else {
                navElement.style.display = 'block';
            }
        }
    }
    navigate(path) {
        if (window.location.pathname !== path) {
            window.history.pushState({}, "", path);
            this.route();
        }
    }
}
