import UseFetchData from "./UseFetchData";

const UseCustomHooks = () => {
  const [data] = UseFetchData("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
    <br></br>
    <hr></hr>
    <h1>CustomHooks Component using useState & useEffect</h1>
    <h3>Purpose: 
        <ul>
          <li>We can extract and reuse stateful logic across different components</li>
          <li>They are a convention for sharing behavior, not state itself, helping to keep components clean, modular, and easier to read and test. </li>
        </ul> 
    </h3>
      {data &&
        data.map((item, index) => {
          if(index<=4){
            return <p key={item.id}>{item.title}</p>;
          }          
        })}
    </>
  );
};

export default UseCustomHooks;