import React, { useState, useEffect } from 'react';
import '../Styles/checkQuiz.css';

import { Link } from 'react-router-dom';
import getQuestions from './JSFile/Operations/fetchQuestion';
import DeleteQuiz from './DeleteQuiz';
import Loading from './Loading';
// Question tab
const QuestionTab = (props) => {
  function handleDelete() {
    props.setIsDelete({
      active: true,
      id: props.id,
      question: props.question,
    });
  }
  return (
    <div className="quiz-container container-fluid">
      <div className="question-tab">{props.question}</div>

      <div className="options-section">
        <label
          className={`options ${
            props.answer === 'Option1' ? 'correctAnswer' : ''
          }`}
        >
          {props.option1}
        </label>
        <label
          className={`options ${
            props.answer === 'Option2' ? 'correctAnswer' : ''
          }`}
        >
          {props.option2}
        </label>
        <label
          className={`options ${
            props.answer === 'Option3' ? 'correctAnswer' : ''
          }`}
        >
          {props.option3}
        </label>
        <label
          className={`options ${
            props.answer === 'Option4' ? 'correctAnswer' : ''
          }`}
        >
          {props.option4}
        </label>
      </div>
      <div className="edit-tab">
        <button className="edit-icon">
          <Link
            to={'/21mca-dbms-edit-quiz/' + props.id}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <i className="fa-solid fa-pen-to-square"></i>
            edit
          </Link>
        </button>
        <button className="delete-icon" onClick={handleDelete}>
          <i className="fa-solid fa-trash"></i>
          delete
        </button>
      </div>
    </div>
  );
};
//  Main Function
export default function CheckQuiz() {
  const [question, setQuestion] = useState([]);
  const [isNotification, setIsNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDelete, setIsDelete] = useState({
    active: false,
    id: ``,
    question: ``,
  });

  useEffect(() => {
    const fetchQuestions = async () => {
      setIsLoading(true);

      try {
        await getQuestions(setQuestion);
        setIsLoading(false)
      } catch (e) {
        console.log(e);
      }
    };
    fetchQuestions();
  }, [(isNotification)]);

  function handleNotification() {
    setIsNotification(false);
  }
  isNotification &&
    setTimeout(() => {
      setIsNotification(false);
    }, 5000);

  return (
    <div className="check-quiz">
      {isLoading && <Loading />}
      <section className="quiz-tab">
        {isNotification && (
          <div className="outer-notification">
            <div className="notification">
              <i onClick={handleNotification} className="fa-solid fa-xmark"></i>
              <div className="d-flex body">
                <i className="fa-solid fa-circle-check"></i>
                <div>
                  <p className="heading">Success</p>
                  <p>Question successfully deleted.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <header className="d-flex">
          <h3>Quiz Questions</h3>
          <Link to="/21mca-myproj-dbms-technical-admin" className="close-btn">
            <i className="fa-solid fa-xmark"></i>
          </Link>
        </header>
        <div className="quiz-section  container-fluid">
          {question.map((d) => (
            <QuestionTab
              key={d._id}
              id={d._id}
              question={d.question}
              option1={d.option1}
              option2={d.option2}
              option3={d.option3}
              option4={d.option4}
              answer={d.answer}
              setIsDelete={setIsDelete}
            />
          ))}
        </div>
      </section>
      {isDelete.active && (
        <DeleteQuiz
          id={isDelete.id}
          question={isDelete.question}
          setIsDelete={setIsDelete}
          setIsNotification={setIsNotification}
        />
      )}
    </div>
  );
}
