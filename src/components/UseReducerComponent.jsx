import React, { useReducer } from 'react';

// 1. Define the reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      throw new Error();
  }
}

// 2. Define the initial state
const initialState = { count: 0 };

function UseReducerComponent() {
  // 3. Initialize useReducer
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <h1>useReducer</h1>
      <h5>The <b>useReducer</b> Hook is similar to the useState Hook. It allows for custom state logic.</h5>
      <h5>The <b>useReducer</b> Hook returns the current stateand a dispatchmethod.</h5>
      <h5 className="mt-3"><b>Purpose:</b>
        <ul>
          <li>Manage complex state logic in React functional components</li>
          <li>If you find yourself keeping track of multiple pieces of state that rely on complex logic.</li>
        </ul> 
      </h5>      
      <div className="box shadow p-4 mt-3">
        <h5>Count: {state.count}</h5>
        {/* 4. Dispatch actions */}
        <div className="d-flex gap-2">
          <button className='btn btn-success' onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
          <button className='btn btn-danger' onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
          <button className='btn btn-primary' onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default UseReducerComponent;