import { FC, useLayoutEffect, useRef, useState } from "react";

interface Dimensions {
  height: number;
  width: number;
}

const LayoutEffect: FC = () => {
  const verticalHeight = Math.floor(Math.random() * 40);
  const myRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({
    height: 0,
    width: 0,
  });

  useLayoutEffect(() => {
    if (myRef.current) {
      setDimensions({
        height: myRef.current.offsetHeight,
        width: myRef.current.offsetWidth,
      });
    }
  }, [myRef]);

  return (
    <>
      <h1>useLayoutEffect Hook</h1>
      <div ref={myRef}>
        <p>Height: {dimensions.height}px</p>
        <p>Width: {dimensions.width}px</p>
        <p style={{ height: `${verticalHeight}vh` }}>
          The rest of the content...
        </p>
      </div>
    </>
  );
};

export default LayoutEffect;
