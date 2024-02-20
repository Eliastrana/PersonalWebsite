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
                        undertitle={"Computer Engineering"}
                        text="I'm studying to become a Computer Engineer. I am currently in my second year. The courses I have taken include programming, system development, operating systems, databases, algorithms and data structures, maths, statistics, physics, network programming, and fullstack development. I have also taken courses in lean development and scrum."
                    />
                </div>
            </div>

            <div className="p-1 transition-shadow duration-300">
                <div className="flex flex-col rounded-lg shadow-md">
                    <ContentBox
                        imageUrl="assets/infobricks/giphy.gif"
                        title="Experience"
                        undertitle={"Student Assistant"}
                        text="I am currently employed as a student assistant at NTNU. I have taught two different Computer Engineering courses. The first focused on a general introduction to programming. The second one focused on lean development and scrum. The course takes the student through the process of developing a product from idea to finished product."
                    />
                </div>
            </div>
        </div>
    );
};

export default BoxDisplay;
// Path: categorySorter.tsx