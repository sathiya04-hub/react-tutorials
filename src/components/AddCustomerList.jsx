
function AddCustomerList({customers}){
  return (
    <>
        <h1>Customer list</h1>
        <ul>

            {customers.map((customer, index) => (
                <li key={index}>{customer}</li>
            ))}
        </ul>
    </>
  );
};

export default AddCustomerList;