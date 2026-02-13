import { useState, useRef, useEffect } from 'react';

function UseReference() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <h1>useReference Component</h1>
      <h5>Purpose: 
        <ul>
          <li>Direct Accessing and Managing DOM Elements</li>
          <li>Storing Mutable Values That Do Not Trigger Re-renders</li>
        </ul> 
      </h5>
      <div className="box shadow p-4">
        <h5>Type in the input field:</h5>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h5 className="mt-3">Render Count: {count.current}</h5>
      </div>
    </>
  );
}

export default UseReference;