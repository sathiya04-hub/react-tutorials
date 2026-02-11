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
      <h1>Add Customer</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addCustomerData()}
      />

      <button onClick={addCustomerData}>Add</button>

      <AddCustomerList customers={customers} />
    </>
  );
}

export default AddCustomer;