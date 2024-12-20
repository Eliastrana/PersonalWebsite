import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Make sure to import the AOS styles
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();
    const menuRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
        });

        // Check if the device is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile(); // Initial check
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
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
        if (!isMobile) {
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setIsHovered(false);
        }
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsHovered(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const isCurrentPage = (path) => router.pathname === path;

    return (
        <>
            {/* Home Link Image in the top left corner */}
            <div className="absolute top-4 left-4 z-50">
                <Link href="/">
                    <h1 className={`text-4xl font-bold transition-colors josefin-sans duration-300 ${isOpen ? 'text-white' : 'text-black'}`}>
                        ET
                    </h1>
                </Link>
            </div>

            {/* Icon in the top right corner */}
            <div
                className="absolute top-4 right-4 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={menuRef}
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
                                className="fixed inset-0 z-50 flex items-center justify-left p-8 md:items-end"
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
                                        className={`text-white text-6xl md:text-8xl lg:text-9xl ${isCurrentPage('/gallery') ? 'italic' : ''}`}
                                    >
                                        <Link href="/gallery" className="group transition-colors duration-300 ease-in-out">
                                            Gallery
                                            <span className={`block transition-all duration-500 h-1 bg-yellow-200 ${isCurrentPage('/gallery') ? 'max-w-full' : 'max-w-0'} group-hover:max-w-full`}></span>
                                        </Link>
                                    </div>
                                    <div
                                        data-aos="fade-right"
                                        data-aos-delay="400"
                                        className={`text-white text-6xl md:text-8xl lg:text-9xl ${isCurrentPage('/blog') ? 'italic' : ''}`}
                                    >
                                        <Link href="/blog" className="group cursor-pointer transition-colors duration-300 ease-in-out">
                                            Blog
                                            <span className={`block transition-all duration-500 h-1 bg-yellow-200 ${isCurrentPage('/blog') ? 'max-w-full' : 'max-w-0'} group-hover:max-w-full`}></span>
                                        </Link>
                                    </div>
                                    <div
                                        data-aos="fade-right"
                                        data-aos-delay="600"
                                        className={`text-white text-6xl md:text-8xl lg:text-9xl ${isCurrentPage('/resume') ? 'italic' : ''}`}
                                    >
                                        <Link href="/resume" className="group cursor-pointer transition-colors duration-300 ease-in-out">
                                            Resume
                                            <span className={`block transition-all duration-500 h-1 bg-yellow-200 ${isCurrentPage('/resume') ? 'max-w-full' : 'max-w-0'} group-hover:max-w-full`}></span>
                                        </Link>
                                    </div>
                                </nav>
                            </motion.div>
                        )}
                    </>
                )}
            </AnimatePresence>
            <style jsx>{`
                /* Mobile-specific styles */
                @media (max-width: 768px) {
                    /* Disable hover effect on mobile */
                    .group:hover .group-hover\\:max-w-full {
                        max-width: 0 !important;
                    }

                    /* Adjust the position of the text for mobile */
                    .fixed.inset-0.z-50.flex.items-center.justify-center.p-8 {
                        top: 10%;
                        justify-content: flex-start;
                    }
                }

                /* Desktop-specific styles remain unchanged */
                @media (min-width: 769px) {
                    .fixed.inset-0.z-50.flex.items-end.p-8 {
                        justify-content: flex-end;
                        bottom: 0;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;
