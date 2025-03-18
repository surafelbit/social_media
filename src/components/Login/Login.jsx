import React from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
//import { useState } from "react";
import { Password } from "@mui/icons-material";
export default function Login() {
  // const [legal, setLegal] = useState(true);
  // const [legalPass, setLegalPass] = useState(true);
  const navigate = useNavigate();
  function submitHandler(event) {
    event.preventDefault();
    navigate("/");
    <NavLink
      to="/"
      style={({ isActive }) => ({
        color: isActive ? "blue" : "black",
        textDecoration: isActive ? "underline" : "none",
      })}
    ></NavLink>;
  }
  // function userNameSet(event) {
  //   setLegal(false);
  // }
  // function PasswordSet(event) {
  //   setLegalPass(false);
  // }
  return (
    <div className="LoginContainer">
      <div className="LoginWrapper">
        <div className="LoginTop">
          <h2>Form</h2>
        </div>
        <div className="LoginBottom">
          <div className="formManager">
            <form className="x">
              <h2>User Name</h2>
              <div className="userName">
                <input type="text"></input>
              </div>
              <h2>Password</h2>
              <div className="password">
                <input type="password"></input>
              </div>
              <div className="buttons">
                <button
                  onClick={submitHandler}
                  //  disabled={legal && legalPass}
                  className="buttonss"
                >
                  LOG IN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
// src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // src/App.js
// import React, { useState } from 'react';
// import './App.css';
// import QuizContainer from './QuizContainer';

// function App() {
//   return (
//     <div className="App">
//       <h1>Online Quiz App</h1>
//       <QuizContainer />
//     </div>
//   );
// }

// export default App;

// // src/QuizContainer.js
// import React, { useState } from 'react';
// import QuestionCard from './QuestionCard';
// import Results from './Results';
// import quizData from './quizData.json';

// function QuizContainer() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showResults, setShowResults] = useState(false);
//   const [selectedAnswers, setSelectedAnswers] = useState([]);

//   const currentQuestion = quizData[currentIndex];

//   const handleAnswerSelection = (answer) => {
//     setSelectedAnswers([...selectedAnswers, answer]);
//     if (answer === currentQuestion.answer) {
//       setScore(score + 1);
//     }
//     if (currentIndex < quizData.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       setShowResults(true);
//     }
//   };

//   const restartQuiz = () => {
//     setCurrentIndex(0);
//     setScore(0);
//     setShowResults(false);
//     setSelectedAnswers([]);
//   };

//   return (
//     <div className="quiz-container">
//       {showResults ? (
//         <Results score={score} total={quizData.length} restartQuiz={restartQuiz} />
//       ) : (
//         <QuestionCard
//           question={currentQuestion.question}
//           options={currentQuestion.options}
//           handleAnswerSelection={handleAnswerSelection}
//         />
//       )}
//     </div>
//   );
// }

// export default QuizContainer;

// // src/QuestionCard.js
// import React from 'react';
// import './QuestionCard.css';

// function QuestionCard({ question, options, handleAnswerSelection }) {
//   return (
//     <div className="question-card">
//       <h2>{question}</h2>
//       <div className="options">
//         {options.map((option, index) => (
//           <button key={index} onClick={() => handleAnswerSelection(option)}>
//             {option}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default QuestionCard;

// // src/Results.js
// import React from 'react';
// import './Results.css';

// function Results({ score, total, restartQuiz }) {
//   return (
//     <div className="results">
//       <h2>Your Score: {score} / {total}</h2>
//       <button onClick={restartQuiz}>Restart Quiz</button>
//     </div>
//   );
// }

// export default Results;

// // src/quizData.json
// [
//   {
//     "id": 1,
//     "question": "What is the capital of France?",
//     "options": ["Berlin", "Paris", "Madrid", "Lisbon"],
//     "answer": "Paris"
//   },
//   {
//     "id": 2,
//     "question": "Which is the largest planet in our solar system?",
//     "options": ["Earth", "Mars", "Jupiter", "Venus"],
//     "answer": "Jupiter"
//   },
//   {
//     "id": 3,
//     "question": "Who wrote 'Hamlet'?",
//     "options": ["Charles Dickens", "William Shakespeare", "Mark Twain", "Leo Tolstoy"],
//     "answer": "William Shakespeare"
//   }
// ]

// // src/App.css
// body {
//   font-family: Arial, sans-serif;
//   text-align: center;
//   background-color: #f0f0f0;
//   margin: 0;
// }

// .App {
//   padding: 20px;
// }

// .quiz-container {
//   max-width: 600px;
//   margin: auto;
//   background: white;
//   border-radius: 8px;
//   padding: 20px;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
// }

// button {
//   padding: 10px 20px;
//   margin: 10px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// }

// button:hover {
//   background-color: #0056b3;
// }

// // src/QuestionCard.css
// .question-card {
//   margin-bottom: 20px;
// }

// .options {
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// }

// // src/Results.css
// .results {
//   margin-top: 20px;
// }
