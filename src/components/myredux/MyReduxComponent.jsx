import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from './MyReduxComponentSlice'

export function MyReduxComponent() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <h1>React Reducer</h1>
      <h5>Install Redux Toolkit and React Redux</h5>
      <h5>Create a Redux store with <b>configureStore</b></h5>
      <h5>Provide the Redux store to the React application components</h5>
      <h5>Create a Redux "slice" reducer with <b>createSlice</b></h5>
      <h5>Use the React Redux <b>useSelector/useDispatch</b> hooks in React components</h5>
      <h5 class="mt-3"><b>Purpose:</b>
        <ul>
          <li>Manage complex state logic using React Reducer</li>
          <li>Redux, centralizing state management logic in a single function called a "reducer".</li>
        </ul> 
      </h5>   
      <div className="box shadow p-4 mt-3">      
        <h5>Count: {count}</h5>
        <div className="d-flex gap-2 align-items-center">
          <button className="btn btn-success" aria-label="Increment value" onClick={() => dispatch(increment())}
          >Increment</button>
          <button className="btn btn-danger" aria-label="Decrement value" onClick={() => dispatch(decrement())}
          >Decrement</button>
          <button className="btn btn-primary" aria-label="Reset value" onClick={() => dispatch(reset())}
          >Reset</button>
        </div>
      </div>
    </>
  )
}

export default MyReduxComponent;