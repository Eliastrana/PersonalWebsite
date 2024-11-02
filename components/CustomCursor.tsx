// components/CustomCursor.tsx
import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

const CustomCursor: React.FC = () => {
    const { theme } = useTheme();
    const cursorRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>();
    const previousTimeRef = useRef<number>();
    const positionRef = useRef({ x: 0, y: 0 });
    const targetPositionRef = useRef({ x: 0, y: 0 });
    const hoveredRef = useRef(false);

    useEffect(() => {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        const handleMouseMove = (e: MouseEvent) => {
            targetPositionRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.matches('a, button, input, textarea, select, [role="button"], .hoverable')) {
                hoveredRef.current = true;
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.matches('a, button, input, textarea, select, [role="button"], .hoverable')) {
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
                    cursorRef.current.style.backgroundColor = theme === 'dark' ? '#FFFFFF' : '#808080';
                    cursorRef.current.style.border = 'none';
                } else {
                    cursorRef.current.style.width = '24px';
                    cursorRef.current.style.height = '24px';
                    cursorRef.current.style.backgroundColor = 'transparent';
                    cursorRef.current.style.border = `2px solid ${theme === 'dark' ? '#FFFFFF' : '#808080'}`;
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
    }, [theme]);

    return (
        <div
            ref={cursorRef}
            className="pointer-events-none fixed top-0 left-0 z-50 rounded-full"
            style={{
                width: '24px',
                height: '24px',
                border: `2px solid ${theme === 'dark' ? '#FFFFFF' : '#808080'}`,
                transform: 'translate3d(0, 0, 0)',
                transition: 'background-color 150ms ease, border-color 150ms ease',
                willChange: 'transform',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
        ></div>
    );
};

export default CustomCursor;
