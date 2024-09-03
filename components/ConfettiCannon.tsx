import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const ConfettiCannon: React.FC<{ trigger: boolean }> = ({ trigger }) => {
    const { width, height } = useWindowSize();

    return trigger ? (
        <Confetti
            width={width}
            height={height}
            numberOfPieces={500}
            recycle={false}
        />
    ) : null;
};

export default ConfettiCannon;
