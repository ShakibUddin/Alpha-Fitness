import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className="bg-black w-full h-52 flex items-center justify-center flex-col">
            <div className="w-1/3 flex justify-around flex-wrap">
                <SocialIcon url="https://www.facebook.com/profile.php?id=100011011868115" />
                <SocialIcon url="https://shakibuddinbhuiyan.medium.com/" />
                <SocialIcon url="https://github.com/ShakibUddin?fbclid=IwAR2RG4-MqYLetKV2oQdQkVDFrnMxVLA08cT14UaNHMTHFBhBC92H6LEQWoQ" />
                <SocialIcon url="linkedin.com/in/md-shakib-uddin" />
            </div>
            <p className="text-white text-xl">Copyright © 2021 CODEMASTER</p>
        </div>
    );
};

export default Footer;