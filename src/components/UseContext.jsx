import { useContext } from "react";
import { MyContext } from "../context/MyContext";

function UseContext() {
  const { user, setUser } = useContext(MyContext);

  return (
    <>
      <h1>useState with useContext Component</h1>
      <h5>Purpose: 
        <ul>
          <li>React Context is a way to manage state globally</li>
          <li>Use createContext & useContext Hook to maintain state globally</li>
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