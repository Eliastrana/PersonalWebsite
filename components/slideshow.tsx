import React, { useState, useEffect } from 'react';

type Slide = {
    url: string;
    caption?: string;
};

interface SlideshowProps {
    slides: Slide[];
}

const Slideshow: React.FC<SlideshowProps> = ({ slides }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = () => {
        setIsAnimating(true); // Start animation
        setTimeout(() => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
            setIsAnimating(false); // End animation
        }, 500); // Match this timeout to your transition duration
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide();
        }, 5500); // Adjust timing to include animation duration

        return () => clearTimeout(timer);
    }, [currentSlideIndex]);

    return (
        <div className="aspect-w-2 aspect-h-1 w-full overflow-hidden">
            <div className={`transform transition-all duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <img
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                    src={slides[currentSlideIndex].url}
                    alt={slides[currentSlideIndex].caption || 'Slide image'}
                />
                {slides[currentSlideIndex].caption && (
                    <p className="text-center">{slides[currentSlideIndex].caption}</p>
                )}
            </div>
        </div>
    );
};

export default Slideshow;
