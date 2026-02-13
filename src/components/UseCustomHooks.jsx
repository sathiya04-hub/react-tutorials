import UseFetchData from "./UseFetchData";

const UseCustomHooks = () => {
  const [data] = UseFetchData("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
    <h1>CustomHooks Component using useState & useEffect</h1>
    <h5>Purpose: 
        <ul>
          <li>We can extract and reuse stateful logic across different components</li>
          <li>They are a convention for sharing behavior, not state itself, helping to keep components clean, modular, and easier to read and test. </li>
        </ul> 
    </h5>
    <div className="box shadow p-4 mt-3">
      {data &&
        data.map((item, index) => {
          if(index<=4){
            return <p key={item.id}>{item.title}</p>;
          }          
        })}
    </div>
    </>
  );
};

export default UseCustomHooks;