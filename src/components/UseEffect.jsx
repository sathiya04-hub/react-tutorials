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
      <h1>useEffect</h1>
      <h5>The <b>useEffect</b> Hook allows you to perform side effects in your components.</h5>
      <h5><b>useEffect</b> runs on every render. That means that when the count changes, a render happens, which then triggers another effect.</h5>
      <h5 className="mt-3"><b>Purpose:</b>
        <ul>
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