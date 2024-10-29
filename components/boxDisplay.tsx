import React from "react";
import ContentBox from "./ContentBox";
import WideBox from "./wideBox"; // Ensure this import matches the file name and component name

const BoxDisplay: React.FC = () => {
    return (
        <div className="flex justify-center ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 pt-28 mx-auto w-full">
                <div className="col-span-1 lg:col-span-2">
                    <div className="p-1 transition-shadow duration-300">
                        <WideBox
                            imageUrl="./assets/gallery/profilbilde.jpg"
                            title="About Me"
                            undertitle=""
                            location={"📍 Trondheim, Norway"}
                            education={"🎓 Computer Science, NTNU"}
                            hobbies={"💻 React, Next.js, Sanity CMS, Tailwind CSS"}

                            text="My name is Elias Trana, and I am a student at NTNU Trondheim, studying Computer Engineering.
                                  This is my personal website where I will be posting my projects, both personal and school related.

                                  This website contains all my work, easly sorted by categories. I hope you find something interesting here!"

                            calltoaction="Take a look!"

                        />
                    </div>
                    {/* Dynamic spacing element */}
                    <div className="pb-0 lg:pb-0"></div> {/* Adjust padding-bottom as needed */}
                </div>
            </div>
        </div>
    );
};


export default BoxDisplay;

