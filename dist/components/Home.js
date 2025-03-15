import { createElement, useEffect, useState } from '../core/roboto.js';
export const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
            console.log(data); // You can check the data here
            setPosts(d => d = data);
            setIsLoading(f => f = false); // Set loading to false when data is fetched
        })
            .catch((error) => {
            console.error('Error fetching posts:', error);
            setIsLoading(f => f = false); // You may also want to set loading to false in case of an error
        });
    }, []);
    return (createElement("div", { className: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white p-6" },
        createElement("div", { className: "w-full max-w-3xl p-8 bg-gray-700 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300" },
            createElement("h1", { className: "text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500" }, "Posts"),
            loading ? (createElement("p", { className: "text-2xl text-center" }, "Loading...")) : (createElement("ul", { className: "divide-y divide-gray-800" }, posts.map(post => (createElement("li", { key: post.id, className: "py-4" },
                createElement("h2", { className: "text-2xl font-bold" }, post.title),
                createElement("p", { className: "text-lg mt-2" }, post.body)))))))));
};
