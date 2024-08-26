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

const Tile: React.FC<TileProps> = ({ title, year, imageUrl, description, link, visit, logo, logo2, logo3, logo4,logo5 }) => {
    const handleVisitClick = () => {
        window.open(visit, '_blank', 'noopener,noreferrer');
    };

    return (

        <div className="md:w-2/5 p-2  rounded-lg ">
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

                <button
                    onClick={handleVisitClick}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
                >
                    Visit
                    <span className="material-symbols-outlined">
                        open_in_new
                    </span>

                </button>

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
            {/*<a*/}
            {/*    href={link}*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*    className="text-blue-500 mt-4 inline-block"*/}
            {/*>*/}
            {/*    Learn More*/}
            {/*</a>*/}
        </div>
    );
};

const TileContainer: React.FC = () => {
    return (
        <div
            className="flex flex-wrap md:flex-nowrap gap-8 p-4 md:p-4 justify-center items-center min-h-screen"
        >
            <Tile
                title="Eggen Arkitekter"
                year="2024"
                imageUrl="/assets/gallery/eggen_preview.png"
                description="Eggenarkitekter.com er en portefølje nettside for Eggen Arkitekter. Nettsiden er bygget med Sanity og Next.js, og er hostet på Vercel. Nettsiden tillater Eggen Arkitekter å vise frem sine prosjekter og tjenester på en enkel og oversiktlig måte. Hele nettsiden er knyttet modulær og alt av media kan oppdateres."
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
                imageUrl="/assets/gallery/ektetid.png"
                description="EkteTid er en BeReal-inspierert webapplikasjon som ble skapt som et verktøy for å dele feriebilder med nære og kjære under selve reisen. Nettsiden er knyttet til Sanity CMS, og tillater brukere å laste opp bilder og skrive en liten beskrivelse fra mobil. Nettsiden er hostet på Vercel, og er bygget med Next.js."
                link="/ektetid"
                visit="https://ektetid.no"
                logo="/languageIcons/Sanity-square.png"
                logo2="/languageIcons/vercel.svg"
                logo3="/languageIcons/next-js.svg"
                logo4="/languageIcons/typescript.png"
                logo5="/languageIcons/tailwind.png"
            />
        </div>
    );
};

export default TileContainer;
