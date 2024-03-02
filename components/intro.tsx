import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ResponsiveTextOverImage from './ResponsiveTextOverImage';
import styles from './Intro.module.css'; // Import the CSS module






const Intro = () => {

    return (
        <motion.section
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, ease: "easeIn"}}
            className="mt-16 mb-16 md:mt-12 md:mb-12"
        >
            <div className="flex flex-col items-start md:items-center md:flex-row md:justify-around">
                <h1 className={`${styles.customFont} mb-8 text-left md:text-center md:w-1/2`}>
                    Elias Trana
                </h1>

                <h4 className={`text-lg ${styles['highlight-animation']} mt-5 text-left md:text-center md:mt-0 md:pl-8 md:w-1/2`}>
                    My portfolio displaying photography and development projects.
                </h4>
            </div>
        </motion.section>


    );
}

export default Intro;
