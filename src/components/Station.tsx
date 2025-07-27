import React from 'react';
import type {ImageMetadata} from "astro";

type StationProps = {
    piclink: ImageMetadata;
    time: string;
    name: string;
    text: string;
};

const Station = ({piclink, time, name, text}: StationProps ) => {
    return (
        <div>
            <picture>
                <source srcSet={piclink.src}/>
                <img src={piclink.src} alt="Doggo with glasses"/>
            </picture>
        </div>
    );
}

export default Station;