import Navbar from "../components/Navbar";
import Layout from "../components/layout";
import Image from "next/image";
import InfoTable from "../components/InfoTable";
import { useInView } from 'react-intersection-observer';


const FadeInSection = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`transition-opacity duration-1000 ease-in-out ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
            {children}
        </div>
    );
};


const EkteTid = () => {

    return (
        <Layout>

            <FadeInSection>

            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col md:flex-row gap-8 md:gap-28 items-center">
                    <Image src="/assets/gallery/ektetid_showcase/mobil.png" width={300} height={300} alt="EkteTid logo" />
                    <h1 className="text-center md:text-left">EkteTid</h1>
                </div>
            </div>
            </FadeInSection>


            <FadeInSection>
                <div className="flex flex-col md:flex-row items-center gap-12 mx-4 md:m-28 mt-8 mb-12 md:mb-0">
                    <InfoTable data={{
                        "Customer": "None",
                        "Description": "Personal social media",
                        "Duration": "4 days + small updates",
                        "Services": "Webdevelopment, photography, design",
                        "Technologies": "Next.js, Sanity CMS, Vercel, TypeScript, TailwindCSS, Figma",
                        "Status": "Finished",
                        "Collaborators": "Sander Skofsrud, Improvements implemented during the projects usage (Dynamic textcolor, State management)."
                    }}/>
                    <p className="w-full md:w-2/3 p-4 md:p-16 text-lg mt-4 md:mt-0">
                        EkteTid is a personal project where I wanted to create a live gallery with my own photos. It was used during my summer vacation to display the events of the travel. The images were uploaded to Sanity CMS trough a mobile device, and it was therefore very easy to use. The website is built with Next.js and Sanity CMS. The website is hosted on Vercel. The website is responsive and works on all devices. The website is built with TypeScript and TailwindCSS.
                    </p>
                </div>
            </FadeInSection>


            <FadeInSection>
                <div className="flex flex-col md:flex-row items-center gap-12 mx-4 md:m-28 mt-8 mb-12 md:mb-0">
                    <div className="w-full md:w-1/2 text-lg">
                        <h1 className="text-4xl mb-4">Your own Social Media</h1>
                        <p>

                            EkteTid came from the want of a social media story, without the need of the established platforms. All aspects are controlled by the owner, and is not meant to replace real social media platforms.
                            The website is meant as a view-only page, with the Sanity CMS being the place where the user can upload images. Its use case works for friend-groups or families who want to share their vacation photos with each other, as it is supported with up to 20 users.
                            The name EkteTid is a homage BeReal, as its functionality of showing a main image with a selfie, as well as a description and location, is directly inspired by the app.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 mt-4 md:mt-0">
                        <Image src="/assets/gallery/ektetid_showcase/firenze_mist.png" alt="eggen" width={800} height={800} className="mx-auto"/>
                    </div>
                </div>
            </FadeInSection>


            <FadeInSection>
                <div className="flex flex-col md:flex-row items-center gap-12 mx-4 md:m-28 mt-8 mb-12 md:mb-0">

                    <div className="w-full md:w-1/2 mt-4 md:mt-0">
                        <Image src="/assets/gallery/ektetid_showcase/frontpage.png" alt="eggen" width={800}
                               height={800} className="mx-auto"/>
                    </div>

                    <div className="w-full md:w-1/2 text-lg">
                        <h1 className="text-4xl mb-4">Multiple albums — Multiple events</h1>
                        <p>

                            EkteTid has the ability to create multiple albums, each with their own set of images. This could be used for many different events, such as a wedding, a birthday, or a vacation.
                            The albums are created in the Sanity CMS, and the user can easily switch between them on the website.
                        </p>
                    </div>

                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="flex flex-col md:flex-row items-center gap-12 mx-4 md:m-28 mt-8 mb-12 md:mb-0">


                    <div className="w-full md:w-1/2 text-lg">
                        <h1 className="text-4xl mb-4">Robust user experience</h1>
                        <p>

                            The design of the webapplication has a focus on the user experience. The back and forth buttons are in reality covering each half of the screen, to make sure that tapping through the photos are easy.
                            Based on the color of the background on the top of the image, the text will adjust between black and white, as to always be at a sufficient contrast-level.
                            The design uses glassmorphism to let some of the background shine through the image, making the elements stand out as little as possible.
                            After a few seconds the UI-elements on the screen fade away to allow the user to only look at the image, and a tap anywhere on the screen brings back all the navigation elements.
                            The webapplication utilizes system dark mode, and will adjust the design based on the users system settings.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 mt-4 md:mt-0">
                        <Image src="/assets/gallery/ektetid_showcase/fanta.png" alt="eggen" width={800}
                               height={800} className="mx-auto"/>
                    </div>


                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="flex flex-col md:flex-row items-center gap-12 mx-4 md:m-28 mt-8 mb-12 md:mb-0">


                    <div className="w-full md:w-1/2 mt-4 md:mt-0">
                        <Image src="/assets/gallery/ektetid_showcase/lesmer.png" alt="eggen" width={800}
                               height={800} className="mx-auto"/>
                    </div>


                    <div className="w-full md:w-1/2 text-lg">
                        <h1 className="text-4xl mb-4">Creative freedom</h1>
                        <p>

                            In the description of the post, the user can write as much as they want. The tile allows for scrolling, making sure the user is not limited to a certain amount of content. The location and and date also lets the user add more information about the memory.
                            At the top of all albums, the user can see the amount of images in the album, as is with most story-based social media platforms. The webapplication also uses state to keep track of the current image, and will remember the image when the user switches between albums.
                            This makes sure that the user doesn't have to scroll through the whole album every time a new photo is added.

                        </p>
                    </div>


                </div>
            </FadeInSection>

        </Layout>
    )
}

export default EkteTid;
