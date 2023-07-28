// memoize functions using this hook

import { useCallback, useState } from "react";

interface Props {
  handler: () => void;
  style?: object;
}

const highlight = (color = "red") => {
  return {
    "border-style": "solid",
    "border-width": "3px",
    "border-color": color,
  };
};

const Callback = () => {
  const [count, setCount] = useState(60);
  const clickHandler = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  return (
    <>
      <h1>useCallback Hook</h1>
      <div className="card">
        <button onClick={clickHandler}>count is {count}</button>
      </div>
      <SomeChild handler={clickHandler} style={highlight("yellow")} />
    </>
  );
};

export default Callback;

function SomeChild(props: Props) {
  // const showCount =
  return (
    <div style={props.style}>
      <h3>Child</h3>
      <div className="card">
        <button onClick={props.handler}>Count from Here</button>
      </div>
      <SomeOtherChild handler={props.handler} style={highlight("green")} />
    </div>
  );
}

function SomeOtherChild(props: Props) {
  return (
    <div style={props.style}>
      <h3>Another</h3>
      <div className="card">
        <button onClick={props.handler}>
          Also Here in 2<sup>nd</sup> Level
        </button>
      </div>
    </div>
  );
}
