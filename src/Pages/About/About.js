import React from 'react';
import gym1 from '../../images/gym-1.jfif';
import gym2 from '../../images/gym-2.jfif';
import gym3 from '../../images/gym-3.jfif';
import gym4 from '../../images/gym-4.jfif';
import gym from '../../images/gym.jpg';
const About = () => {
    const gymImages = [gym1, gym2, gym3, gym4];
    return (
        <div className="w-full mx-auto flex flex-col items-center ">
            <div className="w-full h-96 object-cover bg-fixed bg-blue-600 bg-blend-multiply" style={{ backgroundImage: `url(${gym})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <p className="w-full font-bold text-3xl lg:text-7xl md:text-5xl text-center  py-3 text-yellow-400 uppercase">DREAM  PLAN  EXECUTE</p>
            </div>
            <div className="w-full flex flex-wrap justify-evenly">
                <div className="lg:w-2/4 w-full flex flex-col items-center" style={{ minWidth: "250px" }}>
                    <p className="font-bold lg:text-5xl md:text-4xl text-3xl py-3 text-cente text-black my-10">OUR STORY</p>
                    <p className="w-full p-4 mb-20 ">Alpha Fitness was founded in 2002 as a family owned and operated business. The Alpha Fitness founders didn’t want it to be just another gym equipment retailer - they wanted to be the best in the industry and set their minds to doing so! Since its birth, Alpha Fitness has grown into one of Australias largest fitness equipment retailers having helped over 50,000 customers live longer, happier and healthier lives</p>
                </div>
                <div className="lg:w-2/4 w-full flex flex-col items-center" style={{ minWidth: "250px" }}>
                    <p className="font-bold lg:text-5xl md:text-4xl text-3xl py-3 text-cente text-black my-10">What we do</p>
                    <p className="w-full p-4 mb-20 ">We want to help you live a fit and healthy lifestyle! We do this by helping you find the most suitable equipment for your home gym, studio or commercial gym, keeping your budget, lifestyle and fitness goals in mind. We stock a wide range of gym equipment, with strength equipment, cardio, cross training and so much more. Our awesome team is always keen to help, so please call us to discuss your needs.</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {
                    gymImages.map((image, index) => <img key={index} className="w-1/4" style={{ minWidth: "300px" }} src={image} alt="" />)
                }
            </div>
            <div className="w-full flex flex-wrap justify-evenly">
                <div className="lg:w-2/4 w-full flex flex-col items-center" style={{ minWidth: "250px" }}>
                    <p className="font-bold lg:text-5xl md:text-4xl text-3xl py-3 text-cente text-black my-10">Customer Service</p>
                    <p className="w-full p-4 mb-20 ">At Alpha Fitness, customers are at the centre of what we do and why we do it! We have a team of knowledgeable sales representatives who are ready to assist you with your gym equipment needs. Our crew will be able to answer your questions from honest product information to the best way to integrate a piece of equipment into your workout routine. We work hard to ensure we have strong relationships with our suppliers, bringing you the best possible prices in the industry. In fact, if you find a better price on one of our core range of products, we will match it as a part of our brand promises.</p>
                </div>
                <div className="lg:w-2/4 w-full flex flex-col items-center" style={{ minWidth: "250px" }}>
                    <p className="font-bold lg:text-5xl md:text-4xl text-3xl py-3 text-cente text-black my-10">Culture</p>
                    <p className="w-full p-4 mb-20 ">At Alpha Fitness, we believe that building a positive culture is incredibly important. The business is underpinned by six core values which speak of our commitment to our customers, staff, the industry and our business as a whole. We believe in encouraging, supporting, challenging, learning and growing to be the best. At Alpha Fitness, every morsel of feedback is a nugget of shiny gold because it gives us the opportunity to provide the best customer experience.</p>
                </div>
            </div>
        </div>
    );
};

export default About;