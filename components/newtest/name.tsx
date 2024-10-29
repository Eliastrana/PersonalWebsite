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
    { id: 7, type: 'word', content: 'React' },
    { id: 8, type: 'word', content: 'Photography' },
    // Add more words as needed
];

const Name: React.FC = () => {
    const sceneRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const [isLightMode, setIsLightMode] = useState(false);

    // Check system preference or Tailwind dark class
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
            { isStatic: true, render: { fillStyle: '#060a19' } }
        );

        // Create left wall
        const leftWall = Matter.Bodies.rectangle(
            -25, // Positioned slightly outside the left boundary
            sceneRef.current.clientHeight / 2,
            50,
            sceneRef.current.clientHeight,
            { isStatic: true, render: { fillStyle: '#060a19' } }
        );

        // Create right wall
        const rightWall = Matter.Bodies.rectangle(
            sceneRef.current.clientWidth + 25, // Positioned slightly outside the right boundary
            sceneRef.current.clientHeight / 2,
            50,
            sceneRef.current.clientHeight,
            { isStatic: true, render: { fillStyle: '#060a19' } }
        );

        // Add ground and walls to the world
        Matter.World.add(world, [ground, leftWall, rightWall]);

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
            Matter.Body.setVertices(ground, [
                { x: 0, y: sceneRef.current.clientHeight },
                { x: sceneRef.current.clientWidth, y: sceneRef.current.clientHeight },
                { x: sceneRef.current.clientWidth, y: sceneRef.current.clientHeight + 50 },
                { x: 0, y: sceneRef.current.clientHeight + 50 },
            ]);

            // Update walls positions and sizes
            Matter.Body.setPosition(leftWall, {
                x: -25,
                y: sceneRef.current.clientHeight / 2,
            });
            Matter.Body.setVertices(leftWall, [
                { x: -50, y: 0 },
                { x: 0, y: 0 },
                { x: 0, y: sceneRef.current.clientHeight },
                { x: -50, y: sceneRef.current.clientHeight },
            ]);

            Matter.Body.setPosition(rightWall, {
                x: sceneRef.current.clientWidth + 25,
                y: sceneRef.current.clientHeight / 2,
            });
            Matter.Body.setVertices(rightWall, [
                { x: sceneRef.current.clientWidth, y: 0 },
                { x: sceneRef.current.clientWidth + 50, y: 0 },
                { x: sceneRef.current.clientWidth + 50, y: sceneRef.current.clientHeight },
                { x: sceneRef.current.clientWidth, y: sceneRef.current.clientHeight },
            ]);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
            Matter.World.remove(engine.world, [ground, leftWall, rightWall]);
            Matter.Engine.clear(engine);
            render.canvas.remove();
            render.textures = {};
        };
    }, []);

    // Function to spawn a new word
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
            restitution: 1,
            friction: 0.3,
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
        canvas.width = wordWidth;
        canvas.height = wordHeight;
        const context = canvas.getContext('2d');
        if (context) {
            context.fillStyle = isLightMode ? 'black' : 'white';
            context.font = `${fontSize}px Josefin Sans`; // Dynamically set font size
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(word.content, wordWidth / 2, wordHeight / 2);

            const texture = canvas.toDataURL();
            (body.render as Matter.RenderOptions['render']).sprite.texture = texture;
            (body.render as Matter.RenderOptions['render']).fillStyle = 'transparent';
        }

        // Add the body to the world
        Matter.World.add(world, body);

        // Update the current index
        setCurrentIndex((prev) => prev + 1);
    };

    // Handle user clicks to spawn words
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!sceneRef.current) return;

        const rect = sceneRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        spawnWord(x, y);
    };

    return (
        <div
            ref={sceneRef}
            onClick={handleClick}
            style={{
                position: 'relative',
                margin: '0 auto',
                width: '90%',
                height: '80vh',
                cursor: 'pointer',
            }}
        >
            <Head>
                <title>Physics Words</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

        </div>
    );
};

export default Name;
