import { useState } from 'react';
import people from './data';
import {FaChevronCircleLeft, FaChevronCircleRight, FaQuoteRight} from 'react-icons/fa'

const App = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]
  // console.log(name);
  return <main>
            <article className='review'>
              <div className="img-container">
                <img 
                src={image}
                alt={name}
                className='person-img'
                />
                <span>
                  
                </span>
              </div>
            </article>
         </main>
  
 
};
export default App;
