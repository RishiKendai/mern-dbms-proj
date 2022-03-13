import React, { useState, useEffect, useRef } from 'react';
import '../Styles/createQuiz.css';
import '../Styles/dropdown.css';

import Input from './JSFile/inputValidation';

import { useParams, Link, useNavigate} from 'react-router-dom';
import { Alert } from 'react-bootstrap';

import fetchQuestionID from './JSFile/Operations/fetchQuestionID';
import updateQuestion from './JSFile/Operations/updateQuestion';

export default function EditQuiz() {
  const params = useParams();
  const navigate = useNavigate();


  const [isOn, setIsOn] = useState(false);
  const [questionID, setQuestionID] = useState([]);

  // For Dropdown
  function changeDD(e) {
    const all = document.querySelectorAll('.dropdown-option');
    all.forEach((al) => al.classList.remove('active'));
    e.target.classList.toggle('active');
    dpLabel.current.value = e.target.value;
    dpLabel.current.textContent = e.target.textContent;
  }
  const questionRef = useRef();
  const option1Ref = useRef();
  const option2Ref = useRef();
  const option3Ref = useRef();
  const option4Ref = useRef();
  const dpLabel = useRef();

  useEffect(() => {
    fetchQuestionID(setQuestionID, params.id);
  }, [params.id]);
  const [isMessage, setMessage] = useState({
    text: '',
    state: false,
  });

  // Handle Add
  async function handleUpdate() {
    let newObj = new Input();
    newObj.inputValidate(
      questionRef,
      option1Ref,
      option2Ref,
      option3Ref,
      option4Ref,
      dpLabel,
      setMessage,
      isOn,
      setIsOn
    );
    if (newObj.stateValue) {
      setMessage({
        text: '',
        state: !isMessage,
      });
      const question = questionRef.current.value;
      const option1 = option1Ref.current.value;
      const option2 = option2Ref.current.value;
      const option3 = option3Ref.current.value;
      const option4 = option4Ref.current.value;
      const answer = dpLabel.current.textContent;
      const isUpdated = await updateQuestion(
        question,
        option1,
        option2,
        option3,
        option4,
        answer,
        setMessage,
        params.id
      );
      isUpdated && navigate(-1);
      isUpdated && handleClear();
    }
  }
  // Handle clear
  function handleClear() {
    questionRef.current.value = '';
    option1Ref.current.value = '';
    option2Ref.current.value = '';
    option3Ref.current.value = '';
    option4Ref.current.value = '';
    const all = document.querySelectorAll('.dropdown-option');
    all.forEach((al) => al.classList.remove('active'));
    dpLabel.current.value = '';
    dpLabel.current.textContent = 'Pick the correct option';
  }

  return (
    <div
      className="create-quiz container-fluid"
      onClick={() => {
        isOn && setIsOn(!isOn);
      }}
    >
      <section className="quiz-div px-3">
        {/* {isQuestionAdded.state && <div className='message'>{isQuestionAdded.text }</div>} */}
        <header className="d-flex">
          <h3>Create Quiz</h3>
          <Link to="/21mca-dbms-check-quiz" className="close-btn">
            <i className="fa-solid fa-xmark"></i>
          </Link>
        </header>
        {/* Alert div */}
        {isMessage.state && <Alert variant="danger">{isMessage.text}</Alert>}
        {/* Question */}
        <div className="form-floating">
          <textarea
            ref={questionRef}
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: '100px', resize: 'none' }}
            defaultValue={questionID.question}
          ></textarea>
          <label htmlFor="floatingTextarea2">Question</label>
        </div>
        {/* Options 1 */}
        <div className="form-floating" style={{ margin: '.7rem auto' }}>
          <textarea
            ref={option1Ref}
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ resize: 'none' }}
            defaultValue={questionID.option1}
          ></textarea>
          <label htmlFor="floatingTextarea2">Option 1</label>
        </div>
        {/* Options 2 */}
        <div className="form-floating" style={{ margin: '.7rem auto' }}>
          <textarea
            ref={option2Ref}
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ resize: 'none' }}
            defaultValue={questionID.option2}
          ></textarea>
          <label htmlFor="floatingTextarea2">Option 2</label>
        </div>
        {/* Options 3 */}
        <div className="form-floating" style={{ margin: '.7rem auto' }}>
          <textarea
            ref={option3Ref}
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ resize: 'none' }}
            defaultValue={questionID.option3}
          ></textarea>
          <label htmlFor="floatingTextarea2">Option 3</label>
        </div>
        {/* Options 4 */}
        <div className="form-floating" style={{ margin: '.7rem auto' }}>
          <textarea
            ref={option4Ref}
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ resize: 'none' }}
            defaultValue={questionID.option4}
          ></textarea>
          <label htmlFor="floatingTextarea2">Option 4</label>
        </div>

        {/* Correct Option */}
        <div className="dropdown-wrapper">
          {/* Outer Dropdown */}
          <div
            className={`dropdown-outer ${isOn ? 'active' : ''}`}
            onClick={() => setIsOn(!isOn)}
          >
            <p value="" ref={dpLabel} className="dp-label">
              {questionID.answer}
            </p>
          </div>
          {/* Inner Dropdown */}
          <div className={`dropdown-inner ${isOn ? 'active' : ''}`}>
            <option onClick={changeDD} className="dropdown-option" value="">
              Pick the correct option
            </option>
            <hr style={{ margin: '0', color: 'orangeRed', opacity: '1' }} />
            <option onClick={changeDD} className="dropdown-option" value="1">
              Option1
            </option>
            <option onClick={changeDD} className="dropdown-option" value="2">
              Option2
            </option>
            <option onClick={changeDD} className="dropdown-option" value="3">
              Option3
            </option>
            <option onClick={changeDD} className="dropdown-option" value="4">
              Option4
            </option>
          </div>
        </div>

        {/* Buttons */}
        <div className="btn-div mt-3 d-flex">
          {/* update Button */}
          <button
            onClick={handleUpdate}
            type="button "
            className="col btn btn-primary mb-3 me-3 p-2"
          >
            <i className="fa-solid fa-plus"></i>
            Update Question
          </button>
          {/* Clear Button */}
          <button
            onClick={handleClear}
            type="button"
            className="col btn btn-outline-primary mb-3 p-2"
          >
            <i className="fa-solid fa-eraser"></i>
            Clear Question
          </button>
        </div>
      </section>
    </div>
  );
}
