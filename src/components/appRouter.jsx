import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import store from '../app/store'
import { Provider } from 'react-redux'

import { MyProvider  } from "../context/MyContext";
import AddCustomer from "./AddCustomer";
import UseContext from "./UseContext";
import UseEffect from "./UseEffect";
import UseReference from "./UseReference";
import UseCallBack from "./UseCallBack";
import UseMemo from "./UseMemo";
import UseCustomHooks from "./UseCustomHooks";
import UseReducerComponent from "./UseReducerComponent";
import MyReduxComponent from "./myredux/MyReduxComponent";

function AppRouter() {   // ✅ Renamed
  return (
    <>
    <h1>Welcome to My React Components(React 19)</h1>

    <BrowserRouter>
      <nav className="navbar navbar-light">
        <NavLink to="/use-context">UseContext</NavLink> |{" "}
        <NavLink to="/use-effect">UseEffect</NavLink> |{" "}
        <NavLink to="/use-reference">UseReference</NavLink> |{" "}
        <NavLink to="/use-callback">UseCallBack</NavLink> |{" "}   
        <NavLink to="/use-memo">UseMemo</NavLink> |{" "}
        <NavLink to="/use-reducer">UseReducer</NavLink> |{" "}
        <NavLink to="/react-redux">React-Redux</NavLink> |{" "}
        <NavLink to="/use-customhooks">UseCustomHooks</NavLink>
        
      </nav>

      <div className="box shadow p-5">
        <Routes>        
            <Route path="/use-context" element={<MyProvider><UseContext /><AddCustomer /></MyProvider> } />
            <Route path="/use-effect" element={<UseEffect />} />
            <Route path="/use-reference" element={<UseReference />} />
            <Route path="/use-callback" element={<UseCallBack />} />
            <Route path="/use-memo" element={<UseMemo />} />        
            <Route path="/use-reducer" element={<UseReducerComponent />} />
            <Route path="/react-redux" element={<Provider store={store}><MyReduxComponent /></Provider>} />
            <Route path="/use-customhooks" element={<UseCustomHooks />} />                
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default AppRouter;