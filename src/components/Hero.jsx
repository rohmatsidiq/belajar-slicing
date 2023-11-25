import React from "react";

export default function Hero() {
    return (
        <div className="max-w-7xl mx-auto p-4 h-[500px] flex flex-col gap-4 justify-center items-center">
            <p>Hey there, I'm Rohmat Sidiq Mustaqim</p>
            <h1 className="font-bold text-6xl text-center max-w-4xl leading-[80px]">
                Building digital products, brands and experience
            </h1>
            <button className="bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-full text-white">
                CONNECT WITH ME
            </button>
        </div>
    );
}
