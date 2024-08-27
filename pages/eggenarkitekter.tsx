import Navbar from "../components/Navbar";
import Image from 'next/image';
import InfoTable from "../components/InfoTable";
import { useInView } from 'react-intersection-observer';
import Layout from "../components/layout";

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

const Eggenarkitekter = () => {

    return (
        <Layout>

        <div>

            <FadeInSection>
                <div className="flex flex-col md:flex-row items-center gap-2 mx-4  mb-12 md:mb-0">
                    <div className="w-2/3 md:w-1/2 mt-28">
                        <Image src="/assets/gallery/eggen_showcase/EA-logo-epost.png" alt="eggen" width={500} height={500} className="mx-auto"/>
                    </div>
                    <div className="w-full md:w-1/2 mt-28">
                        <Image src="/assets/gallery/eggen_showcase/mobilvisning.png" alt="eggen" width={500} height={500} className="mx-auto"/>
                    </div>
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="flex flex-col md:flex-row items-center gap-12 mx-4 md:m-28 mt-8 mb-12 md:mb-0">
                    <InfoTable data={{
                        "Customer": "Eggen Arkitekter",
                        "Description": "Website for architectural firm",
                        "Duration": "5 weeks",
                        "Services": "Webdevelopment, photography, design",
                        "Technologies": "Next.js, Sanity CMS, Vercel, TypeScript, TailwindCSS, Figma",
                        "Status": "Finalization stage",
                        "Collaborators": "Frid Ekseth, Main graphic designer"
                    }}/>
                    <p className="w-full md:w-2/3 p-4 md:p-16 text-lg mt-4 md:mt-0">
                        Eggen Arkitekter is an architectural firm located in Trondheim, Norway. They wanted a new website to
                        showcase their projects and services. The website is built with Next.js and Sanity CMS. The website
                        is hosted on Vercel. The website is responsive and works on all devices. The website is built with
                        TypeScript and TailwindCSS. The design is made in Figma. I stood for the development of the website,
                        photography, and design.
                    </p>
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="flex flex-col md:flex-row items-center gap-12 mx-4 md:m-28 mt-8 mb-12 md:mb-0">
                    <div className="w-full md:w-1/2 text-lg">
                        <h1 className="text-4xl mb-4">Sanity CMS — User Freedom</h1>
                        <p>
                            Sanity CMS is an integral part of this website, as it allows the user to modify almost all
                            content on the website.
                            In addition to the projects, people, the "aktuelt"-posts, the owners of the website can modify
                            all images and text on the website.
                            This ensures that they are not in need of further assistance when they want to update the
                            website.
                            Pages like "Tjenester" are dynamically rendered based on the amount of services found in the
                            Sanity database.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 mt-4 md:mt-0">
                        <Image src="/assets/gallery/eggen_showcase/folk.png" alt="eggen" width={800} height={800} className="mx-auto"/>
                    </div>
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="flex flex-col md:flex-row items-center gap-12 mx-4 md:m-28 mt-8 mb-12 md:mb-0">
                    <div className="w-full md:w-1/2 mt-4 md:mt-0">
                        <Image src="/assets/gallery/eggen_showcase/utvalgte_prosjekter.png" alt="eggen" width={800} height={800} className="mx-auto"/>
                    </div>
                    <div className="w-full md:w-1/2 text-lg">
                        <h1 className="mb-4 text-4xl">Customization & Control</h1>
                        <p>
                            The Sanity schemas used are interconnected to allow for a seamless experience when customizing
                            the look of the website.
                            When selecting the projects to be displayed on the front page, the user can select the projects
                            from a list of all projects in the database.
                            When posting an "aktuelt"-post, the user can select which employees are connected to the post. Within
                            the services page, the user can add custom links to other parts of the website.
                            This has been used to quickly display projects within a selected category, or show employees
                            within a specific field. All done from the content manager.
                        </p>
                    </div>
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="flex flex-col md:flex-row items-center gap-12 mx-4 md:m-28 mt-8 mb-12 md:mb-0">
                    <div className="w-full md:w-1/2 text-lg">
                        <h1 className="mb-4 text-4xl">Static Exports</h1>
                        <p>
                            Portfolio websites like these are naturally heavy on loading times, as they contain a lot of
                            projects with many images.
                            To counter this, the website is statically exported in areas where it is feasible, meaning that
                            the website is built once and then served as static files.
                            This means that the website is served faster and the user can quickly access the content they
                            are looking for. This is achieved through the features of Next.js.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 mt-4 md:mt-0">
                        <Image src="/assets/gallery/eggen_showcase/insidepost.png" alt="eggen" width={800} height={800} className="mx-auto"/>
                    </div>
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="flex flex-col md:flex-row items-center gap-12 mx-4 md:m-28 mt-8 mb-12 md:mb-0">
                    <div className="w-full md:w-1/2 mt-4 md:mt-0">
                        <Image src="/assets/gallery/eggen_showcase/performence.png" alt="eggen" width={800} height={800} className="mx-auto"/>
                    </div>
                    <div className="w-full md:w-1/2 text-lg">
                        <h1 className="mb-4 text-4xl">Performance — Accessibility & SEO</h1>
                        <p>
                            Through Chrome developer tools, the website has been optimized for performance. The website has a performance score of 100 on both mobile and desktop. The website is also optimized for SEO, with meta tags and alt tags on all images. The website is also accessible, with a focus on color contrast and keyboard navigation.
                        </p>
                    </div>
                </div>
            </FadeInSection>

        </div>
        </Layout>
    )
}

export default Eggenarkitekter;
