import ContentBox from "./ContentBox";
import React from "react";


const BoxDisplay: React.FC = () => {
    return (


        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-4 p-5">
            <div className="w-full lg:w-1/2 p-1 hover:shadow-lg transition-shadow duration-300">
                {/* Flex container to make children fill the height */}
                <div className="flex flex-col bg-white rounded-lg shadow-md h-full">
                    {/* Content goes here, ensure it fills up the space and has a white background */}
                    <ContentBox
                        imageUrl="assets/infobricks/floatingmac.gif"
                        title="Education"
                        text="I'm studying to become a Computer Engineer. I am currently in my second year. The courses I have taken include programming, system development, operating systems, databases, algorithms and data structures, maths, statistics, physics, network programming, and fullstack development."
                    />
                </div>
            </div>

            <div className="w-full lg:w-1/2 p-1 hover:shadow-lg transition-shadow duration-300">
                {/* Repeat the same structure for consistency */}
                <div className="flex flex-col bg-white rounded-lg shadow-md h-full">
                    <ContentBox
                        imageUrl="assets/infobricks/giphy.gif"
                        title="Experience"
                        text="I work as a student assistant. I have taught two different Computer Engineering courses. The first focused on a general introduction to programming. The second one focused on lean development and scrum."
                    />
                </div>
            </div>
        </div>


    );
}

export default BoxDisplay;