// components/NavBar.tsx
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
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
    const [indicatorStyle, setIndicatorStyle] = useState<{
        left: number;
        width: number;
    }>({ left: 0, width: 0 });

    const router = useRouter();
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    // Update activeTab based on the current path
    useEffect(() => {
        const currentTab = tabs.findIndex(tab => tab.path === router.pathname);
        setActiveTab(currentTab !== -1 ? currentTab : null);
    }, [router.pathname, tabs]);

    // Function to update the indicator position and width
    const updateIndicator = (index: number | null) => {
        if (index === null || !tabRefs.current[index]) {
            return;
        }
        const tabElement = tabRefs.current[index];
        if (tabElement) {
            const { offsetLeft, offsetWidth } = tabElement;
            setIndicatorStyle({
                left: offsetLeft,
                width: offsetWidth,
            });
        }
    };

    // Update indicator when activeTab or hoveredTab changes
    useLayoutEffect(() => {
        if (hoveredTab !== null) {
            updateIndicator(hoveredTab);
        } else if (activeTab !== null) {
            updateIndicator(activeTab);
        } else {
            setIndicatorStyle({ left: 0, width: 0 });
        }
    }, [activeTab, hoveredTab]);

    return (
        <nav className="sticky top-0 z-50 bg-transparent animate-slide-down">
            <div className="flex justify-center py-4 bg-transparent">
                <div className="bg-transparent">
                    <div className="relative flex items-center bg-[#EEEEEE] dark:bg-[#121212] rounded-full p-1">
                        {tabs.map((tab, idx) => (
                            <Link href={tab.path} key={idx} passHref>
                                <button
                                    ref={el => {
                                        tabRefs.current[idx] = el;
                                    }}
                                    onMouseEnter={() => setHoveredTab(idx)}
                                    onMouseLeave={() => setHoveredTab(null)}
                                    onClick={() => setActiveTab(idx)}
                                    className={`relative z-10 flex-1 py-2 px-4 rounded-full transition-colors duration-300 focus:outline-none ${
                                        activeTab === idx
                                            ? 'text-black dark:text-white'
                                            : 'text-black dark:text-white'
                                    }`}
                                >
                                    {tab.name}
                                </button>
                            </Link>
                        ))}
                        {/* Indicator */}
                        {(hoveredTab !== null || activeTab !== null) && (
                            <div
                                className="absolute bottom-0 h-1 bg-black dark:bg-white rounded-full transition-all duration-300"
                                style={{
                                    left: indicatorStyle.left,
                                    width: indicatorStyle.width,
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
