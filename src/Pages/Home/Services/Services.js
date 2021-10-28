import { faDumbbell, faSwimmer, faUsers } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    const gymServices = [
        {
            icon: faDumbbell,
            title: "Modern Equipment",
            details: "We have all the modern equipments you need to be the alpha."
        },
        {
            icon: faUsers,
            title: "Professional Trainers",
            details: "Let our expert trainers guide you."
        },
        {
            icon: faSwimmer,
            title: "Specialised Programmes",
            details: "We have special training modules for the passionate alphas"
        }
    ];
    return (
        <div className="w-full mx-auto flex flex-wrap justify-center absolute services-position">

            {
                gymServices.map((item, index) => <ServiceCard key={index} data={item}></ServiceCard>)
            }
        </div>
    );
};

export default Services;