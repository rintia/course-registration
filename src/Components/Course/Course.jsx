import PropTypes from 'prop-types';
const Course = ({course}) => {
   const{image, course_name, price, credit_hour, details} =course;
    return (
        <div className='w-96 shadow-xl py-4 px-8 rounded space-y-2'>
           <div className='flex justify-center'>
             <img src={image} alt="" className='rounded w-full' />
           </div>
           <div>
            <h1 className='font-semibold text-2xl'>{course_name}</h1>
           </div>
           <p>{details}</p>
           <div className='flex justify-between'>
           <h1>Price: {price}</h1>
           <h1>Credit: {credit_hour} hr</h1>
           </div>
           <div>
            <button className='text-white font-medium py-2 w-full rounded bg-blue-600'>Select</button>
           </div>
        </div>
    );
};
Course.propTypes ={
    course: PropTypes.object.isRequired
}
export default Course;