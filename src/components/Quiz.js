import React, { useState } from "react";

function Quiz() {
  const students = [
    {
      questionText: "Who is CEO of Microsoft?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: false },
        { answerText: "Bill Gates", isCorrect: true },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Apple?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: false },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tim Cook", isCorrect: true },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
  ];
  let i = 0;
  function prev() {
    if (i > 0) i--;
    return students[i];
  }
  const next = () => {};
  function myAnswer() {
    alert(
      "Correct Answer : " +
        students[i].answerOptions.find((option) => option.isCorrect).answerText
    );
  }
  function submit() {
    alert(
      "Correct Answer : " +
        students[i].answerOptions.find((option) => option.isCorrect).answerText
    );
  }

  return (
    <div className="app">
      <h1>{students[i].questionText}</h1>
      <h2>
        <input type="radio" value="A" className="options" />
        {students[i].answerOptions[0].answerText}
      </h2>
      <h2>
        <input type="radio" value="A" className="options" />
        {students[i].answerOptions[1].answerText}
      </h2>
      <h2>
        <input type="radio" value="A" className="options" />
        {students[i].answerOptions[2].answerText}
      </h2>
      <h2>
        <input type="radio" value="A" className="options" />
        {students[i].answerOptions[3].answerText}
      </h2>

      <button className="btn" onClick={prev}>
        Previous Question
      </button>
      <button className="btn" onClick={submit}>
        Submit Quiz
      </button>
      <button className="btn" onClick={next}>
        Next Question
      </button>
      <button className="btn" onClick={myAnswer}>
        Show Answer
      </button>
    </div>
  );
}

export default Quiz;
