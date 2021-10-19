import { faLocationArrow, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import paymentImage from '../../images/payment.png';
const Footer = () => {
    return (
        <div className="bg-gray-700 w-full flex items-center justify-center flex-col">
            <div className="w-full flex flex-wrap justify-evenly items-center">
                <div className="w-2/4 p-5" style={{ minWidth: "300px" }}>

                    <p className="text-white  py-3">
                        <FontAwesomeIcon className="mr-2" icon={faLocationArrow} /> Level-3, 31, Awal Centre, Banani, Dhaka
                    </p>
                    <p className="text-white  py-3">
                        <FontAwesomeIcon className="mr-2" icon={faMailBulk} /> Official: official@alpha-fitness.com
                    </p>
                    <p className="text-white  py-3">
                        <FontAwesomeIcon className="mr-2" icon={faPhone} /> Helpline : 01200000000 (Available : 09:00am to 7:00pm)
                    </p>
                </div>
                <div className="w-2/4" style={{ minWidth: "300px" }}>
                    <img className="w-4/5 mx-auto p-5" src={paymentImage} alt="" />
                </div>
            </div>
            <div className="w-1/3 flex justify-around flex-wrap">
                <SocialIcon url="https://www.facebook.com/profile.php?id=100011011868115" />
                <SocialIcon url="https://shakibuddinbhuiyan.medium.com/" />
                <SocialIcon url="https://github.com/ShakibUddin?fbclid=IwAR2RG4-MqYLetKV2oQdQkVDFrnMxVLA08cT14UaNHMTHFBhBC92H6LEQWoQ" />
                <SocialIcon url="linkedin.com/in/md-shakib-uddin" />
            </div>
            <p className="text-white text-xl">Copyright © 2021 Alpha Fitness</p>
        </div>
    );
};

export default Footer;