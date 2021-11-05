import React from 'react';
import { useHistory } from 'react-router';
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import useData from '../../../Hooks/useData';

const Slider = () => {
    const { trainings } = useData();
    const history = useHistory();
    SwiperCore.use([EffectCoverflow, Autoplay]);

    return (
        <div className="w-full mx-auto my-20 p-12 flex flex-wrap justify-center" >
            <Swiper
                className="w-full"
                effect={"coverflow"}
                autoplay={{ delay: 2000 }}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
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
                    trainings.map(item => <SwiperSlide>
                        <div style={{ minWidth: "300px", minHeight: "250px", width: "400px", height: "350px", backgroundImage: `url(${item.image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className="flex flex-col justify-center items-center text-center shadow-md  overflow-hidden  bg-blue-500 bg-blend-multiply cursor-pointer">
                            <p className="uppercase font-bold text-3xl py-3 text-white">{item.name}</p>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper >
        </div >
    )
}

export default Slider;