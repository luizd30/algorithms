import "./App.css";
import { longestPrefix1, longestPrefix2 } from "./utils/longestPrefix";

function App() {
  const values = [
    ["flower", "flow", "flight"],
    ["dog", "racecar", "car"],
  ];

  return (
    <>
      <h3>Values</h3>
      {values.map((value) => (
        <p key={crypto.randomUUID()}>{JSON.stringify(value)}</p>
      ))}
      <h3>Results</h3>
      <p>longestPrefix1:</p>
      {values.map((value) => (
        <p key={crypto.randomUUID()}>
          {longestPrefix1(value) ? longestPrefix1(value) : "No common prefix"}
        </p>
      ))}
      <p>longestPrefix2:</p>
      {values.map((value) => (
        <p key={crypto.randomUUID()}>
          {longestPrefix1(value) ? longestPrefix2(value) : "No common prefix"}
        </p>
      ))}
    </>
  );
}

export default App;
