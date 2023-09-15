import PropTypes from 'prop-types';
import Course from '../Course/Course';
const Courses = ({allCourses, handleSelectedCourses}) => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 lg:w-3/4 mb-8'>
            {
                allCourses.map((course, idx)=><Course key={idx} course={course} 
                handleSelectedCourses={handleSelectedCourses}></Course>)
            }
        </div>
    );
};
Courses.propTypes ={
    allCourses: PropTypes.array.isRequired,
    handleSelectedCourses : PropTypes.func
}

export default Courses;