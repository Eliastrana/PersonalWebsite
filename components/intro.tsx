import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Intro.module.css'; // Import the CSS module





const fontOptions = ['Futura', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'];

const Intro = () => {
    const [currentFontIndex, setCurrentFontIndex] = useState(0);

    const handleHover = () => {
        setCurrentFontIndex((prevIndex) => (prevIndex + 1) % fontOptions.length);
    };

    const selectedFont = fontOptions[currentFontIndex];

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12"
        >
            <h1
                className={`text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 ${styles['font-change-on-hover']}`}
                style={{ fontFamily: selectedFont }}
                onMouseEnter={handleHover}
            >
                Elias Trana
            </h1>
            <h4 className={`text-center md:text-left text-lg mt-5 md:pl-8 ${styles['highlight-animation']}`}>
                My portfolio displaying photography and development projects.
            </h4>
            {/* Animation can also be applied to individual elements or the entire section as shown */}
        </motion.section>
    );
}

export default Intro;
