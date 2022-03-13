import React, { useState, useEffect, useRef, useMemo } from 'react';
import '../Styles/quiz.css';
import Loading from './Loading';

import getQuestions from './JSFile/Operations/fetchQuestion';
import addScore from './JSFile/Operations/addScore';
import DisplayScore from './DisplayScore';

// Question component containing questions and answers
const QuestionComp = (props) => {
  // Check answer on clicking the options
  function checkAnswer(e) {
    if (e.target.classList.contains(props.answer)) {
      e.target.classList.add('correctAnswer');
      props.score.current++;
    } else {
      e.target.classList.add('wrongAnswer');
      document.querySelectorAll('.options').forEach((option) => {
        if (option.classList.contains(props.answer))
          option.classList.add('correctAnswer');
      });
      // option.classList.contains(props.answer);
      // option.target.classList.add('correctAnswer');
    }
    document.querySelector('.options-section').style.pointerEvents = 'none';
    if (props.currQuestions.length === 1)
      props.finish.current.style.display = 'inline';
    else props.next.current.style.display = 'inline';
  }
  return (
    <>
      {/* Questions */}
      <div className="quiz-question">
        <pre>{props.question}</pre>
      </div>
      {/* Options */}
      <div className="options-section">
        <button onClick={checkAnswer} className="options Option1">
          {props.option1}
        </button>
        <button onClick={checkAnswer} className="options Option2">
          {props.option2}
        </button>
        <button onClick={checkAnswer} className="options Option3">
          {props.option3}
        </button>
        <button onClick={checkAnswer} className="options Option4">
          {props.option4}
        </button>
      </div>
    </>
  );
};

// MAIN QUIZ COMPONENT
export default function Quiz() {
  const [questions, setQuestion] = useState([0]);
  const [currQuestions, setCurrQuestion] = useState([0]);
  const [isLoading, setIsLoading] = useState(false);
  const [displayScore, setDisplayScore] = useState({
    active: false,
    playerName: ``,
    score: ``,
  });

  const score = useRef(0);
  const nextRef = useRef();
  const finishRef = useRef();
  const currentQuestionIndex = useRef(1);

  // Get Questions From the DB
  useEffect(() => {
     const getQuestionVar = async () => {
       setIsLoading(true);
       try {
         await getQuestions(setQuestion);
         setIsLoading(false);
       } catch (e) {
         console.log(e);
       }
     };
     getQuestionVar();
  }, []);
  // To set the duplicate values in another state to iterate it
  useMemo(() => {
    setCurrQuestion(questions);
  }, [questions]);

  // get the ID of the questions in the array to display questions
  let arrayID = [];
  let updateArray = () => {
    if (!currQuestions.length) return false;
    currQuestions.forEach((ques) => arrayID.push(ques._id));
  };

  // initialize variables
  if (currQuestions.length) updateArray();
  let shuffledQuestionID;
  let randomQuestionIndex;
  let questionSet;

  function updateQustion() {
    shuffledQuestionID = arrayID.sort(() => Math.random() - 0.5);
    randomQuestionIndex = Math.floor(Math.random() * currQuestions.length);
    questionSet = shuffledQuestionID[randomQuestionIndex];
  }

  if (arrayID.length > 0) updateQustion();

  function nextq() {
    changeOptionStyle();
    currentQuestionIndex.current++;
    setCurrQuestion(currQuestions.filter((ques) => ques._id !== questionSet));
  }

  // Change the options style
  function changeOptionStyle() {
    nextRef.current.style.display = 'none';
    finishRef.current.style.display = 'none';
    document.querySelector('.options-section').style.pointerEvents = 'auto';
    document.querySelectorAll('.options').forEach((opt) => {
      opt.classList.remove('correctAnswer');
      opt.classList.remove('wrongAnswer');
    });
  }

  // Handle Finish Button
  function handleFinish() {
    const playerName = localStorage.getItem('dbtqus');
    localStorage.removeItem('dbtqus');
    changeOptionStyle();
    document.querySelector('.information-tab').style.display = 'none';
    document.querySelector('.quiz-tab').style.display = 'none';
    setDisplayScore({
      active: true,
      playerName: playerName,
      score: score.current,
    });
    addScore(playerName, score.current);
  }

  return (
    <div className="play-quiz container-fluid">
      {/* Display the Score */}
      { isLoading && <Loading />}
      {displayScore.active && <DisplayScore displayScore={displayScore} />}
      {/* Information tab */}
      <div className="information-tab">
        {/* <div className="timer">
          time left: <span>15</span>
        </div> */}
        <div className="questionNo">
          <span>question: {currentQuestionIndex.current}/</span>
          {questions.length}
        </div>
      </div>
      {/* Question tab */}
      <div className="quiz-tab">
        {currQuestions
          .filter((ques) => ques._id === questionSet)
          .map((q, index) => (
            <QuestionComp
              key={index}
              question={q.question}
              option1={q.option1}
              option2={q.option2}
              option3={q.option3}
              option4={q.option4}
              answer={q.answer}
              score={score}
              next={nextRef}
              currQuestions={currQuestions}
              finish={finishRef}
            />
          ))}

        {/* Buttons */}
        <div className="quiz-buttons">
          <button
            ref={nextRef}
            style={{ display: 'none' }}
            onClick={nextq}
            className="btn-next w-25"
          >
            Next
          </button>
          <button
            ref={finishRef}
            style={{ display: 'none' }}
            onClick={handleFinish}
            className="btn-finish w-25"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}
