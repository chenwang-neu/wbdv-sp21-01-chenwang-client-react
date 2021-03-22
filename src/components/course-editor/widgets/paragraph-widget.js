import React from 'react'

const ParagraphWidget = ({widget, editing, updateWidget, deleteWidget}) => {
    return(
        <>
            {
                editing &&
                <>
                    <textarea value={widget.text} className="form-control"></textarea>
                </>
            }
            {
                !editing &&
                <p>
                    {widget.text}
                </p>
            }
        </>
    )
}

export default ParagraphWidget