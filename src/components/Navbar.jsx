import React from "react";
import NavMenu from "./NavMenu";

export default function Navbar() {
    return (
        <nav className="">
            <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Rohmat SM</h1>
                <NavMenu />
            </div>
        </nav>
    );
}
