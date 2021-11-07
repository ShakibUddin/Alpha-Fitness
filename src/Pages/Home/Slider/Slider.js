import React, { useEffect, useState } from 'react';
import Loader from "react-loader-spinner";
import { useHistory } from 'react-router';
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import useData from '../../../Hooks/useData';
import useWindowDimensions from '../../../Hooks/useWindowDimensions';

const Slider = () => {
    const { trainings } = useData();
    const history = useHistory();
    const [slidesPerView, setSlidesPerView] = useState(3);
    const { height, width } = useWindowDimensions();
    SwiperCore.use([EffectCoverflow, Autoplay]);

    //setting slide number according to dimensions of screen
    useEffect(() => {
        if (width > 1500) {
            setSlidesPerView(4);
        }
        else if (width > 1000) {
            setSlidesPerView(3);
        }
        else if (width > 700) {
            setSlidesPerView(2);
        }
        else {
            setSlidesPerView(1);
        }
    }, [height, width])

    if (trainings.length === 0) return (<div className='w-full flex justify-center items-center h-96'>

        <Loader
            type="Bars"
            color="#3386FF"
            height={100}
            width={100}
            timeout={4000}
        />

    </div>);
    return (
        <div className="w-full mx-auto my-20 lg:p-12 md:p-4 p-1 flex flex-wrap justify-center" >
            <Swiper
                className="w-full"
                effect={"coverflow"}
                autoplay={{ delay: 2000 }}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={slidesPerView}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false
                }}
                loop={true}
                navigation
                onClick={() => { history.push("/trainings") }}
            >
                {
                    trainings.map(item => <SwiperSlide key={item._id}>
                        <div style={{ width: `${parseInt(width / 3)}`, height: "450px", backgroundImage: `url(${item.image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className="flex flex-col justify-center items-center text-center shadow-md  overflow-hidden  bg-blue-500 bg-blend-multiply cursor-pointer">
                            <p className="uppercase font-bold text-3xl py-3 text-white">{item.name}</p>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper >
        </div >
    )
}

export default Slider;