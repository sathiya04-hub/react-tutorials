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
    <div>
      <hr></hr>
      <h1>useReducer Componenent</h1>
      <h3>Purpose: 
        <ul>
          <li>Manage complex state logic in React functional components</li>
          <li>It follows a pattern similar to Redux, centralizing state management logic in a single function called a "reducer".</li>
        </ul> 
      </h3>      
      <p>Count: {state.count}</p>
      {/* 4. Dispatch actions */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

export default UseReducerComponent;