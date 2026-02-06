// ProjectGrid.tsx
import React from 'react';
import TileCard from './Tile';

const ProjectGrid: React.FC = () => {
    const projects = [

        {
            title: 'Sneii',
            year: '2025',
            images: ['/assets/gallery/sneii_showcase/sneii.jpg'],
            description:
                'Sneii is a design agency focused on creating a strong visual identity for buisnissess, backed by a solid web development using real code and modern frameworks.',
            link: 'https://sneii.no',
            visit: 'https://sneii.no',
            logo: [
            ],
            icon: '/assets/gallery/sneii_showcase/sneii.jpg',
        },
        {
            title: 'ChatSSB',
            year: '2025',
            images: ['/assets/gallery/chatssb_showcase/chatssbpp.png'],
            description: 'ChatSSB changes the way you interact with statistics, by allowing you to access all of SSBs data through simply asking a question. It further allows you to create custom visualizations based on your queries.',
            link: 'https://chatssb.no',
            visit: 'https://chatssb.no',
            logo: [
                '/languageIcons/vercel.svg',
                '/languageIcons/next-js.svg',
                '/languageIcons/firebase.svg',
                '/languageIcons/typescript.png',
                '/languageIcons/tailwind.png',
            ],
            icon: '/assets/gallery/chatssb_showcase/chatssbpp.png',
        },
        // {
        //     title: 'Eggen Arkitekter',
        //     year: '2024',
        //     images: ['/assets/gallery/eggen_showcase/eggen_showcase.jpg'],
        //     description:
        //         'eggen-arkitekter.no is a portfolio website for Eggen Arkitekter. The website is built with Sanity and Next.js, and is hosted on Vercel. The entire website is modular, and all media can be updated easily.',
        //     link: '/eggenarkitekter',
        //     visit: 'https://eggen-arkitekter.no',
        //     logo: [
        //         '/languageIcons/Sanity-square.png',
        //         '/languageIcons/vercel.svg',
        //         '/languageIcons/next-js.svg',
        //         '/languageIcons/typescript.png',
        //         '/languageIcons/tailwind.png',
        //     ],
        //     icon: '/assets/gallery/eggen_showcase/eggen_logo.png',
        // },
        // {
        //     title: 'EkteTid',
        //     year: '2024',
        //     images: ['/assets/gallery/ektetid_showcase/ektetid_showcase.jpg'],
        //     description:
        //         'EkteTid is a web application created as a tool for sharing vacation photos with loved ones during the trip itself. It features a firebase alert system, allowing for mobile notifications through a webapp.',
        //     link: '/ektetid',
        //     visit: 'https://ektetid.no',
        //     logo: [
        //         '/languageIcons/Sanity-square.png',
        //         '/languageIcons/vercel.svg',
        //         '/languageIcons/next-js.svg',
        //         '/languageIcons/typescript.png',
        //         '/languageIcons/tailwind.png',
        //         '/languageIcons/firebase.svg',
        //     ],
        //     icon: '/assets/gallery/ektetid_showcase/ektetid_logo_200.png',
        // },
        {
            title: 'Meløya.no',
            year: '2024',
            images: ['/assets/gallery/meloyadotno_showcase/macbook_meloyadotno.jpg'],
            description:
                'Meløya.no is a website for the local community on Meløya, an island in the north of norway with 100 inhabitants. The website has attracket 25 000 views from 8500 visitors in 6 months.',
            link: '/meloyadotno',
            visit: 'https://meloya.no',
            logo: [
                '/languageIcons/Sanity-square.png',
                '/languageIcons/vercel.svg',
                '/languageIcons/next-js.svg',
                '/languageIcons/firebase.svg',
                '/languageIcons/typescript.png',
                '/languageIcons/tailwind.png',
            ],
            icon: '/assets/gallery/meloyadotno_showcase/meloya_logo.png',
        },


        {
            title: 'Meløya App',
            year: '2025',
            images: ['/assets/gallery/meloyadotno_showcase/macbook_meloyadotno.jpg'],
            description:
                'Meløya App is a mobile app based on the meløya.no website, built with React Native. The app provides easy access to local news, events, and services for the Meløya community.',
            link: 'https://apps.apple.com/no/app/mel%C3%B8ya-app/id6756573425?l=nb',
            visit: 'https://apps.apple.com/no/app/mel%C3%B8ya-app/id6756573425?l=nb',
            logo: [
                '/languageIcons/Sanity-square.png',
                '/languageIcons/next-js.svg',
                '/languageIcons/firebase.svg',
                '/languageIcons/typescript.png',
            ],
            icon: '/assets/gallery/meloyadotno_showcase/meloyaapp.jpg',
        },
        {
            title: 'Svelta',
            year: '2025',
            images: ['/assets/gallery/meloyadotno_showcase/macbook_meloyadotno.jpg'],
            description:
                'Svelta is a social media for cooking and baking, allowing users to share recipies, follow other cooks, and find inspiration for their next meal.',
            link: 'https://svelta.no',
            visit: 'https://svelta.no',
            logo: [
                '/languageIcons/vercel.svg',
                '/languageIcons/next-js.svg',
                '/languageIcons/firebase.svg',
                '/languageIcons/typescript.png',
                '/languageIcons/tailwind.png',
            ],
            icon: '/assets/gallery/svelta_showcase/bread.jpg',
        },
        {
            title: 'Prosjekt Argus',
            year: '2024',
            images: ['/assets/gallery/meloyadotno_showcase/macbook_meloyadotno.jpg'],
            description:
                'Prosjekt Argus is my masters thesis project, focused on democratizing access to emergency weather data using modern web technologies and open data sources.',
            link: 'https://alertall.vercel.app/',
            visit: 'https://alertall.vercel.app/',
            logo: [

            ],
            icon: '/assets/gallery/argus_showcase/icon_argus.png',
        }
    ];

    return (
        <section className="w-full md:p-20 p-4">
            <h1>Current Work</h1>
            <h3 className=" mb-4">My current projects, being actively maintained</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                {projects.map((p, i) => (
                    <TileCard key={i} {...p} />
                ))}
            </div>
        </section>
    );
};

export default ProjectGrid;
