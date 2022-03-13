import React, { useEffect, useState } from 'react';
import '../Styles/adminPage.css';

import { Link } from 'react-router-dom';
import getScore from './JSFile/Operations/fetchScore';
import Loading from './Loading';

export default function AdminPage() {
  const [quizScore, setQuizScore] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
     const getScores = async () => {
       setIsLoading(true);
       try {
         await getScore(setQuizScore);
         setIsLoading(false);
       } catch (e) {
         console.log(e);
       }
     };
     getScores();
  }, []);

  return (
    <div className="admin-page">
      {isLoading && <Loading />}

      <div className="admin-container">
        <header>
          <h3>Technical Quiz</h3>
        </header>
        <div className="btn-div">
          <Link to="/21mca-dbms-create-tech-quiz">
            <button type="button" className="btn btn-create">
              <i className="fa-solid fa-plus"></i>
              Create Quiz
            </button>
          </Link>
          <Link to="/21mca-dbms-quiz-score-board">
            <button className="btn btn-score">
              <i className="fa-solid fa-star"></i>
              Score Board
            </button>
          </Link>
          <Link to="/21mca-dbms-check-quiz">
            <button className="btn btn-score">
              <i className="fa-solid fa-vial"></i>
              Check Quiz
            </button>
          </Link>
          <Link to="/21mca-dbms-quiz-home">
            <button className="btn btn-score">
              <i className="fa-solid fa-play"></i>
              Play Quiz
            </button>
          </Link>
        </div>
        <footer className="footer">
          <p>Number of Students attended {quizScore.length}</p>
        </footer>
      </div>
    </div>
  );
}
