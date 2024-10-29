import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar: React.FC = () => {
    const tabs = [
        { name: 'Home', path: '/' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Blog', path: '/blog' },
        { name: 'Resume', path: '/resume' },
    ];

    const [hoveredTab, setHoveredTab] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<number | null>(null);
    const router = useRouter();

    // Update activeTab based on the current path
    useEffect(() => {
        const currentTab = tabs.findIndex(tab => tab.path === router.pathname);
        setActiveTab(currentTab !== -1 ? currentTab : null);
    }, [router.pathname]);

    return (
        <nav className="flex justify-center mt-4 bg-transparent absolute z-10 mx-auto content-center left-1/2 right-1/2">
            <div className="bg-transparent dark:bg-transparent md:bg-transparent">
            <div className="relative flex items-center bg-[#EEEEEE] dark:bg-[#121212] rounded-full p-1 border-2 border-black dark:border-white">
                {tabs.map((tab, idx) => (
                    <Link href={tab.path} key={idx} passHref>
                        <button
                            onMouseEnter={() => setHoveredTab(idx)}
                            onMouseLeave={() => setHoveredTab(null)}
                            className={`relative z-10 flex-1 py-2 px-4 rounded-full transition-colors duration-300 ${
                                activeTab === idx ? 'text-white dark:text-white' : 'text-black dark:text-white'
                            }`}
                        >
                            {tab.name}
                        </button>
                    </Link>
                ))}
                {(hoveredTab !== null || activeTab !== null) && (
                    <div
                        className="absolute inset-y-0 border-2 border-black dark:border-white rounded-full transition-all duration-300"
                        style={{
                            width: `${100 / tabs.length}%`,
                            left: `${(hoveredTab ?? activeTab) * (100 / tabs.length) + (50 / tabs.length)}%`, // Shift to center
                            transform: 'translateX(-50%)', // Center the indicator
                        }}
                    />
                )}
            </div>
            </div>
        </nav>
    );
};

export default NavBar;
