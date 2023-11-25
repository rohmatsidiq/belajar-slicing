import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Gap from "../components/Gap";
import Works from "../components/Works";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Gap />
            <Works />
        </>
    );
}
