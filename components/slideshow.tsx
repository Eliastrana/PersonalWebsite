import React, { useState, useEffect } from 'react';

type Slide = {
    url: string;
    caption?: string;
};

interface SlideshowProps {
    slides: Slide[];
}

const filters = [
    //'grayscale(100%) contrast(800%) brightness(150%) saturate(120%)', // Enhanced black and white with contrast and brightness adjustment
   'brightness(110%) contrast(110%)', // Brightness and contrast adjustment
];



const getRandomFilter = () => {
    return filters[Math.floor(Math.random() * filters.length)];
};

const Slideshow: React.FC<SlideshowProps> = ({ slides }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [currentFilter, setCurrentFilter] = useState<string>(getRandomFilter());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
            setCurrentFilter(getRandomFilter()); // Update filter here
        }, 500); // Change slide every 5 seconds
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="relative w-full overflow-hidden" style={{ paddingTop: '50%' }}>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-white border-2 border-gray-200 rounded-lg shadow-lg">
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center"
                    style={{ filter: currentFilter }}
                >
                    <img
                        className="w-full h-full object-cover rounded-lg"
                        src={slides[currentSlideIndex].url}
                        alt={slides[currentSlideIndex].caption || 'Slide image'}
                    />
                    {slides[currentSlideIndex].caption && (
                        <p className="text-center">{slides[currentSlideIndex].caption}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Slideshow;
