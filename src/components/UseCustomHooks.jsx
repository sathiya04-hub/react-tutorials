import UseFetchData from "./UseFetchData";

const UseCustomHooks = () => {
  const [data] = UseFetchData("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
    <h1>CustomHooks</h1>
    <h5>You can make your own Hooks! Custom Hooks start with "use". Example: <b>useFetch</b>.</h5>
    <h5>We can extract and reuse stateful logic across different components</h5>
    <h5 className="mt-3"><b>Purpose:</b>
        <ul>
          <li>When you have components that can be used by multiple components, we can extract that component into a custom Hook.</li>
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