import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/hero.jsx";
import Cocktails from "./components/cocktails.jsx";
import About from "./components/About.jsx";
import Art from "./components/Art.jsx";
import Contact from "./components/Contact.jsx";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <>
            <main>
                <Navbar />
                <Hero/>
                <Cocktails />
                <About/>
                <Art/>
                <Contact />
            </main>
        </>
    );
};

export default App;
