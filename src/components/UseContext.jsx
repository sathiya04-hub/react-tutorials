import { useContext } from "react";
import { MyContext } from "../context/MyContext";

function UseContext() {
  const { user, setUser } = useContext(MyContext);

  return (
    <>
      <h1>useState with useContext Component</h1>
      <h3>Purpose: 
        <ul>
          <li>React Context is a way to manage state globally</li>
          <li>Use createContext & useContext Hook to maintain state globally</li>
        </ul> 
      </h3>
      <button onClick={() => setUser({ name: "Sathi" })}>Change User</button>
      <h3>{`Hello ${user.name}!`}</h3>
    </>
  );
}

export default UseContext;