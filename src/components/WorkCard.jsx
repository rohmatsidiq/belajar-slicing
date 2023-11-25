import React from "react";

export default function WorkCard({ image, subheading, paragraf }) {
    return (
        <div className="w-full">
            <img src={image} alt="work image" className="w-full" />
            <h3 className="font-bold text-2xl mt-5">{subheading}</h3>
            <p className="mt-5">{paragraf}</p>
        </div>
    );
}
