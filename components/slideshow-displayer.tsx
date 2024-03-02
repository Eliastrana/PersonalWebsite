import React from 'react';
import Slideshow from './slideshow';

const App: React.FC = () => {
    const slides = [
        // { url: 'assets/blog/aare24/forside_aare24.png' },
        // { url: 'assets/blog/lacrosse/lacrosse_forside.png' },
        // { url: 'assets/blog/oppdal_ski/forside_oppdal.png' },
        // { url: 'assets/blog/utmat/forside_cropped.jpeg' },
        // { url: 'assets/blog/toga2023/forside_toga2023.png' },
        // { url: 'assets/blog/toga2023/DSCF7536.JPG' },
        // { url: 'assets/blog/toga2023/DSCF7553.JPG' },
        // { url: 'assets/blog/utmat/DSC05566.jpeg' },
        // { url: 'assets/gallery/hyttetur.png' },
        // { url: 'archive/photos/DSCF4325.JPG' },
        // { url: 'archive/photos/DSCF5050.JPG' },
        // { url: 'archive/photos/lacrossePortrait.jpeg' },
        // { url: 'archive/photos/panoramabil.jpeg' },
        // { url: 'archive/photos/statuedanmark.jpeg' },

        { url: 'assets/gallery/DSCF7127.jpeg' },

        // Add more slides as needed
    ];

    return (
        <div className="w-full">
            <Slideshow slides={slides} title="Elias Trana" undertitle="My portfolio displaying photography and development projects." />
        </div>
    );
};

export default App;
