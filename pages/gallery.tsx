import React, { useState } from 'react';
import Link from "next/link";
import Layout from "../components/layout";

const imagesSlider1 = [
    'assets/gallery/portraits/DSCF0583.jpeg',
    'assets/gallery/portraits/DSCF0646.jpeg',
    'assets/gallery/portraits/DSCF0664.jpeg',
    'assets/gallery/portraits/DSCF0878.jpeg',
    'assets/gallery/portraits/trygve.jpeg',
    'assets/gallery/portraits/DSCF8765.jpeg',
    'assets/gallery/portraits/DSCF9656.jpeg',
    'assets/gallery/portraits/DSCF9894.jpeg',
    'assets/gallery/portraits/Trekanten_Compressed-07.jpeg',
    // Add more images specific to the first slider
];

const imagesSlider2 = [
    'assets/gallery/DSCF9760.jpeg',
    'assets/gallery/DSCF9639.jpeg',
    'assets/gallery/landskape/DSCF0123.jpeg',
    'assets/gallery/landskape/DSCF0235.jpeg',
    'assets/gallery/landskape/DSCF1077.jpeg',
    'assets/gallery/landskape/DSCF9596.jpeg',
    'assets/gallery/landskape/DSCF9664.jpeg',
    'assets/gallery/landskape/DSCF9679.jpeg',
    // Add more images specific to the second slider
];

const imagesSlider3 = [
    'assets/blog/koben_35mm/000012830016.jpeg',
    'assets/blog/koben_35mm/000012830019.jpeg',
    'assets/gallery/35mm/film4.jpg',
    'assets/gallery/35mm/film1.jpg',
    'assets/gallery/35mm/film5.jpg',
    'assets/gallery/35mm/film2.jpg',
    'assets/gallery/35mm/film6.jpg',
    'assets/gallery/35mm/film3.jpg',
    // Add more images specific to the third slider
];

const GalleryPage = () => {
    return (
        <Layout>

        <div className="gallery-container">
            {/* Gallery Sliders */}
            <div className="gallery-wrapper ">
                <div className="">

                    {/*<Link href="/">*/}
                    {/*    <h1 className={`text-4xl font-bold transition-colors josefin-sans duration-300 text-black dark:text-white p-4`}>*/}
                    {/*        ET*/}
                    {/*    </h1>*/}
                    {/*</Link>*/}

                        <h1 className="dark:text-white md:text-12xl text-6xl italic p-4 mt-20">PORTRAITS</h1>
                </div>

                {/* First Slider */}
                <div className="gallery-slider">
                    <div className="gallery-track">
                        {imagesSlider1.map((src, index) => (
                            <div key={index} className="gallery-item">
                                <img
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="gallery-image"
                                />
                            </div>
                        ))}
                        {/* Duplicate images for seamless loop */}
                        {imagesSlider1.map((src, index) => (
                            <div key={`dup-${index}`} className="gallery-item">
                                <img
                                    src={src}
                                    alt={`Gallery Image Duplicate ${index + 1}`}
                                    className="gallery-image"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <h1 className="dark:text-white md:text-12xl text-6xl italic text-right md:mr-4 p-4">LANDSCAPE</h1>

                {/* Second Slider (Reversed) */}
                <div className="gallery-slider reverse">
                    <div className="gallery-track">
                        {imagesSlider2.map((src, index) => (
                            <div key={index} className="gallery-item">
                                <img
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="gallery-image"
                                />
                            </div>
                        ))}
                        {/* Duplicate images for seamless loop */}
                        {imagesSlider2.map((src, index) => (
                            <div key={`dup-${index}`} className="gallery-item">
                                <img
                                    src={src}
                                    alt={`Gallery Image Duplicate ${index + 1}`}
                                    className="gallery-image"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <h1 className="dark:text-white md:text-12xl text-6xl italic p-4">35MM</h1>

                {/* Third Slider */}
                <div className="gallery-slider">
                    <div className="gallery-track">
                        {imagesSlider3.map((src, index) => (
                            <div key={index} className="gallery-item">
                                <img
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="gallery-image"
                                />
                            </div>
                        ))}
                        {/* Duplicate images for seamless loop */}
                        {imagesSlider3.map((src, index) => (
                            <div key={`dup-${index}`} className="gallery-item">
                                <img
                                    src={src}
                                    alt={`Gallery Image Duplicate ${index + 1}`}
                                    className="gallery-image"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Styles */}
            <style jsx>{`
                .gallery-container {
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                }

                .gallery-slider {
          overflow: hidden;
        }

        .gallery-track {
          display: flex;
          width: calc(200%);
          animation: scroll 60s linear infinite;
        }

        .gallery-slider.reverse .gallery-track {
          animation-direction: reverse;
        }

        .gallery-item {
          flex-shrink: 0;
          margin-right: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gallery-image {
          width: auto;
          max-height: 50vh;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Mobile Styles */
        @media (max-width: 767px) {
          .gallery-slider {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch; /* Enable smooth scrolling on iOS */
          }

          .gallery-track {
            animation: none; /* Disable animation on mobile */
            width: auto; /* Let the track width adjust to content */
          }

          .gallery-item {
            margin-right: 10px;
          }

          /* Hide scrollbar if desired */
          .gallery-slider::-webkit-scrollbar {
            display: none;
          }
          .gallery-slider {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        }
      `}</style>
        </div>

        </Layout>

    );
};

export default GalleryPage;
