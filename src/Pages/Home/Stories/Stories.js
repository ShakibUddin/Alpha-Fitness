import React from 'react';
import Loading from 'react-loading-animation';
import useData from "../../../Hooks/useData";
import StoryCard from "./StoriesCard/StoriesCard";

const Stories = () => {
    const { stories } = useData();

    if (stories.length === 0) return (<Loading></Loading>);
    return (
        <div className="w-full flex flex-col my-20 justify-center">
            <p className="font-bold text-4xl uppercase p-3 mt-16 mb-2 text-blue-500 text-center">Recent Stories</p>
            <div className="flex flex-wrap justify-evenly">
                {
                    stories.map(item => <StoryCard key={item._id} data={item}></StoryCard>)
                }
            </div>
        </div>
    );
};

export default Stories;