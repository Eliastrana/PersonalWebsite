// components/CustomCursor.tsx
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

const CustomCursor: React.FC = () => {
    const { theme } = useTheme();
    const cursorRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>();
    const positionRef = useRef({ x: 0, y: 0 });
    const targetPositionRef = useRef({ x: 0, y: 0 });
    const hoveredRef = useRef(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Detect if the device is a touch device
        const checkTouchDevice = () => {
            const hasTouch =
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0 ||
                (window.matchMedia &&
                    window.matchMedia('(pointer: coarse)').matches);
            setIsTouchDevice(hasTouch);
        };

        checkTouchDevice();

        // Optionally, you can listen to changes in touch capability
        window.addEventListener('resize', checkTouchDevice);

        return () => {
            window.removeEventListener('resize', checkTouchDevice);
        };
    }, []);

    useEffect(() => {
        if (isTouchDevice) return; // Do not proceed if it's a touch device

        const handleMouseMove = (e: MouseEvent) => {
            targetPositionRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.matches(
                    'a, button, input, textarea, select, [role="button"], .hoverable'
                )
            ) {
                hoveredRef.current = true;
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.matches(
                    'a, button, input, textarea, select, [role="button"], .hoverable'
                )
            ) {
                hoveredRef.current = false;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        const animate = () => {
            // Update the position smoothly
            const position = positionRef.current;
            const targetPosition = targetPositionRef.current;

            const dx = targetPosition.x - position.x;
            const dy = targetPosition.y - position.y;

            // Adjust the smoothing factor as needed (0 < smoothing < 1)
            const smoothing = 0.2;

            position.x += dx * smoothing;
            position.y += dy * smoothing;

            // Update the cursor position
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
                // Update cursor appearance based on hover state
                if (hoveredRef.current) {
                    cursorRef.current.style.width = '16px';
                    cursorRef.current.style.height = '16px';
                    cursorRef.current.style.backgroundColor =
                        theme === 'dark' ? '#FFFFFF' : '#808080';
                    cursorRef.current.style.border = 'none';
                } else {
                    cursorRef.current.style.width = '24px';
                    cursorRef.current.style.height = '24px';
                    cursorRef.current.style.backgroundColor = 'transparent';
                    cursorRef.current.style.border = `2px solid ${
                        theme === 'dark' ? '#FFFFFF' : '#808080'
                    }`;
                }
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [theme, isTouchDevice]);

    // Do not render the cursor if it's a touch device
    if (isTouchDevice) return null;

    return (
        <div
            ref={cursorRef}
            className="pointer-events-none fixed top-0 left-0 z-50 rounded-full"
            style={{
                width: '24px',
                height: '24px',
                border: `2px solid ${
                    theme === 'dark' ? '#FFFFFF' : '#808080'
                }`,
                transform: 'translate3d(0, 0, 0)',
                transition:
                    'background-color 150ms ease, border-color 150ms ease, width 150ms ease, height 150ms ease',
                willChange: 'transform, width, height, background-color, border-color',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                pointerEvents: 'none', // Ensure the cursor does not block interactions
            }}
        ></div>
    );
};

export default CustomCursor;
