import { createElement } from '../core/roboto.js';


export const Home = () => {
  console.log("Home component rendering 1");
  return (
    <div>
      <h1 className="title">Home</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
};