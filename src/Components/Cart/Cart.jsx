import PropTypes from 'prop-types';
const Cart = ({selectedCourse}) => {
    console.log(selectedCourse)
    return (
        <div className="w-1/4 ">
            <h1>Cart Here</h1>
           <ol className='list-decimal'>
           {
                selectedCourse.map((selectedCourse)=>
                    <li key={selectedCourse.id}>{selectedCourse.course_name}</li>
                )
            }
           </ol>
        </div>
    );
};
Cart.propTypes ={
    selectedCourse : PropTypes.array
}
export default Cart;