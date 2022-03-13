import axios from 'axios';
import { baseURL } from './baseURL';

async function getScore(setScore) {
  try {
    const getScore = await axios.get(
      `${baseURL}/quiz/scoreboard/scores/`
    );
      setScore(getScore.data);
      return getScore.data
  } catch (e) {
  }
}

export default getScore;
