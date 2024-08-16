import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "../components/Navbar";

const workExperiences = [
    {
        title: 'Webutvikler',
        company: 'Eggen arkitekter',
        date: 'juni 2024 - Present',
        location: 'Trondheim, Trøndelag, Norge',
        description: 'Utvikling av hjemmeside i NEXT.js med implementasjon av Sanity CMS for vedlikehold og oppdateringer.',
    },
    {
        title: 'Butikkmedarbeider',
        company: 'Voice Norge AS',
        date: 'mai 2024 - Present',
        location: 'Trondheim, Trøndelag, Norge',
        description: 'Butikkansatt ved VIC City Lade.',
    },
    {
        title: 'Student assistent',
        company: 'Norges teknisk-naturvitenskapelige universitet (NTNU)',
        date: 'januar 2024 - juni 2024',
        location: 'Trondheim, Trøndelag fylke, Norge',
        description: 'Student assistent for Systemutvikling 1. The course focuses on development within teams, using Scrum and other techniques.',
    },
    {
        title: 'Student assistent',
        company: 'Norges teknisk-naturvitenskapelige universitet (NTNU)',
        date: 'august 2023 - desember 2023',
        location: 'Trondheim, Trøndelag fylke, Norge',
        description: 'Student assistent for Programmering, nummerikk og sikkerhet for Bachelorstudenter ved NTNU.',
    },
    {
        title: 'Betjening',
        company: 'Den Norske Turistforening',
        date: 'juni 2023 - august 2023',
        location: 'Trondheim og omegn',
        description: 'Ansatt på Jøldalshytta som betjening. Innførte et ryddigere system for oppbevaring av praktisk informasjon for de ansatte. Tok over rollen som kokk i korte perioder.',
    },
    {
        title: 'Butikkmedarbeider',
        company: 'Coop Norge',
        date: 'juli 2020 - august 2022',
        location: 'Meløy kommune, Nordland fylke, Norge',
        description: 'Drift og vedlikehold av butikk, kundebehandling og varepåfylling.',
    },
];

const educationExperiences = [
    {
        title: 'Dataingeniør - Systemutvikling',
        company: 'Norges teknisk-naturvitenskapelige universitet (NTNU)',
        date: '2022 - 2025',
        location: 'Trondheim, Trøndelag, Norge',
        description: '',
    },
    {
        title: 'Filmvitenskap',
        company: 'Norges teknisk-naturvitenskapelige universitet (NTNU)',
        date: '2021 - 2022',
        location: 'Trondheim, Trøndelag, Norge',
        description: 'Årsstudium i filmvitenskap.',
    },
    {
        title: 'Videregående, Allmennfag',
        company: 'Meløy videregående skole',
        date: '',
        location: '',
        description: '',
    },
];

const ResumePage = () => {
    const [showWork, setShowWork] = useState(true);

    const toggleWorkEducation = () => {
        setShowWork(!showWork);
    };

    const experiences = showWork ? workExperiences : educationExperiences;

    return (
        <div className="container mx-auto mt-32 p-4">
            <Navbar />

            <h1 className="text-7xl font-bold text-center mb-8">Resume</h1>

            {/* Toggle Switch */}
            <div className="flex justify-center mb-12">
                <motion.button
                    className={`px-4 py-2 rounded-l-full ${showWork ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                    onClick={() => setShowWork(true)}
                    initial={{ backgroundColor: '#ccc' }}
                    animate={{ backgroundColor: showWork ? '#3B82F6' : '#E5E7EB', color: showWork ? '#fff' : '#000' }}
                    transition={{ duration: 0.3 }}
                >
                    Work
                </motion.button>
                <motion.button
                    className={`px-4 py-2 rounded-r-full ${!showWork ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                    onClick={() => setShowWork(false)}
                    initial={{ backgroundColor: '#ccc' }}
                    animate={{ backgroundColor: !showWork ? '#3B82F6' : '#E5E7EB', color: !showWork ? '#fff' : '#000' }}
                    transition={{ duration: 0.3 }}
                >
                    Education
                </motion.button>
            </div>

            <div className="relative">
                <div className="border-l-2 border-gray-300 absolute left-1/2 transform -translate-x-1/2 h-full"></div>

                <AnimatePresence mode='wait'>
                    <motion.div
                        key={showWork ? 'work' : 'education'}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full`}
                                >
                                    <div className={`w-1/2 p-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                        <h2 className="text-xl font-semibold">{exp.title}</h2>
                                        <p className="text-gray-600">{exp.company}</p>
                                        <p className="text-gray-500">{exp.date}</p>
                                        {exp.location && <p className="text-gray-500">{exp.location}</p>}
                                        {exp.description && <p className="mt-2">{exp.description}</p>}
                                    </div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white z-10"></div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ResumePage;
