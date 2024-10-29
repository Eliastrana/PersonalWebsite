// preloadImage.ts
export const preloadImage = (src: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.crossOrigin = 'Anonymous'; // Handle CORS if needed
        img.onload = () => {
            // Draw the image onto a canvas to get Data URL
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                reject(new Error('Failed to get canvas context'));
                return;
            }
            ctx.drawImage(img, 0, 0);
            const dataURL = canvas.toDataURL();
            resolve(dataURL);
        };
        img.onerror = () => {
            reject(new Error(`Failed to load image: ${src}`));
        };
    });
};
