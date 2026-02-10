import { useState } from "react";
import UserContext from "./context/UserContext";
import ChildComponent from "./components/ChildComponent";
import UseContext from "./components/UseContext";
import UseEffect from "./components/UseEffect";
import UseReference from "./components/UseReference";
import UseCallBack from "./components/UseCallBack";
import UseMemo from "./components/UseMemo";
import UseCustomHooks from "./components/UseCustomHooks";
import UseReducerComponent from "./components/UseReducerComponent";

function App() {
  const [user, setUser] = useState("Linus");

  return (

    <UserContext.Provider value={{ user, setUser }}>
      <UseContext />
      <ChildComponent />
      <UseEffect />
      <UseReference />
      <UseReducerComponent />
      <UseCallBack />
      <UseMemo />
      <UseCustomHooks />      
    </UserContext.Provider>    
  );
}

export default App;