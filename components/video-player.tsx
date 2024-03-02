import React from 'react';
import styles from "./Intro.module.css";

interface VideoPlayerProps {
    videoUrl: string;
    title: string;
    undertitle: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title, undertitle }) => {
    return (
        <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
            <video
                className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover ${styles.zoomedImage}`} // Applied zoomedImage class
                src={videoUrl}
                controls
                autoPlay
                loop
                muted
                style={{ zIndex: 1 }}
            ></video>
            <div className="absolute inset-0 flex flex-col justify-center items-center" style={{ zIndex: 2 }}>
                <h1 className={`${styles.customFont} text-white mb-8 text-left md:text-center md:w-1/2`}>{title}</h1>
                <h3 className={`${styles.customFontSmall} text-white text-left md:text-center md:w-1/2`}>{undertitle}</h3>
            </div>
        </div>
    );
};

export default VideoPlayer;
