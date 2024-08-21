import React, { useState, useEffect } from 'react';
import { ChromePicker, ColorResult } from 'react-color';
import Navbar from './Navbar';
import Image from "next/image";
import cn from "classnames"; // Assuming Navbar is in the same directory

const getComplementaryColor = (hexColor: string): string => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    const compR = 255 - r;
    const compG = 255 - g;
    const compB = 255 - b;

    return `#${compR.toString(16).padStart(2, '0')}${compG.toString(16).padStart(2, '0')}${compB.toString(16).padStart(2, '0')}`;
};

const ImageDisplayer: React.FC<{ title: string; undertitle: string }> = ({ title, undertitle }) => {
    const preselectedColors = ['#B34329', '#BEE3DB', '#3357FF', '#FFFF33', '#EEEEEE', '#EFA8B8', '#7110FF', '#000000'];

    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * preselectedColors.length);
        return preselectedColors[randomIndex];
    };

    const [bgColor, setBgColor] = useState(getRandomColor);
    const [textColor, setTextColor] = useState(getComplementaryColor(bgColor));
    const [isVisible, setIsVisible] = useState(false);
    const [selectedColor, setSelectedColor] = useState(bgColor);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        setTextColor(getComplementaryColor(bgColor));
    }, [bgColor]);

    const handleColorChange = (color: ColorResult) => {
        setBgColor(color.hex);
    };

    const handleChangeComplete = (color: ColorResult) => {
        const newTextColor = getComplementaryColor(color.hex);
        setTextColor(newTextColor);
        setSelectedColor(color.hex);
    };

    return (
        <div className="relative w-full h-screen">
            {/* Background Layer */}
            <div className="absolute inset-0" style={{ backgroundColor: bgColor }}></div>

            {/* Content Layer */}
            <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-between p-12" style={{ zIndex: 2 }}>
                {/* Text Section */}
                <div
                    className={`w-full md:w-2/3 text-center  mt-32 md:text-left transition-opacity duration-3000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

                    <div className="relative flex justify-center items-center mb-4">
                        {/* Vertically standing image positioned behind the title */}
                        <Image
                            src="/assets/blog/koben_35mm/000012830020.jpeg"
                            alt={`Cover Image for ${title}`}
                            className="absolute h-full min-h-[70vh] max-h-[120vh] w-auto mb-28 object-cover rounded-lg shadow-lg glassmorphism-effect z-0"
                            width={500}
                            height={800}
                            style={{
                                opacity: 0.5,
                                filter: ` hue-rotate(${parseInt(bgColor.slice(1), 16) % 360}deg)`,
                            }}
                        />

                        {/* Title in front of the image */}
                        <div className="absolute justify-center items-center z-10">
                            <h1
                                className="relative text-7xl md:text-11xl josefin-sans font-bold mt-28 mb-4 z-10"
                                style={{ color: textColor, transition: 'color 0.5s ease' }}
                            >
                                {title}
                            </h1>

                            <p className="relative text-4xl md:text-4xl josefin-sans font-bold z-10"
                               style={{ color: textColor, transition: 'color 0.5s ease' }}>
                                {undertitle}
                            </p>
                        </div>
                    </div>

                    {/* Color Picker Section (Mobile View) */}
                    <div className="w-full md:hidden flex justify-center mb-4 mt-64 pt-8 ">
                        <div
                            className="p-4 rounded-lg shadow-lg glassmorphism-effect w-full"
                            style={{
                                zIndex: 3,
                                backdropFilter: 'blur(10px)',
                                background: 'rgba(255, 255, 255, 0.2)',
                                borderRadius: '10px',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            {/* Preselected Color Tiles */}
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
                                    width={285}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Color Picker Section (Desktop View) */}
                <div
                    className={`hidden md:flex w-1/3 justify-end transition-opacity duration-1000 ease-in-out delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
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
                        {/* Preselected Color Tiles */}
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

            <style jsx>{`
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
                        font-size: 3.75rem; /* Adjust the font size for mobile */
                    }

                    .text-4xl {
                        font-size: 1.5rem; /* Adjust the font size for mobile */
                    }
                }
            `}</style>
        </div>
    );
};


const App: React.FC = () => {
    return (
        <div className="w-full">
            <ImageDisplayer
                title="Elias Trana"
                undertitle="A portfolio displaying System Development, Writing, Graphics, and Photography."
            />
        </div>
    );
};

export default App;
