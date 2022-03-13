/* eslint-disable no-unused-vars */
import axios from 'axios';
import { baseURL } from './baseURL';
export default async function addQuestion(
  question,
  option1,
  option2,
  option3,
  option4,
  answer,
  setMessage
) {
  const addQuestion = {
    question,
    option1,
    option2,
    option3,
    option4,
    answer,
  };
  try {
    const newQuestion = await axios.post(
      `${baseURL}/quiz/add-question`,
      addQuestion
    );
    // console.log(newQuestion);
    return true;
  } catch (e) {
    setMessage({
      text: "Couldn't add Question, Error in Server. Try again later",
      state: true,
    });
    console.log(e);
  }
}
