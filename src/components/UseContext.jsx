import { useContext } from "react";
import UserContext from "../context/UserContext";

function UseContext() {
  const { setUser } = useContext(UserContext);

  return (
    <>
      <h1>useState with useContext Component</h1>
      <h3>Purpose: 
        <ul>
          <li>React Context is a way to manage state globally</li>
          <li>Use createContext & useContext Hook to maintain state globally</li>
        </ul> 
      </h3>
      <button onClick={() => setUser("Sathya")}>
        Change User
      </button>
    </>
  );
}

export default UseContext;