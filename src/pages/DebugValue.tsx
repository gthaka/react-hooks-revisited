// React Dev Tools is your friend for custom hooks

import { useDebugValue, useEffect, useState } from "react";

interface UserData {
  displayName: string;
  id: number;
}

const DebugValue = () => {
  return (
    <>
      <h1>useDebugValue Hook</h1>
      <div className="card">
        <App />
      </div>
    </>
  );
};

export default DebugValue;

function App() {
  const [userId] = useState(Math.floor(Math.random() * 2900) + 100);
  const { displayName, isFetching } = useDisplayName(userId);

  return (
    <>
      <button>
        {isFetching ? "Loading..." : `${userId} : ${displayName}`}
      </button>
    </>
  );
}

const useDisplayName = (userId: number) => {
  const [displayName, setDisplayName] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    const fetchData = async () => {
      const data = await fetchFromDatabase(userId);

      setDisplayName(data.displayName);
      setIsFetching(false);
    };
    fetchData();
  }, [userId]);

  useDebugValue(displayName ?? "loading....");

  return { displayName, isFetching };
};

// simulate an API
const fetchFromDatabase = (userId: number): Promise<UserData> => {
  return new Promise<UserData>((resolve) => {
    setTimeout(() => {
      resolve({ displayName: "Some name by Foo!!", id: userId++ });
    }, 2000);
  });
};
