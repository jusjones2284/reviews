import { useState } from 'react';
import people from './data';
import {FaChevronCircleLeft, FaChevronCircleRight, FaQuoteRight} from 'react-icons/fa'

const App = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]
  // console.log(name);
  return <div>
          <h2>Reviews Starters</h2>
          
         </div>
  
 
};
export default App;
