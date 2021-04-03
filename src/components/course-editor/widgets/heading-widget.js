import React, {useState} from 'react'

const HeadingWidget = ({widget, widgetToUpdate, widgetToDelete}) => {
    const [editingWidget, setEditingWidget] = useState({});
    const [widgetCache, setWidgetCache] = useState(widget);

    return(
        <>
            {
                editingWidget.id === widget.id &&
                <div>
                    <i onClick={() => {
                        widgetToUpdate( widgetCache)
                        setEditingWidget({})
                    }} className="fas fa-2x fa-check float-right"/>
                    <i onClick={() => widgetToDelete(widget)} className="fas fa-2x fa-trash float-right"/>
                    <select className="col form-control"
                            value ={widgetCache.type}
                            onChange={(e) =>
                                setWidgetCache({...widgetCache, type: e.target.value
                                })}>
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"VIDEO"} disabled>Video</option>
                        <option value={"IMAGE"}>Image</option>
                        <option value={"LINK"} disabled>Link</option>
                        <option value={"LIST"}>List</option>
                        <option value={"HTML"} disabled>HTML</option>
                    </select>
                    <br/>
                    <input className="col form-control"
                           value={widgetCache.text}
                           onChange={(e) =>
                               setWidgetCache({...widgetCache, text: e.target.value})
                           }/>
                    <br/>
                    <select className="col form-control"
                            value={widgetCache.size}
                            onChange={(e) =>
                                setWidgetCache({...widgetCache, size: parseInt(e.target.value)})}
                            >
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
                </div>
            }
            {
                editingWidget.id !== widget.id &&
                <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"/>
            }
            {
                editingWidget.id !== widget.id &&
                <>
                    {widget.size === 1 && <h1>{widget.text}</h1>}
                    {widget.size === 2 && <h2>{widget.text}</h2>}
                    {widget.size === 3 && <h3>{widget.text}</h3>}
                    {widget.size === 4 && <h4>{widget.text}</h4>}
                    {widget.size === 5 && <h5>{widget.text}</h5>}
                    {widget.size === 6 && <h6>{widget.text}</h6>}
                </>
            }
        </>
    )
}

export default HeadingWidget