import React from "react";
import ContentBox from "./ContentBox";

const BoxDisplay: React.FC = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-5">
            <div className="p-1 transition-shadow duration-300">
                <div className="flex flex-col rounded-lg shadow-md">
                    <ContentBox
                        imageUrl="assets/infobricks/floatingmac.gif"
                        title="Education"
                        text="I'm studying to become a Computer Engineer. I am currently in my second year. The courses I have taken include programming, system development, operating systems, databases, algorithms and data structures, maths, statistics, physics, network programming, and fullstack development."
                    />
                </div>
            </div>

            <div className="p-1 transition-shadow duration-300">
                <div className="flex flex-col rounded-lg shadow-md">
                    <ContentBox
                        imageUrl="assets/infobricks/giphy.gif"
                        title="Experience"
                        text="I work as a student assistant. I have taught two different Computer Engineering courses. The first focused on a general introduction to programming. The second one focused on lean development and scrum."
                    />
                </div>
            </div>
        </div>
    );
};

export default BoxDisplay;
