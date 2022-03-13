import React from 'react';
import '../Styles/deleteQuiz.css';

// import { Link } from 'react-router-dom';
import deleteQuestion from './JSFile/Operations/deleteQuestion';

export default function DeleteQuiz(props) {
  function handleCancel() {
    props.setIsDelete({
      active: false,
      id: ``,
      question: ``,
    });
  }

 async function handleDelete() {
   const deleteQues = await deleteQuestion(props.id);
   deleteQues && handleCancel();
   deleteQues && props.setIsNotification(true);
  }

  return (
    <div className="delete-tab">
      <section className="delete-section container-fluid">
        <i className="fa-solid fa-trash-can"></i>
        <span className="warning text-center">Delete Question ?</span>
        <span className="question-sec">
          {props.question}
        </span>
        <div className="buttons d-flex justify-content-center w-100">
          <button className="cust-btn cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button className=" cust-btn delete" onClick={handleDelete}>Delete</button>
        </div>
      </section>
    </div>
  );
}
