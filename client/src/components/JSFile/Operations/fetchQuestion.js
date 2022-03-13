import axios from 'axios';

async function getQuestions(setQuestion) {
    try {
        const getQuestion = await axios.get("/quiz/");
        setQuestion(getQuestion.data);
        return getQuestion.data;
    } catch (e) {
        alert("Couldn't fetch any Question, Error in Server :( ");
        console.log(e);
    }
}

export default getQuestions