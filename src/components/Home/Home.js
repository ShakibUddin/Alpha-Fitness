import React from 'react';
import useCourse from '../../hooks/useCourses';
import CourseCard from '../CourseCard/CourseCard';
import Hero from '../Hero/Hero';
const Home = () => {
    let [fundamentals, fullstack] = useCourse();
    return (
        <div className="flex flex-col items-center">
            <Hero></Hero>
            <p className="text-3xl font-extrabold">Trending Courses</p>
            <div className="w-full flex p-12 justify-center items-center flex-wrap">
                {/* displaying the trending courses */}
                {
                    fullstack.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                }
                {
                    fundamentals.map(course => {
                        if (course.trending) {
                            return <CourseCard key={course.id} course={course}></CourseCard>
                        }
                        else {
                            return null;
                        }
                    })
                }
            </div>
        </div >
    );
};

export default Home;