// components/SlotMachine.tsx
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type Item = {
    id: number;
    icon: string;
    title: string;
    description: string;
    category: string;
};

type SlotMachineProps = {
    items: Item[];
};

const SlotMachine: React.FC<SlotMachineProps> = ({ items }) => {
    const [reels, setReels] = useState<[Item | null, Item | null, Item | null]>([null, null, null]);
    const [isSpinning, setIsSpinning] = useState(false);
    const [message, setMessage] = useState('');

    // Refs to store intervals for each reel
    const reelIntervals = useRef<NodeJS.Timeout[]>([]);

    // Function to get a random item
    const getRandomItem = () => {
        const randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex];
    };

    // Function to start spinning
    const spinReels = () => {
        if (isSpinning) return; // Prevent multiple spins

        setIsSpinning(true);
        setMessage('');

        // Start spinning each reel
        reelIntervals.current = [0, 1, 2].map((reelIndex) => {
            return setInterval(() => {
                setReels((prev) => {
                    const updatedReels = [...prev] as [Item | null, Item | null, Item | null];
                    updatedReels[reelIndex] = getRandomItem();
                    return updatedReels;
                });
            }, 100); // Change item every 100ms
        });

        // Stop spinning after certain durations
        const stopTimes = [2000, 2500, 3000]; // in milliseconds

        const finalResults: Item[] = [];

        stopTimes.forEach((time, index) => {
            setTimeout(() => {
                clearInterval(reelIntervals.current[index]);

                // Set the final item
                const finalItem = getRandomItem();
                finalResults[index] = finalItem;

                setReels((prev) => {
                    const updatedReels = [...prev] as [Item | null, Item | null, Item | null];
                    updatedReels[index] = finalItem;
                    return updatedReels;
                });

                // After all reels have stopped, check for win
                if (index === stopTimes.length - 1) {
                    // Check if all three final items have the same id
                    if (
                        finalResults[0].id === finalResults[1].id &&
                        finalResults[1].id === finalResults[2].id
                    ) {
                        setMessage(`🎉 You won with ${finalResults[0].title}! 🎉`);
                    } else {
                        setMessage('Try Again!');
                    }
                    setIsSpinning(false);
                }
            }, time);
        });
    };

    // Cleanup intervals on component unmount
    useEffect(() => {
        return () => {
            reelIntervals.current.forEach((interval) => clearInterval(interval));
        };
    }, []);

    return (
        <div className="flex flex-col items-center p-12 border-2 border-black dark:border-white rounded-xl">
            <h2 className="text-5xl font-extrabold mb-8">Languages and Frameworks</h2>

            <div className="flex md:space-x-12 space-x-2 mb-8">
                {[0, 1, 2].map((reelIndex) => (
                    <div
                        key={reelIndex}
                        className="md:w-64 md:h-64  w-24 h-24 border-2 border-black dark:border-white rounded-xl overflow-hidden relative group"
                    >
                        {/* Front Layer - Image */}
                        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-100 group-hover:opacity-0">
                            {reels[reelIndex] ? (
                                <Image
                                    src={reels[reelIndex]!.icon}
                                    alt={reels[reelIndex]!.title}
                                    width={120}
                                    height={120}
                                    objectFit="contain"
                                    className="mx-auto"
                                />
                            ) : (
                                <span className="text-5xl">---</span>
                            )}
                        </div>

                        {/* Back Layer - Information */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black dark:bg-white text-white text-center p-4 rounded-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                            {reels[reelIndex] ? (
                                <>
                                    <h3 className="text-3xl font-bold text-white dark:text-black">{reels[reelIndex]!.title}</h3>
                                    <p className="mt-2 text-sm text-white dark:text-black">{reels[reelIndex]!.description}</p>
                                    <p className="mt-1 text-xs italic text-white dark:text-black">{reels[reelIndex]!.category}</p>
                                </>
                            ) : (
                                <span className="text-5xl">---</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={spinReels}
                disabled={isSpinning}
                className={`px-10 py-5 dark:text-white border-black border-2 dark:border-white rounded-full text-2xl dark:hover:bg-white dark:hover:text-black transition ${
                    isSpinning ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black hover:text-white'
                }`}
            >
                {isSpinning ? 'Spinning...' : 'Spin'}
            </button>

            {message && (
                <p className="mt-8 text-3xl font-semibold">{message}</p>
            )}
        </div>
    );

};

export default SlotMachine;
