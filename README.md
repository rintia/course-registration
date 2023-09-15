# React + Vite

Question 1: Add at least 3 Project features. 

Answer: Some project features are given below:
        
        (a) When the select button of a course is clicked the name of the course is shown on the cart which is at the right side of the page.
        (b) When the select button is clicked of a course the credit hour of that particular course is added to the total credit hour which is initially zero.
        (c) The total credit hour cannot exceed 20, if so a toast is shown.
        (d) One course can not be added to the cart more than once, if so a toast is shown.
        (e) When the select button of a course is clicked the price of that course is added to the total price.
        (f) When the select button of a course is clicked the credit hour of that course is deducted from the Credit Hour Remaining which is initially 20.
        (g) If Credit Hour Remaining is less than 0 a toast is shown.


Question 2: Discuss how you managed the state in your assignment project.

Answer: To manage the state of the project first I defined the initial value by calling 'useState' and passing the initial value as argument. 'useState' returns an array of two elements: the current state and the function to update the current sate. In this project I used 5 'useState'. They are given below:

  (a) const[allCourses, setAllCourses] = useState([]);
  Here the initial state is an empty array. The current state is 'allCourses' and the function to change the current state is 'setAllCourses". After the data is fetched,  using 'setAllCourses' function the initial state 'allCourses' is updated to an array where the fetched data is added.

  (b) const[selectedCourse, setSelectedCourse] = useState([]);
  Here the initial state is an empty array. The current state is 'selectedCourse' and the function to change the current state is 'setSelectedCourse". When the select button is clicked of a course, using 'setSelectedCourse' function the initial state 'selectedCourse' is updated to an array where the data of the selected array is added.

  (c) const[totalCredit, setTotalCredit] = useState(0);
  Here the initial state is 0. The current state is 'totalCredit' and the function to change the current state is 'setTotalCredit". When the select button is clicked of a course, using 'setTotalCredit' function the initial state 'totalCredit' is updated by adding the credit_hour of the selected course.

  (d) const[totalPrice, setTotalPrice] = useState(0);
   Here the initial state is 0. The current state is 'totalPrice' and the function to change the current state is'setTotalPrice". When the select button is clicked of a course, using 'setTotalCredit' function the initial state 'totalPrice' is updated by adding the price of the selected course.

   (e) const[remaining, setRemaining] = useState(20);
   Here the initial state is 20. The current state is 'remaining' and the function to change the current state is 'setRemaining'. When the select button is clicked of a course, using 'setRemaining' function the initial state 'remaining' is updated by deducting the credit_hour of the selected course from the current state.

