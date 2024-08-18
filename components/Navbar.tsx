import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Make sure to import the AOS styles
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    useEffect(() => {
        if (isOpen) {
            AOS.refresh(); // Refresh AOS to trigger animations when the menu opens
        }
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            {/* Home Link Image in the top left corner */}
            <div className="absolute top-4 left-4 z-50">
                <Link href="/">
                    <h1 className={`text-4xl font-bold transition-colors josefin-sans duration-300 ${isOpen ? 'text-white' : 'text-black'}`}>
                        Elias Trana
                    </h1>
                    {/*<img*/}
                    {/*    src="/assets/logo/liten_selfie.jpg" // Replace with your image path*/}
                    {/*    alt="Home"*/}
                    {/*    className="h-12 w-12 cursor-pointer" // Adjust size as needed*/}
                    {/*/>*/}
                </Link>
            </div>

            {/* Icon in the top right corner */}
            <div
                className="absolute top-4 right-4 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {!isOpen && (
                    <button
                        className="text-black text-3xl focus:outline-none"
                        onClick={toggleMenu}
                    >
                        &#9776; {/* This is the "hamburger" icon */}
                    </button>
                )}
            </div>

            {/* Fullscreen overlay menu */}
            <AnimatePresence>
                {(isHovered || isOpen) && (
                    <>
                        <motion.div
                            initial={{ scale: 0, borderRadius: '50%', opacity: 0.8, x: '50%', y: '-50%' }}
                            animate={{
                                scale: isOpen ? 150 : isHovered ? 1.5 : 0,
                                borderRadius: isOpen ? '0%' : '50%',
                                opacity: 1,
                                x: '0%',
                                y: '0%',
                            }}
                            exit={{ scale: 0, borderRadius: '50%', opacity: 0.8, x: '50%', y: '-50%' }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className="fixed top-0 right-0 w-16 h-16 bg-[#4783f3] z-40"
                        />
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                                className="fixed inset-0 z-50 flex items-end p-8"
                            >
                                <button
                                    className="absolute top-4 right-4 text-white text-4xl focus:outline-none"
                                    onClick={toggleMenu}
                                >
                                    &times; {/* This is the "close" icon */}
                                </button>
                                <nav className="text-left space-y-8">
                                    <div
                                        data-aos="fade-right"
                                        data-aos-delay="200"
                                        className="text-white text-6xl md:text-8xl lg:text-9xl"
                                    >
                                        <Link href="/gallery" className="group cursor-pointer transition-colors duration-300 ease-in-out">
                                            Gallery
                                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-yellow-200"></span>
                                        </Link>
                                    </div>
                                    <div
                                        data-aos="fade-right"
                                        data-aos-delay="400"
                                        className="text-white text-6xl md:text-8xl lg:text-9xl"
                                    >
                                        <Link href="/blog" className="group cursor-pointer transition-colors duration-300 ease-in-out">
                                            Blog
                                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-yellow-200"></span>
                                        </Link>
                                    </div>
                                    <div
                                        data-aos="fade-right"
                                        data-aos-delay="600"
                                        className="text-white text-6xl md:text-8xl lg:text-9xl"
                                    >
                                        <Link href="/resume" className="group cursor-pointer transition-colors duration-300 ease-in-out">
                                            Resume
                                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-yellow-200"></span>
                                        </Link>
                                    </div>
                                </nav>
                            </motion.div>
                        )}
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;