import React from "react";
import { Link } from "react-router-dom";

export default function NavMenu() {
    return (
        <div className="flex gap-10 items-center">
            <Link to={"/"} className="hover:text-indigo-600">
                Work
            </Link>
            <Link to={"/"} className="hover:text-indigo-600">
                Services
            </Link>
            <Link to={"/"} className="hover:text-indigo-600">
                About
            </Link>
            <Link
                to={"/"}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 rounded-full"
            >
                CONTACT
            </Link>
        </div>
    );
}
