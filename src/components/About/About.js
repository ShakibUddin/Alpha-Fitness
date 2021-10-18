import React from 'react';


const About = () => {
    return (
        <div className="container flex flex-col justify-center">
            <p className="text-4xl font-bold p-12 text-center"><span className="text-blue-500 font-extrabold">CODEMASTER</span> is where we <span className="text-yellow-500">TRAIN</span> you to be a master of what you do</p>

            <div className="flex flex-wrap lg:flex-row flex-col my-32 justify-center items-center">

                <div className="lg:w-1/2 w-full text-black p-10">
                    <p className="text-3xl py-4 font-bold">Our Mission</p>
                    <p className="text-xl">Our mission is to train the world’s workforce in the careers of the future. We partner with leading technology companies to learn how technology is transforming industries, and teach the critical tech skills that companies are looking for in their workforce. With our powerful and flexible digital education platform, even the busiest learners can prepare themselves to take on the most in-demand tech roles.</p>
                </div>
            </div>
            <p className="text-3xl py-4 font-extrabold text-center">Our Global partners</p>
        </div>
    );
};

export default About;