import PropTypes from 'prop-types';
const Cart = ({selectedCourse, totalCredit}) => {
    
    console.log(selectedCourse)
    return (
        <div className="w-1/4 p-8 shadow-lg">
            <div className=' border-b space-y-2 py-2 border-t'>
            <h1 className='font-bold text-2xl'>Course Name</h1>
           <ol className='list-decimal text-gray-600'>
           {
                selectedCourse.map((selectedCourse)=>
                    <li key={selectedCourse.id}>{selectedCourse.course_name}</li>
                )
            }
           </ol>
            </div>
            <div>
                
                <h1>Total Credit: {totalCredit}</h1>
            </div>
        </div>
    );
};
Cart.propTypes ={
    selectedCourse : PropTypes.array
}
export default Cart;