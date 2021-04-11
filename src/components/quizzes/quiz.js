import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import Question from "./questions/question";
import questionService from '../../services/question-service'

const Quiz = () => {

    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId).then(questions => setQuestions(questions))
    }, [])

    return (
        <div className = 'container-fluid'>
            <h3>Quiz {quizId}</h3>
            <ul className = 'list-group'>
                {
                    questions.map((question, index) =>
                        <li className = 'list-group-item' key = {index}>
                            <Question question = {question}/>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Quiz;