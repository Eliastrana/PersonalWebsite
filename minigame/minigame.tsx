import React, { useRef, useEffect, useState } from 'react';

interface GameObject {
    x: number;
    y: number;
    width: number;
    height: number;
    update: () => void;
    draw: (ctx: CanvasRenderingContext2D) => void;
}

class FallingObject implements GameObject {
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        this.speed = 5;
    }

    update() {
        this.y += this.speed;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Basket implements GameObject {
    x: number;
    y: number;
    width: number;
    height: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 20;
    }

    update() {
        // Update logic if needed
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

const MiniGame: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [score, setScore] = useState(0);
    const [basket, setBasket] = useState<Basket>(new Basket(150, 280));
    const [fallingObjects, setFallingObjects] = useState<FallingObject[]>([]);

    const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
        const canvasX = event.clientX - canvas.getBoundingClientRect().left;
        setBasket((prev) => new Basket(Math.max(0, Math.min(canvas.width - prev.width, canvasX - prev.width / 2)), prev.y));
    };

    const canvas = canvasRef.current;


    useEffect(() => {
        const ctx = canvas.getContext('2d');
        let animationFrameId: number;

        const render = () => {
            if (ctx) {
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                basket.draw(ctx);
                fallingObjects.forEach((obj) => {
                    obj.update();
                    obj.draw(ctx);
                    if (obj.y > canvas.height) {
                        setFallingObjects((prev) => prev.filter((o) => o !== obj));
                    } else if (
                        obj.x < basket.x + basket.width &&
                        obj.x + obj.width > basket.x &&
                        obj.y < basket.y + basket.height &&
                        obj.y + obj.height > basket.y
                    ) {
                        setScore((prevScore) => prevScore + 1);
                        setFallingObjects((prev) => prev.filter((o) => o !== obj));
                    }
                });
                animationFrameId = requestAnimationFrame(render);
            }
        };

        const spawnObject = () => {
            const x = Math.random() * (canvas.width - 30);
            const newObject = new FallingObject(x, 0);
            setFallingObjects((prev) => [...prev, newObject]);
        };


        const intervalId = setInterval(spawnObject, 1000);

        render();

        return () => {
            clearInterval(intervalId);
            cancelAnimationFrame(animationFrameId);
        };
    }, [basket, fallingObjects]);

    return (
        <div>
            <canvas
                ref={canvasRef}
                width={300}
                height={300}
                onMouseMove={handleMouseMove}
                style={{ border: '1px solid black' }}
            ></canvas>
            <div>Score: {score}</div>
        </div>
    );
};

export default MiniGame;
