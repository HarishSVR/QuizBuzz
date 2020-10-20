import React from "react";
import "./App.css";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="App">
      <h2>Welcome to QuizBuzz !!!</h2>
      <Quiz />
      <span>
        <button id="previous">Previous Question</button>
        <button id="submit">Submit Quiz</button>
        <button id="next">Next Question</button>
        <button id="results">Show Answer</button>
      </span>
    </div>
  );
}

export default App;
