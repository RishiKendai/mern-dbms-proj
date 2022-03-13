/* eslint-disable no-unused-vars */
import axios from 'axios';

export default async function addScore(playerName, score) {
  const addScore = {
    playerName,
    score,
  };
  try {
    const newScore = await axios.post(
      '/quiz/scoreboard-scores/add',
      addScore
    );
    return true;
  } catch (e) {}
}
