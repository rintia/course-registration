import PropTypes from 'prop-types';
import Course from '../Course/Course';
const Courses = ({allCourses, handleSelectedCourses}) => {
    return (
        <div className='grid grid-cols-3 gap-4 w-3/4'>
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