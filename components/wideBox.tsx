import React from "react";
import styles from "./Intro.module.css";

interface ContentBoxProps {
    title: string;
    undertitle: string;
    text: string;
    imageUrl: string;
}

const WideBox: React.FC<ContentBoxProps> = ({ title, undertitle, text, imageUrl }) => {
    return (
        <div className="w-full rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start bg-blue-100">
            <div className="flex-1 space-y-4 p-4">
                <h2 className={styles.boxInfoFontH1}>{title}</h2>

                <h3 className={styles.boxInfoFontH2}>{undertitle}</h3>

                <p className={styles.boxInfoFontP}>{text}</p>
            </div>
            <div className=" flex justify-center items-center w-full md:w-auto">
                <img
                    src={imageUrl}
                    alt=" Content Image"
                    className=" w-full md:w-auto object-cover md:rounded-r-lg rounded-b-lg md:rounded-bl-none" // Adjusted for responsive rounding
                    style={{
                        minWidth: "100%", // Ensure it takes the full width on smaller screens
                    maxWidth: "500px", // Max width on larger screens
                    height: "auto", // Adjust height automatically
                    aspectRatio: '1 / 1' // Maintain aspect ratio
                    }}
                    />
            </div>
        </div>
);
}

export default WideBox;
