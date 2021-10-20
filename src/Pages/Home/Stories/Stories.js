import React from 'react';
import useData from "../../../Hooks/useData";
import StoryCard from "./StoriesCard/StoriesCard";

const Stories = () => {
    const { stories } = useData();
    return (
        <div className="w-full flex flex-col justify-center bg-white">
            <div className="flex flex-wrap justify-evenly">
                {
                    stories.map(item => <StoryCard key={item.id} data={item}></StoryCard>)
                }
            </div>
        </div>
    );
};

export default Stories;