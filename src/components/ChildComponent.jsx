import { useContext } from "react";
import UserContext from "../context/UserContext";

function ChildComponent() {
  const { user } = useContext(UserContext);

  return (
    <>
      <h3>{`Hello ${user}!`}</h3>
    </>
  );
}

export default ChildComponent;