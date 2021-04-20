import React, {useState} from 'react'

const TrueFalseQuestion = ({question,  graded}) => {
    const [answer, setAnswer] = useState('')
    //const [graded, setGrade] = useState(false)

    return (
        <div>
            <h4>{question.question}
                {graded && answer === question.correct && <i className="fas fa-check color-green"/>}
                {graded && answer !== question.correct && <i className="fas fa-times color-red"/>}
            </h4>
            <ul className = 'list-group'>
                <label
                    className = {`list-group-item 
                        ${graded && question.correct === 'true' && 'list-group-item-success'}
                        ${graded && answer === 'true' && answer !== question.correct && 'list-group-item-danger'}`} >
                    <input type='radio'
                           disabled={graded}
                           onClick={() => setAnswer('true')} name={question._id}/> TRUE
                    {graded && question.correct === 'true' && <i className="fas fa-check color-green float-right"/>}
                    {graded && answer === 'true' && answer !== question.correct && <i className="fas fa-times color-red float-right"/>}
                </label>
                <label
                    className = {`list-group-item 
                        ${graded && question.correct === 'false' && 'list-group-item-success'}
                        ${graded && answer === 'false' && answer !== question.correct && 'list-group-item-danger'}`} >
                    <input type='radio'
                           disabled={graded}
                           onClick={() => setAnswer('false')} name={question._id}/> FALSE
                    {graded && question.correct === 'false' && <i className="fas fa-check color-green float-right"/>}
                    {graded && answer !== question.correct && answer === 'false' && <i className="fas fa-times color-red float-right"/>}
                </label>
            </ul>
            <h6>Your Answer: {answer}</h6>
            {/*<button onClick = {() => setGrade(true)}*/}
            {/*    disabled={graded} className = 'btn btn-primary'>*/}
            {/*    Grade*/}
            {/*</button>*/}
        </div>
    )
}

export default TrueFalseQuestion;