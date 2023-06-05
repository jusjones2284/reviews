import { useState } from 'react';
import people from './data';
import {FaChevronCircleLeft, FaChevronCircleRight, FaQuoteRight} from 'react-icons/fa'

const App = () => {
  const [index, setIndex] = useState(1)
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
                  <FaQuoteRight />
                </span>
              </div>
              <h4 className='author'>{name}</h4>
              <p className='job'>{job}</p>
              <p className='info'>{text}</p>
            </article>
         </main>
  
 
};
export default App;
