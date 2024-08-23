import React, { useState } from 'react';
import Image from 'next/image';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const items = [
    {
        id: 1,
        icon: '/languageIcons/react-icon.svg.png',
        title: 'React',
        description: 'Used for building this website, as well as others.',
        category: 'Framework',
    },
    {
        id: 2,
        icon: '/languageIcons/typescript.png',
        title: 'TypeScript',
        description: 'Prioritized language for all web-related projects.',
        category: 'Language',
    },
    {
        id: 3,
        icon: '/languageIcons/next-js.svg',
        title: 'Next.js',
        description: 'Used for quickly building static and dynamic websites.',
        category: 'Framework',
    },
    {
        id: 4,
        icon: '/languageIcons/vercel.svg',
        title: 'Vercel',
        description: 'Used for quickly deploying all web projects.',
        category: 'Tool',
    },
    {
        id: 5,
        icon: '/languageIcons/javascript-logo.png',
        title: 'JavaScript',
        description: 'Used throughout all the web development.',
        category: 'Language',
    },

    {
        id: 6,
        icon: '/languageIcons/tailwind_CSS_logo.svg.png',
        title: 'Tailwind CSS',
        description: 'Used for styling this website.',
        category: 'Framework',
    },
    {
        id: 7,
        icon: '/languageIcons/git-icon-1788C.png',
        title: 'Git',
        description: 'Used for version control and collaboration on all projects.',
        category: 'Tool',
    },
    {
        id: 8,
        icon: '/languageIcons/vue.js_logo_2.svg.png',
        title: 'Vue',
        description: 'Used for multiple school projects.',
        category: 'Framework',
    },
    {
        id: 9,
        icon: '/languageIcons/java.webp',
        title: 'Java',
        description: 'Used for multiple school projects. Both backend and frontend.',
        category: 'Language',
    },
    {
        id: 10,
        icon: '/languageIcons/C++.png',
        title: 'C++',
        description: 'Used for multiple school projects.',
        category: 'Tool',
    },
    {
        id: 11,
        icon: '/languageIcons/python.webp',
        title: 'Python',
        description: 'Used for machine learning, data analysis, and more.',
        category: 'Language',
    },
    {
        id: 12,
        icon: '/languageIcons/mysql.png',
        title: 'MySQL',
        description: 'Used as databases for multiple school projects.',
        category: 'Language',
    },
    // Add more items as needed
];

const ScrollableList = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleFilterChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredItems = selectedCategory === 'All'
        ? items
        : items.filter(item => item.category === selectedCategory);

    return (
        <div className="min-h-screen flex items-center justify-center  mt-28">
            <div className="absolute h-[700px] w-full bg-cover bg-center"
                 style={{backgroundImage: "url('/assets/gallery/DSCF9677.jpeg')"}}/>
            <div className="w-3/4 max-w-4xl p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-4">Languages and frameworks</h2>

                <div className="flex flex-wrap justify-center mb-4">
                    <button
                        className={`px-4 py-2 mx-2 mb-2 md:mb-0 rounded-3xl w-full md:w-auto ${
                            selectedCategory === 'All' ? 'bg-blue-500 text-white' : 'bg-white bg-opacity-40 text-black'
                        }`}
                        onClick={() => handleFilterChange('All')}
                    >
                        All
                    </button>
                    <button
                        className={`px-4 py-2 mx-2 mb-2 md:mb-0 rounded-3xl w-full md:w-auto ${
                            selectedCategory === 'Framework' ? 'bg-blue-500 text-white' : 'bg-white bg-opacity-40 text-black'
                        }`}
                        onClick={() => handleFilterChange('Framework')}
                    >
                        Frameworks
                    </button>
                    <button
                        className={`px-4 py-2 mx-2 mb-2 md:mb-0 rounded-3xl w-full md:w-auto ${
                            selectedCategory === 'Language' ? 'bg-blue-500 text-white' : 'bg-white bg-opacity-40 text-black'
                        }`}
                        onClick={() => handleFilterChange('Language')}
                    >
                        Languages
                    </button>
                    <button
                        className={`px-4 py-2 mx-2 mb-2 md:mb-0 rounded-3xl w-full md:w-auto ${
                            selectedCategory === 'Tool' ? 'bg-blue-500 text-white' : 'bg-white bg-opacity-40 text-black'
                        }`}
                        onClick={() => handleFilterChange('Tool')}
                    >
                        Tools
                    </button>
                </div>


                <div className="overflow-hidden" style={{height: '300px'}}>
                    <TransitionGroup component="div" className="overflow-y-auto max-h-full">
                        {filteredItems.map(item => (
                            <CSSTransition key={item.id} timeout={300} classNames="fade">
                                <div
                                    className="p-2 flex items-center hover:bg-white hover:bg-opacity-10 transition-colors">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={24}
                                        height={24}
                                        className="rounded-md mr-4"
                                    />
                                    <div>
                                        <h3 className="font-semibold">{item.title}</h3>
                                        <div className="text-sm">{item.description}</div>
                                    </div>
                                </div>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
            </div>
            <style jsx>{`
                .fade-enter {
                    opacity: 0;
                    transform: translateY(-20px);
                }

                .fade-enter-active {
                    opacity: 1;
                    transform: translateY(0);
                    transition: opacity 300ms, transform 300ms;
                }

                .fade-exit {
                    opacity: 1;
                    transform: translateY(0);
                }

                .fade-exit-active {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 300ms, transform 300ms;
                }
            `}</style>
        </div>
    );
};

export default ScrollableList;
