import { useEffect, useRef, useState } from "react";

const Ref = () => {
  const myBtn = useRef<HTMLButtonElement | null>(null);
  const [result, setResult] = useState("");
  useEffect(() => {
    myBtn.current && myBtn.current.click();
    setResult("Button Clicked via useRef 👽👽👽");
  }, []);
  const handleClick = () => {
    setResult(result + "\nButton Clicked 👈🏽👈🏽👈🏽👈🏽");
  };
  return (
    <>
      <h1>useRef Hook</h1>
      <div className="card">
        <button ref={myBtn} onClick={handleClick}>
          Hi!
        </button>
        <pre style={{ maxHeight: "20vh", overflowY: "scroll" }}>{result}</pre>
      </div>
    </>
  );
};

export default Ref;
