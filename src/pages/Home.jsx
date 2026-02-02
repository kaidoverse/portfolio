import React from "react";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Blog from "../sections/Blog";

const Home = () => {
    return (
        <div className=" px-6">
            <Hero />
            <Projects />
            <Blog />
        </div>
    );
}

export default Home