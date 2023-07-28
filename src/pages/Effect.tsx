import { useEffect, useRef, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  // const [, setLoaded] = useState(false);
  const [result, setResult] = useState("");
  const mounted = useRef<boolean | undefined>();

  useEffect(() => {
    // fetch("foo").then(() => setLoaded(true));
    if (!mounted.current) {
      setResult(result + "\n componentDidMount");
      console.info("componentDidMount event");
      mounted.current = true;
    } else {
      setResult(result + "\n componentDidUpdate");
      console.info("componentDidUpdate event");
    }
    // teardown action - when component is destroyed
    return () => {
      setResult(result + "\n componentWillUnmount");
      console.info("componentWillUnmount event");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);
  return (
    <>
      <h1>useEffect Hook</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <pre style={{ maxHeight: "20vh", overflowY: "scroll" }}>{result}</pre>
      </div>
    </>
  );
};

export default Effect;
