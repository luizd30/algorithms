import "./App.css";
import { bruteForce } from "./utils/twoSum";

function App() {
  const nums: number[] = [2, 7, 11, 15];
  const target: number = 9;
  const result = bruteForce(nums, target);

  return (
    <>
      <p>{result}</p>
    </>
  );
}

export default App;
