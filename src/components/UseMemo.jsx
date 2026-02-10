import { useState, useMemo } from 'react';

function UseMemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  //const calculation = expensiveCalculation(count);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <br></br>
        <br></br>
        <hr></hr>
        <h1>useMemo Component</h1>
        <h3>Purpose: 
            <ul>
            <li>React hook that optimizes performance by caching the result of expensive calculations between re-renders</li>
            <li>It recomputes the value only when its dependencies change, preventing unnecessary, slow recalculations on every render</li>
            </ul> 
        </h3>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <br></br>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
        <h3>Note that this example executes the expensive function also when you click on the Add Todo button.</h3>
      </div>
    </div>
  );

}
  
const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
};

export default UseMemo;