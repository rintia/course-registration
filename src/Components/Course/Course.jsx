import PropTypes from 'prop-types';
import { BsBook } from 'react-icons/bs';
import {FiDollarSign} from 'react-icons/fi'
const Course = ({course, handleSelectedCourses}) => {
   const{image, course_name, price, credit_hour, details} =course;
    return (
        <div className= ' relative shadow-xl py-4 px-4 rounded space-y-2'>
           <div className='flex justify-center'>
             <img src={image} alt="" className='rounded w-full' />
           </div>
           <div className=''>
           <div>
            <h1 className='font-semibold'>{course_name}</h1>
           </div>
           <div>
           <p>{details}</p>
           </div>
           </div>
           <div className='space-y-2 '>
           <div className='flex justify-between'>
           <div className='flex items-center gap-2'> <FiDollarSign></FiDollarSign><h1>Price: {price}</h1></div>
           <div className='flex items-center gap-2'> <BsBook></BsBook><h1> Credit: {credit_hour} hr</h1></div>
           </div>
           <div className='items-end'>
            <button 
            onClick={() => handleSelectedCourses(course)}
            className='text-white font-medium py-2 w-full rounded bg-blue-600'>Select</button>
           </div>
           </div>
        </div>
    );
};
Course.propTypes ={
    course: PropTypes.object.isRequired,
    handleSelectedCourses : PropTypes.func
}
export default Course;