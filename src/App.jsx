
import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import { useEffect } from 'react';
import Cart from './Components/Cart/Cart';
import toast,{Toaster} from 'react-hot-toast';

function App() {
   const[allCourses, setAllCourses] = useState([]);
   const[selectedCourse, setSelectedCourse] = useState([]);
   const[totalCredit, setTotalCredit] = useState(0);
   const[totalPrice, setTotalPrice] = useState(0);
   const[remaining, setRemaining] = useState(20);
   useEffect(() => {
    fetch('./data.json')
    .then(res => res.json())
    .then(data => setAllCourses(data))
   },[]);
   const handleSelectedCourses = (course) =>{
        const isExist = selectedCourse.find((item) => item.id == course.id);
        let credit = course.credit_hour;
        let cost = course.price;
        if (isExist){
         return toast.error('Already added');
        }
       else{
         selectedCourse.forEach((item) =>{
          credit = credit + item.credit_hour;
          cost = cost + item.price;
         });
         const totalRemaining = 20 - credit;
         if(credit > 20){
          return toast.error('Maximum Limit Reached')
         }
         setRemaining(totalRemaining);
         setTotalCredit(credit);
         setTotalPrice(cost);
        setSelectedCourse([...selectedCourse, course])
       }
   }

  return (
    <>
      <h1 className='font-bold text-4xl text-center my-8'>Course Registration</h1>
      <div className='md:flex gap-6 max-w-screen-xl mx-auto px-4'>
      <Toaster position="top-center"/>
      <Courses allCourses={allCourses} handleSelectedCourses={handleSelectedCourses}></Courses>
      <Cart selectedCourse={selectedCourse} totalCredit={totalCredit} remaining={remaining} 
      totalPrice={totalPrice}></Cart>
      </div>
    </>
  )
}

export default App
