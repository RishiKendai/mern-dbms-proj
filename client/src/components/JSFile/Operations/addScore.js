/* eslint-disable no-unused-vars */
import axios from 'axios';
import { baseURL } from './baseURL';

export default async function addScore(playerName, score) {
  const addScore = {
    playerName,
    score,
  };
  try {
    const newScore = await axios.post(
      `${baseURL} /quiz/scoreboard-scores/add`,
      addScore
    );
    return true;
  } catch (e) {}
}
