import "./App.css";
import { isPalindrome1, isPalindrome2 } from "./utils/checkPalindrome";

function App() {
  const arrayOfNumbers = [121, -121, 123, 10];
  console.log(isPalindrome2(0));
  return (
    <>
      <h2>isPalindrome1</h2>
      {arrayOfNumbers.map((number, index) => (
        <h3 key={index}>
          {JSON.stringify(number)} = {isPalindrome1(number) ? "true" : "false"}
        </h3>
      ))}

      <h2>isPalindrome2</h2>
      {arrayOfNumbers.map((number, index) => (
        <h3 key={index}>
          {JSON.stringify(number)} = {isPalindrome2(number) ? "true" : "false"}
        </h3>
      ))}
    </>
  );
}

export default App;
