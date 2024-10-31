// pages/slot.tsx
import React from 'react';
import SlotMachine from './SlotMachine';
import items from '../../public/json/languages.json';

const SlotViewer: React.FC = () => {
    return (
        <div className="items-center justify-center md:m-20 m-4">
            <SlotMachine items={items} />
        </div>
    );
};

export default SlotViewer;
