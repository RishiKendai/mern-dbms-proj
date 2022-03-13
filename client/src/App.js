// LOCAL_URI=mongodb://localhost:27017/mobileQuiz
import React from 'react';
import './Styles/app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DbmsHome from './components/DbmsHome';
import AdminPage from './components/AdminPage';
import CreateQuiz from './components/CreateQuiz';
import ScoreBoard from './components/ScoreBoard';
import QuizHome from './components/QuizHome';
import Quiz from './components/Quiz';
import CheckQuiz from './components/CheckQuiz';
import EditQuiz from './components/EditQuiz';
import DeleteQuiz from './components/DeleteQuiz';
import MongoDB from './components/MongoDB';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<DbmsHome />} />
        <Route
          path="/21mca-myproj-dbms-technical-admin"
          exact
          element={<AdminPage />}
        />
        <Route path="/21mca-myproj-dbms-mongoDB" exact element={<MongoDB />} />
        <Route path="/21mca-dbms-create-tech-quiz" element={<CreateQuiz />} />
        <Route path="/21mca-dbms-check-quiz" element={<CheckQuiz />} />
        <Route path="/21mca-dbms-edit-quiz/:id" element={<EditQuiz />} />
        <Route path="/21mca-dbms-quiz-delete/:id" element={<DeleteQuiz />} />
        <Route path="/21mca-dbms-quiz-score-board" element={<ScoreBoard />} />
        <Route path="/21mca-dbms-quiz-home" exact element={<QuizHome />} />
        <Route path="/21mca-dbms-quiz" exact element={<Quiz />} />
      </Routes>
    </Router>
  );
}
