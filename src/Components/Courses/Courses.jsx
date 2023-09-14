import PropTypes from 'prop-types';
import Course from '../Course/Course';
const Courses = ({allCourses}) => {
    return (
        <div>
            <h1>Total Courses:{allCourses.length} </h1>
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