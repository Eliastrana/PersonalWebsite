import React, { useEffect, useRef } from 'react';

const ResponsiveTextOverImage = ({ imageUrl, text }) => {
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const adjustTextSize = () => {
            if (imageRef.current && textRef.current) {
                const imageWidth = imageRef.current.offsetWidth;
                // Use a smaller percentage of the image width for the font size
                // and apply a minimum and maximum font size for better control.
                const newTextSize = Math.max(16, Math.min(imageWidth * 0.8, 24)); // Example: 5% of the image width, min 16px, max 24px
                textRef.current.style.fontSize = `${newTextSize}px`;
            }
        };


        // Adjust text size on initial load
        adjustTextSize();

        // Add event listener to adjust text size on window resize
        window.addEventListener('resize', adjustTextSize);

        // Cleanup
        return () => window.removeEventListener('resize', adjustTextSize);
    }, []);

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <img ref={imageRef} src={imageUrl} alt="" style={{ width: '100%', height: 'auto' }} />
            <div ref={textRef} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                {text}
            </div>
        </div>
    );
};


export default ResponsiveTextOverImage;