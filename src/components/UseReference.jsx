import { useState, useRef, useEffect } from 'react';

function UseReference() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <hr></hr>
      <h1>useReference Component</h1>
      <h3>Purpose: 
        <ul>
          <li>Direct Accessing and Managing DOM Elements</li>
          <li>Storing Mutable Values That Do Not Trigger Re-renders</li>
        </ul> 
      </h3>
      <h3>Type in the input field:</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default UseReference;