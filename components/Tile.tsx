import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type TileProps = {
    title: string;
    year: string;
    /** Array of images to rotate through */
    images: string[];
    description: string;
    link: string;
    visit: string;
    logo: string[];
    background_color: string;
    icon: string;
    textcolor: string;
};

const Tile: React.FC<TileProps> = ({
                                       title,
                                       year,
                                       images,
                                       description,
                                       link,
                                       visit,
                                       logo,
                                       background_color,
                                       icon,
                                       textcolor,
                                   }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cycle images every 3 seconds
    useEffect(() => {
        if (!images || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images]);

    // Handle visit button click
    const handleVisitClick = () => {
        window.open(visit, '_blank', 'noopener,noreferrer');
    };

    return (
        <div
            className="flex flex-col md:flex-row w-full border-2 border-black dark:border-white rounded-lg overflow-hidden mb-3"
            style={{ background: background_color }}
        >
            {/* Left Side: Slideshow */}
            <Link
                href={link}
                className="relative w-full md:w-2/3 h-64 md:h-[80vh] overflow-hidden"
            >
                {images.map((src, index) => (
                    <Image
                        key={index}
                        src={src}
                        alt={`${title} - Slide ${index}`}
                        fill
                        className={`
          object-cover transition-opacity duration-1000 ease-in-out 
          ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
        `}
                        priority={index === 0}
                    />
                ))}
            </Link>

            {/* Right Side: Content */}
            <div
                className="w-full md:w-1/2 p-6 flex flex-col justify-between"
                style={{ color: textcolor }}
            >
                <div className="flex flex-col flex-grow md:justify-end">
                    {/* Title and Year */}
                    <div className="flex md:flex-col gap-2 items-center md:items-start">
                        <Image
                            key={icon}
                            src={icon}
                            alt={icon}
                            width={100}
                            height={100}
                            className={`w-20 h-20 md:w-24 md:h-24`}
                        />
                        <h1
                            className="text-5xl sm:text-8xl font-bold mt-2 md:mt-6"
                            style={{color: textcolor}}
                        >
                            {title}
                        </h1>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-2 mt-4 justify-between">
                        <div className="flex">
                            <button
                                onClick={handleVisitClick}
                                className="px-4 py-2 rounded-lg flex items-center underline transition"
                                style={{color: textcolor}}
                                aria-label={`Visit ${title}`}
                            >
                                Visit
                            </button>
                            <Link href={link}>
                                <button
                                    className="px-4 py-2 rounded-full flex items-center border transition"
                                    style={{color: textcolor, borderColor: textcolor}}
                                    aria-label={`More info about ${title}`}
                                >
                                    Info
                                </button>
                            </Link>
                        </div>
                        <h4
                            className="text-gray-600 dark:text-gray-200 font-medium mt-2"
                            style={{color: textcolor}}
                        >
                            {year}
                        </h4>
                    </div>

                    {/* Logos */}
                    <div
                        className="inline-flex items-center gap-4 mt-4 rounded-full p-2"
                        style={{
                            background: 'rgba(255, 255, 255, 0.3)',
                            display: 'inline-flex', // Ensures the width matches the content
                            maxWidth: 'fit-content', // Prevents the container from expanding unnecessarily
                        }}
                    >
                        {logo.map((src, index) => (
                            <Image
                                key={index}
                                src={src}
                                alt={`${title} - Logo ${index}`}
                                width={40} // Adjust size as needed
                                height={40}
                            />
                        ))}
                    </div>

                </div>

                {/* Bottom Section: Description */}
                <p
                    className="mt-4 text-gray-700 dark:text-gray-200"
                    style={{color: textcolor}}
                >
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Tile;
