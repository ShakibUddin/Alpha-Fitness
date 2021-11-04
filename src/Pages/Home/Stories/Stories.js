import React from 'react';
import useData from "../../../Hooks/useData";
import StoryCard from "./StoriesCard/StoriesCard";

const Stories = () => {
    const { stories } = useData();
    return (
        <div className="w-full flex flex-col justify-center">
            <p className="font-bold text-4xl uppercase p-3 mt-16 mb-2 text-blue-500 text-center">Recent Stories</p>
            <div className="flex flex-wrap justify-evenly">
                {
                    stories.map(item => <StoryCard key={item.id} data={item}></StoryCard>)
                }
            </div>
        </div>
    );
};

export default Stories;