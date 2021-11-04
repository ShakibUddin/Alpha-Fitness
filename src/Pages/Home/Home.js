import React from 'react';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import useData from '../../Hooks/useData';
import instructor from '../../images/instructor.png';
import Hero from './Hero/Hero';
import MembershipFee from './MembershipFee/MembershipFee';
import Services from './Services/Services';
import Stories from './Stories/Stories';

const Home = () => {
    const { user } = useAuth();
    const { submitUserMessage } = useData();
    const history = useHistory();
    const handleAskNowClick = () => {
        if (user.email) {
            Swal.fire({
                title: 'Drop a message',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Submit',
                confirmButtonColor: "#3386FF",
                showLoaderOnConfirm: true,
                preConfirm: (query) => {
                    return submitUserMessage({ query, email: user.email });
                },
                allowOutsideClick: () => !Swal.isLoading()
            });
        }
        else {
            history.push('/signin');
        }
    }
    return (
        <div className="w-full flex flex-col items-center">
            <Hero></Hero>
            <div className="w-full max-h-full -mt-24">
                <Services></Services>
            </div>
            <div className="w-full flex flex-wrap my-48 justify-center items-center bg-blue-500">
                <div style={{ minWidth: "300px" }} className="lg:inline-block md:inline-block hidden lg:w-1/3 md:w-2/4">
                    <img className="w-full lg:-mt-36" src={instructor} alt="" />
                </div>
                <div style={{ minWidth: "300px" }} className="flex flex-col items-start justify-center lg:w-2/4 md:w-2/4 sm:w-full p-12">
                    <p className="text-3xl text-white font-bold mb-4 text-center lg:text-left md:text-left">Need Professional Help </p>
                    <p className="text-xl text-white mb-4 text-justify">We have trained professionals who will help you. They are here to show you the alpha way. Reach out to them today.</p>
                    <button className="lg:w-2/4 md:w-2/4 sm:w-3/4 mr-auto mx-auto  mt-4 text-center bg-white border-white border-2 rounded-md py-3 px-8 font-medium text-blue-500 hover:bg-blue-500 hover:text-white" onClick={handleAskNowClick}>Ask Now</button>
                </div>
            </div>
            <MembershipFee></MembershipFee>
            <Stories></Stories>
        </div >
    );
};

export default Home;