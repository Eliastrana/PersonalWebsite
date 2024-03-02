import React from "react";

interface ContentBoxProps {
    title: string;
    undertitle: string;
    text: string;
    imageUrl: string;
}

const wideBox: React.FC<ContentBoxProps> = ({ title, undertitle, text, imageUrl }) => {
    return (
        <div
            className="w-full bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start md:space-x-4" // Adjusted spacing between text and image for md screens
        >
            <div className="p-4 flex-1 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-600">{undertitle}</h3>
                <p className="text-sm md:text-base">{text}</p>
            </div>
            <div className="w-full md:w-auto flex justify-center md:justify-end items-center">
                <img
                    src={imageUrl}
                    alt="Content Image"
                    className="h-full object-cover md:rounded-r-lg" // Ensure the image covers the area, add rounded right on md screens
                    style={{
                        height: '100%',
                        aspectRatio: '1 / 1',
                        minWidth: "40%",
                        maxWidth: "500px"
                    }} // Remove maxWidth constraint, ensure full height
                />
            </div>
        </div>
    );
}


export default wideBox;


