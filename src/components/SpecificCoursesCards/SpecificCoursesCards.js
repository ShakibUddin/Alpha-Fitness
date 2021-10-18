import React from 'react';
import CourseCard from '../CourseCard/CourseCard';

const SpecificCoursesCards = (props) => {
    let data = props.data;
    let title = props.dataTitle;
    console.log(data);
    return (
        <div className="mb-24 border-b-2 border-gray-400">
            <div className="flex justify-start flex-col">
                <p className="text-3xl font-extrabold">{title}</p>
                <div className="flex justify-start flex-wrap">
                    {
                        data?.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SpecificCoursesCards;