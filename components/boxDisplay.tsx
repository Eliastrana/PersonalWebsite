import React from "react";
import ContentBox from "./ContentBox";
import WideBox from "./wideBox"; // Ensure this import matches the file name and component name

const BoxDisplay: React.FC = () => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-5 mx-auto w-full">
                {/* Section for WideBox with dynamic bottom padding */}
                <div className="col-span-1 lg:col-span-2">
                    <div className="p-1 transition-shadow duration-300">
                        <WideBox
                            imageUrl="./assets/blog/aboutme/forside_aboutme.jpg"
                            title="About Me"
                            undertitle="Wide Box Undertitle"
                            text="My name is Elias Trana, and I am a student at NTNU Trondheim, studying Computer Engineering.
                                  This is my personal website where I will be posting my project, both personal and school related. I will also be posting my photography work here."
                        />
                    </div>
                    {/* Dynamic spacing element */}
                    <div className="pb-0 lg:pb-0"></div> {/* Adjust padding-bottom as needed */}
                </div>

                {/* Section for normal boxes */}
                <div className="col-span-1">
                    <div className="p-1 transition-shadow duration-300">
                        <ContentBox
                            imageUrl="assets/infobricks/floatingmac.gif"
                            title="Education"
                            undertitle="Computer Engineering"
                            text="I'm studying to become a Computer Engineer. I am currently in my second year. The courses I have taken include programming, system development, operating systems, databases, algorithms and data structures, maths, statistics, physics, network programming, and fullstack development. I have also taken courses in lean development and scrum."
                        />
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="p-1 transition-shadow duration-300">
                        <ContentBox
                            imageUrl="assets/infobricks/giphy.gif"
                            title="Experience"
                            undertitle="Student Assistant"
                            text="I am currently employed as a student assistant at NTNU. I have taught two different Computer Engineering courses. The first focused on a general introduction to programming. The second one focused on lean development and scrum. The course takes the student through the process of developing a product from idea to finished product."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default BoxDisplay;

