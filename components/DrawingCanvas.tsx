import { useRef, useState, useEffect } from 'react';

const DrawingCanvas = ({ onDraw }) => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    // Initialize the canvas with a white background
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white'; // Set canvas background to white
        ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the entire canvas
    }, []);

    // Start drawing when the mouse is pressed
    const startDrawing = (e) => {
        setIsDrawing(true);
        const ctx = canvasRef.current.getContext('2d');
        ctx.beginPath(); // Begin a new path to avoid continuous lines
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY); // Move to the position
    };

    // Stop drawing when the mouse is released
    const endDrawing = () => {
        setIsDrawing(false);
        const canvas = canvasRef.current;
        const imageDataURL = canvas.toDataURL(); // Capture the drawn image as a data URL
        onDraw(imageDataURL); // Send the image data to the parent component
    };

    // Draw function
    const draw = (e) => {
        if (!isDrawing) return;

        const ctx = canvasRef.current.getContext('2d');
        ctx.lineWidth = 5; // Set brush size
        ctx.lineCap = 'round'; // Round line endings
        ctx.strokeStyle = 'black'; // Set brush color to black

        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY); // Draw to the new mouse position
        ctx.stroke(); // Draw the line
    };

    return (
        <canvas
            ref={canvasRef}
            width={400}
            height={400}
            style={{ border: '1px solid black' }}
            onMouseDown={startDrawing}
            onMouseUp={endDrawing}
            onMouseMove={draw}
            onMouseLeave={endDrawing} // Stop drawing if the mouse leaves the canvas
        />
    );
};

export default DrawingCanvas;
