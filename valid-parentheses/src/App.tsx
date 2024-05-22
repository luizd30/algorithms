import "./App.css";
import { validParentheses } from "./utils/validParentheses";

function App() {
  console.log(validParentheses("()"))
  console.log(validParentheses("()[]{}"))
  console.log(validParentheses("(]"))
  return <></>;
}

export default App;
