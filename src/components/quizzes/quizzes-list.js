import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import quizService from '../../services/quiz-service';

const QuizzesList = () => {
    const {courseId} = useParams()
    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        quizService.findAllQuizzes().then(resQuizzes => setQuizzes(resQuizzes))
    }, [])

    return (
        <div className = 'container-fluid'>
            <h2>Quizzes</h2>
            <ul className="list-group">
                {
                    quizzes.map((quiz) => {
                        return (
                            <li className="list-group-item">
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    {quiz.title}
                                </Link >
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    <button className='btn btn-primary float-right'>
                                        Start
                                    </button>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default QuizzesList;