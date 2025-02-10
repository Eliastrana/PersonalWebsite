import WideBox from "./wideBox";
import React from "react";

const Aboutme = () => {
    return (
        <div className="flex justify-center mt-10">
                <div className="col-span-1 lg:col-span-2 2xl:col-span-1">
                    <div className="transition-shadow duration-300 border-2 border-black dark:border-white rounded-lg md:m-20 m-5">
                        <WideBox
                            imageUrl="./assets/gallery/profilbilde.jpg"
                            title="Welcome!"
                            undertitle=""
                            location={"📍 Trondheim, Norway"}
                            education={"🎓 Computer Science, NTNU"}
                            hobbies={"💻 Next.js, Sanity CMS"}
                            text={`My name is Elias Trana, and I am a student at NTNU Trondheim, studying Computer Engineering.
                    This is my personal website where I will be posting my projects, both personal and school related.
                    
                    This website contains all my work, easily sorted by categories. I hope you find something interesting here!`}
                            calltoaction="Take a look!"
                        />
                    </div>
                </div>

        </div>
    );
};

export default Aboutme;
