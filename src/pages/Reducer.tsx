// uses redux pattern

import { useReducer } from "react";

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>useReducer Hook</h1>
      <div className="card" style={{ display: "inline-flex" }}>
        <button onClick={() => dispatch({ type: "decrement" })}>➖</button>
        <h3 style={{ padding: "4px 10px" }}>{state}</h3>
        <button onClick={() => dispatch({ type: "increment" })}>➕</button>
      </div>
    </>
  );
};

function reducer(state: number, action: { type: string }) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error();
  }
}

export default Reducer;
