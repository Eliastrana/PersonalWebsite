import React, { useState } from 'react';
import Image from 'next/image';
import Tile from './Tile';

const ProjectCarousel: React.FC = () => {
    const projects = [
        {
            title: 'Eggen Arkitekter',
            year: '2024',
            images: [
                '/assets/gallery/eggen_showcase/eggen_showcase.jpg',
                // '/assets/gallery/eggen_showcase/insidepost.png',
                // '/assets/gallery/eggen_showcase/folk.png',
            ],
            description:
                'eggen-arkitekter.no is a portfolio website for Eggen Arkitekter. The website is built with Sanity and Next.js, and is hosted on Vercel. The entire website is modular, and all media can be updated easily.',
            link: '/eggenarkitekter',
            visit: 'https://eggen-arkitekter.no',
            logo: [
                '/languageIcons/Sanity-square.png',
                '/languageIcons/vercel.svg',
                '/languageIcons/next-js.svg',
                '/languageIcons/typescript.png',
                '/languageIcons/tailwind.png',
            ],
            background_color: '#d2e6f6',
            icon: '/assets/gallery/eggen_showcase/eggen_logo.png',
            textcolor: '#1f2d37',
        },
        {
            title: 'EkteTid',
            year: '2024',
            images: [
                '/assets/gallery/ektetid_showcase/ektetid_showcase.jpg',
            ],
            description:
                'EkteTid is a web application created as a tool for sharing vacation photos with loved ones during the trip itself. It features a firebase alert system, allowing for mobile notifications through a webapp.',
            link: '/ektetid',
            visit: 'https://ektetid.no',
            logo: [
                '/languageIcons/Sanity-square.png',
                '/languageIcons/vercel.svg',
                '/languageIcons/next-js.svg',
                '/languageIcons/typescript.png',
                '/languageIcons/tailwind.png',
                '/languageIcons/firebase.svg',

            ],
            background_color: '#dfd0b9',
            icon: '/assets/gallery/ektetid_showcase/ektetid_logo_200.png',
            textcolor: '#372e1f',
        },
        {
            title: 'Meløya.no',
            year: '2024',
            images: [
                '/assets/gallery/meloyadotno_showcase/macbook_meloyadotno.jpg',
            ],
            description:
                'Meløya.no is a website for the local community on Meløya. The website is built with Sanity and Next.js, and is hosted on Vercel. The website is a hub for local news, events, and information.',
            link: '/ektetid',
            visit: 'https://ektetid.no',
            logo: [
                '/languageIcons/Sanity-square.png',
                '/languageIcons/vercel.svg',
                '/languageIcons/next-js.svg',
                '/languageIcons/typescript.png',
                '/languageIcons/tailwind.png',
            ],
            background_color: '#80876e',
            icon: '/assets/gallery/meloyadotno_showcase/meloya_logo.png',
            textcolor: '#d7d8d5',
        },
        // Add more project objects as needed
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // Handle scroll event to update the active index
    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const scrollLeft = event.currentTarget.scrollLeft;
        const width = event.currentTarget.offsetWidth;

        const newIndex = Math.round(scrollLeft / width);
        setActiveIndex(newIndex);
    };

    return (
        <div className="relative w-screen">

            <div
                className="relative w-screen carousel-container"
                onScroll={handleScroll}
                style={{
                    overflowX: 'scroll', // Enable horizontal scrolling
                    scrollbarWidth: 'none', // Firefox
                    msOverflowStyle: 'none', // IE and Edge
                    scrollSnapType: 'x mandatory', // Enable auto-snapping
                }}
            >
                <style jsx>{`
                    .carousel-container {
                        overflow-x: scroll; /* Allow horizontal scrolling */
                        scroll-snap-type: x mandatory; /* Auto-snapping */
                    }

                    .carousel-container::-webkit-scrollbar {
                        display: none; /* Hide scrollbar for WebKit-based browsers */
                    }

                    .carousel-item {
                        scroll-snap-align: center; /* Align items to center when snapping */
                    }
                `}</style>
                <div className="flex flex-nowrap h-full">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="w-screen flex-shrink-0 snap-center p-4 pb-0 flex items-center justify-center carousel-item"
                        >
                            <div className="md:p-16 md:pb-0 w-full h-full flex items-center justify-center">
                                <Tile {...project} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="flex justify-center gap-4 ">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`w-auto px-4 h-10 rounded-full border-2 cursor-pointer ${
                            index === activeIndex
                                ? 'border-gray-800 dark:bg-white dark:text-black dark:border-gray-200'
                                : 'border-gray-400 bg-gray-100 dark:bg-transparent dark:border-gray-600'
                        } flex items-center justify-center transition`}
                        onClick={() => {
                            const carousel = document.querySelector(
                                '.carousel-container'
                            ) as HTMLDivElement;
                            if (carousel) {
                                carousel.scrollTo({
                                    left: index * carousel.offsetWidth,
                                    behavior: 'smooth',
                                });
                            }
                        }}
                    >
                        <Image
                            src={project.icon}
                            alt={`${project.title} Icon`}
                            width={24}
                            height={24}
                            className={` transition ${
                                index === activeIndex ? 'opacity-100' : 'opacity-50'
                            }`}
                        />
                        <p
                            className={`ml-2 text-sm transition ${
                                index === activeIndex
                                    ? 'block'
                                    : 'hidden sm:block'
                            }`}
                        >
                            {project.title}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ProjectCarousel;
