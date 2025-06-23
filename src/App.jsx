import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/hero.jsx";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <>
            <main>
                <Navbar />
                <Hero/>
                <div className="h-dvh bg-black"></div>
            </main>
        </>
    );
};

export default App;
