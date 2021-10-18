import React from 'react';
import ProgressIndicator from 'react-loading-animation';
import useCourse from '../../hooks/useCourses';
import SpecificCoursesCards from '../SpecificCoursesCards/SpecificCoursesCards';

const Courses = () => {
    let [fundamentals, fullstack, frontend, mobile, backend] = useCourse();
    return (
        <div className="container justify-items-start flex-wrap">
            {
                //showing progress indicator untill data loads
                mobile.length === 0 ? <ProgressIndicator></ProgressIndicator> :
                    <div>
                        <SpecificCoursesCards data={fundamentals} dataTitle={"Fundamental Courses"}></SpecificCoursesCards>
                        <SpecificCoursesCards data={frontend} dataTitle={"Frontend Courses"}></SpecificCoursesCards>
                        <SpecificCoursesCards data={backend} dataTitle={"Backend Courses"}></SpecificCoursesCards>
                        <SpecificCoursesCards data={fullstack} dataTitle={"Fullstack Courses"}></SpecificCoursesCards>
                        <SpecificCoursesCards data={mobile} dataTitle={"Mobile App Development Courses"}></SpecificCoursesCards>
                    </div>
            }
        </div>
    );
};

export default Courses;