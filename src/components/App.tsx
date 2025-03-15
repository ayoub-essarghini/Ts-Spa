import { createElement } from "../core/roboto.js";

export const App = () => {
    console.log("Home component rendering");
    return (
      <div>
        <h1 className="title">Home</h1>
        <p>Welcome to the home page!</p>
      </div>
    );
  };