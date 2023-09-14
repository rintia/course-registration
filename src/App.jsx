
import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import { useEffect } from 'react';
import Cart from './Components/Cart/Cart';

function App() {
   const[allCourses, setAllCourses] = useState([]);
   useEffect(() => {
    fetch('./data.json')
    .then(res => res.json())
    .then(data => setAllCourses(data))
   },[])

  return (
    <>
      <h1 className='font-bold text-4xl text-center my-8'>Course Registration</h1>
      <div className='flex gap-6 max-w-screen-xl mx-auto'>
      <Courses allCourses={allCourses}></Courses>
      <Cart></Cart>
      </div>
    </>
  )
}

export default App
