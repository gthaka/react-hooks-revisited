import { createContext, useContext, useState } from "react";

const moods = { happy: "😃", sad: "😥", meh: "😐", cool: "😎" };
const MoodContext = createContext({
  mood: moods.cool,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  setMood: (_: any) => {},
});

const Context = () => {
  const [mood, setMood] = useState(moods.cool); // default mood

  return (
    <MoodContext.Provider value={{ mood, setMood }}>
      <MoodEmoji />
    </MoodContext.Provider>
  );
};

function MoodEmoji() {
  const { mood, setMood } = useContext(MoodContext);

  const handleChange = (event: { target: { value: string } }) => {
    setMood(moods[event.target.value as keyof typeof moods]);
  };

  return (
    <div>
      <select onChange={handleChange}>
        {Object.keys(moods).map((moodKey) => (
          <option key={moodKey} value={moodKey}>
            {moodKey}
          </option>
        ))}
      </select>
      <p style={{ fontSize: "10vh" }}>{mood}</p>
    </div>
  );
}

export default Context;
