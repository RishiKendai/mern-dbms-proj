/* eslint-disable no-unused-vars */
import axios from 'axios';
import { baseURL } from './baseURL';

export default async function updateQuestion(
  question,
  option1,
  option2,
  option3,
  option4,
  answer,
  setMessage,
  id
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
    const newQuestion = await axios.put(
      `${baseURL}/quiz/update-question/` + id,
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
