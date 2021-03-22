import React,{useState} from 'react'

const ParagraphWidget = ({widget, updateWidget, deleteWidget}) => {
    const [editing, setEditing] = useState(false);
    const [widgetCache, setWidgetCache] = useState(widget);

    return(
        <>
            {
                editing &&
                <>
                    <i className="fas fa-check float-right"
                       onClick={() => {
                           updateWidget(widget.id, widgetCache)
                           setEditing(false)
                       }
                       }/>
                    <i className="fas fa-trash float-right"
                       onClick={() => {
                           deleteWidget(widget.id)
                           setEditing(false)
                       }
                       }/>
                    <select className="col form-control"
                            value ={widgetCache.type}
                            onChange={(e) =>
                                setWidgetCache({
                                    ...widgetCache,
                                    type: e.target.value
                                })
                            }>
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"VIDEO"} disabled>Video</option>
                        <option value={"IMAGE"} disabled>Image</option>
                        <option value={"LINK"} disabled>Link</option>
                        <option value={"LIST"} disabled>List</option>
                        <option value={"HTML"} disabled>HTML</option>
                    </select>
                    <br/>
                    <textarea className="form-control" onChange={(e) =>
                        setWidgetCache({
                        ...widgetCache, text: e.target.value})} value={widgetCache.text}/>
                </>
            }
            {
                !editing &&
                <p>
                    <i className="fas fa-cog float-right"
                       onClick={() => setEditing(true)}>
                    </i>
                    {widgetCache.text}
                </p>
            }
        </>
    )
}

export default ParagraphWidget