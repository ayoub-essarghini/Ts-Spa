import { createElement } from '../core/roboto.js';
export const Home = () => {
    console.log("Home component rendering 1");
    return (createElement("div", null,
        createElement("h1", { className: "title" }, "Home"),
        createElement("p", null, "Welcome to the home page!")));
};
