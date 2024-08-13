import React from 'react';
import Image from 'next/image';
import styles from "./Intro.module.css";

interface ImagePlayerProps {
    imageUrl: string;
    title: string;
    undertitle: string;
}

const ImagePlayer: React.FC<ImagePlayerProps> = ({ imageUrl, title, undertitle }) => {
    return (
        <div className={`relative w-full overflow-hidden ${styles.imageContainer}`} style={{ height: '100vh' }}>

            {/* Display the image */}
            <Image
                className={`absolute top-0 left-0 right-0 bottom-0 object-cover ${styles.imagePlayer}`}
                src={imageUrl}
                alt={title}
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                priority
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
                <h1 className={`${styles.customFont} text-white mb-8 text-center ${styles.fadeIn}`}>{title}</h1>
                <h3 className={`${styles.customFontSmall} text-white text-center ${styles.fadeIn}`}>{undertitle}</h3>
                <h3 className={`${styles.customFontSmall} text-white text-center ${styles.fadeIn}`}>↓</h3>
            </div>
        </div>
    );
};

export default ImagePlayer;
