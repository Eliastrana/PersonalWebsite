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
    const [fade, setFade] = useState<'in' | 'out'>('in');

    useEffect(() => {
        setFade('in');
        const timer = setTimeout(() => {
            setFade('out');
        }, 5000);
        return () => clearTimeout(timer);
    }, [currentSlideIndex]);

    useEffect(() => {
        if (fade === 'out') {
            const changeSlideTimer = setTimeout(() => {
                setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
            }, 500);
            return () => clearTimeout(changeSlideTimer);
        }
    }, [fade, slides.length]);

    return (
        <div className="relative w-full overflow-hidden" style={{ paddingTop: '50%' }}>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-white border-2 border-gray-200 rounded-lg shadow-lg">
                {slides.map((slide, index) => (
                    <div
                        key={slide.url}
                        className={`absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center transition-opacity duration-500 ${index === currentSlideIndex ? (fade === 'in' ? 'opacity-100' : 'opacity-0') : 'opacity-0'}`}
                        style={{ transitionDelay: index === currentSlideIndex && fade === 'in' ? '500ms' : '0ms'}}
                    >
                        <img
                            className="w-full h-full object-cover rounded-lg"
                            src={slide.url}
                            alt={slide.caption || 'Slide image'}
                        />
                        {slide.caption && (
                            <p className="text-center">{slide.caption}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Slideshow;
