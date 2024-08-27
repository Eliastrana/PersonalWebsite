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

const Tile: React.FC<TileProps> = ({ title, year, imageUrl, description, link, visit, logo, logo2, logo3, logo4, logo5 }) => {
    const handleVisitClick = () => {
        window.open(visit, '_blank', 'noopener,noreferrer');
    };

    return (

        <div className=" p-2 rounded-lg">
            <Link href={link}>
                <Image
                    src={imageUrl}
                    alt={title}
                    width={600}
                    height={400}
                    className="rounded-lg"
                />
            </Link>

            <div className="flex items-center justify-between mt-4">
                <h2 className="text-3xl font-bold">{title}</h2>


                <div className="flex items-center gap-2">

                    <button
                        onClick={handleVisitClick}
                        className=" text-black px-4 py-2 rounded-lg flex items-center underline"
                    >
                        Visit

                    </button>

                    <Link href={link}>
                        <button
                            className="text-black px-4 py-2 rounded-full flex items-center border-black border-2 hover:bg-gray-950 hover:text-white"
                        >
                            Learn more
                        </button>
                    </Link>


                </div>


            </div>

            <p className="text-gray-600 font-medium">{year}</p>

            <div className="flex items-center gap-2 mt-4">
                <Image
                    src={logo}
                    alt="logo"
                    width={30}
                    height={30}
                    className="my-4"
                />

                <Image
                    src={logo2}
                    alt="logo"
                    width={30}
                    height={30}
                    className="my-4"
                />

                <Image
                    src={logo3}
                    alt="logo"
                    width={30}
                    height={30}
                    className="my-4"
                />

                <Image
                    src={logo4}
                    alt="logo"
                    width={30}
                    height={30}
                    className="my-4"
                />

                <Image
                    src={logo5}
                    alt="logo"
                    width={30}
                    height={30}
                    className="my-4"
                />
            </div>

            <p className="mt-2 text-gray-700">{description}</p>
        </div>
    );
};

const TileContainer: React.FC = () => {
    return (
        <div className="w-full flex flex-col md:flex-row items-top md:items-start ">

                {/*<h2 className="mx-36">Recent work</h2>*/}
                <div
                    className="flex flex-wrap md:flex-nowrap gap-8 p-4 md:p-4 justify-center items-center min-h-screen">
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
                        imageUrl="/assets/gallery/ektetid.jpg"
                        description="EkteTid is a BeReal-inspired web application created as a tool for sharing vacation photos with loved ones during the trip itself. The website is connected to Sanity CMS and allows users to upload photos and write a short description from their mobile devices. The website is hosted on Vercel and built with Next.js."
                        link="/ektetid"
                        visit="https://ektetid.no"
                        logo="/languageIcons/Sanity-square.png"
                        logo2="/languageIcons/vercel.svg"
                        logo3="/languageIcons/next-js.svg"
                        logo4="/languageIcons/typescript.png"
                        logo5="/languageIcons/tailwind.png"
                    />
                </div>
            </div>
            );
            };

            export default TileContainer;
