import Navbar from "../components/NavBar";
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


const Meloyadotno = () => {

    return (
        <Layout>

            <FadeInSection>

                <div className="flex flex-col md:flex-row items-center gap-2 mx-4  mb-12 md:mb-0">
                    <div className="w-2/3 md:w-1/2 mt-28 md:ml-20">
                        <Image src="/assets/gallery/meloyadotno_showcase/macbook_transparent.png" alt="eggen"
                               width={800}
                               height={500} className="mx-auto"/>
                    </div>
                    <div className="w-full md:w-1/2 mt-28">
                        <Image src="/assets/gallery/meloyadotno_showcase/meloya_logo.svg" alt="eggen" width={300}
                               height={300} className="mx-auto rounded-lg bg-white"/>
                    </div>


                </div>
            </FadeInSection>


            <FadeInSection>
                <div className="flex flex-col md:flex-row items-center gap-12 mx-4 md:m-28 mt-8 mb-12 md:mb-0">
                    <InfoTable data={{
                        "Customer": "Meløy Grendeutvalg",
                        "Description": "Website for local community",
                        "Duration": "2 months",
                        "Services": "Webdevelopment, design ",
                        "Technologies": "Next.js, Sanity CMS, Vercel, TypeScript, TailwindCSS",
                        "Status": "Finished",
                        "Collaborators": "None"
                    }}/>
                    <p className="w-full md:w-2/3 p-4 md:p-16 text-lg mt-4 md:mt-0">
                        Meløya.no is a website for the island Meløya. It is a local community website, where the inhabitants can find information about the island, and the events that are happening. The website is built with Next.js and Sanity CMS. The website is hosted on Vercel. The website is responsive and works on all devices. The moderators on the website have been thought how to use the CMS, and can therefore update the website themselves.
                    </p>
                </div>
            </FadeInSection>


            <FadeInSection>
                <div className="flex flex-col md:flex-row items-center gap-12 mx-4 md:m-28 mt-8 mb-12 md:mb-0">
                    <div className="w-full md:w-1/2 text-lg">
                        <h1 className="text-4xl mb-4">One place for everything</h1>
                        <p>
                            The website is the main hub for all information about the island. It is ran by the local community, and showcases the people and the events that are happening.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 mt-4 md:mt-0">
                        <Image src="/assets/gallery/meloyadotno_showcase/frontpage.png" alt="eggen" width={800} height={800} className="mx-auto"/>
                    </div>
                </div>
            </FadeInSection>


            <FadeInSection>
                <div className="flex flex-col md:flex-row items-center gap-12 mx-4 md:m-28 mt-8 mb-12 md:mb-0">

                    <div className="w-full md:w-1/2 mt-4 md:mt-0">
                        <Image src="/assets/gallery/meloyadotno_showcase/kalender.png" alt="ektetid" width={800}
                               height={800} className="mx-auto"/>
                    </div>

                    <div className="w-full md:w-1/2 text-lg">
                        <h1 className="text-4xl mb-4">Full control</h1>
                        <p>
                            The people are always aware of the different events that are happening on the island. The calendar is interactive and lets the user select different days. Days with an event are marked with a red dot to indicate that there is something happening.
                        </p>
                    </div>

                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="flex flex-col md:flex-row items-center gap-12 mx-4 md:m-28 mt-8 mb-12 md:mb-0">


                    <div className="w-full md:w-1/2 text-lg">
                        <h1 className="text-4xl mb-4">The map</h1>
                        <p>
                            When someone uploads a tourism attraction to the website, they are asked to add coordinates of the location. This is then used to place all the attractions on a map. The map is interactive and lets the user click on the different attractions to get more information about them. This makes the website a great tool for tourists that are visiting the island. The map also creates a overview of the island for those who live there.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 mt-4 md:mt-0">
                        <Image src="/assets/gallery/meloyadotno_showcase/kartet.png" alt="eggen" width={800}
                               height={800} className="mx-auto"/>
                    </div>


                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="flex flex-col md:flex-row items-center gap-12 mx-4 md:m-28 mt-8 mb-12 md:mb-0">


                    <div className="w-full md:w-1/2 mt-4 md:mt-0">
                        <Image src="/assets/gallery/meloyadotno_showcase/mobile.png" alt="eggen" width={300}
                               height={400} className="mx-auto"/>
                    </div>


                    <div className="w-full md:w-1/2 text-lg">
                        <h1 className="text-4xl mb-4">Quality of life</h1>
                        <p>
                            As well as a standard newspage and a page for the local info, the website also has multiple quiality of life features. The website has an adaptive light/darkmode that the user can toggle. The website also has a temperature feature that shows the current temperature on the island.
                        </p>
                    </div>


                </div>
            </FadeInSection>

        </Layout>
    )
}

export default Meloyadotno;
