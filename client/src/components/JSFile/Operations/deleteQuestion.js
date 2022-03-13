/* eslint-disable no-unused-vars */
import axios from 'axios';

export default async function deleteQuestion(id) {
  try {
    const deleteQues = await axios.delete("/quiz/delete-question/" + id);
    return true;
  } catch (e) {
    console.log("can't delete " + e);
  }
}
