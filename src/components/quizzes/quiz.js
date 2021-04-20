import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import Question from "./questions/question";
import questionService from '../../services/question-service'
import quizService from "../../services/quiz-service"

const Quiz = () => {

    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    const [graded, setGraded] = useState(false)

    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId).then(questions => setQuestions(questions))
    }, [])

    const handleQuizSubmit = () => {
        setGraded(!graded)
        if (graded === false) {
            quizService.submitQuiz(quizId, questions)
        }
    }

    return (
        <div className = 'container-fluid'>
            <h3>Quiz {quizId}</h3>
            <ul className = 'list-group'>
                {
                    questions.map((question, index) =>
                        <li className = 'list-group-item' key = {index}>
                            <Question question = {question} graded={graded}/>
                        </li>
                    )
                }
            </ul>

            <button className="btn btn-success btn-lg" onClick={handleQuizSubmit} disabled={graded}>
                Graded</button>
        </div>
    )
}

export default Quiz;