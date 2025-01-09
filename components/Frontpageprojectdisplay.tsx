import React from 'react';
import Image from 'next/image';
import Link from "next/link";

type TileProps = {
    title: string;
    year: string;
    imageUrl: string;
    description: string;
    link: string;
    visit: string;
    logo: string;
    logo2: string;
    logo3: string;
    logo4: string;
    logo5: string;
};

const Tile: React.FC<TileProps> = ({
                                       title,
                                       year,
                                       imageUrl,
                                       description,
                                       link,
                                       visit,
                                       logo,
                                       logo2,
                                       logo3,
                                       logo4,
                                       logo5
                                   }) => {
    const handleVisitClick = () => {
        window.open(visit, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="rounded-lg border-2 border-black dark:border-white w-full flex flex-col">
            <Link href={link}>
                <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                    <Image
                        src={imageUrl}
                        alt={`${title} Image`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-md"
                        priority
                    />
                </div>
            </Link>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mt-4">
                    <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleVisitClick}
                            className="text-black px-4 py-2 rounded-lg flex items-center underline dark:text-white transition"
                            aria-label={`Visit ${title}`}
                        >
                            Visit
                        </button>

                        <Link href={link}>
                            <button
                                className="text-black px-4 py-2 rounded-full flex items-center border border-black dark:border-white dark:hover:bg-white dark:hover:text-black dark:text-white transition"
                                aria-label={`More info about ${title}`}
                            >
                                Info
                            </button>
                        </Link>
                    </div>
                </div>

                <p className="text-gray-600 dark:text-gray-200 font-medium mt-2">{year}</p>

                <div className="flex items-center gap-2 mt-4 rounded-lg">
                    <Image
                        src={logo}
                        alt={`${title} Logo 1`}
                        width={30}
                        height={30}
                        className="my-2"
                    />

                    <Image
                        src={logo2}
                        alt={`${title} Logo 2`}
                        width={30}
                        height={30}
                        className="my-2 dark:bg-white"
                    />

                    <Image
                        src={logo3}
                        alt={`${title} Logo 3`}
                        width={30}
                        height={30}
                        className="my-2 dark:bg-white"
                    />

                    <Image
                        src={logo4}
                        alt={`${title} Logo 4`}
                        width={30}
                        height={30}
                        className="my-2"
                    />

                    <Image
                        src={logo5}
                        alt={`${title} Logo 5`}
                        width={30}
                        height={30}
                        className="my-2"
                    />
                </div>

                <p className="mt-4 text-gray-700 dark:text-gray-200 flex-grow">{description}</p>
            </div>
        </div>
    );
};

const TileContainer: React.FC = () => {
    return (
        <div className="container mx-auto flex flex-col p-5 mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                <Tile
                    title="Eggen Arkitekter"
                    year="2024"
                    imageUrl="/assets/gallery/eggen.jpg"
                    description="Eggenarkitekter.com is a portfolio website for Eggen Arkitekter. The website is built with Sanity and Next.js, and is hosted on Vercel. The website allows Eggen Arkitekter to showcase their projects and services in a simple and clear manner. The entire website is modular, and all media can be updated easily."
                    link="/eggenarkitekter"
                    visit="https://eggenarkitekter.com"
                    logo="/languageIcons/Sanity-square.png"
                    logo2="/languageIcons/vercel.svg"
                    logo3="/languageIcons/next-js.svg"
                    logo4="/languageIcons/typescript.png"
                    logo5="/languageIcons/tailwind.png"
                />
                <Tile
                    title="EkteTid"
                    year="2024"
                    imageUrl="/assets/gallery/ektetid_showcase/frontpage.png"
                    description="EkteTid is a BeReal-inspired web application created as a tool for sharing vacation photos with loved ones during the trip itself. The website is connected to Sanity CMS and allows users to upload photos and write a short description from their mobile devices. The website is hosted on Vercel and built with Next.js."
                    link="/ektetid"
                    visit="https://ektetid.no"
                    logo="/languageIcons/Sanity-square.png"
                    logo2="/languageIcons/vercel.svg"
                    logo3="/languageIcons/next-js.svg"
                    logo4="/languageIcons/typescript.png"
                    logo5="/languageIcons/tailwind.png"
                />
                {/* Add more Tile components as needed */}
            </div>
        </div>
    );
};

export default TileContainer;
