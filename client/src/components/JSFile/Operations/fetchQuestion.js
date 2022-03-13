import axios from 'axios';
import { baseURL } from './baseURL';

async function getQuestions(setQuestion) {
    try {
        const getQuestion = await axios.get(`${baseURL}/quiz/`);
        setQuestion(getQuestion.data);
        return getQuestion.data;
    } catch (e) {
        alert("Couldn't fetch any Question, Error in Server :( ");
        console.log(e);
    }
}

export default getQuestions