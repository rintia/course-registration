import PropTypes from 'prop-types';
const Cart = ({selectedCourse, totalCredit, remaining, totalPrice}) => {
    
    console.log(selectedCourse)
    return (
        <div className="w-1/4">
            <div className='p-8 shadow-lg'>
            <h1 className='text-blue-600 font-semibold text-lg mb-2'>Credit Hour Remaining: {remaining} </h1>
            <div className=' border-b space-y-2 py-2 border-t'>
            <h1 className='font-bold text-lg'>Course Name</h1>
            
           <ol className='list-decimal text-gray-600'>
           {
                selectedCourse.map((selectedCourse)=>
                    <li key={selectedCourse.id}>{selectedCourse.course_name}</li>
                )
            }
           </ol>
            </div>
                
                <h1 className=' border-b text-gray-550 font-semibold py-2'>Total Credit Hour: {totalCredit}</h1>
                <h1 className=' text-gray-550 font-semibold py-2'>Total Price: {totalPrice} USD</h1>
            </div>
            
        </div>
    );
};
Cart.propTypes ={
    selectedCourse : PropTypes.array,
    totalCredit: PropTypes.number,
    remaining: PropTypes.number
}
export default Cart;