import ScrollableList from "./ScrollableList";
import React from "react";
import Image from "next/image";

const FrameworksListAndImage = () => {
    return (
        <div className="w-full   flex flex-col md:flex-row items-center md:items-start mb-28 ">
            <div className="flex flex-col md:flex-row items-center">
                <ScrollableList />
                <Image
                    src="/assets/gallery/boatfilm.jpg"
                    alt="frameworks"
                    width={900}
                    height={600}
                    className="rounded-lg p-4 md:p-0 mt-4 md:mt-0 md:ml-4 w-1/2 h-full"
                />
            </div>
        </div>
    );
}

export default FrameworksListAndImage;
