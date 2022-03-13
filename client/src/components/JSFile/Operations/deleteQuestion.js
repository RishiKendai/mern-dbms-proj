/* eslint-disable no-unused-vars */
import axios from 'axios';
import { baseURL } from './baseURL';

export default async function deleteQuestion(id) {
  try {
    const deleteQues = await axios.delete(`${baseURL}/quiz/delete-question/` + id);
    return true;
  } catch (e) {
    console.log("can't delete " + e);
  }
}
