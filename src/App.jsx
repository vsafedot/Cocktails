import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/hero.jsx";
import Cocktails from "./components/cocktails.jsx";
import About from "./components/About.jsx";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <>
            <main>
                <Navbar />
                <Hero/>
                <Cocktails />
                <About/>
            </main>
        </>
    );
};

export default App;
