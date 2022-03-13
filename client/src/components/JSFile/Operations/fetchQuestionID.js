import axios from 'axios';
import { baseURL } from './baseURL';

// Fetch Details of the Tracker
export default async function fetchQuestionID(setQuestion, id) {
  try {
    const getData = await axios.get(`${baseURL}/quiz/` + id);
    setQuestion(getData.data);
    return getData.data;
  } catch (e) {
    alert("Couldn't fetch any Data, Error in Server :( ");
    console.log(e);
  }
}
