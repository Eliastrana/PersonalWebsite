import React from "react";
import styles from "./Intro.module.css";
import {ca} from "date-fns/locale";

interface ContentBoxProps {
    title: string;
    undertitle: string;
    location: string;
    education: string;
    hobbies: string;
    text: string;
    calltoaction: string;
    imageUrl: string;
}

const WideBox: React.FC<ContentBoxProps> = ({ title, undertitle, text, location, education, hobbies, calltoaction, imageUrl }) => {
    return (
        <div className="w-full rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start bg-blue-100">
            <div className="flex-1 space-y-4 p-4">
                <h2 className={styles.boxInfoFontH1}>{title}</h2>

                <h3 className={styles.boxInfoFontH2}>{undertitle}</h3>

                <h4 className={styles.boxInfoFontH3}>{location}</h4>

                <h4 className={styles.boxInfoFontH3}>{education}</h4>

                <h4 className={styles.boxInfoFontH3}>{hobbies}</h4>

                <p className={styles.boxInfoFontP}>{text}</p>

                <h4 className={styles.boxInfoFontH3}>{calltoaction}</h4>


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
