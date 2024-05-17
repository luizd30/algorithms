import "./App.css";
import { bruteForce, hashmap } from "./utils/twoSum";

function App() {
  const arrayOfNumbers = [
    {
      nums: [2, 7, 11, 15],
      target: 9,
    },
    {
      nums: [3, 2, 4],
      target: 6,
    },
    {
      nums: [3, 3],
      target: 6,
    },
  ];

  return (
    <>
      <h2>Brute Force</h2>
      {arrayOfNumbers.map(({ nums, target }, index) => (
        <h3 key={index}>
          {JSON.stringify(nums)} = {bruteForce(nums, target).join(", ")}
        </h3>
      ))}

      <h2>Hash Map</h2>
      {arrayOfNumbers.map(({ nums, target }, index) => (
        <h3 key={index}>
          {JSON.stringify(nums)} = {hashmap(nums, target).join(", ")}
        </h3>
      ))}
    </>
  );
}

export default App;
