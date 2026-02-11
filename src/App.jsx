import { MyProvider  } from "./context/MyContext";
import UseContext from "./components/UseContext";
import UseEffect from "./components/UseEffect";
import UseReference from "./components/UseReference";
import UseCallBack from "./components/UseCallBack";
import UseMemo from "./components/UseMemo";
import UseCustomHooks from "./components/UseCustomHooks";
import UseReducerComponent from "./components/UseReducerComponent";
import AddCustomer from "./components/AddCustomer";

function App() {

  return (
    <>
      <MyProvider>
        <AddCustomer />
        <UseContext />      
      </MyProvider>  

      <UseEffect />
      <UseReference />
      <UseReducerComponent />
      <UseCallBack />
      <UseMemo />
      <UseCustomHooks />
    </>
  );
}

export default App;