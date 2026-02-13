import { useState, useRef, useEffect } from 'react';

function UseReference() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <h1>useRef</h1>
      <h5>The <b>useRef</b> Hook allows you to persist values between renders. It can be used to access a DOM element directly.</h5>
      <h5>It can be used to store a mutable value that does not cause a re-render when updated.</h5>
      <h5 className="mt-3"><b>Purpose:</b> 
        <ul>
          <li>Direct Accessing and Managing DOM Elements</li>
          <li>Storing Mutable Values That Do Not Trigger Re-renders</li>
        </ul> 
      </h5>
      <div className="box shadow p-4">
        <h5>Type in the input field:</h5>
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h5 className="mt-3">Render Count: {count.current}</h5>
      </div>
    </>
  );
}

export default UseReference;