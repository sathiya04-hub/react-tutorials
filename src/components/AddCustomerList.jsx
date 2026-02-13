
function AddCustomerList({customers}){
  return (
    <>
      {customers.length > 0 && (
        <><h5>Customer List</h5><ul>
        {customers.map((customer, index) => (
          <li key={index}>{customer}</li>
        ))}
      </ul></>
      )}
    </>    
  );
};

export default AddCustomerList;