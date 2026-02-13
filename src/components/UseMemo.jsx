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
        <h1>useMemo</h1>
        <h5>The React <b>useMemo</b> Hook returns a memoized value. The <b>useMemo</b> Hook only runs when one of its dependencies update.</h5>
        <h5>Think of memoization as caching a value so that it does not need to be recalculated.</h5>
        <div className="box shadow p-4">
          <h5>The <b>useMemo</b> and useCallback Hooks are similar:</h5>
          <h5><b>useMemo</b> returns a memoized value.</h5>
          <h5><b>useCallback</b> returns a memoized function.</h5>
        </div>
        <h5 className="mt-3"><b>Purpose:</b>
            <ul>
            <li>React hook that optimizes performance by caching the result of expensive calculations between re-renders</li>
            <li>It recomputes the value only when its dependencies change, preventing unnecessary, slow recalculations on every render</li>
            </ul> 
        </h5>
        <div className="box shadow p-4">
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
          <button className='btn btn-success' onClick={addTodo}>Add Todo</button>
        </div>
      </div>

      <div className="box shadow p-4 mt-3">
        Count: {count}
        <button className="btn btn-primary ms-2" onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
        <h5>Note that this example executes the expensive function also when you click on the Add Todo button.</h5>
      </div>
    </div>
  );

}
  
const expensiveCalculation = (num) => {
  //console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
};

export default UseMemo;