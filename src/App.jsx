
import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import { useEffect } from 'react';

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
      <Courses allCourses={allCourses}></Courses>
    </>
  )
}

export default App
