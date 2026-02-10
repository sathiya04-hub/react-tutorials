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
      <hr></hr>
      <h1>useEffect Component</h1>
      <h3>Purpose: 
        <ul>
          <li>Hook in React allows you to perform side effects in functional components</li>
          <li>Use useEffect Hook to maintain state globally</li>
        </ul> 
      </h3>
      <h3>I've rendered {count} times!</h3>;
    </>
  )
}

export default UseEffect;