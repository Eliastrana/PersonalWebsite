import React, { useState, useEffect } from 'react';
import styles from "./Intro.module.css";

type Slide = {
    url: string;
};

interface SlideshowProps {
    slides: Slide[];
    title: string; // Assuming you want to pass title as a prop to Slideshow
    undertitle: string; // Assuming you want to pass undertitle as a prop to Slideshow
}

const filters = [
    'brightness(110%) contrast(110%)', // Brightness and contrast adjustment
];

const getRandomFilter = () => {
    return filters[Math.floor(Math.random() * filters.length)];
};

const Slideshow: React.FC<SlideshowProps> = ({ slides, title, undertitle }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [currentFilter, setCurrentFilter] = useState<string>(getRandomFilter());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
            setCurrentFilter(getRandomFilter());
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="relative w-full overflow-hidden" style={{ paddingTop: '50%' }}>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <img
                className="w-full h-auto min-h-[75vh] md:min-h-[50vh] object-cover"
                src={slides[currentSlideIndex].url}
                alt="Slide image"
            />
            
                <div className="absolute inset-0 flex flex-col justify-center items-center" style={{zIndex: 2}}>

                <h1 className={`${styles.customFont} text-white mb-8 text-left md:text-center md:w-1/2`}>{title}</h1>


                <h3 className={`${styles.customFontSmall} text-white text-left md:text-center md:w-1/2`}>{undertitle}</h3>


                </div>
            </div>
        </div>
    );
};

export default Slideshow;
