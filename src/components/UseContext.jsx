import { useContext } from "react";
import { MyContext } from "../context/MyContext";

function UseContext() {
  const { user, setUser } = useContext(MyContext);

  return (
    <>
      <h1>useState with useContext Component</h1>
      <h5>Use <b>createContext</b> & <b>useContext</b> Hook to maintain state globally</h5>      
      <h5 className="mt-3"><b>Purpose:</b>
        <ul>
          <li>React <b>Context</b> is a way to manage state globally.</li>
          <li>The React <b>useState</b> Hook allows us to track state in a function component.</li>
          <li>It can be used together with the useState Hook to share state between deeply nested components more easily than with <b>useState</b> alone.</li>
        </ul> 
      </h5>
      <div className="box shadow p-4 mb-4">      
        <h5>{`Hello ${user.name}!`}</h5>
        <button className="mt-2 btn btn-primary" onClick={() => setUser({ name: "Sathi" })}>Change User</button>
      </div>
      
    </>
  );
}

export default UseContext;