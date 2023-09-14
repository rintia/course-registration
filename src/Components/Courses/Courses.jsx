import PropTypes from 'prop-types';
import Course from '../Course/Course';
const Courses = ({allCourses}) => {
    return (
        <div className='grid grid-cols-3 gap-4 w-3/4'>
            {
                allCourses.map((course, idx)=><Course key={idx} course={course}></Course>)
            }
        </div>
    );
};
Courses.propTypes ={
    allCourses: PropTypes.array.isRequired
}

export default Courses;