// src/Name.tsx
import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import * as Matter from 'matter-js';

type SpawnItem = {
    id: number;
    type: 'word';
    content: string;
};

// List of words to spawn
const spawnItemsList: SpawnItem[] = [
    { id: 1, type: 'word', content: 'Elias' },
    { id: 2, type: 'word', content: 'Trana' },
    { id: 3, type: 'word', content: 'Developer' },
    { id: 4, type: 'word', content: 'Next.js' },
    { id: 5, type: 'word', content: 'Sanity CMS' },
    { id: 6, type: 'word', content: 'Tailwind' },
    { id: 7, type: 'word', content: 'Vue' },
    { id: 8, type: 'word', content: 'Photography' },
    // Add more words as needed
];

const Name: React.FC = () => {
    const sceneRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null); // Reference to the next section
    const engineRef = useRef<Matter.Engine | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const [isLightMode, setIsLightMode] = useState(false);
    const [showImage, setShowImage] = useState(true);

    // Add a ref to track dragging state
    const isDraggingRef = useRef(false);

    // Check system preference
    useEffect(() => {
        // Use system preference as default
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsLightMode(!prefersDark);

        // Optional: listen to theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            setIsLightMode(!e.matches);
        });
    }, []);

    useEffect(() => {
        if (!sceneRef.current) return;

        // Initialize engine and world
        const engine = Matter.Engine.create();
        engineRef.current = engine;
        const world = engine.world;
        world.gravity.y = 1; // Earth's gravity

        // Create renderer
        const render = Matter.Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: sceneRef.current.clientWidth,
                height: sceneRef.current.clientHeight,
                wireframes: false, // Set to true for debugging
                background: 'transparent',
            },
        });

        // Create ground
        const ground = Matter.Bodies.rectangle(
            sceneRef.current.clientWidth / 2,
            sceneRef.current.clientHeight + 25, // Positioned below the visible area
            sceneRef.current.clientWidth,
            50,
            { isStatic: true }
        );

        // Create left wall
        const leftWall = Matter.Bodies.rectangle(
            -25, // Positioned slightly outside the left boundary
            sceneRef.current.clientHeight / 2,
            50,
            sceneRef.current.clientHeight,
            { isStatic: true }
        );

        // Create right wall
        const rightWall = Matter.Bodies.rectangle(
            sceneRef.current.clientWidth + 25, // Positioned slightly outside the right boundary
            sceneRef.current.clientHeight / 2,
            50,
            sceneRef.current.clientHeight,
            { isStatic: true }
        );

        // Add ground and walls to the world
        Matter.World.add(world, [ground, leftWall, rightWall]);

        // Detect if the device is touch-capable
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        const cleanupObjects = [ground, leftWall, rightWall];

        if (!isTouchDevice) {
            // Add Mouse Control for non-touch devices
            const mouse = Matter.Mouse.create(render.canvas);
            const mouseConstraint = Matter.MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false, // Set to true for debugging
                    },
                },
            });
            Matter.World.add(world, mouseConstraint);

            // Keep the mouse in sync with rendering
            render.mouse = mouse;

            // Add event listeners for drag start and end
            Matter.Events.on(mouseConstraint, 'startdrag', () => {
                isDraggingRef.current = true;
            });

            Matter.Events.on(mouseConstraint, 'enddrag', () => {
                isDraggingRef.current = false;
            });

            // Add mouseConstraint to cleanup
            cleanupObjects.push(mouseConstraint);
        } else {
            // For touch devices, allow scrolling by setting touchAction
            render.canvas.style.touchAction = 'pan-y';
        }

        // Run the renderer
        Matter.Render.run(render);

        // Create runner
        const runner = Matter.Runner.create();
        Matter.Runner.run(runner, engine);

        // Handle window resize
        const handleResize = () => {
            if (!sceneRef.current) return;

            render.canvas.width = sceneRef.current.clientWidth;
            render.canvas.height = sceneRef.current.clientHeight;

            // Update ground position and size
            Matter.Body.setPosition(ground, {
                x: sceneRef.current.clientWidth / 2,
                y: sceneRef.current.clientHeight + 25,
            });

            // Update walls positions and sizes
            Matter.Body.setPosition(leftWall, {
                x: -25,
                y: sceneRef.current.clientHeight / 2,
            });

            Matter.Body.setPosition(rightWall, {
                x: sceneRef.current.clientWidth + 25,
                y: sceneRef.current.clientHeight / 2,
            });
        };

        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
            Matter.World.remove(world, cleanupObjects);
            Matter.Engine.clear(engine);
            render.canvas.remove();
            render.textures = {};
        };
    }, []);

    // Function to spawn a new word with high-resolution rendering
    const spawnWord = (x: number, y: number) => {
        if (!engineRef.current || !sceneRef.current) return;

        const engine = engineRef.current;
        const world = engine.world;

        const word = spawnItemsList[currentIndex % spawnItemsList.length]; // Cycle through words

        // Scale font size based on screen width
        const fontSize = Math.min(Math.max(sceneRef.current.clientWidth / 10, 40), 120); // Between 40px and 120px
        const wordWidth = word.content.length * fontSize * 0.6; // Adjust width based on font size and text length
        const wordHeight = fontSize; // Height matches font size

        // Create a rectangle body for the word
        const body = Matter.Bodies.rectangle(x, y, wordWidth, wordHeight, {
            restitution: 0.8,
            friction: 0.5,
            density: 0.001,
            label: `word-${word.id}`,
            render: {
                fillStyle: 'transparent',
                sprite: {
                    texture: '', // Set texture below
                    xScale: 1,
                    yScale: 1,
                },
            },
        });

        // Create a canvas to render the text
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (ctx) {
            const devicePixelRatio = window.devicePixelRatio || 1;

            // Set canvas size based on device pixel ratio for higher resolution
            canvas.width = wordWidth * devicePixelRatio;
            canvas.height = wordHeight * devicePixelRatio;

            // Scale the context to account for the increased size
            ctx.scale(devicePixelRatio, devicePixelRatio);

            // Clear the canvas
            ctx.clearRect(0, 0, wordWidth, wordHeight);

            // Set text properties
            ctx.fillStyle = isLightMode ? 'black' : 'white';
            ctx.font = `${fontSize}px 'Josefin Sans', sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // Render the text
            ctx.fillText(word.content, wordWidth / 2, wordHeight / 2);

            // Convert canvas to data URL
            const texture = canvas.toDataURL();

            // Assign the texture to the body's sprite
            body.render.sprite.texture = texture;
            body.render.sprite.xScale = 1 / devicePixelRatio;
            body.render.sprite.yScale = 1 / devicePixelRatio;
        }

        // Add the body to the world
        Matter.World.add(world, body);

        // Update the current index
        setCurrentIndex((prev) => prev + 1);
    };

    // Handle user clicks to spawn words
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isDraggingRef.current) return; // Don't spawn a word if dragging

        if (!sceneRef.current) return;

        const rect = sceneRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        spawnWord(x, y);

        // Hide the image after the first click
        if (showImage) {
            setShowImage(false);
        }
    };

    // Handle touch events for mobile devices
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!sceneRef.current) return;

        // Allow scrolling by not preventing default
        if (isDraggingRef.current) return;

        const rect = sceneRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        spawnWord(x, y);

        // Hide the image after the first click
        if (showImage) {
            setShowImage(false);
        }
    };

    // Function to handle scroll down
    const handleScrollDown = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div
                ref={sceneRef}
                onClick={handleClick}
                onTouchStart={handleTouchStart}
                className="animated-border"
                style={{
                    position: 'relative',
                    margin: '0 auto',
                    width: '90%',
                    height: '80vh',
                    cursor: 'pointer',
                    touchAction: 'pan-y',
                    overflow: 'hidden',
                    // Remove border from inline styles
                    // border: `3px solid ${isLightMode ? 'black' : 'white'}`,
                    // borderRadius: '10px',
                }}
            >
                {showImage && (
                    <img
                        src="/assets/logo/clickme3.gif" // Replace with the path to your image
                        alt="Click the screen"
                        style={{
                            position: 'absolute',
                            width: '200px',
                            height: 'auto',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            filter: 'grayscale(100%)',
                            opacity: 0,
                            animation: 'fadeIn 5s forwards',
                            pointerEvents: 'none', // Allow clicks to pass through the image
                        }}
                    />
                )}

                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>

                {/* Styles including the border animation */}
                <style jsx>{`
                    .animated-border {
                        position: relative;
                        border-radius: 10px;
                    }

                    .animated-border::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border: 3px solid ${isLightMode ? 'black' : 'white'};
                        border-radius: 10px;
                        box-sizing: border-box;
                        pointer-events: none;
                        animation: borderAnimation 2s forwards;
                        clip-path: polygon(0 0, 0 0, 0 0, 0 0);
                    }

                    @keyframes borderAnimation {
                        0% {
                            clip-path: polygon(0 0, 0 0, 0 0, 0 0);
                        }
                        25% {
                            clip-path: polygon(0 0, 100% 0, 0 0, 0 0);
                        }
                        50% {
                            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 0);
                        }
                        75% {
                            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
                        }
                        100% {
                            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                        }
                    }

                    /* Fade-in animation */
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }
                `}</style>
            </div>

            {/* Next Section */}
            <div ref={scrollRef} style={{ height: '10vh' }}>
                <button
                    onClick={handleScrollDown}
                    style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                    }}
                    aria-label="Scroll down"
                >
                    <svg
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isLightMode ? 'black' : 'white'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                </button>
                {/* Add more content as needed */}
            </div>
        </>
    );
};

export default Name;
