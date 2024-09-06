import { useEffect, useState } from 'react';
import DrawingCanvas from './DrawingCanvas'; // Assuming you have a custom canvas component for drawing
import * as tf from '@tensorflow/tfjs';

const NumberRecognition = () => {
    const [recognizedText, setRecognizedText] = useState<string>('');
    const [model, setModel] = useState<tf.LayersModel | null>(null);

    useEffect(() => {
        // Load TensorFlow model when the component mounts
        const loadModel = async () => {
            try {
                const loadedModel = await tf.loadLayersModel('/models/model.json');
                setModel(loadedModel);
                console.log('Model loaded successfully');
            } catch (error) {
                console.error('Error loading the model:', error);
            }
        };

        loadModel();
    }, []);

    const recognizeDrawing = async (imageData: string) => {
        if (!model) {
            console.error('Model is not loaded yet');
            return;
        }

        const img = new Image();
        img.src = imageData;

        img.onload = async () => {
            try {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                // Step 1: Log raw pixel data
                const rawImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                console.log('Raw pixel data:', rawImageData.data);

                // Step 2: Convert image to tensor
                const tensor = tf.browser.fromPixels(rawImageData).toFloat();
                console.log('Tensor after fromPixels:', tensor.arraySync());

                // Step 3: Resize to 28x28
                const resizedTensor = tensor.resizeBilinear([28, 28]);
                console.log('Tensor after resizing:', resizedTensor.arraySync());

                // Step 4: Convert to grayscale if needed
                const grayscaleTensor = resizedTensor.mean(2);
                console.log('Tensor after converting to grayscale:', grayscaleTensor.arraySync());

                // Step 5: Normalize pixel values
                const normalizedTensor = grayscaleTensor.div(tf.scalar(255));
                console.log('Tensor after normalization:', normalizedTensor.arraySync());

                // Step 6: Add batch and channel dimensions
                const finalTensor = normalizedTensor.expandDims(0).expandDims(-1);
                console.log('Final tensor shape:', finalTensor.shape);
                console.log('Final tensor data:', finalTensor.arraySync());

                // Now predict
                const prediction = model.predict(finalTensor) as tf.Tensor;
                const predictedClass = (await prediction.argMax(1).data())[0];
                setRecognizedText(predictedClass.toString());
            } catch (error) {
                console.error('Error predicting with the model:', error);
            }
        };


        img.onerror = (error) => {
            console.error('Error loading image:', error);
        };
    };

    return (
        <div>
            <DrawingCanvas onDraw={recognizeDrawing} />
            <p>Recognized Number: {recognizedText}</p>
        </div>
    );
};

export default NumberRecognition;
