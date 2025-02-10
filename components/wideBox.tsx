import React from "react";
import styles from "./Intro.module.css";
import Image from "next/image";

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
        <div className="w-full   flex flex-col md:flex-row items-center md:items-start ">
            <div className="flex-1 space-y-4 p-4">
                <h2 className={styles.boxInfoFontH1}>{title}</h2>

                <h3 className={styles.boxInfoFontH2}>{undertitle}</h3>

                <h4 className={styles.boxInfoFontH3}>{location}</h4>

                <h4 className={styles.boxInfoFontH3}>{education}</h4>

                <h4 className={styles.boxInfoFontH3}>{hobbies}</h4>

                <p className={styles.boxInfoFontP}>{text}</p>

                <h2 className="md:text-3xl">{calltoaction}</h2>


            </div>
            <div className=" flex justify-center items-center w-full md:w-auto">
                <Image
                    src={imageUrl}
                    width={500}
                    height={500}
                    alt=" Content Image"
                    className=" w-full md:w-auto object-cover md:rounded-r-md rounded-b-lg md:rounded-bl-none max-h-[400px] md:max-h-[500px]"
                    />
            </div>
        </div>
);
}

export default WideBox;
