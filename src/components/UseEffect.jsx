import { useState, useEffect } from 'react';

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return( 
    <>
      <h1>useEffect Component</h1>
      <h5>Purpose: 
        <ul>
          <li>Hook in React allows you to perform side effects in functional components</li>
          <li>Examples: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments</li>
        </ul> 
      </h5>
      <div className="box shadow p-4">
        <h5>I've rendered {count} times!</h5>
      </div>
    </>
  )
}

export default UseEffect;