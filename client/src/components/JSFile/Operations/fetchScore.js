import axios from 'axios';

async function getScore(setScore) {
  try {
    const getScore = await axios.get(
      '/quiz/scoreboard/scores/'
    );
      setScore(getScore.data);
      return getScore.data
  } catch (e) {
  }
}

export default getScore;
