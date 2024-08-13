import React from 'react';
import styles from "./Intro.module.css";

interface ContentBoxProps {
    title: string;
    undertitle: string;
    text: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({ title, undertitle, text }) => {

    return (
        <div className="container mx-auto p-4 max-w-4xl  flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 ">
            <div className="flex-1">
                <h2 className={styles.boxInfoFontH1}>{title}</h2>
                <h3 className={styles.boxInfoFontH2}>{undertitle}</h3>
                <p className="mt-2 text-sm md:text-base">{text}</p>
            </div>
            <div className="flex justify-center md:justify-end w-full md:w-auto">
            </div>
        </div>
    );
};


export default ContentBox;

