import React, { useState, useEffect } from 'react';
import { ChromePicker, ColorResult } from 'react-color';
import Image from 'next/image';
import ConfettiCannon from './ConfettiCannon'; // Import the ConfettiCannon component

const ImageDisplayer: React.FC<{ title: string; undertitle: string }> = ({ title, undertitle }) => {
    const preselectedColors = ['#B34329', '#BEE3DB', '#EEEEEE', '#EFA8B8','#DAC0B3', '#271859'];
    const images = [
        '/assets/gallery/karusell-3.jpeg',
        '/assets/gallery/karusell-2.jpeg',
        '/assets/gallery/karusell-1.jpg',
    ];

    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * preselectedColors.length);
        return preselectedColors[randomIndex];
    };

    const [bgColor, setBgColor] = useState(getRandomColor);
    const [textColor, setTextColor] = useState(getComplementaryColor(bgColor));
    const [selectedColor, setSelectedColor] = useState(bgColor);
    const [rotationDegree, setRotationDegree] = useState(0);
    const [rotationSpeed, setRotationSpeed] = useState(1); // Initial fast rotation speed
    const [showConfetti, setShowConfetti] = useState(false); // State for showing confetti

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRotationDegree((prevDegree) => prevDegree + 1);
        }, rotationSpeed);

        const slowDownTimeout = setTimeout(() => {
            setRotationSpeed(50); // Slow down after 2 seconds
        }, 1000);

        return () => {
            clearInterval(intervalId); // Cleanup on component unmount
            clearTimeout(slowDownTimeout);
        };
    }, [rotationSpeed]);

    const handleColorChange = (color: ColorResult) => {
        setBgColor(color.hex);
    };

    const handleChangeComplete = (color: ColorResult) => {
        const newTextColor = getComplementaryColor(color.hex);
        setTextColor(newTextColor);
        setSelectedColor(color.hex);

        // Calculate the color difference
        const hexBgColor = color.hex.toLowerCase();
        const colorDifference = getColorDifference(newTextColor, hexBgColor);

        // Define a threshold for color similarity (0 is exact match)
        const threshold = 20;

        if (colorDifference <= threshold) {
            setShowConfetti(true);
        } else {
            setShowConfetti(false);
        }
    };

    return (
        <div className="w-full h-full relative">
            {/* ConfettiCannon Component */}
            <ConfettiCannon trigger={showConfetti} />

            {/* Mobile Image Section */}
            <div className="w-full h-[50vh] md:hidden relative">
                <Image
                    src={images[0]}
                    alt={`Cover Image for ${title}`}
                    className="w-full h-full object-cover"
                    width={1200}
                    height={800}
                />
            </div>

            {/* Mobile Content Section with Background Color */}
            <div className="w-full md:hidden flex flex-col items-center p-8" style={{ backgroundColor: bgColor }}>
                <h1
                    className="text-5xl josefin-sans font-bold mb-4 text-center"
                    style={{ color: textColor, transition: 'color 0.5s ease' }}
                >
                    {title}
                </h1>
                <p className="text-2xl josefin-sans font-bold text-center"
                   style={{ color: textColor, transition: 'color 0.5s ease' }}>
                    {undertitle}
                </p>

                <div className="w-full flex justify-center mt-8">
                    <div
                        className="p-4 rounded-lg shadow-lg glassmorphism-effect"
                        style={{
                            backdropFilter: 'blur(10px)',
                            background: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '10px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <div className="flex">
                            {preselectedColors.map((color) => (
                                <div
                                    key={color}
                                    className={`w-10 h-10 mr-2 cursor-pointer border-2 ${selectedColor === color ? 'border-white' : 'border-transparent'}`}
                                    style={{
                                        backgroundColor: color,
                                        borderRadius: '4px',
                                        boxShadow: selectedColor === color ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
                                    }}
                                    onClick={() => {
                                        setBgColor(color);
                                        handleChangeComplete({ hex: color } as ColorResult);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:flex w-full h-screen relative">
                {/* Background Layer */}
                <div className="absolute inset-0" style={{ backgroundColor: bgColor }}></div>

                {/* Content Layer */}
                <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-between p-12">
                    {/* Text Section */}
                    <div className="w-full md:w-2/3 text-center md:text-left">

                        {/* 3D Carousel Image Section */}
                        <div className="carousel-wrapper relative mt-8">
                            <div className="carousel" style={{transform: `rotateY(${rotationDegree}deg)`}}>
                                {images.map((image, index) => (
                                    <div key={index} className="carousel-item">
                                        <Image
                                            src={image}
                                            alt={`Image ${index + 1}`}
                                            className="rounded-lg shadow-lg"
                                            width={400}
                                            height={600}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <h1
                            className="text-7xl md:text-11xl josefin-sans font-bold mt-28 mb-4"
                            style={{color: textColor, transition: 'color 0.5s ease'}}
                        >
                            {title}
                        </h1>

                        <p className="text-4xl md:text-4xl josefin-sans font-bold mb-8"
                           style={{color: textColor, transition: 'color 0.5s ease'}}>
                            {undertitle}
                        </p>
                    </div>

                    {/* Color Picker Section (Desktop View) */}
                    <div className="hidden md:flex w-1/3 justify-end">
                        <div
                            className="p-4 rounded-lg shadow-lg glassmorphism-effect"
                            style={{
                                zIndex: 3,
                                backdropFilter: 'blur(10px)',
                                background: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: '10px',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <div className="flex mb-4">
                                {preselectedColors.map((color) => (
                                    <div
                                        key={color}
                                        className={`w-10 h-10 mr-2 cursor-pointer border-2 ${selectedColor === color ? 'border-white' : 'border-transparent'}`}
                                        style={{
                                            backgroundColor: color,
                                            borderRadius: '4px',
                                            boxShadow: selectedColor === color ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
                                        }}
                                        onClick={() => {
                                            setBgColor(color);
                                            handleChangeComplete({ hex: color } as ColorResult);
                                        }}
                                    />
                                ))}
                            </div>
                            <div className="chrome-picker-container">
                                <ChromePicker
                                    color={bgColor}
                                    onChange={handleColorChange}
                                    onChangeComplete={handleChangeComplete}
                                    disableAlpha={true}
                                    width={375}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .carousel-wrapper {
                    perspective: 1000px;
                    width: 100%;
                    height: 200px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 150px; /* Add this line to lower the carousel */

                }

                .carousel {
                    width: 250px;
                    height: 375px;
                    position: relative;
                    transform-style: preserve-3d;
                    transition: transform 1s linear;
                }

                .carousel-item {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: #fff;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    transform-origin: center center;
                }

                .carousel-item:nth-child(1) {
                    transform: rotateY(0deg) translateZ(300px);
                }

                .carousel-item:nth-child(2) {
                    transform: rotateY(120deg) translateZ(300px);
                }

                .carousel-item:nth-child(3) {
                    transform: rotateY(240deg) translateZ(300px);
                }

             

                .chrome-picker-container .chrome-picker {
                    background: rgba(255, 255, 255, 0.4) !important;
                    backdrop-filter: blur(15px) !important;
                    border-radius: 15px !important;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
                }

                .chrome-picker-container .chrome-picker > div {
                    border-radius: 15px !important;
                }

                .chrome-picker-container .chrome-picker > div > span > div {
                    backdrop-filter: blur(10px) !important;
                    background: rgba(255, 255, 255, 0.2) !important;
                    border-radius: 10px !important;
                }

                @media (max-width: 768px) {
                    .text-11xl {
                        font-size: 3.75rem;
                    }

                    .text-4xl {
                        font-size: 1.5rem;
                    }

                    .chrome-picker-container {
                        display: none !important;
                    }
                }
            `}</style>
        </div>
    );
};

const getComplementaryColor = (hexColor: string): string => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    const compR = 255 - r;
    const compG = 255 - g;
    const compB = 255 - b;

    return `#${compR.toString(16).padStart(2, '0')}${compG.toString(16).padStart(2, '0')}${compB.toString(16).padStart(2, '0')}`;
};

const getColorDifference = (color1: string, color2: string): number => {
    const r1 = parseInt(color1.slice(1, 3), 16);
    const g1 = parseInt(color1.slice(3, 5), 16);
    const b1 = parseInt(color1.slice(5, 7), 16);

    const r2 = parseInt(color2.slice(1, 3), 16);
    const g2 = parseInt(color2.slice(3, 5), 16);
    const b2 = parseInt(color2.slice(5, 7), 16);

    // Calculate the Euclidean distance between the two colors
    return Math.sqrt(
        Math.pow(r2 - r1, 2) +
        Math.pow(g2 - g1, 2) +
        Math.pow(b2 - b1, 2)
    );
};


const App: React.FC = () => {
    return (
        <div className="w-full">
            <ImageDisplayer
                title="Elias Trana"
                undertitle="A portfolio displaying System Development, Graphics, and Photography."
            />
        </div>
    );
};

export default App;
