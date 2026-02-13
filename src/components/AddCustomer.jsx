import { useState, useContext } from 'react';
import { MyContext } from "../context/MyContext";
import AddCustomerList from "./AddCustomerList";


function AddCustomer() {
  const [input, setInput] = useState("");
  const { customers, setCustomer } = useContext(MyContext);

  const addCustomerData = () => {
    if (input.trim()) {
      setCustomer((prev) => [...prev, input.trim()]);
      setInput("");
    }
  };

  return (
    <>
      <div className='box shadow p-4'>
        <h5>Add Customer Name</h5>
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addCustomerData()}
        />
        <button className="btn btn-success mt-3 mb-3" onClick={addCustomerData}>Add</button>
        <AddCustomerList customers={customers} />
      </div>      
    </>
  );
}

export default AddCustomer;