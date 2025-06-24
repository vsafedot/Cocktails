import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/hero.jsx";
import Cocktails from "./components/cocktails.jsx";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <>
            <main>
                <Navbar />
                <Hero/>
                <Cocktails />
            </main>
        </>
    );
};

export default App;
