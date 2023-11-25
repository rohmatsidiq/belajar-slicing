import React from "react";
import WorkCard from "./WorkCard";
import { FaDribbble } from "react-icons/fa";

export default function Works() {
    return (
        <div className="max-w-7xl mx-auto p-4 mt-20">
            <h1 className="text-3xl font-bold">The work I do,</h1>
            <h1 className="text-3xl font-bold">and business I help.</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
                <div className="flex flex-col gap-20">
                    <WorkCard
                        image={"work1.png"}
                        subheading={"Ice Cream App Concept"}
                        paragraf={
                            "Nibh tellus ut suspendisse porttitor. Vivamus sit tincidunt bibendum a etiam fringilla quis nisl. Amet eget et, lacus, ullamcorper lectus ullamcorper amet."
                        }
                    />
                    <WorkCard
                        image={"work2.png"}
                        subheading={"Nike App Redesign"}
                        paragraf={
                            "Non amet, lacus, rutrum elementum ut id dictum. Imperdiet ullamcorper nisi vulputate et. Ipsum, curabitur viverra faucibus tristique mattis sapien sed aenean purus."
                        }
                    />
                </div>
                <div className="flex flex-col gap-20">
                    <WorkCard
                        image={"work3.png"}
                        subheading={"Plant Store App"}
                        paragraf={
                            "Luctus adipiscing mattis non mi, sollicitudin dapibus ullamcorper id interdum. Ultrices est proin augue pellentesque maecenas vel. Habitasse id egestas eu a amet a velit facilisis."
                        }
                    />
                    <WorkCard
                        image={"work4.png"}
                        subheading={"StudentsNaukri Job Recruiter Platform"}
                        paragraf={
                            "Lectus adipiscing pharetra integer auctor varius. Tincidunt integer auctor vitae fusce amet leo massa. Pretium bibendum adipiscing dictum vitae."
                        }
                    />
                </div>
            </div>
            <div className="mt-10">
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-full flex gap-2 items-center">
                    VISIT MY DRIBBBLE <FaDribbble className="text-xl" />
                </button>
            </div>
        </div>
    );
}
