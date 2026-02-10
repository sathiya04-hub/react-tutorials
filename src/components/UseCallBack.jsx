import React, { useState, useCallback } from 'react';

// Child component that receives a function prop
const Button = React.memo(({ onClick, text }) => {
  console.log(`Child ${text} button rendered`);
  return <button onClick={onClick}>{text}</button>;
});

function UseCallBack() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // This function is recreated on every render
  const handleClick1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const handleClick2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  //console.log("Parent rendered");
  
  return (
    <div>
      <br></br>
      <br></br>
      <hr></hr>
      <h1>useCallback Component</h1>
      <h3>Purpose: 
        <ul>
          <li>React hook that caches (memoizes) a function definition between renders, preventing unnecessary re-creations</li>
          <li>It optimizes performance, specifically when passing callbacks to React.memo() optimized child components</li>
        </ul> 
      </h3>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </div>
  );
}

export default UseCallBack;
