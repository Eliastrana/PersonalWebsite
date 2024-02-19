import React from 'react';
import Slideshow from './slideshow';

const App: React.FC = () => {
    const slides = [
        { url: 'assets/blog/aare24/forside_aare24.png' },
        { url: 'assets/blog/lacrosse/lacrosse_forside.png' },
        { url: 'assets/blog/oppdal_ski/forside_oppdal.png' },
        { url: 'assets/blog/utmat/forside_cropped.jpeg' },
        { url: 'assets/blog/toga2023/forside_toga2023.png' },
        { url: 'assets/blog/aare24/DSCF8179.jpeg' },
        { url: 'assets/blog/steezOgGris/IMG_0199.jpeg' },
        { url: 'assets/blog/toga2023/DSCF7536.JPG' },
        { url: 'assets/blog/toga2023/DSCF7553.JPG' },
        { url: 'assets/blog/utmat/DSC05566.jpeg' },






        // Add more slides as needed
    ];

    return (
        <div className="app">
            <Slideshow slides={slides} />
        </div>
    );
};

export default App;
