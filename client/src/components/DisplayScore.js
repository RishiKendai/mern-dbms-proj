import React, { useEffect, useState } from 'react';
import '../Styles/displayScore.css';

import { Link } from 'react-router-dom';

function DisplayScore(props) {
  const [quote, setQuote] = useState();
  useEffect(() => {
    const topperQuote = [
      'Congratulations! 🥳',
      'You are Genius 🥳',
      'You are Brainy 🥳',
      'You are on top of it 🥳',
      'You are a winner now 🥳',
    ];
    const averageQuote = [
      'You are doing a good job 🎉',
      'Almost there 🎉',
      'That’s quite an improvement 🎉',
    ];
    const worstQuote = [
      'Tried your best 😇',
      'Better than yesterday 😇',
      'You could have done it better 😇',
      'Nice going 😇',
    ];
    if (props.displayScore.score >= 7)
      setQuote(topperQuote[Math.floor(Math.random() * 4)]);
    else if (props.displayScore.score < 7 && props.displayScore.score >= 4)
      setQuote(averageQuote[Math.floor(Math.random() * 4)]);
    else if (props.displayScore.score < 4 && props.displayScore.score >= 0)
      setQuote(worstQuote[Math.floor(Math.random() * 4)]);
  }, [props.displayScore.score]);
  return (
    <>
      <div className="scoreCard">
        <h3>Hey {props.displayScore.playerName},</h3>
        <h5>{quote}</h5>
        <p>Your score :{props.displayScore.score}</p>
        <div>
          <Link to="/21mca-dbms-quiz-home">
            <button className="scoreboard">Home</button>
          </Link>
          {/* <Link to="/21mca-dbms-quiz-score-board">
            <button className="scoreboard">ScoreBoard</button>
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default DisplayScore;
