import React from 'react';
import Slideshow from './slideshow';

const App: React.FC = () => {
    const slides = [
        { url: 'assets/blog/aare24/forside_aare24.png' },
        { url: 'assets/blog/lacrosse/lacrosse_forside.png' },
        { url: 'assets/blog/oppdal_ski/forside_oppdal.png' },
        { url: 'assets/blog/utmat/forside_cropped.jpeg' },
        { url: 'assets/blog/toga2023/forside_toga2023.png' },




        // Add more slides as needed
    ];

    return (
        <div className="app">
            <Slideshow slides={slides} />
        </div>
    );
};

export default App;
