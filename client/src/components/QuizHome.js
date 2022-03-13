import React, { useState, useRef } from 'react';
import '../Styles/quiz.css';

import {useNavigate} from 'react-router-dom'

function QuizHome() {
    const navigate = useNavigate();
  const userName = useRef();
  const [isUserMessage, setIsUserMessage] = useState({
    active: false,
    message: ``,
  });
  function handleQuiz() {
    if (userName.current.value === '')
      return setIsUserMessage({
        active: true,
        message: `Name field is empty.`,
      });
    if (userName.current.value.length < 4)
      return setIsUserMessage({
        active: true,
        message: `Name field should be greater than 4.`,
      });
      localStorage.setItem('dbtqus', userName.current.value);
      userName.current.value = '';
      navigate('/21mca-dbms-quiz');
  }

  isUserMessage.active &&
    setTimeout(() => {
      setIsUserMessage({ active: false, message: `` });
    }, 5000);

  return (
    <div className="play-quiz container-fluid">
      {isUserMessage.active && (
        <div className="userMsg">{isUserMessage.message}</div>
      )}
      <div className="info-tab container-fluid py-3">
        <h3>Technical Quiz</h3>
        <h5>Enter your name to play quiz</h5>
        <input type="text" ref={userName} placeholder="example: John-TeamName" />
        <button onClick={handleQuiz}>Start Quiz</button>
      </div>
    </div>
  );
}

export default QuizHome;
