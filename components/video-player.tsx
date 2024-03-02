import React from 'react';
import styles from "./Intro.module.css";

interface VideoPlayerProps {
    videoUrl: string;
    title: string;
    undertitle: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title, undertitle }) => {
    return (
        <div className={`relative w-full overflow-hidden ${styles.videoContainer}`}>

            <video
                className={`absolute top-0 left-0 right-0 bottom-0 object-cover ${styles.videoPlayer} ${styles.videoPlayerMobile}`}
                src={videoUrl}
                autoPlay
                loop
                muted
                playsInline
            ></video>

            <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
                <h1 className={`${styles.customFont} text-white mb-8 text-center`}>{title}</h1>
                <h3 className={`${styles.customFontSmall} text-white text-center`}>{undertitle}</h3>
            </div>
        </div>
    );
};

export default VideoPlayer;
