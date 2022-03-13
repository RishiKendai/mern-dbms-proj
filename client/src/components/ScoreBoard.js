import React, { useEffect, useState } from 'react';
import '../Styles/scoreBoard.css';
import Loading from './Loading';

import { Link } from 'react-router-dom';
import getScore from './JSFile/Operations/fetchScore';

const ScoreTab = (props) => {
  return (
    <>
      <div className="score-div container-fluid">
        <li className="div-name">
          <i className="fa-solid fa-medal"></i>
          {props.name}
        </li>
        <li className="div-score">{props.score}</li>
      </div>
    </>
  );
};

export default function ScoreBoard() {
  const [quizScore, setQuizScore] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getScores = async () => {
      setIsLoading(true)
      try {
        await getScore(setQuizScore);
        setIsLoading(false)
      }
      catch (e) {
        console.log(e);
      }
    }
    getScores()
  }, []);
  return (
    <div className="score-page">
      {isLoading && <Loading />}
      <header className="d-flex">
        <h3>Quiz ScoreBoard</h3>
        <Link to="/21mca-myproj-dbms-technical-admin" className="close-btn">
          <i className="fa-solid fa-xmark"></i>
        </Link>
      </header>

      <section className="scoreboard-div">
        {quizScore
          .sort((a, b) => {
            return b.score - a.score;
          })
          .map((s) => (
            <ScoreTab key={s._id} name={s.playerName} score={s.score} />
          ))}
      </section>
    </div>
  );
}
