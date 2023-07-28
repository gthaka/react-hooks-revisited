// if you have a reusable component
// rare use-case

import { FC, Ref, forwardRef, useImperativeHandle, useRef } from "react";

// access underlying DOM elements and forward them
const Imperative: FC = () => {
  const fancyInputRef = useRef<MyRef>(null);

  const focusButton = () => {
    if (fancyInputRef.current) {
      fancyInputRef.current.focusMyButton();
    }
  };

  return (
    <>
      <h1>useImperativeHandle Hook</h1>
      <div className="card">
        <FancyInput ref={fancyInputRef} />
        {" - "}
        <button onClick={focusButton}>Focus the Fancy Button</button>
      </div>
    </>
  );
};

export default Imperative;

interface MyRef {
  focusMyButton: () => void;
}

// Note the use of forwardRef so refs can be passed down correctly
const FancyInput = forwardRef((_props, ref: Ref<MyRef>) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, () => ({
    // Custom function for the parent to call, focuses the button when called
    focusMyButton: () => {
      if (buttonRef.current) {
        buttonRef.current.focus();
      }
    },
  }));

  return <button ref={buttonRef}>I'm a Button</button>;
});
