import React from 'react';

const CourseCard = (props) => {
    //destructuring course data
    let { name, rating, price, image } = props.course;
    console.log(props.course)
    return (
        <div style={{ minWidth: "300px" }} className="w-96 m-6 flex flex-col justify-start shadow-2xl rounded-lg overflow-hidden">
            <img className="w-full h-60" src={image} alt="" />
            <div className="p-3">
                <p className="font-bold text-3xl py-3">{name}</p>

                <p className="font-bold text-blue-600 text-2xl py-3">${price}</p>
            </div>
        </div>
    );
};

export default CourseCard;