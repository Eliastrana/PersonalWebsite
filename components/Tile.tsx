// Tile.tsx
import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type TileProps = {
    title: string;
    year: string;
    images: string[]; // not used (kept for compatibility)
    description: string;
    link: string;
    visit: string;
    logo: string[];
    icon: string;
};

const Tile: React.FC<TileProps> = ({
                                       title,
                                       year,
                                       description,
                                       link,
                                       visit,
                                       logo,
                                       icon,
                                   }) => {
    const safeLogos = useMemo(() => (logo ?? []).slice(0, 6), [logo]);

    const onVisit = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(visit, '_blank', 'noopener,noreferrer');
    };

    return (
        <Link
            href={link}
            className={[
                'block h-full rounded-2xl overflow-hidden',
                'bg-neutral-200 dark:bg-[#272727]',
                'text-neutral-900 dark:text-neutral-100',
            ].join(' ')}
            aria-label={`Open ${title}`}
        >
            <div className="p-4 sm:p-5 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                        <Image
                            src={icon}
                            alt={`${title} icon`}
                            width={44}
                            height={44}
                            className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg object-contain"
                        />

                        <div className="min-w-0">
                            <h3 className="text-base sm:text-lg font-bold tracking-tight truncate">
                                {title}
                            </h3>
                            <p className="text-xs sm:text-sm opacity-70">{year}</p>
                        </div>
                    </div>

                    <span className="text-sm opacity-60">→</span>
                </div>

                {/* Description */}
                <p className="mt-3 text-sm sm:text-[15px] leading-snug opacity-90 line-clamp-4">
                    {description}
                </p>

                {/* Tech logos */}
                {safeLogos.length > 0 && (
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                        {safeLogos.map((src, i) => (
                            <div
                                key={src + i}
                                className="h-8 w-8 rounded-lg flex items-center justify-center"
                                // subtle, theme-friendly borders
                            >
                                <Image
                                    src={src}
                                    alt={`${title} tech ${i + 1}`}
                                    width={18}
                                    height={18}
                                    className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
                                />
                            </div>
                        ))}
                    </div>
                )}

                {/* Footer actions */}
                <div className="mt-auto pt-4 flex items-center justify-between gap-3">
                    <button
                        onClick={onVisit}
                        className={[
                            'px-3 py-2 rounded-full text-sm font-medium',
                            'border-2 border-black/70 dark:border-white/70',
                            'bg-transparent',
                        ].join(' ')}
                        aria-label={`Visit ${title}`}
                    >
                        Explore ↗
                    </button>

                </div>
            </div>
        </Link>
    );
};

export default Tile;
