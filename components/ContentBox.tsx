import React from 'react';

interface ContentBoxProps {
    title: string;
    text: string;
    imageUrl: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({ title, text, imageUrl }) => {

    return (
        <div className="container mx-auto p-4 max-w-4xl bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
                <p className="mt-2 text-sm md:text-base">{text}</p>
            </div>
            <div className="flex justify-center md:justify-end w-full md:w-auto">
                <img src={imageUrl} alt="Content Image" className="w-24 h-24 md:w-48 md:h-48 object-cover rounded-full" style={{ maxWidth: '100%', height: 'auto', aspectRatio: '1 / 1' }} />
            </div>
        </div>
    );
};

export default ContentBox;
