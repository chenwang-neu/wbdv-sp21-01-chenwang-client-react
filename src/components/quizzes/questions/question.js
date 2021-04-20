import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question, graded}) => {
    return(
        <div>
            {
                question.type === "TRUE_FALSE" &&
                 <TrueFalseQuestion
                     question={question} graded={graded}/>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                 <MultipleChoiceQuestion
                     question={question} graded={graded}/>
            }
        </div>
    )
}

export default Question;