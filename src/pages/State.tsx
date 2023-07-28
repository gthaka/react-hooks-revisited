import { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>useState Hook</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
};

export default State;
