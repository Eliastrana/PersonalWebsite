import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from "../components/layout";

const workExperiences = [
    {
        title: 'Voulenteer Web Developer',
        company: 'Meløy Grendeutvalg',
        date: 'December 2024 - January 2025',
        location: 'Trondheim, Trøndelag, Norge',
        description: 'Developed a website in NEXT.js with Sanity CMS for the local community council in Meløya. Voluntary work.',
        isDeveloper: true,
    },
    {
        title: 'Webutvikler',
        company: 'Eggen arkitekter',
        date: 'June 2024 - September 2024',
        location: 'Trondheim, Trøndelag, Norge',
        description: 'Developed a homepage in NEXT.js with Sanity CMS for maintenance and updates. Created graphics animations, videos and portraits.',
        isDeveloper: true,
    },
    // {
    //     title: 'Butikkmedarbeider',
    //     company: 'Voice Norge AS',
    //     date: 'mai 2024 - Present',
    //     location: 'Trondheim, Trøndelag, Norge',
    //     description: 'Butikkansatt ved VIC City Lade.',
    //     isDeveloper: false,
    // },
    {
        title: 'Student assistant',
        company: 'NTNU',
        date: 'January 2024 - June 2024',
        location: 'Trondheim, Trøndelag fylke, Norge',
        description: 'Student assistant for Systemutvikling 1. The course focuses on development within teams, using Scrum and other techniques.',
        isDeveloper: true,
    },
    {
        title: 'Student assistant',
        company: 'Norges teknisk-naturvitenskapelige universitet (NTNU)',
        date: 'August 2023 - December 2023',
        location: 'Trondheim, Trøndelag fylke, Norge',
        description: 'Student assistant for "Programmering, nummerikk og sikkerhet" for Bachrlorstudents at NTNU',
        isDeveloper: true,
    },
    // {
    //     title: 'Betjening',
    //     company: 'Den Norske Turistforening',
    //     date: 'juni 2023 - august 2023',
    //     location: 'Trondheim og omegn',
    //     description: 'Ansatt på Jøldalshytta som betjening. Innførte et ryddigere system for oppbevaring av praktisk informasjon for de ansatte. Tok over rollen som kokk i korte perioder.',
    //     isDeveloper: false,
    // },
    // {
    //     title: 'Butikkmedarbeider',
    //     company: 'Coop Norge',
    //     date: 'juli 2020 - august 2022',
    //     location: 'Meløy kommune, Nordland fylke, Norge',
    //     description: 'Drift og vedlikehold av butikk, kundebehandling og varepåfylling.',
    //     isDeveloper: false,
    // },
];

const educationExperiences = [
    {
        title: 'Dataingeniør - Systemutvikling',
        company: 'Norges teknisk-naturvitenskapelige universitet (NTNU)',
        date: '2022 - 2025',
        location: 'Trondheim, Trøndelag, Norge',
        description: '',
        isDeveloper: true,
    },
    {
        title: 'Filmvitenskap',
        company: 'Norges teknisk-naturvitenskapelige universitet (NTNU)',
        date: '2021 - 2022',
        location: 'Trondheim, Trøndelag, Norge',
        description: 'Årsstudium i filmvitenskap.',
        isDeveloper: false,
    },
    {
        title: 'Upper Secondary School, Natural Science',
        company: 'Meløy videregående skole',
        date: '',
        location: '',
        description: '',
        isDeveloper: false,
    },
];

const ResumePage = () => {
    const [showWork, setShowWork] = useState(true);
    const [developerMode, setDeveloperMode] = useState(false);

    const toggleDeveloperMode = () => {
        setDeveloperMode(!developerMode);
    };

    const filteredExperiences = (showWork ? workExperiences : educationExperiences)
        .filter(exp => !developerMode || exp.isDeveloper);

    const whiteColor = '#EEEEEE';
    const blackColor = '#121212';

    return (
        <Layout>
            <div className="container mx-auto mt-32 p-4">
                <h1 className="md:text-12xl text-6xl text-left mb-8 italic dark:text-white">RESUME</h1>

                {/* Toggle Switch */}
                <div className="flex justify-center mb-4">
                    <div className="inline-flex rounded-full border-2 border-black dark:border-white">
                        <motion.button
                            className={`px-4 py-2 rounded-l-full ${
                                showWork
                                    ? 'bg-black text-white dark:bg-white dark:text-black'
                                    : 'bg-white text-black dark:bg-black dark:text-white'
                            }`}
                            onClick={() => setShowWork(true)}
                            whileTap={{ scale: 0.95 }}
                        >
                            Work
                        </motion.button>
                        <motion.button
                            className={`px-4 py-2 rounded-r-full ${
                                !showWork
                                    ? 'bg-black text-white dark:bg-white dark:text-black'
                                    : 'bg-white text-black dark:bg-black dark:text-white'
                            }`}
                            onClick={() => setShowWork(false)}
                            whileTap={{ scale: 0.95 }}
                        >
                            Education
                        </motion.button>
                    </div>
                </div>

                {/* Developer Mode Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex rounded-full border-2 border-black dark:border-white">
                        <motion.button
                            className={`px-4 py-2 rounded-full ${
                                developerMode
                                    ? 'bg-black text-white dark:bg-white dark:text-black'
                                    : 'bg-white text-black dark:bg-black dark:text-white'
                            }`}
                            onClick={toggleDeveloperMode}
                            whileTap={{ scale: 0.95 }}
                        >
                            {developerMode ? 'Developer: ON' : 'Developer: OFF'}
                        </motion.button>
                    </div>
                </div>

                <div className="relative">
                    <div className="border-l-2 border-black dark:border-white absolute left-1/2 transform -translate-x-1/2 h-full"></div>

                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={showWork ? 'work' : 'education'}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="space-y-8">
                                {filteredExperiences.map((exp, index) => (
                                    <div
                                        key={index}
                                        className={`relative flex items-center ${
                                            index % 2 === 0 ? 'justify-start' : 'justify-end'
                                        } w-full`}
                                    >
                                        <div className={`w-1/2 p-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>

                                            <h2 className={`${index % 2 === 0 ? 'text-right' : 'text-left'} md:text-6xl text-lg md:mb-4 leading-normal md:leading-tight `}>
                                                {exp.title}
                                            </h2>
                                            <p className="md:text-xl font-semibold text-gray-600 dark:text-gray-400">{exp.company}</p>
                                            <p className="text-gray-600 dark:text-gray-400">{exp.date}</p>
                                            {/*{exp.location && <p className="text-gray-500">{exp.location}</p>}*/}
                                            {exp.description && <p className="mt-2">{exp.description}</p>}
                                        </div>
                                        <div
                                            className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-black bg-black dark:border-white dark:bg-white`}
                                        ></div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </Layout>
    );
};

export default ResumePage;
