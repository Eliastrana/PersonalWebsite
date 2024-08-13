import React from 'react';
import ImageDisplayer from './image-displayer';

const App: React.FC = () => {
    return (
        <div className="w-full">

            <ImageDisplayer
                imageUrl="/assets/gallery/DSCF9446.jpeg"
                title="Elias Trana"
                undertitle="A portfolio displaying System Development, Writing, Graphics and Photography."
            />
        </div>
    );
};

export default App;
