import React, { useState } from 'react';

const RadioButtonGroup = () => {
    const [selectedOption, setSelectedOption] = useState('CODE');

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };

    // Function to determine button styling based on the active state
    const buttonStyle = (optionValue: string) =>
        `cursor-pointer px-4 py-2 border-2 border-transparent rounded-full text-sm font-medium 
    ${selectedOption === optionValue ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`;

    return (
        <div className="flex space-x-2">
            {["ALL", "CODE", "PHOTO", "GRAPHIC"].map((option) => (
                <label key={option} className={buttonStyle(option)}>
                    <input
                        type="radio"
                        name="option"
                        value={option}
                        checked={selectedOption === option}
                        onChange={handleOptionChange}
                        className="sr-only" // Hides the default radio button visually but keeps it accessible
                    />
                    {option}
                </label>
            ))}
        </div>
    );
};

export default RadioButtonGroup;
