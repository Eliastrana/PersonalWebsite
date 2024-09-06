import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "../components/Navbar";
import Layout from "../components/layout";
import DrawingCanvas from "../components/DrawingCanvas";
import NumberRecognition from "../components/NumberRecognition";

const images = [
    'assets/gallery/DSCF0270.jpeg',
    'assets/gallery/DSCF0404.jpeg',
    'assets/gallery/DSCF9760.jpeg',
    'assets/gallery/DSCF9639.jpeg',
    'assets/blog/koben_35mm/000012830016.jpeg',
    'assets/blog/koben_35mm/000012830019.jpeg',
    ];

const GalleryPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const selectImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <Layout>


            <NumberRecognition />

        <div className="container mx-auto mt-32 p-4">

            {/* Main Image Display */}
            <div className="relative w-full max-w-4xl mx-auto bg-black rounded-lg overflow-hidden shadow-lg">
                <div className="relative w-full h-[600px] flex items-center justify-center">
                    <AnimatePresence>
                        <motion.img
                            key={currentImageIndex}
                            src={images[currentImageIndex]}
                            alt={`Image ${currentImageIndex + 1}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute object-contain h-full w-full"
                        />
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevImage}
                        className="glassmorphism-button absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-4xl"
                    >
                        <span className="material-symbols-outlined">
                            arrow_back
                        </span>
                    </button>

                    <button
                        onClick={nextImage}
                        className="glassmorphism-button absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-4xl"
                    >
                        <span className="material-symbols-outlined">
                            arrow_forward
                        </span>
                    </button>

                </div>
            </div>

            {/* Thumbnails Row */}
            <div className="mt-4 flex justify-center space-x-4">
                {images.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => selectImage(index)}
                        className={`h-20 cursor-pointer border-4 ${
                            index === currentImageIndex ? 'border-blue-500' : 'border-transparent'
                        } rounded-lg transition-all duration-300 ease-in-out`}
                        whileHover={{ scale: 1.1 }}
                    />
                ))}
            </div>
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none; /* Internet Explorer 10+ */
                    scrollbar-width: none; /* Firefox */
                }

                .scrollbar-hide::-webkit-scrollbar {
                    display: none; /* Safari and Chrome */
                }

                .flex {
                    display: flex;
                    flex-direction: row;
                    flex-shrink: 0;
                    overflow: hidden;
                }

                .relative {
                    position: relative;
                }

                @media (min-width: 768px) {
                    .h-96 {
                        height: 24rem;
                    }
                }

                .glassmorphism-button {
                    width: 70px;
                    height: 70px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                    border-radius: 50%;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                    transition: background 0.3s ease;
                }

                .glassmorphism-button:hover {
                    background: rgba(255, 255, 255, 0.3);
                }

                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0,
                    'wght' 400,
                    'GRAD' 0,
                    'opsz' 48;
                }
            `}</style>
        </div>
        </Layout>
    );
};

export default GalleryPage;
