import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

export default function Gap() {
    return (
        <div className="flex gap-4 max-w-7xl items-center mx-auto">
            <div className="bg-gray-400 w-full h-[1px]"></div>
            <div>
                <IoIosArrowDropdown className="text-2xl" />
            </div>
            <div className="bg-gray-400 w-full h-[1px]"></div>
        </div>
    );
}
