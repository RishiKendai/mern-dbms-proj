import React, { useEffect, useState } from 'react';
import '../Styles/displayScore.css';

import { Link } from 'react-router-dom';

function DisplayScore(props) {
  const [quote, setQuote] = useState();

  useEffect(() => {
    const topperQuote = [
      'Congratulations! π₯³',
      'You are Genius π₯³',
      'You are Brainy π₯³',
      'You are on top of it π₯³',
      'You are a winner now π₯³',
    ];
    const averageQuote = [
      'You are doing a good job π',
      'Almost there π',
      'Thatβs quite an improvement π',
    ];
    const worstQuote = [
      'Tried your best π',
      'Better than yesterday π',
      'You could have done it better π',
      'Nice going π',
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
