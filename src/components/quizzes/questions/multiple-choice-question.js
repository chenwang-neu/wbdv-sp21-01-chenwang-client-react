import React, {useState} from 'react'

const MultipleChoiceQuestion = ({question}) => {
    const [answer, setAnswer] = useState('')
    const [graded, setGrade] = useState(false)

    return (
        <div>
            <h4>{question.question}
                {graded && answer === question.correct && <i className="fas fa-check color-green"/>}
                {graded && answer !== question.correct && <i className="fas fa-times color-red"/>}
            </h4>
            <ul className = 'list-group'>
                {
                    question.choices.map(choice =>{
                        return(
                            <label
                                className = {`list-group-item 
                                    ${graded && question.correct === choice && 'list-group-item-success'}
                                    ${graded && answer === choice && answer !== question.correct && 'list-group-item-danger'}`} >
                                <input type='radio'
                                       disabled={graded}
                                       onClick={() => setAnswer(choice)}
                                       name={question._id}/> {choice}
                                {graded && question.correct === choice && <i className="fas fa-check color-green float-right"/>}
                                {graded && answer !== question.correct && answer === choice && <i className="fas fa-times color-red float-right"/>}
                            </label>
                        )
                    })
                }
            </ul>
            <h6>Your Answer: {answer}</h6>
            <button onClick = {() => setGrade(true)}
                    disabled={graded} className = 'btn btn-primary'>
                Grade
            </button>
        </div>
    )
}

export default MultipleChoiceQuestion;